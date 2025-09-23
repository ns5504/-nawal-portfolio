import React from 'react'

export function Badge({ className = '', variant = 'default', children }){
  const base = 'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium';
  const styles = {
    default: 'bg-gray-100 text-gray-800',
    secondary: 'bg-blue-100 text-blue-700',
    outline: 'border border-gray-300 text-gray-700'
  }
  return (
    <span className={`${base} ${styles[variant] || styles.default} ${className}`}>{children}</span>
  )
}

export default Badge

