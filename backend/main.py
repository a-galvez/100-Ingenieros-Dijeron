from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()
# uvicorn main:app --reload

# Permitir llamadas desde React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

current_dir = os.path.dirname(__file__)  # carpeta donde está main.py
file_path = os.path.join(current_dir, "questions.json")

with open(file_path, "r", encoding="utf-8") as f:
    questions = json.load(f)


# Estado de juego compartido
game_state = {
    "current_index": 0,
    "team1_score": 0,
    "team2_score": 0,
    "revealed_answer_ids": [],
    "team1_x": 0,
    "team2_x": 0,
}


def _current_question():
    idx = game_state["current_index"]
    if 0 <= idx < len(questions):
        return questions[idx]
    return None


@app.get("/state")
def get_state():
    return {
        "current_index": game_state["current_index"],
        "team1_score": game_state["team1_score"],
        "team2_score": game_state["team2_score"],
        "question": _current_question(),
        "revealed_answer_ids": game_state["revealed_answer_ids"],
        "team1_x": game_state["team1_x"],
        "team2_x": game_state["team2_x"],
    }


@app.post("/award")
def award_points(payload: dict):
    team = payload.get("team")
    points = int(payload.get("points", 0))
    if team == 1:
        game_state["team1_score"] += points
    elif team == 2:
        game_state["team2_score"] += points
    return get_state()


@app.post("/next")
def next_question():
    game_state["current_index"] = (game_state["current_index"] + 1) % len(questions)
    game_state["team1_score"] = 0
    game_state["team2_score"] = 0
    game_state["revealed_answer_ids"] = []
    game_state["team1_x"] = 0
    game_state["team2_x"] = 0
    return get_state()


@app.post("/reveal")
def reveal_answer(payload: dict):
    answer_id = payload.get("answer_id")
    if answer_id is None:
        return get_state()
    if answer_id not in game_state["revealed_answer_ids"]:
        game_state["revealed_answer_ids"].append(answer_id)
    return get_state()


@app.post("/strike")
def add_strike(payload: dict):
    team = payload.get("team")
    if team == 1:
        game_state["team1_x"] = min(3, game_state["team1_x"] + 1)
    elif team == 2:
        game_state["team2_x"] = min(3, game_state["team2_x"] + 1)
    return get_state()


@app.get("/questions")
def get_questions():
    return questions


@app.get("/questions/{question_id}")
def get_question(question_id: int):
    for q in questions:
        if q["id"] == question_id:
            return q
    return {"error": "Pregunta no encontrada"}
