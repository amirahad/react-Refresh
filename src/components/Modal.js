
export default function Modal({children, handleClose}) {
  return (
    <div className="modal-backDrop">
      <div className="modal">
        {children}
      </div>
      <button onClick={handleClose}>CLOSE</button>
    </div>
  )
}
