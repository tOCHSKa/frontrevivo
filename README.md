# Revivo — AI Memory Restoration

Revivo is a modern AI-powered web application that restores, colorizes, and animates old photographs to bring memories back to life.

It focuses on emotional storytelling through visual enhancement and generative AI.

---

## 🚀 Features

- 🖼️ AI Photo Restoration (remove noise, scratches, blur)
- 🎨 Automatic Colorization for black & white photos
- 🎬 Memory Animation (turn photos into cinematic motion clips)
- ⚡ Instant preview experience (no authentication required)
- 🌍 Multi-language support (FR / EN)
- 📱 Fully responsive mobile-first UI
- ✨ Story-driven user experience

---

## 🧠 How it works

1. User uploads a photo
2. Image is processed by AI pipeline:
   - restoration model (denoise / repair)
   - colorization model
   - optional animation generator
3. Result is returned in real-time preview

> Note: AI backend : https://github.com/tOCHSKa/BackRevivo

---

## 🛠️ Tech Stack

- Vue 3 (Composition API)
- Tailwind CSS
- vue-i18n
- Intersection Observer API

---

## 🏗️ Project Structure

```
src/
├── components/        # UI components
│   ├── Hero.vue
│   ├── Features.vue
│   ├── Pricing.vue
│   ├── Stories.vue
│   ├── Navbar.vue
│   └── Footer.vue
│
├── constants/         # Static configuration
├── assets/            # Images & media
├── i18n.js            # Localization config
└── main.js
```

---

## ⚙️ Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run serve
```

### 3. Build for production

```bash
npm run build
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_AI_ENGINE_KEY=your_key_here
```

---

## 🌍 Internationalization

Example translation structure:

```js
nav: {
  home: 'Home',
  features: 'Features',
  pricing: 'Pricing',
  stories: 'Stories'
}
```

Language switching is handled dynamically using `vue-i18n`.

---

## 📌 Roadmap

- AI backend integration (image restoration pipeline)
- User authentication system
- Payment gateway integration
- HD export system
- Advanced animation styles
- Cloud storage for images

---

## 🤝 Contributing

Contributions are welcome.

Please open an issue first to discuss any major changes before submitting a pull request.

---

## 📄 License

MIT © 2026 Revivo