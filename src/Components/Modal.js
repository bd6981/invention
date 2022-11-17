import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50%',
    zIndex: 1000,
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top: '0',   
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(4, 255, 0, .7)',
    zIndex: 1000,

}
export default function modal({open, children, onClose}) {
    if (!open) return null
  return ReactDom.createPortal(
<>
    <div styles= {OVERLAY_STYLES}/>
    <div styles= {MODAL_STYLES}>
        <button onClick = {onClose}>close Modal</button>
      {children}
    </div>
</>,
document.getElementById('portal')
  )
}
