import { useState, useEffect } from "react";

const API = "http://localhost:3334";

export default function ConfigPanel() {
  const [config, setConfig] = useState(null);
  const [history, setHistory] = useState([]);
  const [admissibility, setAdmissibility] = useState("");
  const [delta, setDelta] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const fetchConfig = async () => {
    const res = await fetch(`${API}/api/config`);
    const data = await res.json();
    setConfig(data);
    setAdmissibility(data.admissibility_threshold);
    setDelta(data.ambiguity_delta);
  };

  const fetchHistory = async () => {
    const res = await fetch(`${API}/api/config/history`);
    const data = await res.json();
    setHistory(data);
  };

  useEffect(() => {
    fetchConfig();
    fetchHistory();
  }, []);

  const handleSave = async () => {
    setError(null);
    setSaving(true);
    try {
      const res = await fetch(`${API}/api/config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          admissibility_threshold: parseFloat(admissibility),
          ambiguity_delta: parseFloat(delta),
          created_by: "ui",
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        setError(err.message);
        return;
      }
      await fetchConfig();
      await fetchHistory();
    } catch (e) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  if (!config) return <div className="text-white p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Sapey — Resolution Config</h1>
      <p className="text-gray-400 mb-8">
        Current: <span className="text-cyan-400 font-mono">{config.threshold_version}</span>
      </p>

      <div className="max-w-md space-y-4 mb-8">
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            admissibility_threshold
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={admissibility}
            onChange={(e) => setAdmissibility(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-lg focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">
            ambiguity_delta
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={delta}
            onChange={(e) => setDelta(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-lg focus:outline-none focus:border-cyan-500"
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 px-6 py-2 rounded font-medium"
        >
          {saving ? "Saving..." : "Save New Version"}
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-3">History (append-only)</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-800">
              <th className="pb-2 pr-4">version</th>
              <th className="pb-2 pr-4">admissibility</th>
              <th className="pb-2 pr-4">delta</th>
              <th className="pb-2 pr-4">created_by</th>
              <th className="pb-2">created_at</th>
            </tr>
          </thead>
          <tbody>
            {history.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-gray-900 ${
                  row.threshold_version === config.threshold_version
                    ? "text-cyan-400"
                    : "text-gray-300"
                }`}
              >
                <td className="py-2 pr-4 font-mono">{row.threshold_version}</td>
                <td className="py-2 pr-4 font-mono">{row.admissibility_threshold}</td>
                <td className="py-2 pr-4 font-mono">{row.ambiguity_delta}</td>
                <td className="py-2 pr-4">{row.created_by}</td>
                <td className="py-2 font-mono text-xs">{row.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
