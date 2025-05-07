'use client'

import CloseIcon from '@/icons/CloseIcon'

interface WelcomePopupProps {
  visible: boolean
  onClose: () => void
}

export default function WelcomePopup({ visible, onClose }: WelcomePopupProps) {
  if (!visible) return null

  return (
    <div className="fixed bottom-24 right-4 z-40 w-[290px] h-[172px] bg-white rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.1)] border p-4 pt-6">
      <div className="flex justify-end mb-[3px]">
        <button
          onClick={onClose}
          className="w-5 h-5 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      <h2 className="text-[16px] font-bold text-[#1A1A33] leading-tight mb-2">
        ¡Bienvenido a nuestro sitio web!
      </h2>
      <p className="text-[14px] text-[#6E6B7B] leading-snug">
        Para poder ayudarte mejor, completa primero un breve formulario y luego podrás
        conversar con nosotros.
      </p>
    </div>
  )
}
