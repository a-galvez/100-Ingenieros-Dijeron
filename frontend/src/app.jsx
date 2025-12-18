import { useState } from "react"
import MenuPrincipal from "./MenuPrincipal"
import SpectatorView from "./SpectatorView"
import HostView from "./HostView"

export default function App() {
  const [currentView, setCurrentView] = useState("menu")

  const navigateToSpectator = () => {
    setCurrentView("spectator")
  }

  const navigateToHost = () => {
    setCurrentView("host")
  }

  const navigateToMenu = () => {
    setCurrentView("menu")
  }

  if (currentView === "menu") {
    return (
      <MenuPrincipal 
        onNavigateToSpectator={navigateToSpectator}
        onNavigateToHost={navigateToHost}
      />
    )
  }

  if (currentView === "spectator") {
    return <SpectatorView onBackToMenu={navigateToMenu} />
  }

  if (currentView === "host") {
    return <HostView onBackToMenu={navigateToMenu} />
  }

  return null
}