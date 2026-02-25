import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { proposalsAPI } from '../../api/client'

export default function Dashboard() {
  const [proposals, setProposals] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      navigate('/admin')
      return
    }

    const fetchProposals = async () => {
      try {
        // Fetch all proposals (admin view includes drafts)
        const response = await proposalsAPI.list()
        setProposals(response.data)
      } catch (err) {
        console.error('Failed to fetch proposals', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProposals()
  }, [navigate])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await proposalsAPI.delete(id)
        setProposals(proposals.filter(p => p.id !== id))
      } catch (err) {
        alert('Failed to delete proposal')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Link to="/admin/new" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              New Proposal
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('authToken')
                navigate('/admin')
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {proposals.map((proposal) => (
                  <tr key={proposal.id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4">{proposal.icon} {proposal.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        proposal.status === 'draft' ? 'bg-gray-200' :
                        proposal.status === 'sent' ? 'bg-blue-200' :
                        proposal.status === 'accepted' ? 'bg-green-200' :
                        'bg-red-200'
                      }`}>
                        {proposal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">${proposal.launch_price || '-'}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <Link
                        to={`/admin/edit/${proposal.id}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(proposal.id)}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
