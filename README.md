# Shoeb Bagwan — Portfolio

> Personal developer portfolio — built to be fast, clean, and readable by a recruiter in under a minute.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?logo=framer)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Build & Deploy](#build--deploy)
- [Project Structure](#project-structure)
- [Editing Content](#editing-content)
- [Author](#author)

## Overview

A dark, cinematic single-page portfolio covering background, skills, experience, projects, open-source contributions, education, and contact info — all pulled from one editable content file so it's easy to keep current.

## Features

- Dark hero section with an animated signal-wave motif, tying into the audio/RAG work shown further down
- Content-driven architecture — every piece of copy lives in `lib/data.ts`, not scattered across components
- Fully responsive across mobile, tablet, and desktop
- Accessible: visible keyboard focus states, respects `prefers-reduced-motion`
- Downloadable resume PDF, linked from the nav and contact section
- Sections: About · Skills · Experience · Projects · Open Source · Education · Contact

## Tech Stack

| Layer       | Choice                     |
|-------------|----------------------------|
| Framework   | Next.js 15 (App Router)    |
| Language    | TypeScript                 |
| Styling     | Tailwind CSS v4            |
| Animation   | Framer Motion              |
| Icons       | lucide-react + custom SVGs |

## Getting Started

Requires Node.js 18+.

```bash
git clone https://github.com/shoebbagwan/Shoeb_portfolio.git
cd Shoeb_portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site hot-reloads on save.

## Build & Deploy

```bash
npm run build
npm run start
```

**Deploying:** the easiest path is [Vercel](https://vercel.com) — import this repo, no configuration needed. It also runs on any host that supports Node.js.

## Project Structure
