import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout.jsx'
import Portfolio from './pages/Portfolio.jsx'
import RevenueProject from './pages/RevenueProject.jsx'
import ChurnProject from './pages/ChurnProject.jsx'
import SupplyChainProject from './pages/SupplyChainProject.jsx'
import DigitalTransformationProject from './pages/DigitalTransformationProject.jsx'
import MarketEntryProject from './pages/MarketEntryProject.jsx'
import DashboardProject from './pages/DashboardProject.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/Portfolio" replace />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/RevenueProject" element={<RevenueProject />} />
        <Route path="/ChurnProject" element={<ChurnProject />} />
        <Route path="/SupplyChainProject" element={<SupplyChainProject />} />
        <Route path="/DigitalTransformationProject" element={<DigitalTransformationProject />} />
        <Route path="/MarketEntryProject" element={<MarketEntryProject />} />
        <Route path="/DashboardProject" element={<DashboardProject />} />
        <Route path="*" element={<Navigate to="/Portfolio" replace />} />
      </Routes>
    </Layout>
  )
}
