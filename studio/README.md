# Big Red Oak — Sanity Studio

This is the content editor BRO will use to manage the website (no developer needed — NR-03).
The schemas here mirror `src/data/content.ts` in the website, so wiring is 1:1.

## One-time setup (the account step only you can do)

1. Create a free Sanity account + project at **https://sanity.io** (sign in with Google or GitHub).
   - Note the **Project ID** (not secret) and **dataset** (use `production`).
2. Create an **API token**: Sanity project → API → Tokens → *Add token*.
   - **Viewer** token for the website to read content.
   - **Editor** token for the AI Content Agent to publish later.
3. Provide me the **Project ID** (paste in chat — it's not secret) and the **Viewer token**
   via the secure credential form (never paste the token in chat).

## Run the studio

```bash
cd studio
npm install
SANITY_STUDIO_PROJECT_ID=<your-project-id> npm run dev      # local editor at http://localhost:3333
SANITY_STUDIO_PROJECT_ID=<your-project-id> npm run deploy   # hosted at https://<name>.sanity.studio
```

Once the Project ID + read token are set in the website's env (Vercel), the site reads
content from Sanity automatically; until then it falls back to the local content in the repo.
