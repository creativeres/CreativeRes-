const moodOptions = [
  { id: 'overwhelmed', label: 'Overwhelmed' },
  { id: 'lonely', label: 'Lonely' },
  { id: 'grieving', label: 'Grieving' },
  { id: 'excited', label: 'Energized' },
  { id: 'reflective', label: 'Reflective' },
];

const holidayData = {
  "New Year's Day": {
    tagline: 'Fresh starts without pressure',
    categories: [
      {
        title: 'Grounding rituals',
        items: [
          'Light a candle and write down three things you appreciated about last year.',
          'Create a “done” list that celebrates small wins rather than resolutions.',
          'Step outside for a slow walk, noticing sounds of the new day.',
        ],
      },
      {
        title: 'Connection ideas',
        items: [
          'Send a quick text to someone you’re grateful for with a favorite memory.',
          'Host a cozy brunch potluck where everyone brings a comfort food.',
          'Share playlists that capture the mood you want for the year ahead.',
        ],
      },
      {
        title: 'Gentle boundaries',
        items: [
          'Skip the midnight expectations and honor the sleep you need.',
          'Let loved ones know you’re focusing on renewal rather than resolutions.',
          'Replace “should” statements with compassionate, realistic intentions.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Choose one meaningful ritual and let the rest wait for another day.',
        'Plan a simple meal with nourishing foods instead of a big celebration.',
        'Use box breathing—inhale 4, hold 4, exhale 4—to slow racing thoughts.',
      ],
      lonely: [
        'Join an online countdown or gratitude circle to feel connected.',
        'Write yourself a letter honoring how far you’ve come.',
        'Reach out to a community group offering virtual gatherings.',
      ],
      grieving: [
        'Create a memory jar with notes about the person you’re missing.',
        'Light a candle and speak their name during the midnight moment.',
        'Give yourself permission to celebrate quietly or not at all.',
      ],
      excited: [
        'Channel your energy into crafting a vision board playlist.',
        'Invite friends to share “three good things” from the past year.',
        'Try a new morning ritual like sunrise stretching to set the tone.',
      ],
      reflective: [
        'Journal about lessons you want to carry forward.',
        'List the values that guided you last year and which ones you’ll amplify.',
        'Organize photos into a highlight reel to savor meaningful moments.',
      ],
    },
    energy: {
      low: [
        'Sip a warm beverage while listing calming mantras for the year.',
        'Play ambient music and stretch gently for five minutes.',
        'Watch the sunrise from your window wrapped in a cozy blanket.',
      ],
      medium: [
        'Cook a nourishing meal that feels like a hug in a bowl.',
        'Create a small gratitude collage on your fridge or journal.',
        'Have a game night featuring questions about hopes for the year.',
      ],
      high: [
        'Start a tradition of a first-day-of-the-year hike with friends.',
        'Host a themed snack swap where everyone brings a favorite treat.',
        'Plan a mini home refresh by rearranging one space you use daily.',
      ],
    },
  },
  "Valentine's Day": {
    tagline: 'Compassionate connections in any relationship status',
    categories: [
      {
        title: 'Self-kindness boosts',
        items: [
          'Craft a playlist of songs that make you feel deeply loved.',
          'Write affirmations on sticky notes and post them around your space.',
          'Schedule intentional rest just as you would a date.',
        ],
      },
      {
        title: 'Heartfelt connections',
        items: [
          'Plan a “friendship appreciation” call or letter exchange.',
          'Cook a meal with someone while sharing stories about favorite memories.',
          'Host a self-care swap where each person shares a supportive ritual.',
        ],
      },
      {
        title: 'Boundaries & balance',
        items: [
          'Politely decline events that trigger comparison and plan your own joy.',
          'Replace doom scrolling with a feel-good movie or book date.',
          'Set expectations with loved ones about budget-friendly celebrations.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Limit social media time and curate your feed with uplifting voices.',
        'Choose one intentional act of kindness for yourself.',
        'Prep a comfort meal kit so dinner feels easy and cozy.',
      ],
      lonely: [
        'Host a solo celebration with flowers, favorite treats, and a good book.',
        'Plan a video chat craft night with friends or family.',
        'Volunteer or send notes to residents at a local care facility.',
      ],
      grieving: [
        'Honor loved ones by donating to a cause they cared about.',
        'Create a ritual of lighting a candle and sharing a favorite story.',
        'Allow tears and joy to coexist—both are welcome today.',
      ],
      excited: [
        'Plan a creative surprise for someone you care about.',
        'Organize a themed dessert tasting for friends.',
        'Try a new hobby class centered on connection like dance or cooking.',
      ],
      reflective: [
        'Journal about the love languages you need most right now.',
        'List the relationships that nourish you and how you’ll invest in them.',
        'Write a letter of appreciation to your future self.',
      ],
    },
    energy: {
      low: [
        'Take a mindful bath with calming scents and affirmations.',
        'Watch a comfort show with a weighted blanket and tea.',
        'Practice hand-on-heart breathing while repeating “I am deserving.”',
      ],
      medium: [
        'Bake heart-shaped treats to share with neighbors or coworkers.',
        'Create a gratitude jar filled with love notes for yourself.',
        'Curate a movie night with stories about different kinds of love.',
      ],
      high: [
        'Plan a community love letter wall for neighbors to contribute to.',
        'Host a dance party with songs that celebrate self-worth.',
        'Organize a surprise drop-off of goodies to friends who need encouragement.',
      ],
    },
  },
  Easter: {
    tagline: 'Renewal and gentle beginnings',
    categories: [
      {
        title: 'Grounding in nature',
        items: [
          'Plant seeds or fresh herbs while setting an intention for each.',
          'Take a mindful walk noticing signs of spring growth.',
          'Create a small table altar with seasonal blooms and symbols of hope.',
        ],
      },
      {
        title: 'Meaningful gatherings',
        items: [
          'Host a simple brunch with foods that comfort your tradition.',
          'Share stories about resilience and rebirth with loved ones.',
          'Invite others to bring a family recipe and the story behind it.',
        ],
      },
      {
        title: 'Compassionate pacing',
        items: [
          'Schedule downtime between services or gatherings.',
          'Set a realistic budget for baskets or meals ahead of time.',
          'Ask for help with meal prep or cleanup to avoid burnout.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Simplify traditions to the ones that feel most meaningful.',
        'Prepare meals ahead in small batches and freeze extras.',
        'Practice a brief body scan meditation between activities.',
      ],
      lonely: [
        'Attend a community sunrise service or virtual gathering.',
        'Reach out to someone else who may appreciate company.',
        'Plan a creative activity like dyeing eggs while video chatting.',
      ],
      grieving: [
        'Incorporate a remembrance table with photos of loved ones.',
        'Adapt traditions to honor those who are no longer present.',
        'Let tears be part of the ritual—healing is welcome here.',
      ],
      excited: [
        'Organize a playful egg hunt with affirmations inside.',
        'Try a new recipe that celebrates seasonal produce.',
        'Plan a community service project centered on renewal.',
      ],
      reflective: [
        'Journal about areas of life where you are ready to bloom.',
        'Read poetry or spiritual writings that inspire hope.',
        'Create a gratitude bouquet listing moments of renewal.',
      ],
    },
    energy: {
      low: [
        'Listen to gentle instrumental music while coloring spring scenes.',
        'Enjoy a quiet tea ceremony focusing on aroma and warmth.',
        'Sit by a window and observe nature for five mindful minutes.',
      ],
      medium: [
        'Prepare a simple charcuterie board with bright seasonal foods.',
        'Host a gratitude circle sharing one way you’ve grown.',
        'Attend a short community event and leave before fatigue sets in.',
      ],
      high: [
        'Organize a neighborhood park clean-up followed by treats.',
        'Plan an outdoor picnic with games that invite laughter.',
        'Lead a creative workshop like floral arranging or egg painting.',
      ],
    },
  },
  'Independence Day': {
    tagline: 'Celebrating with mindful pacing',
    categories: [
      {
        title: 'Sensory-friendly swaps',
        items: [
          'Choose sparkler alternatives like glow sticks for a quieter evening.',
          'Watch fireworks from a distance or online to reduce sensory overload.',
          'Pack noise-canceling headphones and a calming playlist.',
        ],
      },
      {
        title: 'Community care',
        items: [
          'Host a potluck highlighting diverse foods and stories.',
          'Acknowledge the complex history by learning from marginalized voices.',
          'Organize a gratitude circle for freedoms you cherish and work to expand.',
        ],
      },
      {
        title: 'Body-based grounding',
        items: [
          'Practice progressive muscle relaxation before events.',
          'Stay hydrated with infused water stations or cooling treats.',
          'Plan breaks in a quiet zone to reset between festivities.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Set a clear start and end time for events to protect your energy.',
        'Delegate tasks like grilling or setup to supportive friends.',
        'Give yourself permission to leave early if crowds feel intense.',
      ],
      lonely: [
        'Attend a local community celebration or volunteer together.',
        'Invite neighbors for a casual backyard hangout.',
        'Share favorite summer memories in a group chat or journaling.',
      ],
      grieving: [
        'Create a tribute table honoring loved ones who served or sacrificed.',
        'Allow quieter traditions like candle lighting instead of fireworks.',
        'Spend time with someone who understands your story today.',
      ],
      excited: [
        'Plan a playlist that keeps energy high while staying grounded.',
        'Introduce playful lawn games that everyone can enjoy.',
        'Create a gratitude banner with things you appreciate about community.',
      ],
      reflective: [
        'Journal about the freedoms you enjoy and those you want to support.',
        'Read essays or watch documentaries that broaden perspectives.',
        'Plan an action step for civic engagement in the coming weeks.',
      ],
    },
    energy: {
      low: [
        'Enjoy a quiet backyard picnic with calming instrumental music.',
        'Watch a fireworks livestream from the comfort of your couch.',
        'Focus on slow breathing synchronized with a waving flag or candle.',
      ],
      medium: [
        'Host a potluck with simple dishes that guests can assemble.',
        'Take a twilight walk to enjoy neighborhood lights without the crowds.',
        'Plan a movie marathon of feel-good summer classics.',
      ],
      high: [
        'Organize a neighborhood parade for kids and pets.',
        'Plan an outdoor adventure like kayaking or hiking with friends.',
        'Create a collaborative mural celebrating community resilience.',
      ],
    },
  },
  Halloween: {
    tagline: 'Playful moments with protective boundaries',
    categories: [
      {
        title: 'Calming rituals',
        items: [
          'Ground with a warm beverage before festivities begin.',
          'Practice a 5-4-3-2-1 sensory check-in to stay present.',
          'Decorate with cozy lighting to balance spooky vibes.',
        ],
      },
      {
        title: 'Joyful connections',
        items: [
          'Host a costume crafting session with friends.',
          'Plan a doorstep candy drop for neighbors who need a pick-me-up.',
          'Share nostalgic stories from past Halloweens.',
        ],
      },
      {
        title: 'Boundaries with kindness',
        items: [
          'Leave a candy bowl with a note if you need quiet time.',
          'Opt out of horror media and choose lighthearted options instead.',
          'Set a time limit for festivities to protect next-day energy.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Choose one event and let go of the rest.',
        'Prep costumes or treats in small increments across the week.',
        'Practice a grounding mantra: “I can savor the fun at my own pace.”',
      ],
      lonely: [
        'Coordinate a virtual costume contest with friends.',
        'Deliver treat bags to neighbors or coworkers.',
        'Watch a nostalgic movie with a friend over video chat.',
      ],
      grieving: [
        'Create a memory shrine with photos and candles.',
        'Blend traditions by honoring loved ones with favorite sweets.',
        'Allow yourself to keep festivities gentle and optional.',
      ],
      excited: [
        'Organize a themed playlist and dance break.',
        'Plan a community-friendly haunted house tour.',
        'Host a pumpkin carving night with affirmations carved inside.',
      ],
      reflective: [
        'Journal about fears you’re ready to release.',
        'Walk through your neighborhood noticing symbols of transformation.',
        'Create a gratitude list for the cozy comforts of autumn.',
      ],
    },
    energy: {
      low: [
        'Enjoy a candlelit reading session with favorite spooky-but-soft tales.',
        'Decorate mini pumpkins with markers instead of carving.',
        'Sip chamomile tea while listening to gentle autumn sounds.',
      ],
      medium: [
        'Host a board game night with harvest-themed snacks.',
        'Bake pumpkin treats to share with friends.',
        'Take an evening stroll to admire costumes then head home early.',
      ],
      high: [
        'Plan a neighborhood trick-or-treat map with accessibility in mind.',
        'Lead a themed workout or dance class in costume.',
        'Organize a charity drive swapping candy for donations.',
      ],
    },
  },
  Thanksgiving: {
    tagline: 'Gratitude with authenticity',
    categories: [
      {
        title: 'Centered presence',
        items: [
          'Start the day with three breaths of gratitude before getting out of bed.',
          'Cook one dish slowly and mindfully, savoring the scents.',
          'Take a mindful walk to notice the season’s shifts.',
        ],
      },
      {
        title: 'Inclusive traditions',
        items: [
          'Invite guests to share a story about resilience rather than perfection.',
          'Acknowledge Indigenous communities and support local initiatives.',
          'Create a gratitude tree where everyone adds leaves of appreciation.',
        ],
      },
      {
        title: 'Boundaries & rest',
        items: [
          'Establish a quiet room where anyone can recharge.',
          'Plan post-meal downtime before tackling cleanup.',
          'Set conversation agreements to keep topics compassionate.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Divide cooking tasks and accept store-bought help.',
        'Prepare a realistic timeline and build in buffer breaks.',
        'Use a grounding object in your pocket to stay anchored.',
      ],
      lonely: [
        'Host a friendsgiving or attend a community meal.',
        'Share gratitude texts with people you appreciate.',
        'Volunteer to deliver meals for a mutual-aid network.',
      ],
      grieving: [
        'Set a place or light a candle for loved ones who are missed.',
        'Encourage guests to share favorite memories during dessert.',
        'Allow yourself to step away if emotions swell.',
      ],
      excited: [
        'Create a collaborative playlist that evolves through the day.',
        'Lead a post-meal stretch or walk.',
        'Start a tradition of sharing small wins from the year.',
      ],
      reflective: [
        'Journal about the support you received and gave this year.',
        'Write thank-you notes to mail after the holiday.',
        'Plan how you will show gratitude through action in coming weeks.',
      ],
    },
    energy: {
      low: [
        'Prepare simple comfort sides that reheat easily.',
        'Create a cozy nook with blankets for quiet reflection.',
        'Listen to calming playlists while cooking.',
      ],
      medium: [
        'Assign potluck dishes so everyone contributes.',
        'Play low-key party games between dinner courses.',
        'Take a family photo walk to capture seasonal colors.',
      ],
      high: [
        'Organize a gratitude scavenger hunt for kids and adults.',
        'Host a kitchen dance break while prepping food.',
        'Plan a community donation drive for local shelters.',
      ],
    },
  },
  Hanukkah: {
    tagline: 'Light for each night',
    categories: [
      {
        title: 'Ritual supports',
        items: [
          'Set up a calm corner for candle lighting with comfortable seating.',
          'Choose songs or prayers that soothe and uplift.',
          'Keep supplies organized in baskets to reduce nightly stress.',
        ],
      },
      {
        title: 'Community & connection',
        items: [
          'Share recipes or stories from different branches of your family.',
          'Host a latke swap or virtual lighting with friends afar.',
          'Plan acts of tzedakah each night to spread light outward.',
        ],
      },
      {
        title: 'Sustainable pacing',
        items: [
          'Rotate responsibilities each night to avoid burnout.',
          'Plan simple meals for busy nights to keep joy present.',
          'Set bedtimes that honor rest despite festivities.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Prepare a capsule menu and repeat favorites throughout the week.',
        'Choose one night for guests and keep others intimate.',
        'Use breathwork before lighting candles to arrive with calm.',
      ],
      lonely: [
        'Join virtual or local community lightings.',
        'Send care packages to friends observing elsewhere.',
        'Create a nightly gratitude check-in via text with loved ones.',
      ],
      grieving: [
        'Dedicate a candle to those you miss and share stories about them.',
        'Blend old and new traditions honoring their memory.',
        'Allow nights of quiet reflection when needed.',
      ],
      excited: [
        'Plan themed nights like music, storytelling, or crafts.',
        'Host a dreidel tournament with playful prizes.',
        'Share a nightly photo diary celebrating small moments of joy.',
      ],
      reflective: [
        'Journal about where resilience shows up in your life.',
        'Study teachings on light and perseverance.',
        'List the ways you can pass on tradition to others.',
      ],
    },
    energy: {
      low: [
        'Light candles with the lights dimmed and focus on gentle chanting.',
        'Enjoy store-bought treats guilt-free to conserve energy.',
        'Wrap in a blanket and watch the candlelight flicker in silence.',
      ],
      medium: [
        'Prepare make-ahead latkes or sufganiyot to warm quickly.',
        'Plan a crafting night making paper dreidels or decorations.',
        'Visit a nearby public lighting for a short outing.',
      ],
      high: [
        'Host a rotating dinner with friends each night.',
        'Organize a community service project tied to spreading light.',
        'Lead a music jam session featuring favorite Hanukkah songs.',
      ],
    },
  },
  Christmas: {
    tagline: 'Cozy meaning over perfection',
    categories: [
      {
        title: 'Calm the hustle',
        items: [
          'Schedule a nightly wind-down ritual with warm tea and soft lighting.',
          'Keep a “good enough” gift list that honors your budget.',
          'Batch wrap gifts while listening to soothing music.',
        ],
      },
      {
        title: 'Heartfelt traditions',
        items: [
          'Swap material gifts for experience coupons or acts of service.',
          'Plan a story-sharing night about favorite holiday memories.',
          'Create a kindness advent calendar with small daily actions.',
        ],
      },
      {
        title: 'Supportive boundaries',
        items: [
          'Decide which events are essential and politely decline the rest.',
          'Communicate gift expectations ahead of gatherings.',
          'Build in solo recharge time during multi-day visits.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Make a realistic budget and list to prevent last-minute stress.',
        'Ask for help with decorating or cooking.',
        'Practice the mantra: “Presence over perfection.”',
      ],
      lonely: [
        'Attend a community concert or service.',
        'Invite friends for a cookie-decorating afternoon.',
        'Volunteer at a shelter or donation drive to feel connected.',
      ],
      grieving: [
        'Create a memory ornament or stocking for the person you miss.',
        'Visit a meaningful place together and share stories.',
        'Allow yourself to modify traditions that feel heavy.',
      ],
      excited: [
        'Host a joyful holiday sing-along night.',
        'Plan a lights tour with thermoses of cocoa.',
        'Organize a secret kindness exchange among friends.',
      ],
      reflective: [
        'Journal about what the season means beyond expectations.',
        'List values you want to center during celebrations.',
        'Create a gratitude garland with favorite moments of the year.',
      ],
    },
    energy: {
      low: [
        'Watch twinkle lights with calm music and deep breaths.',
        'Use pre-prepped meals or delivery to conserve energy.',
        'Keep a cozy nest of blankets ready for quick rest breaks.',
      ],
      medium: [
        'Host a small potluck brunch instead of a big dinner.',
        'Schedule low-key crafting sessions like ornament making.',
        'Plan a puzzle night with family to unwind together.',
      ],
      high: [
        'Lead a caroling walk at a local care center.',
        'Organize a cookie swap to diversify treats without extra baking.',
        'Coordinate a community donation drive or toy collection.',
      ],
    },
  },
  'New Year\'s Eve': {
    tagline: 'Celebrate the close of the year with intention',
    categories: [
      {
        title: 'Mindful countdowns',
        items: [
          'Create an hourly gratitude check-in leading up to midnight.',
          'Set up a cozy movie marathon featuring uplifting endings.',
          'Host a reflective journaling circle with prompts for each hour.',
        ],
      },
      {
        title: 'Connection rituals',
        items: [
          'Share highlight reels—photos, songs, or voice notes—from the year.',
          'Plan a virtual toast for friends in different time zones.',
          'Play question games that explore values and hopes.',
        ],
      },
      {
        title: 'Protective boundaries',
        items: [
          'Choose a bedtime that honors your rest even if it’s before midnight.',
          'Skip loud parties and curate a gentle ambiance at home.',
          'Set intentions around substances and stick with supportive friends.',
        ],
      },
    ],
    feelings: {
      overwhelmed: [
        'Limit obligations to one gathering or none at all.',
        'Plan grounding breaks before midnight when emotions peak.',
        'Keep a calming playlist ready when energy escalates.',
      ],
      lonely: [
        'Arrange a check-in call before midnight with someone you trust.',
        'Write yourself a compassionate letter sealing the year.',
        'Join an online countdown community to celebrate together.',
      ],
      grieving: [
        'Hold space to honor those you’re missing with a memory toast.',
        'Keep rituals simple and restful if grief feels heavy.',
        'Light a candle for each person in your heart.',
      ],
      excited: [
        'Plan a themed snack board that represents highlights of the year.',
        'Create a collaborative playlist with friends to keep spirits high.',
        'Organize a goal-setting vision board party.',
      ],
      reflective: [
        'Journal about lessons learned and values you’re carrying forward.',
        'Meditate for a few minutes before midnight to arrive with calm.',
        'Write down three things you’re releasing before the new year starts.',
      ],
    },
    energy: {
      low: [
        'Celebrate earlier in the evening and head to bed peacefully.',
        'Enjoy a candlelit dinner at home with soft music.',
        'Watch a sunset instead of a midnight countdown.',
      ],
      medium: [
        'Host a board game night that ends shortly after midnight.',
        'Plan a neighborhood dessert tasting with shared recipes.',
        'Take a moonlit walk before midnight to reflect.',
      ],
      high: [
        'Organize a themed dance party with breaks for grounding.',
        'Plan a group adventure like bowling or roller skating.',
        'Coordinate volunteer efforts at a community celebration.',
      ],
    },
  },
};

const holidaySelect = document.getElementById('holidaySelect');
const moodChipsContainer = document.getElementById('moodChips');
const energyRange = document.getElementById('energyRange');
const energyValue = document.getElementById('energyValue');
const suggestionCards = document.getElementById('suggestionCards');
const currentHolidayTag = document.getElementById('currentHolidayTag');
const microActionsList = document.getElementById('microActions');
const randomTipButton = document.getElementById('randomTip');
const notesField = document.getElementById('reflectionNotes');
const saveNotesButton = document.getElementById('saveNotes');
const clearNotesButton = document.getElementById('clearNotes');

let selectedMood = null;

function populateHolidaySelect() {
  Object.keys(holidayData).forEach((holiday) => {
    const option = document.createElement('option');
    option.value = holiday;
    option.textContent = holiday;
    holidaySelect.append(option);
  });
}

function populateMoodChips() {
  moodOptions.forEach((mood) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip';
    button.textContent = mood.label;
    button.setAttribute('aria-pressed', 'false');
    button.dataset.mood = mood.id;

    button.addEventListener('click', () => {
      const isActive = button.getAttribute('aria-pressed') === 'true';
      document
        .querySelectorAll('.chip')
        .forEach((chip) => chip.setAttribute('aria-pressed', 'false'));

      if (!isActive) {
        button.setAttribute('aria-pressed', 'true');
        selectedMood = mood.id;
      } else {
        selectedMood = null;
      }

      updateSuggestions();
    });

    moodChipsContainer.append(button);
  });
}

function describeEnergy(value) {
  if (value < 34) return 'Low & gentle';
  if (value > 66) return 'High & energized';
  return 'Balanced';
}

function energyKey(value) {
  if (value < 34) return 'low';
  if (value > 66) return 'high';
  return 'medium';
}

function renderCards(holidayInfo) {
  suggestionCards.innerHTML = '';

  holidayInfo.categories.forEach((category) => {
    const card = document.createElement('article');
    card.className = 'card';

    const title = document.createElement('h3');
    title.className = 'card__title';
    title.textContent = category.title;

    const list = document.createElement('ul');
    list.className = 'card__list';
    category.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.append(li);
    });

    card.append(title, list);
    suggestionCards.append(card);
  });

  if (selectedMood) {
    const moodItems = holidayInfo.feelings[selectedMood];
    const moodLabel = moodOptions.find((m) => m.id === selectedMood)?.label;
    if (moodItems && moodItems.length) {
      const card = document.createElement('article');
      card.className = 'card';

      const title = document.createElement('h3');
      title.className = 'card__title';
      title.textContent = `If you feel ${moodLabel.toLowerCase()}`;

      const list = document.createElement('ul');
      list.className = 'card__list';
      moodItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.append(li);
      });

      card.append(title, list);
      suggestionCards.prepend(card);
    }
  }
}

function renderMicroActions(holidayInfo) {
  microActionsList.innerHTML = '';
  const key = energyKey(parseInt(energyRange.value, 10));
  const actions = holidayInfo.energy[key] || [];
  actions.forEach((action) => {
    const li = document.createElement('li');
    li.textContent = action;
    microActionsList.append(li);
  });
}

function updateSuggestions() {
  const holiday = holidaySelect.value;
  const holidayInfo = holidayData[holiday];
  if (!holidayInfo) return;

  currentHolidayTag.textContent = holidayInfo.tagline;
  renderCards(holidayInfo);
  renderMicroActions(holidayInfo);
  loadNotes();
}

function getAllTips(holidayInfo) {
  const items = [];
  holidayInfo.categories.forEach((category) => {
    items.push(...category.items);
  });
  Object.values(holidayInfo.feelings).forEach((list) => items.push(...list));
  Object.values(holidayInfo.energy).forEach((list) => items.push(...list));
  return items;
}

function showRandomTip() {
  const holidayInfo = holidayData[holidaySelect.value];
  if (!holidayInfo) return;
  const tips = getAllTips(holidayInfo);
  const random = tips[Math.floor(Math.random() * tips.length)];
  if (!random) return;

  randomTipButton.classList.add('button--flash');
  randomTipButton.textContent = random;
  setTimeout(() => {
    randomTipButton.classList.remove('button--flash');
    randomTipButton.textContent = 'Surprise me with a grounding idea';
  }, 4200);
}

function saveNotes() {
  const holiday = holidaySelect.value;
  const content = notesField.value.trim();
  const key = `holiday-helper-notes-${holiday}`;
  localStorage.setItem(key, content);
  saveNotesButton.textContent = 'Saved!';
  setTimeout(() => (saveNotesButton.textContent = 'Save note'), 2000);
}

function clearNotes() {
  const holiday = holidaySelect.value;
  const key = `holiday-helper-notes-${holiday}`;
  localStorage.removeItem(key);
  notesField.value = '';
}

function loadNotes() {
  const holiday = holidaySelect.value;
  const key = `holiday-helper-notes-${holiday}`;
  const stored = localStorage.getItem(key);
  notesField.value = stored || '';
}

function init() {
  populateHolidaySelect();
  populateMoodChips();
  updateSuggestions();

  energyRange.addEventListener('input', (event) => {
    energyValue.textContent = describeEnergy(parseInt(event.target.value, 10));
    renderMicroActions(holidayData[holidaySelect.value]);
  });

  holidaySelect.addEventListener('change', () => {
    document
      .querySelectorAll('.chip')
      .forEach((chip) => chip.setAttribute('aria-pressed', 'false'));
    selectedMood = null;
    updateSuggestions();
  });

  randomTipButton.addEventListener('click', showRandomTip);
  saveNotesButton.addEventListener('click', saveNotes);
  clearNotesButton.addEventListener('click', clearNotes);

  loadNotes();
  energyValue.textContent = describeEnergy(parseInt(energyRange.value, 10));
}

window.addEventListener('DOMContentLoaded', init);
