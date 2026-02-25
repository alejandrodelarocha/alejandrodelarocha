import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { proposalsAPI } from '../../api/client'
import axios from 'axios'

export default function ProposalForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [formData, setFormData] = useState({
    name: '', icon: '', description: '', tags: [], url_path: '',
    client_name: '', client_location: '', pitch_text: '',
    deliverables: '[]', investment: '[]', launch_price: '', monthly_fee: '',
    whatsapp_link: '', status: 'draft'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [scrapingUrl, setScrapingUrl] = useState('')
  const [scrapingLoading, setScrapingLoading] = useState(false)
  const [scrapedImages, setScrapedImages] = useState([])

  useEffect(() => {
    if (isEdit) {
      const fetchProposal = async () => {
        try {
          const response = await proposalsAPI.get(id)
          const p = response.data
          setFormData({
            ...p,
            tags: Array.isArray(p.tags) ? p.tags.join(', ') : p.tags || '',
            deliverables: typeof p.deliverables === 'string' ? p.deliverables : JSON.stringify(p.deliverables || []),
            investment: typeof p.investment === 'string' ? p.investment : JSON.stringify(p.investment || [])
          })
        } catch (err) {
          setError('Failed to load proposal')
        }
      }
      fetchProposal()
    }
  }, [id, isEdit])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleScrape = async (e) => {
    e.preventDefault()
    if (!scrapingUrl) {
      setError('Please enter a URL to scrape')
      return
    }

    setScrapingLoading(true)
    setError('')

    try {
      const response = await axios.post('/api/scraper/scrape', {
        url: scrapingUrl
      })

      const { data } = response.data
      setScrapedImages(data.images)

      // Auto-fill form fields with scraped data
      setFormData(prev => ({
        ...prev,
        name: data.title || prev.name,
        description: data.description || prev.description,
        pitch_text: data.description || prev.pitch_text,
        url_path: data.url || prev.url_path
      }))

      setScrapingUrl('')
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to scrape website')
    } finally {
      setScrapingLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = {
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        deliverables: JSON.parse(formData.deliverables || '[]'),
        investment: JSON.parse(formData.investment || '[]'),
        launch_price: parseFloat(formData.launch_price) || null,
        monthly_fee: parseFloat(formData.monthly_fee) || null
      }

      if (isEdit) {
        await proposalsAPI.update(id, data)
      } else {
        await proposalsAPI.create(data)
      }
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to save proposal')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Link to="/admin/dashboard" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">{isEdit ? 'Edit Proposal' : 'New Proposal'}</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          {/* Scraper Section */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 text-blue-900">🔍 Scrape Website</h2>
            <p className="text-sm text-gray-600 mb-3">Enter a website URL to automatically extract project info and images</p>

            <form onSubmit={handleScrape} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="url"
                  value={scrapingUrl}
                  onChange={(e) => setScrapingUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="flex-1 border border-blue-300 p-3 rounded bg-white"
                />
                <button
                  type="submit"
                  disabled={scrapingLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition disabled:opacity-50"
                >
                  {scrapingLoading ? 'Scraping...' : 'Scrape'}
                </button>
              </div>
            </form>

            {scrapedImages.length > 0 && (
              <div className="mt-4">
                <h3 className="font-bold text-sm mb-2">Scraped Images ({scrapedImages.length})</h3>
                <div className="grid grid-cols-4 gap-2">
                  {scrapedImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Scraped ${i}`}
                      className="w-full h-24 object-cover rounded border-2 border-blue-200"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
              <input type="text" name="icon" placeholder="Icon (emoji)" value={formData.icon} onChange={handleChange} className="border p-2 rounded" />
            </div>

            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} rows="3" className="w-full border p-2 rounded" />
            <textarea name="pitch_text" placeholder="Pitch Text" value={formData.pitch_text} onChange={handleChange} rows="3" className="w-full border p-2 rounded" />

            <input type="text" name="tags" placeholder="Tags (comma-separated)" value={formData.tags} onChange={handleChange} className="w-full border p-2 rounded" />

            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="url_path" placeholder="URL Path" value={formData.url_path} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="client_name" placeholder="Client Name" value={formData.client_name} onChange={handleChange} className="border p-2 rounded" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="client_location" placeholder="Location" value={formData.client_location} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="whatsapp_link" placeholder="WhatsApp Link" value={formData.whatsapp_link} onChange={handleChange} className="border p-2 rounded" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <input type="number" name="launch_price" placeholder="Launch Price" value={formData.launch_price} onChange={handleChange} className="border p-2 rounded" />
              <input type="number" name="monthly_fee" placeholder="Monthly Fee" value={formData.monthly_fee} onChange={handleChange} className="border p-2 rounded" />
              <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded">
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <textarea name="deliverables" placeholder="Deliverables (JSON)" value={formData.deliverables} onChange={handleChange} rows="3" className="border p-2 rounded font-mono text-xs" />
              <textarea name="investment" placeholder="Investment (JSON)" value={formData.investment} onChange={handleChange} rows="3" className="border p-2 rounded font-mono text-xs" />
            </div>

            <div className="flex gap-4">
              <button type="submit" disabled={loading} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition disabled:opacity-50">
                {loading ? 'Saving...' : 'Save Proposal'}
              </button>
              <button type="button" onClick={() => navigate('/admin/dashboard')} className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 rounded transition">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
