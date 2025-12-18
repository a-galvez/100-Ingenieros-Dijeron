import { useState, useEffect } from "react"

export default function SpectatorView({ onBackToMenu }) {
  const [revealedAnswers, setRevealedAnswers] = useState({})
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [questionId, setQuestionId] = useState(null)
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [revealedIdsFromHost, setRevealedIdsFromHost] = useState([])
  const [team1X, setTeam1X] = useState(0)
  const [team2X, setTeam2X] = useState(0)

  // Polling de estado del juego (controlado por el Host)
  useEffect(() => {
    let intervalId
    const fetchState = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/state")
        const data = await res.json()
        if (data && data.question) {
          if (data.question.id !== questionId) {
            setQuestionId(data.question.id)
            setRevealedAnswers({})
          }
          setQuestion(data.question.question)
          setAnswers(data.question.answers)
        }
        setTeam1Score(data.team1_score || 0)
        setTeam2Score(data.team2_score || 0)
        setRevealedIdsFromHost(data.revealed_answer_ids || [])
        setTeam1X(data.team1_x || 0)
        setTeam2X(data.team2_x || 0)
      } catch (error) {
        console.error("Error al obtener el estado:", error)
      }
    }
    fetchState()
    intervalId = setInterval(fetchState, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const toggleAnswer = (id) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: "linear-gradient(135deg, #12A19A 0%, #0F70B7 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        

        {/* Pregunta */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white bg-black/20 rounded-lg p-4 inline-block">
            {question ? question : "Cargando pregunta..."}
          </h2>
        </div>

        {/* Puntos de equipos */
        }
        <div className="flex justify-between items-center mb-8">
          <div className="text-6xl font-bold text-white bg-black/20 rounded-lg p-6 min-w-[120px] text-center">{team1Score}</div>
          <div className="text-6xl font-bold text-white bg-black/20 rounded-lg p-6 min-w-[120px] text-center">{team2Score}</div>
        </div>

        {/* Grid de respuestas */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => toggleAnswer(answer.id)}
              className="bg-[#0F70B7] text-white p-4 rounded-lg text-xl font-semibold hover:bg-[#0d5a94] transition-colors flex items-center justify-between min-h-[80px] cursor-pointer"
            >
              <div className="flex items-center">
                <div className="bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  {answer.id}
                </div>
                {(revealedAnswers[answer.id] || revealedIdsFromHost.includes(answer.id)) && (
                  <span className="text-white">{answer.text}</span>
                )}
              </div>
              {(revealedAnswers[answer.id] || revealedIdsFromHost.includes(answer.id)) && (
                <span className="text-white font-bold text-2xl">{answer.points}</span>
              )}
            </button>
          ))}
        </div>
        {/* X animadas en esquinas */}
        <div className="fixed left-6 bottom-6 flex items-center gap-3 select-none">
          {Array.from({ length: team1X }).map((_, idx) => (
            <span
              key={idx}
              className="text-red-500 text-6xl md:text-8xl font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
            >
              X
            </span>
          ))}
        </div>
        <div className="fixed right-6 bottom-6 flex items-center gap-3 select-none">
          {Array.from({ length: team2X }).map((_, idx) => (
            <span
              key={idx}
              className="text-red-500 text-6xl md:text-8xl font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
            >
              X
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
