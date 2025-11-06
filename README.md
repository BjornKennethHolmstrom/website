# Personal Hub: bjornkennethholmstrom.org

This repository contains the source code for `bjornkennethholmstrom.org`, the personal and professional hub for Björn Kenneth Holmström.

Its purpose is to serve as a clean, fast, and integrated "nav" (lobby) that visually presents and links to a wider ecosystem of projects, writings, and research. It acts as the central map for a portfolio of ideas dedicated to conscious and systemic development.

This site replaces a previous WordPress blog and serves as the primary digital identity and entry point.

## 🧭 Guiding Principles

* **Minimalist & Fast:** The hub itself is radically simple. Its design goal is to be an invisible, fast-loading "map" that directs users to the projects themselves. The complexity lives in the projects, not the portal.
* **Technically Coherent:** Built with the same modern, static-first (SSG) philosophy as its sibling projects (e.g., SvelteKit, Tailwind CSS).
* **No Tracking, No Backend:** Reflects a "no-tracking, privacy-first" ethos. This is a static site without a database.
* **Integrated Branding:** Uses the same typography (Inter) and color palette (Amber/Slate) as the physical business card to create a seamless physical-to-digital experience.

## 🛠️ Tech Stack

* **Framework:** [SvelteKit](https://kit.svelte.dev/)
* **Deployment:** Static Site Generation (SSG) via `@sveltejs/adapter-static`
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Typography:** [Inter](https://fonts.google.com/specimen/Inter)
* **Hosting:** GitHub Pages (eller liknande statisk värd)

## 🌐 The Ecosystem

This hub serves as the primary entry point for the following interconnected projects:

* **Planetary & Societal Systems:**
    * [Global Governance Frameworks](https://globalgovernanceframeworks.org)
    * [Fjärilspartiet (The Butterfly Party)](https://...)
* **The Awareness Quartet:**
    * [Spiralize.org](https://spiralize.org)
    * [Nondualize.org](https://nondualize.org)
    * [Communize.org](https://communize.org)
    * [Universalize.org](https://universalize.org)
* **Personal Spaces:**
    * [Spiritualized.org](https://spiritualized.org)
    * Blog & Essays (planeras att migreras hit från WordPress)
    * Books & Whitepapers

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation & Development

```bash
# Clone the repository
git clone [https://github.com/](https://github.com/)[YourGitHubUsername]/bjornkennethholmstrom.org.git
cd bjornkennethholmstrom.org

# Install dependencies
npm install

# Start the development server
# (Fungerar på http://localhost:5173)
npm run dev
