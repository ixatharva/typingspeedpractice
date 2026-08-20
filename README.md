# ⌨️ Stark Typing Speed Practice

An elegant, developer-centric, and distraction-free typing speed testing web application. The interface draws inspiration from Vercel's stark design language—pairing a clean black-and-ink layout on a near-white canvas with vibrant mesh gradients, custom geometric typography, and smooth micro-animations.

This application is built using **Astro**, **Tailwind CSS v4**, and native web APIs, optimized for high performance and deployed seamlessly to Cloudflare Pages.

---

## ✨ Features

### 🎯 Multi-Mode Typing Tests
Tailor your practice experience to target different aspects of your typing speed and muscle memory:
*   **Time Mode:** Benchmark your stamina across 15s, 30s, 60s, or 120s intervals, or set a **Custom Time** (from 5 seconds up to 1 hour).
*   **Words Mode:** Practice typing a fixed quantity of words (10, 25, 50, or 100 words) without the pressure of a timer.
*   **Code Mode:** A dedicated environment for software developers to practice typing raw programming syntax in **JavaScript**, **Python**, or **HTML** (including special characters, brackets, and operators).

### 🌐 Multilingual & Specialized Layout Support
Practice in your preferred language or train for multilingual efficiency:
*   Includes native vocabulary sets for **English (US)**, **German**, **Portuguese**, **Italian**, **Spanish**, **French**, and **Hindi**.
*   **Hindi InScript Layout:** Visual double-legend mapping on the virtual keyboard to facilitate learning the standard InScript typing layout.

### ⌨️ Dynamic Virtual Keyboard
An interactive, on-screen keyboard guide that updates in real time:
*   Highlights the next key to press to assist beginners and touch typists.
*   Displays real-time keystroke active states.
*   Supports toggle controls to show/hide the virtual keyboard depending on user preference.

### ⚙️ Error Handling Modes
Fine-tune your training rules:
*   **Free Mode:** Typo errors are highlighted inline, allowing you to continue typing forward.
*   **Strict Mode:** Blocks cursor progression when a typo is made, enforcing immediate self-correction to build precise muscle memory.

### 📊 Real-Time Metrics & Advanced Results Analytics
*   **Live Dashboard:** Keeps track of raw WPM, net WPM, accuracy, and elapsed time.
*   **Results Summary:** Displays Net Speed (WPM), Accuracy (%), Raw Speed (WPM), and total errors once the test finishes.
*   **Interactive WPM Progress Graph:** Dynamically draws a custom SVG line chart tracking net WPM and raw WPM trends second-by-second to visualize your speed consistency.
*   **Historical Stats:** Keeps track of previous attempts to help monitor long-term improvement.

---

## 🛠️ Tech Stack

*   **Framework:** [Astro v7](https://astro.build/) - High performance content-focused web framework.
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Next-generation CSS utility engine for layout styling.
*   **Scripts:** Vanilla ES6+ TypeScript/JavaScript - Native DOM logic for speed, accuracy calculations, and dynamic SVG rendering.
*   **Fonts:** Geist Sans & Geist Mono - Monospaced and geometric sans-serif typefaces for a premium developer-first look.
*   **Host/Deployment:** Cloudflare Pages & Wrangler CLI.

---

## 📁 Project Structure

```text
civil-crater/
├── public/                  # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/              # Default images and static SVG vectors
│   ├── components/
│   │   ├── Header.astro     # Premium navigation bar with layout options
│   │   ├── Footer.astro     # Distraction-free footer with utility links
│   │   ├── TypingApp.astro  # Core application component (keyboard, typing loop, stats, SVG chart)
│   │   └── Welcome.astro    # Initial welcome interface
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML structure with Geist typography configuration
│   ├── pages/
│   │   ├── index.astro      # Primary entrypoint rendering the Typing App
│   │   ├── about.astro      # Project mission page
│   │   ├── contact.astro    # Simple feedback and contact page
│   │   ├── privacy.astro    # Privacy guidelines
│   │   └── terms.astro      # Terms and conditions page
│   ├── styles/
│   │   └── global.css       # Core Tailwind CSS imports and Vercel theme tokens
│   └── utils/
│       ├── words.js         # Word lists & vocabularies for all supported languages
│       └── code.js          # Code snippet datasets for JS, Python, and HTML
├── package.json             # Build commands and package dependencies
└── astro.config.mjs         # Astro project configurations
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your computer.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version `>= 22.12.0` is recommended).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/typingspeedpractice.git
   cd typingspeedpractice/civil-crater
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```
   Open `http://localhost:4321` in your browser to test the app locally.

### Production Build

To build a production-optimized version of the application:
```sh
npm run build
```
This builds static pages into the `./dist/` directory.

---

## ☁️ Deployment

This project is configured to deploy directly to **Cloudflare Pages**.

To deploy changes to production:
```sh
npm run deploy
```
*Note: This command builds the static files (`npm run build`) and uses Wrangler (`npx wrangler pages deploy dist`) to publish the site to the project name `typingspeedpractice`.*

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
