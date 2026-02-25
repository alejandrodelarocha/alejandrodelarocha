import { Link } from 'react-router-dom'

export default function ProposalCard({ proposal }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold">{proposal.icon} {proposal.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{proposal.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {proposal.tags && proposal.tags.map((tag, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <Link
          to={`/proposal/${proposal.id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition"
        >
          View Proposal
        </Link>
        {proposal.whatsapp_link && (
          <a
            href={proposal.whatsapp_link}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
          >
            WhatsApp
          </a>
        )}
      </div>
    </div>
  )
}
