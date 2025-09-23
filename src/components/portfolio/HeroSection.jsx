import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Strategic
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Business Analyst</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming complex business challenges into actionable insights through data-driven analysis,
            process optimization, and strategic recommendations that drive measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              as="a"
              href="/Nawal_Sarwar_Resume_BA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // add download to force file download instead of opening:
              // download
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>

            <a href="#projects" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="px-8 py-3 w-full sm:w-auto">
                View Projects
              </Button>
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
