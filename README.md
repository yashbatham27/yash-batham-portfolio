# Yash Batham - Portfolio

A high-performance, monochrome cyberpunk-themed personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Overview

This project is a single-page application (SPA) designed to showcase a senior frontend developer's skills and experience. It features a distinct visual style inspired by cyberpunk aesthetics, terminal interfaces, and retro CRT displays. The UI relies heavily on monochrome contrast, monospace typography, and subtle motion effects to create an immersive "system" interface.

## 🛠 Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with custom config for colors and patterns)
- **Animations:** Framer Motion & CSS Keyframes
- **Icons:** Lucide React
- **Fonts:** JetBrains Mono (Google Fonts)

## 📂 Project Structure

```text
/
├── components/
│   ├── Layout.tsx          # Main wrapper with global effects (CRT, Rain, Overlay)
│   ├── sections/           # Page sections (Hero, About, Experience, etc.)
│   └── ui/                 # Reusable UI components (GlitchText, CyberFrame, etc.)
├── constants.ts            # Static content data for the portfolio
├── index.html              # Entry HTML, global styles, and CSS keyframes
├── index.tsx               # React entry point
├── types.ts                # TypeScript interfaces for data models
└── App.tsx                 # Main application composition
```

## 🧩 Component Details

### UI Components (`components/ui/`)

*   **`CyberFrame.tsx`**: A decorative container component that wraps content in a technical border with corner markers. It supports an optional `label` (e.g., "Biography.log") to give it a "heads-up display" (HUD) aesthetic.
*   **`GlitchText.tsx`**: Applies a CSS-based "glitch" animation to text. It uses `data-text` attributes and CSS `clip-path` animations defined in `index.html` to create a distorted signal effect.
*   **`MatrixRain.tsx`**: A `canvas`-based background effect. It renders falling character trails similar to "The Matrix" digital rain but optimized for a subtle white/monochrome palette to avoid distracting from the content.
*   **`Typewriter.tsx`**: A text component using Framer Motion to simulate a terminal typing effect. It supports animating character-by-character or segment-by-segment.
*   **`ScrollToTop.tsx`**: A floating navigation component that appears after scrolling down, providing a smooth return to the top of the "terminal" interface with cyberpunk hover effects.

### Page Sections (`components/sections/`)

*   **`Hero.tsx`**: The landing view. Features the main "System.Identity.User" context, a large glitch-animated name, and an animated scroll indicator.
*   **`About.tsx`**: Displays the user's biography and education. It utilizes `CyberFrame` to organize text and `Typewriter` for engaging text presentation.
*   **`Skills.tsx`**: An interactive "Skills Terminal". It features a sidebar for selecting skill categories (Frontend, Backend, etc.) and a main area that lists skills with a hover-triggered glowing border effect.
*   **`Experience.tsx`**: A vertical timeline component visualizing work history. It connects entries with a line and uses typewriter effects for job descriptions.
*   **`Projects.tsx`**: A grid layout displaying project cards wrapped in `CyberFrames`.
*   **`Contact.tsx`**: The footer section ("INITIATE_CONTACT") providing large interactive buttons for Email and LinkedIn.

### Layout (`components/Layout.tsx`)

The `Layout` component acts as the shell for the application, providing the "Cyberpunk Monitor" atmosphere:

1.  **`startup-overlay`**: A full-screen `div` that runs a 2-second CSS animation (`startup-flicker`) on mount, simulating a CRT monitor powering on.
2.  **`scanlines`**: A fixed overlay with a linear gradient background to create horizontal scanlines.
3.  **`crt-flicker`**: A subtle opacity animation that runs infinitely to simulate screen refresh flicker.
4.  **`MatrixRain`**: The background canvas layer.
5.  **Fixed UI**: Renders "HUD" elements like GPS coordinates and "ONLINE" status in the top right corner.
6.  **`ScrollToTop`**: Interactive navigation element managed by scroll position.

## 🎨 Global Styles & Effects (`index.html`)

The `index.html` file is crucial for the visual effects:

*   **Global CSS**: Defines the black background and white text.
*   **Keyframes**:
    *   `startup-flicker`: Controls the initial boot sequence (black screen -> flash -> flicker -> visible).
    *   `flicker`: Controls the constant CRT screen opacity fluctuation.
    *   `glitch-anim-1`: Controls the skew and clip-path properties for the text glitch effect.
*   **Scrollbar**: Customizes the Webkit scrollbar to be blocky and monochrome.

## 💾 Data Management

*   **`constants.ts`**: Contains all the hardcoded content (Job history, project details, skills lists) to keep components purely presentational.
*   **`types.ts`**: Defines TypeScript interfaces (`Experience`, `Project`, `SkillCategory`) to ensure data consistency throughout the app.
