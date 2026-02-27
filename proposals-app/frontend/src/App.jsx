import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ProposalView from './pages/ProposalView'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ProposalForm from './pages/admin/ProposalForm'

function App() {
  return (
    <Router basename="/proposals">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal/:id" element={<ProposalView />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/new" element={<ProposalForm />} />
        <Route path="/admin/edit/:id" element={<ProposalForm />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
