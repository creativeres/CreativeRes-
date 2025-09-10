# CheckIn+

CheckIn+ is a simple daily emotional check-in platform for counselors and clients.

## Features
- **Client Survey** – quick form for clients to report their emotional state.
- **Counselor Dashboard** – view submissions and automatically highlight concerning check-ins.

## Running Locally
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

The app uses a lightweight SQLite database stored in `checkin.db`.
