import React from 'react'
import { Link } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { User, Briefcase, Mail, Linkedin, FileText, Home } from 'lucide-react'

const navigationItems = [
  { title: 'Home', url: createPageUrl('Portfolio'), icon: Home },
  { title: 'Projects', url: createPageUrl('Portfolio') + '#projects', icon: Briefcase },
  { title: 'Resume', url: '#resume', icon: FileText },
  { title: 'Contact', url: '#contact', icon: Mail },
]

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl('Portfolio')} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900">Nawal Sarwar</h2>
                <p className="text-sm text-gray-600">Business Analyst</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <a key={item.title} href={item.url} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/nawal-sarwar/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:nawalsarwar77@gmail.com" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Nawal Sarwar. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:alex@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

