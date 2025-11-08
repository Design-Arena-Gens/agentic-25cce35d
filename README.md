## Agentic Atlas

Agentic Atlas is a conceptual workspace for cross-functional teams to explore insights, orchestrate AI-powered workflows, and launch production-ready runbooks. The experience is delivered as a modern single-page site highlighting modular product tracks, operating rituals, and knowledge resources.

### 🛠 Stack
- [Next.js 14](https://nextjs.org) with the App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4 preview layer](https://tailwindcss.com) for styling
- [Heroicons](https://heroicons.com/) for iconography

### 🚀 Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to explore the experience.

### ✅ Quality Gates
```bash
npm run lint
npm run build
```
`npm run build` will confirm the app is production-ready before deployment.

### 📦 Deployment
The project is optimized for Vercel. After verifying locally, deploy with:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-25cce35d
```

### 📁 Project Highlights
- Hero section with live metrics, CTA, and a Pathfinder sprint card.
- Modular product tracks detailing Sensemaking, Scenario, and Launch spaces.
- Operating ritual timeline outlining the end-to-end delivery cadence.
- Resource hub and FAQ with interactive accordions.
- Custom Open Graph artwork (`public/og-cover.svg`) for rich link previews.

Feel free to build on top of Agentic Atlas—extend the components, connect APIs, and adapt the narrative for your own agentic operating system.
