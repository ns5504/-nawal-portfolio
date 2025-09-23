import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'

export default function ProjectHero({ project }){
  const [showImage, setShowImage] = useState(false)
  return (
    <section className="relative">
      <div className="h-[300px] md:h-[420px] w-full overflow-hidden">
        {project.impactImage ? (
          <button
            type="button"
            className="w-full h-full"
            onClick={() => setShowImage(true)}
            title="Click to enlarge"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover cursor-zoom-in" />
          </button>
        ) : (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h1>
              <p className="text-gray-600 mt-2 max-w-3xl">{project.description}</p>
              <div className="flex items-center gap-2 mt-3">
                <Badge variant="secondary">{project.category}</Badge>

                {project.impactImage && (
                  <button
                    type="button"
                    onClick={() => setShowImage(true)}
                    className="focus:outline-none"
                    title="View image"
                  >
                    <Badge className="bg-green-100 text-green-700 hover:brightness-95 cursor-zoom-in">
                      {project.impactImageLabel || project.impact || 'View Image'}
                    </Badge>
                  </button>
                )}

                {project.impactLink && (
                  <a
                    href={project.impactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none"
                    title="Open attachment"
                  >
                    <Badge className="bg-emerald-100 text-emerald-700 hover:underline cursor-pointer">
                      {project.impactLinkLabel || 'Excel Sheet'}
                    </Badge>
                  </a>
                )}

                {!project.impactImage && !project.impactLink && project.impact && (
                  <Badge className="bg-green-100 text-green-700">{project.impact}</Badge>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-600 shrink-0">
              <div><span className="font-medium">Duration:</span> {project.duration}</div>
              <div><span className="font-medium">Team:</span> {project.teamSize}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.skills?.map((s, i) => (
              <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {showImage && project.impactImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setShowImage(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-3 -right-3 bg-white rounded-full w-9 h-9 shadow flex items-center justify-center text-gray-700"
              onClick={() => setShowImage(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={project.impactImage}
              alt={typeof project.impact === 'string' ? project.impact : 'Preview'}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
