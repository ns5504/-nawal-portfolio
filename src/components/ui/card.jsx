import React from 'react'

export function Card({ className = '', children }){
  return <div className={`rounded-xl border border-gray-200 bg-white ${className}`}>{children}</div>
}

export function CardHeader({ className = '', children }){
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardContent({ className = '', children }){
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

export function CardTitle({ className = '', children }){
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}

export default Card
