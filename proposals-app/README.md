# Proposals Management System

A full-stack proposal management system with React frontend, Express backend, and PostgreSQL database.

## Features

- 📋 **Public Listing** - Browse proposals on the home page
- 📄 **Proposal Details** - View full proposal information
- 🔐 **Admin Panel** - Password-protected CRUD interface
- 💾 **Database** - Persistent storage with PostgreSQL
- 🐳 **Docker** - Fully containerized for easy deployment

## Quick Start

### 1. Environment Setup

```bash
cp .env.example .env
# Edit .env with your credentials
```

### 2. Run with Docker Compose

```bash
docker-compose up --build
```

Services will be available at:
- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:4000
- **Database**: localhost:5432

### 3. Admin Access

- Navigate to http://localhost:3001/admin
- Login with password from `.env` `ADMIN_PASSWORD`

## Project Structure

```
proposals-app/
├── frontend/           # React + Vite + Tailwind
│   ├── src/
│   │   ├── pages/     # Home, ProposalView, Admin pages
│   │   ├── components/ # ProposalCard, etc
│   │   └── api/       # Axios client
│   ├── Dockerfile
│   └── nginx.conf
├── backend/           # Express.js API
│   ├── src/
│   │   ├── routes/    # Proposals CRUD, Auth
│   │   ├── middleware/# JWT verification
│   │   └── db/        # PostgreSQL pool
│   └── Dockerfile
├── db/
│   └── init.sql       # Schema + seed data
└── docker-compose.yml
```

## API Endpoints

### Public

- `GET /proposals` - List all published proposals
- `GET /proposals/:id` - Get single proposal

### Admin (requires JWT)

- `POST /auth/login` - Get auth token
- `POST /proposals` - Create proposal
- `PUT /proposals/:id` - Update proposal
- `DELETE /proposals/:id` - Delete proposal

## Customization

### Change Admin Password

Edit `.env`:
```
ADMIN_PASSWORD=your-new-password
```

Then restart:
```bash
docker-compose restart api
```

### Add New Proposals

Use the admin panel at `/admin/dashboard` to create proposals, or edit `db/init.sql` for bulk inserts.

## Deployment

To deploy to a server:

```bash
scp -r proposals-app/ root@your-server:/opt/proposals-app/
ssh root@your-server
cd /opt/proposals-app
docker-compose up -d
```

Then configure your reverse proxy (Caddy, Nginx) to forward traffic.

## Troubleshooting

### Database connection error

Ensure `DATABASE_URL` in `.env` is correct and database is running:
```bash
docker-compose ps
```

### Admin login fails

Check `ADMIN_PASSWORD` in `.env` matches what you're entering.

### Frontend can't reach API

Verify `api` service is running and check nginx.conf proxy settings.
