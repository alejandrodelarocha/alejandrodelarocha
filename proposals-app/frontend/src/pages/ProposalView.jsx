import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { proposalsAPI } from '../api/client'

export default function ProposalView() {
  const { id } = useParams()
  const [proposal, setProposal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const proposalUrl = `${window.location.origin}/proposals/proposal/${id}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(proposalUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const response = await proposalsAPI.get(id)
        setProposal(response.data)
      } catch (err) {
        console.error('Failed to fetch proposal', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProposal()
  }, [id])

  if (loading) return <div className="p-8">Loading...</div>
  if (!proposal) return <div className="p-8">Proposal not found</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to Proposals
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-4xl font-bold">{proposal.icon} {proposal.name}</h1>
            <button
              onClick={copyToClipboard}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {copied ? '✓ Copied!' : '📋 Share Link'}
            </button>
          </div>

          <p className="text-gray-700 text-lg mb-6">{proposal.description}</p>

          {proposal.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {proposal.tags.map((tag, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            {proposal.client_name && <p><strong>Client:</strong> {proposal.client_name}</p>}
            {proposal.client_location && <p><strong>Location:</strong> {proposal.client_location}</p>}
            {proposal.launch_price && <p><strong>Launch Price:</strong> ${proposal.launch_price}</p>}
            {proposal.monthly_fee && <p><strong>Monthly:</strong> ${proposal.monthly_fee}</p>}
          </div>

          {proposal.pitch_text && (
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Overview</h2>
              <p className="text-gray-700">{proposal.pitch_text}</p>
            </div>
          )}

          {proposal.deliverables && (
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Deliverables</h2>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
                {JSON.stringify(proposal.deliverables, null, 2)}
              </pre>
            </div>
          )}

          {proposal.whatsapp_link && (
            <a
              href={proposal.whatsapp_link}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded inline-block"
            >
              Accept via WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
