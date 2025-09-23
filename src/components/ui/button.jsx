import React from 'react'

function cx(...classes){
  return classes.filter(Boolean).join(' ')
}

const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
const variants = {
  default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400',
  outline: 'border border-gray-300 text-gray-900 bg-white hover:bg-gray-50 focus:ring-blue-400'
}
const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-11 px-6 text-base'
}

export const Button = React.forwardRef(function Button({
  className,
  variant = 'default',
  size = 'md',
  as: Comp = 'button',
  ...props
}, ref){
  return (
    <Comp ref={ref} className={cx(base, variants[variant] || variants.default, sizes[size] || sizes.md, className)} {...props} />
  )
})

export default Button

