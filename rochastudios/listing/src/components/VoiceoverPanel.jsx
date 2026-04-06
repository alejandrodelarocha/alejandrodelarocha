import { useState, useRef, useCallback } from 'react';
import { Mic, Play, Pause, Trash2, Download, Loader, Settings, Volume2 } from 'lucide-react';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

// ── Azure Neural Voices (free tier F0 available) ───────────────────────────
const VOICES = [
  // English
  { name: 'en-US-JennyNeural',       label: 'Jenny (US)',        lang: 'English', style: 'Conversational' },
  { name: 'en-US-GuyNeural',         label: 'Guy (US)',          lang: 'English', style: 'Conversational' },
  { name: 'en-US-AriaNeural',        label: 'Aria (US)',         lang: 'English', style: 'News' },
  { name: 'en-US-DavisNeural',       label: 'Davis (US)',        lang: 'English', style: 'Casual' },
  { name: 'en-US-JaneNeural',        label: 'Jane (US)',         lang: 'English', style: 'Angry / Sad' },
  { name: 'en-US-JasonNeural',       label: 'Jason (US)',        lang: 'English', style: 'Excited' },
  { name: 'en-US-NancyNeural',       label: 'Nancy (US)',        lang: 'English', style: 'Cheerful' },
  { name: 'en-US-TonyNeural',        label: 'Tony (US)',         lang: 'English', style: 'Excited' },
  { name: 'en-GB-SoniaNeural',       label: 'Sonia (UK)',        lang: 'English', style: 'Cheerful' },
  { name: 'en-GB-RyanNeural',        label: 'Ryan (UK)',         lang: 'English', style: 'Chat' },
  { name: 'en-AU-NatashaNeural',     label: 'Natasha (AU)',      lang: 'English', style: 'General' },
  // Spanish
  { name: 'es-ES-ElviraNeural',      label: 'Elvira (ES)',       lang: 'Spanish', style: 'General' },
  { name: 'es-ES-AlvaroNeural',      label: 'Álvaro (ES)',       lang: 'Spanish', style: 'General' },
  { name: 'es-MX-DaliaNeural',       label: 'Dalia (MX)',        lang: 'Spanish', style: 'General' },
  { name: 'es-MX-JorgeNeural',       label: 'Jorge (MX)',        lang: 'Spanish', style: 'General' },
  // French
  { name: 'fr-FR-DeniseNeural',      label: 'Denise (FR)',       lang: 'French',  style: 'General' },
  { name: 'fr-FR-HenriNeural',       label: 'Henri (FR)',        lang: 'French',  style: 'General' },
  // German
  { name: 'de-DE-KatjaNeural',       label: 'Katja (DE)',        lang: 'German',  style: 'General' },
  { name: 'de-DE-ConradNeural',      label: 'Conrad (DE)',       lang: 'German',  style: 'General' },
  // Portuguese
  { name: 'pt-BR-FranciscaNeural',   label: 'Francisca (BR)',    lang: 'Portuguese', style: 'General' },
  { name: 'pt-BR-AntonioNeural',     label: 'Antonio (BR)',      lang: 'Portuguese', style: 'General' },
  // Italian
  { name: 'it-IT-ElsaNeural',        label: 'Elsa (IT)',         lang: 'Italian', style: 'General' },
  // Japanese
  { name: 'ja-JP-NanamiNeural',      label: 'Nanami (JP)',       lang: 'Japanese', style: 'General' },
  // Chinese
  { name: 'zh-CN-XiaoxiaoNeural',    label: 'Xiaoxiao (CN)',     lang: 'Chinese', style: 'Cheerful' },
  { name: 'zh-CN-YunxiNeural',       label: 'Yunxi (CN)',        lang: 'Chinese', style: 'Lively' },
];

const VOICE_STYLES = {
  'en-US-JennyNeural':  ['general', 'assistant', 'chat', 'customerservice', 'newscast', 'empathetic'],
  'en-US-GuyNeural':    ['general', 'newscast', 'angry', 'cheerful', 'sad', 'excited', 'friendly'],
  'en-US-AriaNeural':   ['general', 'chat', 'customerservice', 'narration-professional', 'newscast-casual', 'newscast-formal', 'cheerful', 'empathetic', 'angry', 'sad', 'excited', 'friendly', 'hopeful'],
  'en-US-DavisNeural':  ['general', 'chat', 'angry', 'cheerful', 'excited', 'friendly', 'hopeful', 'sad', 'shouting', 'terrified', 'unfriendly', 'whispering'],
};

const RATES  = ['-20%', '-10%', 'default', '+10%', '+20%', '+30%'];
const PITCHES = ['-10%', '-5%', 'default', '+5%', '+10%'];

