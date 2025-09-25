import React from 'react'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectSection from '@/components/projects/ProjectSection'
import { Target, BarChart, CheckCircle, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const projectData = {
  title: 'Superstore Sales & Profitability Dashboard',
  category: 'Financial Analysis',
  description:
    'Designed an interactive Excel dashboard analyzing Superstore sales, profit margins, and discounting strategies. Identified that discounts above 30% consistently led to negative profits, especially in Furniture, and recommended revised pricing strategies. Delivered executive-level insights on regional performance, seasonal trends, and customer segmentation.',
  image: `${import.meta.env.BASE_URL}superstore-dashboard.png`,
  duration: '3 Weeks',
  teamSize: 'Individual Project',

  impact: 'Dashboard',
  impactImage: `${import.meta.env.BASE_URL}superstore-dashboard.png`,
  impactImageLabel: 'Dashboard',

  impactLink: `${import.meta.env.BASE_URL}Superstore_Dashboard.xlsx`,
  impactLinkLabel: 'Excel Sheet',

  skills: ['Excel', 'PivotTables', 'Power Query', 'Financial Analysis', 'Data Visualization'],
}


export default function RevenueProject(){
  return (
    <div className="min-h-screen">
      <ProjectHero project={projectData} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <ProjectSection title="Business Challenge" icon={Target}>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The company was facing inconsistent profit margins despite growing sales volume. 
            Management needed to understand why certain categories and regions underperformed, evaluate the impact of 
            discounting strategies, and identify opportunities to improve overall profitability without reducing sales.

          </p>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <p className="text-red-800 font-medium">Key Issues Identified:</p>
            <ul className="text-red-700 mt-2 space-y-1">
              <li>• Profit margins fluctuating significantly across regions</li>
              <li>• Furniture category frequently showing negative profit due to aggressive discounting</li>
              <li>• Lack of visibility into how discounts impacted overall profitability</li>
              <li>• Limited insight into regional and seasonal sales performance</li>
            </ul>
          </div>
        </ProjectSection>

        <ProjectSection title="Analysis Approach" icon={BarChart}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3">Data Collection</h4>
              <ul className="text-blue-800 space-y-2">
                <li>• 3 years of Superstore transactional data</li>
                <li>• Order details, Sales, Profit, Discount, Category, Region, and Customer Segment</li>
                <li>• Profit Margin %, Average Order Value</li>
                
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3">Analytical Methods</h4>
              <ul className="text-green-800 space-y-2">
                <li>• KPI summary for Sales, Profit, Margin, Orders</li>
                <li>• Monthly sales & profit line charts, profit margin over time</li>
                <li>• Profit vs Sales across Central, East, South, West</li>
                <li>• Scatter plot of Discount % vs Profit, with thresholds at 30%</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700">
            Using Excel’s advanced analytics features, I examined customer purchasing patterns, discount sensitivity, and profitability across categories, regions, and segments. The analysis leveraged PivotTables, calculated fields, trend analysis, and interactive slicers to uncover correlations between discounts and profit margins. I also segmented customers by
             purchasing behavior (Consumer, Corporate, Home Office) to identify underperforming groups and opportunities for revenue optimization.
          </p>
        </ProjectSection>

        <ProjectSection title="Key Findings" icon={TrendingUp}>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
              <h4 className="font-bold text-purple-900 mb-3">Regional Insights</h4>
              <p className="text-purple-800 mb-4">West → Highest profitability and sales growth</p>
               <p className="text-purple-800 mb-4">Central → Strong sales but weak margins (7.9%) due to high discounting</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Badge className="mb-2 bg-purple-100 text-purple-800">Category Insights</Badge>
                  <p className="text-sm text-purple-700">Technology → Highest sales driver</p>
                  <p className="text-sm text-purple-700">Office Supplies → Consistent profitability despite lower ticket size</p>
                  <p className="text-sm text-purple-700">Furniture → Frequent negative profit, heavily discount-sensitive</p>
                </div>
                <div>
                  <Badge className="mb-2 bg-blue-100 text-blue-800">Discount Sensitivity</Badge>
                  <p className="text-sm text-blue-700">Discounts more than 30% consistently resulted in negative profit, especially in Furniture</p>
                  <p className="text-sm text-blue-700">Seasonal spikes in Nov–Dec sales reduced profit margin from 14% → 9%</p>
                </div>
                <div>
                  <Badge className="mb-2 bg-green-100 text-green-800">Consumer Segment</Badge>
                  <p className="text-sm text-green-700">Largest share of orders, steady revenue, but profit margins drop under heavy discounting.</p>
                </div>
                <div>
                  <Badge className="mb-2 bg-orange-100 text-orange-800">Declining Segment</Badge>
                  <p className="text-sm text-orange-700">High churn risk — customers reducing repeat purchases, need retention strategy.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-900">Shipping Method</h5>
                <p className="text-yellow-800 text-sm mt-2">Standard Class accounted for ~60% of orders but delivered lower margins compared to faster shipping options.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900">Sales by State</h5>
                <p className="text-green-800 text-sm mt-2">California and New York dominated sales, while several Central states underperformed in both sales and profit.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900">Profit Trend</h5>
                <p className="text-blue-800 text-sm mt-2">Profit margins fell from ~14% to 9% in Nov–Dec, showing seasonal discounting pressures</p>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Recommendations & Implementation" icon={CheckCircle}>
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-4">Strategic Recommendations</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-green-800">Cap Furniture Discounts</h5>
                    <p className="text-green-700">Limit discounts to ≤20% in Furniture to protect margins.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-green-800">Optimize Regional Strategy</h5>
                    <p className="text-green-700">Refocus Central region with improved product mix and reduced discounting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-green-800">Holiday Discount Refinement</h5>
                    <p className="text-green-700">Introduce targeted promotions during November–December to sustain sales while minimizing margin erosion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-green-800">Profitability Dashboards</h5>
                    <p className="text-green-700">Maintain ongoing monitoring of sales, profit, and margin by region and category.</p>
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
