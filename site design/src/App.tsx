import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import IntakeView from './components/IntakeViewSimple'
import ReviewsView from './components/ReviewsView'
import DesignEditor from './components/DesignEditor'
import DesignStandards from './components/DesignStandards'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<IntakeView />} />
        <Route path="/intake" element={<IntakeView />} />
        <Route path="/reviews" element={<ReviewsView />} />
        <Route path="/design/:projectId" element={<DesignEditor />} />
        <Route path="/design-standards" element={<DesignStandards />} />
      </Routes>
    </Layout>
  )
}

export default App
