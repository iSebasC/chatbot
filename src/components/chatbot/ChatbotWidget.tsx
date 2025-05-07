'use client'

import { useState } from 'react'
import ChatIcon from '@/icons/ChatIcon'
import ChatForm from './ChatForm'
import WelcomePopup from './WelcomePopup'

export default function ChatbotWidget() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  const handleOpenForm = () => {
    setIsFormOpen(true)
    setShowWelcome(false) // se cierra el popup al abrir el formulario
  }

  const handleCloseWelcome = () => {
    setShowWelcome(false) // se cierra si se presiona la ❌
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleOpenForm}
          className="bg-blue-600 text-white rounded-full p-3 shadow-lg"
        >
          <ChatIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Bienvenida */}
      <WelcomePopup visible={showWelcome} onClose={handleCloseWelcome} />

      {/* Formulario */}
      {isFormOpen && <ChatForm onClose={handleCloseForm} />}
    </>
  )
}
