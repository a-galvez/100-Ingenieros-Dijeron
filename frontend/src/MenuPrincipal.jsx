export default function MainMenu({ onNavigateToSpectator, onNavigateToHost }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #12A19A 0%, #0F70B7 100%)",
      }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-12 bg-black/20 rounded-lg p-4 inline-block text-center">
          100 Ingenieros Dijeron
        </h1>
        <div className="space-y-6 flex flex-col items-center">
          <button
            onClick={onNavigateToSpectator}
            className="w-80 py-4 px-8 bg-white text-[#0F70B7] text-xl font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
          >
            Entrar como espectador
          </button>
          <button
            onClick={onNavigateToHost}
            className="w-80 py-4 px-8 bg-white text-[#0F70B7] text-xl font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
          >
            Entrar como host
          </button>
        </div>
      </div>
    </div>
  )
}

