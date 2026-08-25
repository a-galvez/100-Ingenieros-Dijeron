import { useState, useEffect } from "react"

export default function SpectatorView({ onBackToMenu }) {
  const API_URL = import.meta.env.VITE_API_URL

  const [revealedAnswers, setRevealedAnswers] = useState({})
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [questionId, setQuestionId] = useState(null)
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [revealedIdsFromHost, setRevealedIdsFromHost] = useState([])
  const [team1X, setTeam1X] = useState(0)
  const [team2X, setTeam2X] = useState(0)
  const [strikeModalTeam, setStrikeModalTeam] = useState(null)

  //colores de la aplicación 
  const colors = {
    white: "#FFF5F7",
    primary: "#0F70B7",
    secondary: "#12A19A",
    error: "#E53935",
    black: "#000000",
    overlay: "rgba(0, 0, 0, 0.6)",
    whiteTransparent: "rgba(255, 245, 247, 0.8)",
  }

  //polling de estado del juego (controlado por el Host)
  useEffect(() => {
    let intervalId

    const fetchState = async () => {
      try {
        const res = await fetch(`${API_URL}/state`)
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
        setStrikeModalTeam(data.strike_modal_team)
      } catch (error) {
        console.error("Error al obtener el estado:", error)
      }
    }

    fetchState()
    intervalId = setInterval(fetchState, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (strikeModalTeam) {
      const timer = setTimeout(() => {
        fetch(`${API_URL}/clear-strike-modal`, {
          method: "POST",
        })

        setStrikeModalTeam(null)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [strikeModalTeam])

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
        background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Pregunta */}
        <div className="text-center mb-8 mt-5">
          <h2
            className="text-3xl font-bold rounded-lg p-4 inline-block"
            style={{
              backgroundColor: colors.white,
              color: colors.primary,
            }}
          >
            {question ? question : "Cargando pregunta..."}
          </h2>
        </div>

        {/* Puntos de equipos */}
        <div className="flex justify-between items-center mb-8">
          <div
            className="text-6xl font-bold rounded-lg p-6 min-w-[120px] text-center"
            style={{
              backgroundColor: colors.whiteTransparent,
              color: colors.secondary,
            }}
          >
            {team1Score}
          </div>

          <div
            className="text-6xl font-bold rounded-lg p-6 min-w-[120px] text-center"
            style={{
              backgroundColor: colors.white,
              color: colors.secondary,
            }}
          >
            {team2Score}
          </div>
        </div>

        {/* Grid de respuestas */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {answers.map((answer) => {
            const isRevealed =
              revealedAnswers[answer.id] ||
              revealedIdsFromHost.includes(answer.id)

            return (
              <button
                key={answer.id}
                onClick={() => toggleAnswer(answer.id)}
                className="p-4 rounded-lg text-xl font-semibold transition-colors flex items-center justify-between min-h-[80px] cursor-pointer"
                style={{
                  backgroundColor: colors.white,
                  color: colors.primary,
                }}
              >
                <div className="flex items-center">
                  <div
                    className="rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4"
                    style={{
                      color: colors.primary,
                      borderColor: colors.primary,
                    }}
                  >
                    {answer.id}
                  </div>

                  {isRevealed && (
                    <span style={{ color: colors.primary }}>
                      {answer.text}
                    </span>
                  )}
                </div>

                {isRevealed && (
                  <span
                    className="font-bold text-2xl"
                    style={{ color: colors.primary }}
                  >
                    {answer.points}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* X animadas en esquina izquierda */}
        <div className="fixed left-6 bottom-6 flex items-center gap-3 select-none">
          {Array.from({ length: team1X }).map((_, idx) => (
            <span
              key={idx}
              className="text-6xl md:text-8xl font-extrabold"
              style={{
                color: colors.error,
                textShadow: `0 4px 6px ${colors.black}`,
              }}
            >
              X
            </span>
          ))}
        </div>

        {/* X animadas en esquina derecha */}
        <div className="fixed right-6 bottom-6 flex items-center gap-3 select-none">
          {Array.from({ length: team2X }).map((_, idx) => (
            <span
              key={idx}
              className="text-6xl md:text-8xl font-extrabold"
              style={{
                color: colors.error,
                textShadow: `0 4px 6px ${colors.black}`,
              }}
            >
              X
            </span>
          ))}
        </div>
      </div>

      {/* Modal de respuesta incorrecta */}
      {strikeModalTeam && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: colors.overlay,
          }}
        >
          <div
            className="rounded-2xl p-16 text-center transition-opacity w-[500px]"
            style={{
              backgroundColor: colors.white,
            }}
          >
            <img
              src="/Heavy_red__x_.png"
              alt="Respuesta incorrecta"
              className="w-32 h-32 mx-auto mb-4"
            />

            <p
              className="text-xl mt-2 font-bold"
              style={{
                color: colors.secondary,
              }}
            >
              Respuesta incorrecta
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
