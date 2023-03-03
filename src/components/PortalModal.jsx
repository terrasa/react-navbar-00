// import React from "react"
import { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'

export default function PortalModal () {
  const [showModal, setShowmodal] = useState(false)

  return (
    <>
      <button onClick={() => setShowmodal(true)}>
        Show modal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowmodal(false)} />,
        document.body
      )}
    </>
  )
}
