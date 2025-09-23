import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { createPageUrl } from '@/utils'

export default function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{project.title}</h3>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 shrink-0">{project.category}</Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {project.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {project.teamSize}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">{skill}</Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">+{project.skills.length - 3} more</Badge>
          )}
        </div>

        <Link to={createPageUrl(project.pageName)} className="w-full">
          <Button className="w-full group-hover:bg-blue-600 transition-colors">
            View Project Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

