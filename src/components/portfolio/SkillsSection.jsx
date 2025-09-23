import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Database, Brain, TrendingUp, Users, FileSpreadsheet } from 'lucide-react'

const skillCategories = [
  { title: 'Data Analysis', icon: BarChart, skills: ['SQL', 'Python', 'R', 'Excel Advanced', 'Tableau', 'Power BI'], color: 'from-blue-500 to-blue-600' },
  { title: 'Business Intelligence', icon: Database, skills: ['ETL Processes', 'Data Warehousing', 'Dashboard Development', 'KPI Design'], color: 'from-green-500 to-green-600' },
  { title: 'Strategic Analysis', icon: Brain, skills: ['Requirements Analysis', 'Process Mapping', 'Gap Analysis', 'Risk Assessment'], color: 'from-purple-500 to-purple-600' },
  { title: 'Financial Modeling', icon: TrendingUp, skills: ['ROI Analysis', 'Cost-Benefit Analysis', 'Budget Forecasting', 'Financial Reporting'], color: 'from-orange-500 to-orange-600' },
  { title: 'Stakeholder Management', icon: Users, skills: ['Workshop Facilitation', 'Presentation', 'Change Management', 'Cross-functional Collaboration'], color: 'from-pink-500 to-pink-600' },
  { title: 'Tools & Software', icon: FileSpreadsheet, skills: ['JIRA', 'Confluence', 'Visio', 'Salesforce', 'SAP', 'Agile/Scrum'], color: 'from-cyan-500 to-cyan-600' },
]

export default function SkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Competencies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A comprehensive skill set combining analytical expertise with business acumen</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-semibold group-hover:text-blue-600 transition-colors">{category.title}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

