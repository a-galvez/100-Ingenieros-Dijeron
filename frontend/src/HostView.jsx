import { useState, useEffect } from "react"

export default function HostView({ onBackToMenu }) {
  const API_URL = import.meta.env.VITE_API_URL

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(null)

  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [team1X, setTeam1X] = useState(0)
  const [team2X, setTeam2X] = useState(0)

  const [revealedIds, setRevealedIds] = useState([])

    const colors = {
  white: "#FFF5F7",
  pink: "#DFA4B8",
  red: "#E53935",
};
  
  useEffect(() => {
    fetch(`${API_URL}/state`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentIndex(data.current_index || 0)
        setTeam1Score(data.team1_score || 0)
        setTeam2Score(data.team2_score || 0)
        setCurrentQuestion(data.question || null)
        setTeam1X(data.team1_x || 0)
        setTeam2X(data.team2_x || 0)
      })
  }, [])

  const goToNextQuestion = () => {
    fetch(`${API_URL}/next`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCurrentIndex(data.current_index)
        setCurrentQuestion(data.question)
        setTeam1Score(data.team1_score)
        setTeam2Score(data.team2_score)
        setTeam1X(data.team1_x || 0)
        setTeam2X(data.team2_x || 0)
      })
  }

  const awardPoints = (team, points) => {
    fetch(`${API_URL}/award`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ team, points }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTeam1Score(data.team1_score)
        setTeam2Score(data.team2_score)
        setTeam1X(data.team1_x || team1X)
        setTeam2X(data.team2_x || team2X)
      })
  }

  const removePoints = (team, points) => {
  fetch(`${API_URL}/remove-points`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ team, points }),
  })
    .then((res) => res.json())
    .then((data) => {
      setTeam1Score(data.team1_score)
      setTeam2Score(data.team2_score)
    })
}

  const addStrike = (team) => {
    fetch(`${API_URL}/strike`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ team }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTeam1X(data.team1_x || 0)
        setTeam2X(data.team2_x || 0)
      })
  }

  const removeStrike = (team) => {
  fetch(`${API_URL}/remove-strike`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ team }),
  })
    .then((res) => res.json())
    .then((data) => {
      setTeam1X(data.team1_x)
      setTeam2X(data.team2_x)
    })
}

  const revealAnswer = (answerId) => {
  fetch(`${API_URL}/reveal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answer_id: answerId }),
  })
    .then((res) => res.json())
    .then((data) => {
      setRevealedIds(data.revealed_answer_ids || [])
    })
}

  if (!currentQuestion) return <p className="text-white">Cargando...</p>

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: colors.pink }}>
      <div className="max-w-6xl mx-auto">

        {/* Botón volver */}
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={onBackToMenu}
            className="px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer" style={{ backgroundColor: colors.red, color: colors.white }}
          >
            ← Volver al menú
          </button>
          <button
            onClick={goToNextQuestion}
            className= "px-6 py-2 rounded-lg font-semibol transition-colors cursor-pointer" style={{ backgroundColor: colors.red, color: colors.white }}
          >
            Nueva Pregunta
          </button>
        </div>

        {/* Pregunta */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold rounded-lg p-4 inline-block" style={{ backgroundColor: colors.red, color: colors.white }}>
            {currentQuestion.question}
          </h2>
          <div className="mt-2 text-white/80 text-sm">Pregunta #{currentIndex + 1}</div>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => addStrike(1)}
            disabled={team1X >= 3}
            className="px-4 py-2 rounded font-semibold text-sm disabled:opacity-50 cursor-pointer" style={{ backgroundColor: colors.white, color: colors.red }}
          >
            Marcar X a Grupo 1 ({team1X}/3)
          </button>
          <button
            onClick={() => removeStrike(1)}
            disabled={team1X === 0}
            className="px-4 py-2 rounded font-semibold text-sm disabled:opacity-50 cursor-pointer"
            style={{ backgroundColor: colors.white, color: colors.red }}
          >
            Quitar X a Grupo 1
          </button>
          <button
            onClick={() => addStrike(2)}
            disabled={team2X >= 3}
            className="px-4 py-2 rounded font-semibold text-sm disabled:opacity-50 cursor-pointer" style={{ backgroundColor: colors.white, color: colors.red }}
          >
            Marcar X a Grupo 2 ({team2X}/3)
          </button>
          <button
            onClick={() => removeStrike(2)}
            disabled={team2X === 0}
            className="px-4 py-2 rounded font-semibold text-sm disabled:opacity-50 cursor-pointer"
            style={{ backgroundColor: colors.white, color: colors.red }}
          >
            Quitar X a Grupo 2
          </button>
        </div>

        {/* Puntos */}
        <div className="flex justify-between items-center mb-8 mt-2">
          <div className="text-6xl font-bold rounded-lg p-5" style={{ backgroundColor: colors.white, color: colors.red }}>{team1Score}</div>
          <div className="text-6xl font-bold rounded-lg p-5" style={{ backgroundColor: colors.white, color: colors.red }}>{team2Score}</div>
        </div>

        {/* Respuestas */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {currentQuestion.answers.map((answer) => (
            <div
              key={answer.id}
              className="p-4 rounded-lg"
              style={{ backgroundColor: colors.white, color: colors.red }}
            >
              {/* Info de la respuesta */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full font-bold mr-4 border">
                    {answer.id}
                  </div>
                  <span className="text-xl">{answer.text}</span>
                </div>
                <span className="text-2xl font-bold">{answer.points}</span>
              </div>

              {/* Acciones */}
              <div className="grid grid-cols-5 gap-4 items-end">
                {/* Grupo 1 */}
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm">Grupo 1</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => awardPoints(1, answer.points)}
                      className="px-3 py-2 rounded font-bold cursor-pointer"
                      style={{ backgroundColor: colors.red, color: colors.white }}
                    >
                      Sumar {answer.points} puntos
                    </button>
                    <button
                      onClick={() => removePoints(1, answer.points)}
                      className="px-3 py-2 rounded font-bold border cursor-pointer"
                      style={{ color: colors.red }}
                    >
                      Restar {answer.points} puntos
                    </button>
                  </div>
                </div>

                {/* Espaciador */}
                <div />

                {/* Revelar */}
                <div className="flex items-end justify-center">
                  <button
                    onClick={() => revealAnswer(answer.id)}
                    className="px-5 py-2 rounded font-semibold cursor-pointer"
                    style={{ backgroundColor: colors.red, color: colors.white }}
                  >
                    Revelar respuesta
                  </button>
                </div>

                {/* Espaciador */}
                <div />

                {/* Grupo 2 */}
                <div className="flex flex-col gap-1 items-end">
                  <span className="font-semibold text-sm">Grupo 2</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => awardPoints(2, answer.points)}
                      className="px-3 py-2 rounded font-bold cursor-pointer"
                      style={{ backgroundColor: colors.red, color: colors.white }}
                    >
                      Sumar {answer.points} puntos
                    </button>
                    <button
                      onClick={() => removePoints(2, answer.points)}
                      className="px-3 py-2 rounded font-bold border cursor-pointer"
                      style={{ color: colors.red }}
                    >
                      Restar {answer.points} puntos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


