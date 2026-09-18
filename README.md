# 🚀 Prathap Reddy – Modern Student Developer Portfolio

A modern, responsive, and customizable personal portfolio designed as an interactive workshop example for engineering students (**PROFOLIO – CONVERGENCE 2K26**).

Built using **React + Vite + Tailwind CSS + Lucide Icons**.

---

## 🌟 Structure & Workshop Flow

This template guides students through the standard portfolio progression:

```
Introduction (Hero) 
   ↳ About Me 
      ↳ Skills & Technologies 
         ↳ Featured Projects (CycloneAI, SmartShop, Data4Civic)
            ↳ Education (B.Tech Data Science @ VNR VJIET)
               ↳ Achievements & Certifications 
                  ↳ Resume 
                     ↳ Contact & Workshop Footer
```

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (Clean, modern CSS-first theme)
- **Icons:** Lucide React & Custom SVG brand icons
- **Animations:** Custom CSS animations + IntersectionObserver scroll triggers

---

## 💻 Quick Start Guide for Students

### 1. Clone or Open Project
```bash
cd prathap-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser!

### 4. Build for Production
```bash
npm run build
```

---

## 🚀 Deployment (GitHub + Vercel)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
   - Import your GitHub repository
   - Select **Vite** preset (defaults are automatically configured)
   - Click **Deploy**!

---

## 📝 Customization Tips for Students

- **Profile & Bio:** Edit `src/components/Hero.jsx` and `src/components/About.jsx`
- **Skills:** Add or remove skills in `src/components/Skills.jsx`
- **Projects:** Update your projects, GitHub links, and live demos in `src/components/Projects.jsx`
- **Certificates:** Modify `src/components/Certifications.jsx`
- **Contact:** Add your actual LinkedIn, GitHub, and email in `src/components/Contact.jsx`
- **Resume:** Place your PDF in the `public/` directory and link directly to `/resume.pdf` in `src/components/Resume.jsx`

---

Built with ❤️ | **PROFOLIO – CONVERGENCE 2K26**
