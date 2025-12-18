import { useState, useEffect } from "react"

export default function HostView({ onBackToMenu }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(null)

  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [team1X, setTeam1X] = useState(0)
  const [team2X, setTeam2X] = useState(0)
  

  useEffect(() => {
    fetch("http://127.0.0.1:8000/state")
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
    fetch("http://127.0.0.1:8000/next", { method: "POST" })
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
    fetch("http://127.0.0.1:8000/award", {
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

  const addStrike = (team) => {
    fetch("http://127.0.0.1:8000/strike", {
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

  

  if (!currentQuestion) return <p className="text-white">Cargando...</p>

  return (
    <div className="min-h-screen p-8" style={{ background: "linear-gradient(135deg, #12A19A 0%, #0F70B7 100%)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Botón volver */}
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={onBackToMenu}
            className="bg-white text-[#0F70B7] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            ← Volver al menú
          </button>
          <button
            onClick={goToNextQuestion}
            className="bg-white text-[#0F70B7] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Nueva Pregunta
          </button>
        </div>

        {/* Pregunta */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white bg-black/20 rounded-lg p-4 inline-block">
            {currentQuestion.question}
          </h2>
          <div className="mt-2 text-white/80 text-sm">Pregunta #{currentIndex + 1}</div>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => addStrike(1)}
            disabled={team1X >= 3}
            className="bg-white text-[#0F70B7] px-4 py-2 rounded font-semibold text-sm disabled:opacity-50 cursor-pointer"
          >
            Marcar X a Grupo 1 ({team1X}/3)
          </button>
          <button
            onClick={() => addStrike(2)}
            disabled={team2X >= 3}
            className="bg-white text-[#0F70B7] px-4 py-2 rounded font-semibold text-sm disabled:opacity-50 cursor-pointer"
          >
            Marcar X a Grupo 2 ({team2X}/3)
          </button>
        </div>

        {/* Puntos */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-6xl font-bold text-white bg-black/20 rounded-lg p-6">{team1Score}</div>
          <div className="text-6xl font-bold text-white bg-black/20 rounded-lg p-6">{team2Score}</div>
        </div>

        {/* Respuestas */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {currentQuestion.answers.map((answer) => (
            <div key={answer.id} className="bg-[#0F70B7] text-white p-4 rounded-lg flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-black/70 w-10 h-10 flex items-center justify-center rounded-full font-bold mr-4">
                  {answer.id}
                </div>
                <span className="text-xl">{answer.text}</span>
                <span className="text-2xl font-bold ml-4">{answer.points}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => awardPoints(1, answer.points)}
                  className="bg-white text-[#0F70B7] px-4 py-2 rounded font-semibold text-sm"
                >
                  Dar puntos a Grupo 1
                </button>
                <button
                  onClick={() => {
                    fetch("http://127.0.0.1:8000/reveal", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ answer_id: answer.id }),
                    })
                  }}
                  className="bg-white text-[#0F70B7] px-4 py-2 rounded font-semibold text-sm"
                >
                  Revelar respuesta
                </button>
                <button
                  onClick={() => awardPoints(2, answer.points)}
                  className="bg-white text-[#0F70B7] px-4 py-2 rounded font-semibold text-sm"
                >
                  Dar puntos a Grupo 2
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


