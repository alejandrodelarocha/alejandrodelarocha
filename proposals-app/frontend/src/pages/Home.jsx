import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProposalCard from '../components/ProposalCard'
import { proposalsAPI } from '../api/client'

export default function Home() {
  const [proposals, setProposals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await proposalsAPI.list()
        setProposals(response.data)
      } catch (err) {
        console.error('Failed to fetch proposals', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProposals()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">My Proposals</h1>
          <Link to="/admin" className="text-blue-600 hover:text-blue-800 font-semibold">
            Admin Panel
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-gray-600 mb-8">
          Browse my web design proposals for various clients.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading proposals...</p>
          </div>
        ) : proposals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No proposals available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proposals.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
