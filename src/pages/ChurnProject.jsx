import React from 'react'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectSection from '@/components/projects/ProjectSection'
import { Target, BarChart, CheckCircle, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const projectData = {
title: 'Customer Churn Prediction Model',
category: 'Data Science',
description: 'Built a Customer Churn Prediction Model using Excel dashboards and Python to analyze churn by demographics, tenure, and product usage. Applied Logistic Regression and Random Forest (ROC AUC 0.85) to identify key churn drivers like age, balance, and credit score, enabling targeted retention strategies.',
image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', // hero banner image
impact: 'Dashboard & Predictive Model',
impactImage: '/customer.png', // lightbox image
impactImageLabel: 'Churn Dashboard',
impactLink: '/Bank Customer Churn Prediction.xlsx', // Excel file in public
impactLinkLabel: 'Excel Dashboard',
skills: ['Excel', 'SQL', 'Python', 'Random Forest', 'Logistic Regression', 'Data Visualization']
}

export default function ChurnProject(){
  return (
    <div className="min-h-screen">
      <ProjectHero project={projectData} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Business Challenge */}
        <ProjectSection title="Business Challenge" icon={Target}>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            ABC Bank was facing high churn (~20% of its customer base). Despite steady customer acquisition, 
            profit margins were declining due to rising attrition costs. The business needed clear insights into 
            <strong> who was churning, why churn was happening, and how to intervene early</strong>.
          </p>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <p className="text-red-800 font-medium">Key Issues Identified:</p>
            <ul className="text-red-700 mt-2 space-y-1">
              <li>• High churn rates in certain demographics and regions</li>
              <li>• Limited visibility into the impact of tenure, activity, and product holding</li>
              <li>• No predictive mechanism to flag customers at risk of leaving</li>
            </ul>
          </div>
        </ProjectSection>

        {/* Analysis Approach */}
        <ProjectSection title="Analysis Approach" icon={BarChart}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3">Excel (Descriptive Analysis)</h4>
              <ul className="text-blue-800 space-y-2">
                <li>• Built KPIs: Total Customers, Churned, Churn Rate %, Avg Tenure, Avg Credit Score</li>
                <li>• Segmentation: churn by Country, Gender, Age Groups, Tenure, Activity, Products</li>
                <li>• Interactive slicers for drill-down by balance and credit score groups</li>
                <li>• Visuals: stacked bar charts, pie charts, retention vs churn comparisons</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3">Python (Predictive Analysis)</h4>
              <ul className="text-green-800 space-y-2">
                <li>• Logistic Regression → 81% accuracy, highlighted baseline churn patterns</li>
                <li>• Random Forest → 86% accuracy, ROC AUC = 0.85, stronger recall for churners</li>
                <li>• Feature Importance: Age, Estimated Salary, Balance, Credit Score, Products Held</li>
                <li>• Generated customer churn risk scores for targeted intervention</li>
                <li><a href='https://colab.research.google.com/drive/1G2VqCOCJe97K2ZwAlx9KskqKvO1hTeFy?usp=sharing'>Colab Notebook</a></li>

              </ul>
            </div>
          </div>
          <p className="text-gray-700">
            By combining Excel’s segmentation dashboards with Python’s machine learning models, 
            I provided both <strong>descriptive insights</strong> into churn behavior and a <strong>predictive framework</strong> 
            for proactive retention.
          </p>
        </ProjectSection>

        {/* Key Findings */}
        <ProjectSection title="Key Findings" icon={TrendingUp}>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h5 className="font-semibold text-yellow-900">Country Insights</h5>
              <p className="text-yellow-800 text-sm mt-2">Germany showed the highest churn (~32%) compared to France and Spain.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold text-green-900">Demographic Insights</h5>
              <p className="text-green-800 text-sm mt-2">Churn peaked for customers aged 36–50 and was higher among females (25%).</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-900">Behavioral Insights</h5>
              <p className="text-blue-800 text-sm mt-2">Inactive members churned at nearly double the rate of active ones. Customers with 3–4 products had extremely high churn (82–100%).</p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
            <h4 className="font-bold text-purple-900 mb-3">Python Model Findings</h4>
            <ul className="text-purple-800 space-y-2">
              <li>• Age was the strongest predictor of churn risk</li>
              <li>• High balance customers churned more — likely dissatisfaction despite loyalty</li>
              <li>• Number of products held was a strong churn driver</li>
            </ul>
          </div>
        </ProjectSection>

        {/* Recommendations */}
        <ProjectSection title="Recommendations & Implementation" icon={CheckCircle}>
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-4">Strategic Recommendations</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-green-800">Target High-Risk Segments</h5>
                    <p className="text-green-700">Focus retention campaigns on older, high-balance customers with multiple products.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-green-800">Engagement Programs</h5>
                    <p className="text-green-700">Improve loyalty and reduce churn by incentivizing inactive members.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-green-800">Predictive Monitoring</h5>
                    <p className="text-green-700">Deploy Random Forest churn risk scoring for early detection and proactive intervention.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>
      </div>
    </div>
  )
}
