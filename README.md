## AbiskarAI Portfolio

Next.js + Tailwind site inspired by the S16 Share agent orchestration. Visitors can explore AbiskarAI services, review the Multimodal Gemma-270M case study, and chat with a Gemini-powered concierge.

### Tech Stack

- Next.js App Router (TypeScript)
- Tailwind CSS 4 design tokens + custom glassmorphism theme
- Gemini 1.5 Pro via `@google/generative-ai`

### Quick Start

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000.

### Environment Variables

Create `.env.local` at project root:

```
GEMINI_API_KEY=your_google_generative_ai_key
```

Gemini keys are available from https://aistudio.google.com. The API route returns helpful errors if the key is missing.

### Content Management

- Agency profile, services, and process: `src/data/agency.ts`
- Project case studies: `src/data/projects.ts`
- Agent grounding prompt: `src/data/agentContext.ts`
- UI sections: `src/components/*.tsx`

Update these files and restart the dev server when adjusting structure.

### Agent API

`src/app/api/agent/route.ts` wraps Gemini 1.5 Pro with a curated system prompt. The frontend chat widget lives in `src/components/ChatWidget.tsx`.

### Deployment

1. Set `GEMINI_API_KEY` in your hosting provider.
2. Run `npm run build`.
3. Deploy to Vercel or a Node.js platform with Edge/Serverless support.

For OG previews the project ships `src/app/opengraph-image.tsx`.
