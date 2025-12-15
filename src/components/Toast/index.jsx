import './style.css'
import { useEffect, useState } from 'react'

export function toast(type = 'info', text = '') {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('app-toast', { detail: { type, text } }))
}

export const Toast = () => {
  const [visible, setVisible] = useState(false)
  const [msg, setMsg] = useState('')
  const [type, setType] = useState('info')

  useEffect(() => {
    const onToast = (e) => {
      const d = e.detail || {}
      setType(d.type || 'info')
      setMsg(d.text || '')
      setVisible(true)
      // auto hide
      setTimeout(() => setVisible(false), 3500)
    }
    window.addEventListener('app-toast', onToast)
    return () => window.removeEventListener('app-toast', onToast)
  }, [])

  if (!visible) return null

  return (
    <div className={`app-toast ${type}`} role="status" aria-live="polite">
      {msg}
    </div>
  )
}

export default Toast
