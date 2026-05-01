<div align="center">

# 🏥 HealthQueue+
### Smart Hospital Queue & OPD Management System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![SonarCloud](https://img.shields.io/badge/SonarCloud-F3702A?style=for-the-badge&logo=sonarcloud&logoColor=white)

> **Stop Waiting. Start Healing.**
> A real-time, AI-assisted hospital queue management system designed to make OPDs efficient, fair, and transparent.

[🚀 Live Demo](https://health-queue-plus.vercel.app) • [Features](#-features) • [Tech Stack](#%EF%B8%8F-tech-stack) • [Architecture](#architecture) • [Getting Started](#-getting-started) • [Team](#-team) • [GitHub Repo](https://github.com/deepraj-07/health-queue-plus)

</div>

---

## 🎯 Problem Statement

Hospital OPDs suffer from:

- ❌ Long waiting times with no visibility
- ❌ No transparency in queue handling
- ❌ Manual & inefficient patient flow management
- ❌ No prioritization for emergency cases
- ❌ Poor coordination between departments

---

## 🚀 Solution

**HealthQueue+** digitizes the entire OPD workflow:

- ✅ Real-time queue tracking
- ✅ Department-based patient routing
- ✅ Emergency prioritization
- ✅ AI-assisted prescription generation
- ✅ Integrated medicine dispensing

---

## ✨ Features

### 🧾 Patient Registration
- Register patients with department selection
- Capture symptoms & visit type
- Token-based queue entry

### 📊 Live Queue System
- Real-time queue updates
- Department-wise filtering
- Status tracking: `Waiting` · `Emergency` · `Consulting` · `Completed`

### ⚖️ Fair Priority System
- Abuse-resistant hidden scoring system
- Ensures equitable patient handling
- Emergency cases auto-prioritized

### 🚨 Emergency Handling
- Instant escalation with priority override
- Visual alerts across all dashboards

### 🧑‍⚕️ Staff Dashboard
- Role-based access: **Receptionist** · **Nurse** · **Doctor**
- Queue management: Transfer patients, Mark late, Escalate priority

### 🩺 Doctor Dashboard
- View active queue & patient history
- Call next patient with one click
- AI Prescription Generator

### 🤖 AI Prescription Generator
- AI-assisted prescription suggestions based on symptoms, department protocols & patient data
- Doctor verification workflow before forwarding

### 💊 Medicine Department
- Token-based medicine dispensing
- E-prescription queue
- One-time redemption to prevent fraud

---

<a name="architecture"></a>

## 🏗️ Architecture

```
User (Browser)
     │
     ▼
React + Vite (Frontend)
     │
     ├──► Supabase (PostgreSQL DB + Auth + Realtime)
     │         └── Tables: patients, queue, prescriptions, medicines
     │
     ├──► Anthropic / AI API (Prescription Generator)
     │
     └──► Nginx (Static SPA serving via Docker)

CI/CD: GitHub Actions → SonarCloud → Docker Build → Vercel Deploy
```

> 📁 Full architecture details available in the [GitHub Repository](https://github.com/deepraj-07/health-queue-plus).

---

## 🔄 End-to-End Patient Flow

```
Registration → Queue → Consultation → AI Prescription → Medicine Dispensing
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite + TypeScript |
| Styling | Tailwind CSS |
| Backend | Supabase |
| Auth / DB | Supabase (PostgreSQL) |
| CI/CD | GitHub Actions |
| Code Quality | SonarCloud |
| Deployment | Vercel |
| Containerization | Docker + Nginx |

---

## ⚙️ DevOps & CI/CD

### 🔄 Pipeline Stages

**Quality & Build**
- Lint → Test → Coverage → Build

**Sonar Analysis**
- Code quality checks & coverage reporting

**Docker Build**
- Multi-stage build → Production-ready container

### 🐳 Docker Support

```bash
docker build -t health-app .
docker run -p 3000:80 health-app
```

### ⚡ Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build project
npm run build

# Run tests
npm run test

# Lint
npm run lint
```

---

## 📁 Project Structure

```
health-queue-plus/
│
├── .github/workflows/      # CI/CD pipelines
├── public/                 # Static assets
├── src/                    # Application source
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── env.ts
│   └── supabase.ts
│
├── Dockerfile
├── nginx.conf
├── docker-compose.yml
├── vercel.json
├── sonar-project.properties
├── .env.example
├── package.json
└── vite.config.ts
```

---

## 🔐 Security & Best Practices

- `.env` not tracked in Git
- Public vs Secret keys separation
- Safe fallback for missing env vars
- CI-enforced code quality gates
- Dockerized production build

---

## 📊 Deployment

| Service | Platform |
|---|---|
| 🌐 Frontend | Vercel |
| 🗄️ Backend | Supabase |
| 🐳 Container | Docker (Nginx SPA serving) |

---

## 🧪 Testing & Quality

- Unit testing with coverage reports
- SonarCloud integration for static analysis
- CI pipeline enforces code health on every push

---

## 📌 Future Improvements

- 🔐 Full authentication & RBAC
- 📱 Mobile PWA optimization
- 📡 Real-time WebSocket updates
- 🏥 Hospital analytics dashboard
- 🧾 Digital reports & history tracking

---

## 👥 Team

| # | Name | Role |
|---|---|---|
| 1 | **Kaustuv** | DevOps Lead & CI/CD Architect |
| 2 | **Kripashankar** | Containerization & Deployment Engineer |
| 3 | **Deep Raj** | Code Quality & Monitoring Engineer |
| 4 | **Gurubaksh** | Version Control, Testing & CI Support |

---

## ⭐ Final Note

> This project is not just a frontend demo — it is a **production-grade full-stack + DevOps integrated system** built to solve real-world hospital inefficiencies.

---

<div align="center">
Made with ❤️ by Team HealthQueue+
</div>
