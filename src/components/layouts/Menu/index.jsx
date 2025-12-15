import './style.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Menu rendered as an overlay modal with enter/leave animation.
// It mounts when `open` becomes true and keeps mounted while closing animation runs.
export const Menu = ({ open = false, onClose = () => {} }) => {
  const [visible, setVisible] = useState(open)
  const [closing, setClosing] = useState(false)

  // sync visible/closing with prop `open`
  useEffect(() => {
    if (open) {
      setVisible(true)
      setClosing(false)
      return
    }
    // start closing animation if currently visible
    if (visible) {
      setClosing(true)
      const t = setTimeout(() => {
        setVisible(false)
        setClosing(false)
      }, 240) // match CSS transition duration
      return () => clearTimeout(t)
    }
  }, [open])

  // ESC handler
  useEffect(() => {
    if (!visible) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [visible, onClose])

  if (!visible) return null

  const panelClass = `app-menu-panel ${closing ? 'closing' : 'open'}`
  const backdropClass = `app-menu-backdrop ${closing ? 'closing' : 'open'}`

  return (
    <div className={`app-menu-overlay`} role="dialog" aria-modal="true">
      <div className={backdropClass} onClick={onClose} />
      <aside className={panelClass}>
        <button className="menu-close" onClick={onClose} aria-label="Fechar menu">×</button>
        <nav>
          <ul>
            <li><Link to="/list" onClick={onClose}>Listagem</Link></li>
            <li><Link to="/entrada" onClick={onClose}>Entrada</Link></li>
            <li><Link to="/saida" onClick={onClose}>Saída</Link></li>
            <li><Link to="/login" onClick={onClose}>Login</Link></li>
            <li><Link to="/cadastro" onClick={onClose}>Cadastro</Link></li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Menu
