# Wojciech Wnek – Portfolio Website

Personal portfolio website built with **Next.js**, showcasing my experience, skills, and selected commercial projects.  
The site focuses on performance, accessibility, clean architecture, and long-term maintainability.

🌐 Live: https://wojciechwnek.vercel.app/

---

## ✨ Features

- Modern, responsive portfolio layout
- Smooth animations using **Framer Motion**
- Accessible UI components (**shadcn/ui**, WCAG-friendly)
- Contact form with:
  - **Zod** schema validation
  - **React Hook Form** for state handling
  - Server-side rate limiting to prevent multiple submissions from the same IP
- Clean, scalable project structure
- SEO-friendly and optimized for performance

---

## 🧱 Tech Stack

### Frontend

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **shadcn/ui**

### Forms & Validation

- **React Hook Form**
- **Zod**

### Infrastructure

- **Vercel** (hosting & deployment)
- Server Actions / API routes for form handling
- Rate limiting to protect the contact form from spam

---

## 📄 Pages

- **Home** – Short introduction and value proposition
- **About** – Background, skills, and technical focus
- **Experience** – Professional experience and selected projects
- **Contact** – Contact form with validation and rate limiting

---

## 📨 Contact Form Details

The contact form is built with production-grade patterns:

- Client-side validation using **Zod**
- Controlled form handling via **React Hook Form**
- Server-side submission handling
- IP-based rate limiting to prevent email spam and abuse
- Graceful error and success feedback for users

---

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Setup

```bash
git clone https://github.com/WojciechWnek/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.
