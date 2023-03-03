export default function ModalContent ({ onClose }) {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <div>Esta es la modal</div>
        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
