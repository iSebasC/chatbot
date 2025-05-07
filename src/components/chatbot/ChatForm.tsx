'use client'

import { useState } from 'react'
import MinimizeIcon from '@/icons/MinimizeIcon'

export default function ChatForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Datos enviados:', formData)
  }

  return (
    <div
      className="fixed bottom-24 right-4 z-50 w-[90vw] max-w-[380px] rounded-[16px] shadow-xl border overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(0, 74, 173, 0.5) 40%, #FFFFFF 98%)',
      }}
    >
      {/* Minimizar */}
      <div className="flex justify-end pt-4 pr-4">
        <button
          onClick={onClose}
          className="w-5 h-5 text-gray-600 hover:text-gray-800"
          aria-label="Minimizar"
        >
          <MinimizeIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Título y formulario dentro de tarjeta blanca */}
      <div className="px-6 pb-4">
        <h2 className="text-[18px] font-bold text-[#1A1A33] leading-tight mb-4">
          Queremos conocerte primero <span className="ml-1">😊</span>
        </h2>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-[#1A1A33] mb-1">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-2 rounded-md border text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A33] mb-1">Teléfono</label>
              <input
                type="text"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-2 rounded-md border text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A33] mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.correo}
                onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                className="w-full px-4 py-2 rounded-md border text-sm outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#004AAD] text-white py-2 rounded-md text-sm font-semibold mt-2"
            >
              Iniciar chat
            </button>
          </form>
        </div>

        <div className="text-xs text-center text-gray-500 mt-4">
          <span className="inline-flex items-center gap-1">
            🧠 Desarrollado por <strong>Gepeto</strong>
          </span>
        </div>
      </div>
    </div>
  )
}
