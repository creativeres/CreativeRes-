from flask import Flask, render_template, request, redirect, url_for
import sqlite3
from datetime import datetime
from pathlib import Path

app = Flask(__name__)
DB_PATH = Path("checkin.db")


def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """CREATE TABLE IF NOT EXISTS checkins (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                client TEXT NOT NULL,
                rating INTEGER NOT NULL,
                note TEXT,
                timestamp TEXT NOT NULL,
                flagged INTEGER NOT NULL
            )"""
        )


@app.before_first_request
def setup():
    init_db()


@app.route("/")
def survey():
    return render_template("survey.html")


@app.route("/submit", methods=["POST"])
def submit():
    client = request.form["client"]
    rating = int(request.form["rating"])
    note = request.form.get("note", "")
    timestamp = datetime.utcnow().isoformat()
    flagged = 1 if rating <= 2 else 0
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            "INSERT INTO checkins (client, rating, note, timestamp, flagged) VALUES (?,?,?,?,?)",
            (client, rating, note, timestamp, flagged),
        )
    return redirect(url_for("survey_submitted"))


@app.route("/submitted")
def survey_submitted():
    return render_template("submitted.html")


@app.route("/dashboard")
def dashboard():
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            "SELECT * FROM checkins ORDER BY timestamp DESC"
        ).fetchall()
    return render_template("dashboard.html", checkins=rows)


if __name__ == "__main__":
    app.run(debug=True)
