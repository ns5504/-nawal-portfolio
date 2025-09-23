import React from 'react'
import HeroSection from '@/components/portfolio/HeroSection'
import ProjectCard from '@/components/portfolio/ProjectCard'
import SkillsSection from '@/components/portfolio/SkillsSection'

const projects = [
  {
    title: 'Superstore Sales & Profitability',
    category: 'Financial Analysis',
    description: 'Designed an interactive Excel dashboard analyzing Superstore sales, profit margins, and discounting strategies. Identified that discounts above 30% consistently led to negative profits, especially in Furniture, and recommended revised pricing strategies. Delivered executive-level insights on regional performance, seasonal trends, and customer segmentation.',
    image: 'superstore-dashboard.png',
    duration: '2 weeks',
    teamSize: 'Individual Project',
    skills: ['Excel', 'PivotTables', 'Power Query', 'Financial Analysis', 'Data Visualization'],
    pageName: 'RevenueProject'
  },
  {
    title: 'Customer Churn Prediction Model',
    category: 'Data Science',
    description: 'Built a Customer Churn Prediction Model using Excel dashboards and Python to analyze churn by demographics, tenure, and product usage. Applied Logistic Regression and Random Forest (ROC AUC 0.85) to identify key churn drivers like age, balance, and credit score, enabling targeted retention strategies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    duration: '1 Weeks',
    teamSize: 'Individual Project',
    skills: ['Excel', 'SQL', 'Python', 'Random Forest', 'Logistic Regression', 'Data Visualization'],
    pageName: 'ChurnProject'
  },
  {
    title: 'Supply Chain Process Improvement',
    category: 'Operations',
    description: 'End-to-end analysis of supply chain processes, identifying bottlenecks and implementing solutions that reduced operational costs by 22% while improving delivery times.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
    duration: '4 months',
    teamSize: '8 members',
    skills: ['Process Mapping', 'Lean Six Sigma', 'Power BI', 'Cost Analysis', 'Risk Assessment'],
    pageName: 'SupplyChainProject'
  },
  
  {
    title: 'Digital Transformation Initiative',
    category: 'Strategy',
    description: 'Led cross-functional analysis for company-wide digital transformation, creating roadmap and business case that secured $2M investment approval.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    duration: '6 months',
    teamSize: '12 members',
    skills: ['Change Management', 'Stakeholder Analysis', 'ROI Modeling', 'Digital Strategy', 'Project Management'],
    pageName: 'DigitalTransformationProject'
  },
  {
    title: 'Market Entry Analysis',
    category: 'Market Research',
    description: 'Comprehensive market research and competitive analysis for entering European markets, including sizing, entry strategies, and risk assessment.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
    duration: '3 months',
    teamSize: '4 members',
    skills: ['Market Research', 'Competitive Analysis', 'Financial Forecasting', 'SWOT Analysis', 'Business Strategy'],
    pageName: 'MarketEntryProject'
  },
  {
    title: 'Operational Dashboard Development',
    category: 'Business Intelligence',
    description: 'Designed and implemented executive dashboard providing real-time insights into key business metrics, improving decision-making speed by 40%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    duration: '2 months',
    teamSize: '2 members',
    skills: ['Power BI', 'Data Visualization', 'KPI Design', 'ETL', 'SQL Server'],
    pageName: 'DashboardProject'
  }
]

export default function Portfolio(){
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A showcase of impactful business analysis projects that delivered measurable results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />

      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Drive Results Together?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss how data-driven analysis can transform your business challenges into opportunities</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:alex@example.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get In Touch</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Connect on LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  )
}

