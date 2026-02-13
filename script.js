const rooms = [
  {
    name: "Room 1: The Locker Lair",
    mission: "Sort the messy locker before the bell rings.",
    items: [
      { name: "Math worksheet", correct: "important" },
      { name: "Bent water bottle", correct: "trash" },
      { name: "Pencil case", correct: "school" },
      { name: "Old snack wrapper", correct: "trash" },
      { name: "Science notebook", correct: "school" },
      { name: "Permission slip", correct: "important" },
      { name: "Soccer trophy", correct: "home" },
    ],
  },
  {
    name: "Room 2: Backpack Bog",
    mission: "Organize your backpack for tomorrow's quests.",
    items: [
      { name: "History textbook", correct: "school" },
      { name: "Crushed can", correct: "trash" },
      { name: "Art project rubric", correct: "important" },
      { name: "Controller", correct: "home" },
      { name: "Sticky notes", correct: "school" },
      { name: "Return-to-school form", correct: "important" },
      { name: "Broken eraser bits", correct: "trash" },
    ],
  },
  {
    name: "Room 3: Desk Dragon Den",
    mission: "Prepare a focused study zone to unlock the dungeon gate.",
    items: [
      { name: "Planner", correct: "school" },
      { name: "Family photo", correct: "home" },
      { name: "Quiz study guide", correct: "important" },
      { name: "Empty gum pack", correct: "trash" },
      { name: "Color pens", correct: "school" },
      { name: "Field trip info", correct: "important" },
      { name: "Toy car", correct: "home" },
    ],
  },
];

const zones = ["clutter-pile", "school", "trash", "home", "important"];

const ui = {
  roomName: document.getElementById("room-name"),
  missionText: document.getElementById("mission-text"),
  roomCount: document.getElementById("room-count"),
  turnsLeft: document.getElementById("turns-left"),
  score: document.getElementById("score"),
  log: document.getElementById("log"),
  checkBtn: document.getElementById("check-btn"),
  planBtn: document.getElementById("plan-btn"),
  nextRoomBtn: document.getElementById("next-room-btn"),
  restartBtn: document.getElementById("restart-btn"),
  template: document.getElementById("item-template"),
};

let state = {};

function initGame() {
  state = {
    roomIndex: 0,
    turns: 12,
    score: 0,
    planningUses: 0,
    solvedCurrent: false,
  };

  ui.log.innerHTML = "";
  addLog("Welcome hero! Sort each room to escape the dungeon.", "good");
  loadRoom();
}

function loadRoom() {
  const room = rooms[state.roomIndex];
  state.solvedCurrent = false;
  ui.nextRoomBtn.disabled = true;
  ui.roomName.textContent = room.name;
  ui.missionText.textContent = room.mission;

  zones.forEach((zoneId) => {
    document.getElementById(zoneId).innerHTML = "";
  });

  room.items.forEach((itemData) => {
    const button = ui.template.content.firstElementChild.cloneNode(true);
    button.textContent = itemData.name;
    button.dataset.correct = itemData.correct;
    button.dataset.zone = "clutter-pile";
    button.addEventListener("click", () => moveItem(button));
    document.getElementById("clutter-pile").appendChild(button);
  });

  updateStats();
}

function moveItem(itemButton) {
  if (state.turns <= 0 || state.solvedCurrent) {
    return;
  }

  const cycle = ["clutter-pile", "school", "trash", "home", "important"];
  const current = itemButton.dataset.zone;
  const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];
  itemButton.dataset.zone = next;
  document.getElementById(next).appendChild(itemButton);
  state.turns -= 1;
  updateStats();

  if (state.turns === 0) {
    addLog("Out of turns! Use restart and try a stronger plan.", "bad");
  }
}

function checkRoom() {
  if (state.turns <= 0) {
    addLog("No turns left. Restart the quest!", "bad");
    return;
  }

  const items = Array.from(document.querySelectorAll(".item"));
  const misplaced = items.filter(
    (item) => item.dataset.zone !== item.dataset.correct,
  );

  state.turns -= 1;

  if (misplaced.length === 0) {
    state.solvedCurrent = true;
    const bonus = Math.max(6, state.turns) + (2 - state.planningUses);
    state.score += bonus;
    addLog(
      `Room cleared! +${bonus} points. Great strategy under pressure.`,
      "good",
    );

    if (state.roomIndex < rooms.length - 1) {
      ui.nextRoomBtn.disabled = false;
      addLog("Door unlocked. Step into the next room.", "good");
    } else {
      addLog(
        "Dungeon escaped! You mastered sorting, planning, and prioritizing.",
        "good",
      );
    }
  } else {
    state.score = Math.max(0, state.score - 1);
    addLog(
      `${misplaced.length} items misplaced. Recheck what is urgent vs. non-urgent.`,
      "bad",
    );
  }

  updateStats();
}

function usePlanningMove() {
  if (state.turns <= 0 || state.solvedCurrent) {
    return;
  }

  if (state.planningUses >= 2) {
    addLog("Planning move already used twice this room.", "bad");
    return;
  }

  state.planningUses += 1;
  state.turns += 2;
  addLog(
    "You paused to plan categories first. +2 turns but no score bonus.",
    "good",
  );
  updateStats();
}

function nextRoom() {
  if (!state.solvedCurrent) {
    return;
  }

  state.roomIndex += 1;
  state.planningUses = 0;

  if (state.roomIndex >= rooms.length) {
    addLog("All rooms complete! Restart to train with a fresh challenge.", "good");
    ui.nextRoomBtn.disabled = true;
    return;
  }

  loadRoom();
}

function updateStats() {
  ui.roomCount.textContent = state.roomIndex + 1;
  ui.turnsLeft.textContent = state.turns;
  ui.score.textContent = state.score;
}

function addLog(message, tone) {
  const li = document.createElement("li");
  li.textContent = message;
  li.className = tone;
  ui.log.prepend(li);
}

ui.checkBtn.addEventListener("click", checkRoom);
ui.planBtn.addEventListener("click", usePlanningMove);
ui.nextRoomBtn.addEventListener("click", nextRoom);
ui.restartBtn.addEventListener("click", initGame);

initGame();
