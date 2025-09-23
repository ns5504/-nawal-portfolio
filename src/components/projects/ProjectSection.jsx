import React from 'react'

export default function ProjectSection({ title, icon: Icon, children }){
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="w-5 h-5 text-blue-600" />}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="bg-white border rounded-lg p-6">{children}</div>
    </section>
  )
}

