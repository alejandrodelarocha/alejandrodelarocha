CREATE TABLE IF NOT EXISTS proposals (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(255) NOT NULL,
  icon          VARCHAR(50),
  description   TEXT,
  tags          TEXT[],
  url_path      VARCHAR(255),
  client_name   VARCHAR(255),
  client_location VARCHAR(255),
  pitch_text    TEXT,
  deliverables  JSONB,
  investment    JSONB,
  launch_price  DECIMAL(10,2),
  monthly_fee   DECIMAL(10,2),
  whatsapp_link VARCHAR(500),
  demo_url      VARCHAR(500),
  status        VARCHAR(20) DEFAULT 'draft',
  created_at    TIMESTAMP DEFAULT NOW(),
  updated_at    TIMESTAMP DEFAULT NOW()
);

-- Seed the 6 existing proposals
INSERT INTO proposals (name, icon, description, tags, url_path, status) VALUES
  ('Serenity Salon', '✨', 'Modern salon & spa website with services showcase, team gallery, online booking integration, and local SEO optimization for Powder Springs, GA.', ARRAY['Salon & Spa', 'Design', 'Responsive'], '/serenitysalon/', 'sent'),
  ('Bloom Salon', '🌸', 'Premium hair salon website featuring color transformations, stylist profiles, appointment booking, and social media integration.', ARRAY['Hair Salon', 'Design', 'E-Booking'], '/bloomsalon/', 'sent'),
  ('Hair Bloom', '💇', 'Elegant hair styling studio with portfolio gallery, pricing tables, client testimonials, and location mapping.', ARRAY['Hair Studio', 'Portfolio', 'Mobile-First'], '/hairbloom/', 'sent'),
  ('Blue Mound Cafe', '☕', 'Cozy cafe website showcasing menu, ambiance photography, location hours, and community event calendar.', ARRAY['Cafe', 'Menu Design', 'Community'], '/bluemoundcafe/', 'sent'),
  ('Dustin Bunny', '🐰', 'Playful pet grooming service website with before/after galleries, service pricing, grooming tips, and appointment system.', ARRAY['Pet Care', 'Gallery', 'Booking'], '/dustinbunny/', 'sent'),
  ('CLSO', '🎻', 'Symphony orchestra website with performance schedule, artist bios, ticket purchasing, and donor recognition.', ARRAY['Arts', 'Events', 'Ticketing'], '/clso/', 'sent');