export default function VoiceoverPanel({ onVoiceoverReady, currentSlideVoiceover }) {
  const [apiKey, setApiKey]       = useState(() => localStorage.getItem('az_tts_key') || '');
  const [region, setRegion]       = useState(() => localStorage.getItem('az_tts_region') || 'eastus');
  const [showSettings, setShowSettings] = useState(!localStorage.getItem('az_tts_key'));

  const [text, setText]           = useState('');
  const [voice, setVoice]         = useState('en-US-JennyNeural');
  const [style, setStyle]         = useState('general');
  const [rate, setRate]           = useState('default');
  const [pitch, setPitch]         = useState('default');
  const [volume, setVolume]       = useState(1.0);

  const [generating, setGenerating] = useState(false);
  const [error, setError]           = useState('');
  const [audioUrl, setAudioUrl]     = useState(currentSlideVoiceover?.url || null);
  const [audioDuration, setAudioDuration] = useState(null);
  const [playing, setPlaying]       = useState(false);

  const audioRef   = useRef(null);
  const langFilter = [...new Set(VOICES.map(v => v.lang))];
  const [langFilter_, setLangFilter] = useState('English');

  const filteredVoices = VOICES.filter(v => v.lang === langFilter_);
  const voiceStyles = VOICE_STYLES[voice] || ['general'];

  const saveCredentials = () => {
    localStorage.setItem('az_tts_key', apiKey);
    localStorage.setItem('az_tts_region', region);
    setShowSettings(false);
  };

  // Build SSML
  const buildSSML = () => {
    const lang = VOICES.find(v => v.name === voice)?.name.split('-').slice(0, 2).join('-') || 'en-US';
    const styleTag = style !== 'general' ? `express-as style="${style}"` : null;
    const rateAttr  = rate  !== 'default' ? ` rate="${rate}"`  : '';
    const pitchAttr = pitch !== 'default' ? ` pitch="${pitch}"` : '';
    const prosodyOpen  = (rateAttr || pitchAttr) ? `<prosody${rateAttr}${pitchAttr}>` : '';
    const prosodyClose = (rateAttr || pitchAttr) ? `</prosody>` : '';
    const innerText = `${prosodyOpen}${text}${prosodyClose}`;
    const voiced    = styleTag
      ? `<${styleTag}>${innerText}</express-as>`
      : innerText;

    return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="${lang}">
  <voice name="${voice}">${voiced}</voice>
</speak>`;
  };

  const generate = useCallback(async () => {
    if (!apiKey || !region) { setError('Enter your Azure API key and region first.'); return; }
    if (!text.trim())        { setError('Enter some text to synthesize.'); return; }
    setError('');
    setGenerating(true);

    try {
      const ssml = buildSSML();
      const endpoint = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
          'Content-Type': 'application/ssml+xml',
          'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
          'User-Agent': 'RochaStudiosPresentation',
        },
        body: ssml,
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(`Azure TTS error ${res.status}: ${msg}`);
      }

      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);

      // Revoke old URL
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioUrl(url);

      // Get duration
      const tmpAudio = new Audio(url);
      tmpAudio.addEventListener('loadedmetadata', () => {
        setAudioDuration(tmpAudio.duration);
      });

      // Notify parent
      onVoiceoverReady?.({ url, blob, text, voice, style, duration: null });
    } catch (e) {
      setError(e.message);
    } finally {
      setGenerating(false);
    }
  }, [apiKey, region, text, voice, style, rate, pitch, audioUrl, onVoiceoverReady]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play(); setPlaying(true); }
  };

  const downloadAudio = () => {
    if (!audioUrl) return;
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = `voiceover-slide.mp3`;
    a.click();
  };

  return (
    <div className="flex flex-col h-full">
      {audioUrl && <audio ref={audioRef} src={audioUrl} onEnded={() => setPlaying(false)} />}

      {/* Settings panel */}
      {showSettings ? (
        <div className="p-3 flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
              <Settings size={12} /> Azure Credentials
            </span>
          </div>
          <div>
            <label className="text-xs text-zinc-500 block mb-1">Subscription Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              placeholder="••••••••••••••••••••••••••••••••"
              className="w-full text-xs bg-zinc-800 border border-zinc-600 rounded px-2 py-1.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-xs text-zinc-500 block mb-1">Region</label>
            <input
              type="text"
              value={region}
              onChange={e => setRegion(e.target.value)}
              placeholder="eastus"
              className="w-full text-xs bg-zinc-800 border border-zinc-600 rounded px-2 py-1.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <a
            href="https://portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 underline"
          >
            Get free key (F0 — 0.5M chars/month) ↗
          </a>
          <button
            onClick={saveCredentials}
            disabled={!apiKey || !region}
            className="w-full py-1.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs rounded font-medium transition-colors"
          >
            Save & Continue
          </button>
        </div>
      ) : (
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-700">
            <span className="text-xs text-green-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
              Azure Neural TTS (Free F0)
            </span>
            <button
              onClick={() => setShowSettings(true)}
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
              title="Settings"
            >
              <Settings size={13} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
            {/* Language filter */}
            <div>
              <label className="text-xs text-zinc-500 block mb-1">Language</label>
              <div className="flex flex-wrap gap-1">
                {langFilter.map(lang => (
                  <button
                    key={lang}
                    onClick={() => { setLangFilter(lang); setVoice(VOICES.find(v => v.lang === lang)?.name || voice); }}
                    className={`px-2 py-0.5 text-xs rounded transition-colors ${
                      langFilter_ === lang ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Voice selector */}
            <div>
              <label className="text-xs text-zinc-500 block mb-1">Voice</label>
              <select
                value={voice}
                onChange={e => { setVoice(e.target.value); setStyle('general'); }}
                className="w-full text-xs bg-zinc-800 border border-zinc-600 rounded px-2 py-1.5 text-white focus:outline-none focus:border-blue-500"
              >
                {filteredVoices.map(v => (
                  <option key={v.name} value={v.name}>{v.label} · {v.style}</option>
                ))}
              </select>
            </div>

            {/* Style */}
            {voiceStyles.length > 1 && (
              <div>
                <label className="text-xs text-zinc-500 block mb-1">Speaking Style</label>
                <select
                  value={style}
                  onChange={e => setStyle(e.target.value)}
                  className="w-full text-xs bg-zinc-800 border border-zinc-600 rounded px-2 py-1.5 text-white focus:outline-none focus:border-blue-500"
                >
                  {voiceStyles.map(s => (
                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Rate + Pitch */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-zinc-500 block mb-1">Speed</label>
                <select
                  value={rate}
                  onChange={e => setRate(e.target.value)}
                  className="w-full text-xs bg-zinc-800 border border-zinc-600 rounded px-2 py-1.5 text-white focus:outline-none focus:border-blue-500"
                >
                  {RATES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-500 block mb-1">Pitch</label>
                <select
                  value={pitch}
                  onChange={e => setPitch(e.target.value)}
                  className="w-full text-xs bg-zinc-800 border border-zinc-600 rounded px-2 py-1.5 text-white focus:outline-none focus:border-blue-500"
                >
                  {PITCHES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>

            {/* Script text */}
            <div>
              <label className="text-xs text-zinc-500 block mb-1">
                Script
                {text.length > 0 && <span className="ml-1 text-zinc-600">({text.length} chars)</span>}
              </label>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Type the voiceover script for this slide..."
                rows={5}
                className="w-full text-xs bg-zinc-800 border border-zinc-600 rounded px-2 py-1.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="text-xs text-red-400 bg-red-900/20 border border-red-800 rounded px-2 py-1.5">
                {error}
              </div>
            )}

            {/* Generate button */}
            <button
              onClick={generate}
              disabled={generating || !text.trim()}
              className="w-full flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-sm rounded font-medium transition-colors"
            >
              {generating ? (
                <><Loader size={14} className="animate-spin" /> Generating...</>
              ) : (
                <><Mic size={14} /> Generate Voiceover</>
              )}
            </button>

            {/* Audio player */}
            {audioUrl && (
              <div className="bg-zinc-800 rounded p-2 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1"><Volume2 size={12} /> Voiceover ready</span>
                  {audioDuration && <span>{audioDuration.toFixed(1)}s</span>}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={togglePlay}
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-white text-xs rounded transition-colors"
                  >
                    {playing ? <><Pause size={13} /> Pause</> : <><Play size={13} /> Play</>}
                  </button>
                  <button
                    onClick={downloadAudio}
                    className="flex items-center justify-center w-8 bg-zinc-700 hover:bg-zinc-600 text-zinc-300 rounded transition-colors"
                    title="Download MP3"
                  >
                    <Download size={13} />
                  </button>
                  <button
                    onClick={() => { URL.revokeObjectURL(audioUrl); setAudioUrl(null); setAudioDuration(null); onVoiceoverReady?.(null); }}
                    className="flex items-center justify-center w-8 bg-zinc-700 hover:bg-red-700 text-zinc-300 rounded transition-colors"
                    title="Remove"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                {/* Waveform placeholder */}
                <div className="h-6 bg-zinc-900 rounded overflow-hidden flex items-center px-1 gap-px">
                  {Array.from({ length: 48 }, (_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${playing ? 'bg-blue-500' : 'bg-zinc-600'} transition-all`}
                      style={{ height: `${20 + Math.sin(i * 0.7) * 14 + Math.cos(i * 1.3) * 8}%` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
