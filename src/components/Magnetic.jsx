import { forwardRef } from 'react'
import { useMagnetic } from '../hooks/useMagnetic'

function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') ref(node)
      else ref.current = node
    })
  }
}

const Magnetic = forwardRef(function Magnetic(
  { as: Tag = 'button', className = '', fillClassName = '', strength = 14, fill = false, children, ...props },
  forwardedRef
) {
  const magneticRef = useMagnetic(strength)

  return (
    <Tag ref={mergeRefs(magneticRef, forwardedRef)} className={`btn ${className}`} {...props}>
      {fill && <span className={`btn-fill ${fillClassName}`} aria-hidden="true" />}
      <span className="btn-label">{children}</span>
    </Tag>
  )
})

export default Magnetic
