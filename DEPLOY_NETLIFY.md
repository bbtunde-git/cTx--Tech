Netlify deployment — required secrets and setup
=============================================

This repository includes a GitHub Actions workflow to build and deploy the site to Netlify on every push: `.github/workflows/netlify-deploy.yml`.

Required repository secrets
- NETLIFY_AUTH_TOKEN — a Netlify Personal Access Token with "Sites:deploy" scope.
- NETLIFY_SITE_ID — the Netlify Site ID for the target site.

How to get the values
- NETLIFY_AUTH_TOKEN: In Netlify go to "User Settings" → "Applications" → "Personal access tokens" → "New access token". Copy the generated token.
- NETLIFY_SITE_ID: Open your site dashboard in Netlify → "Site settings" → "Site details" (or "Site information") → copy the "Site ID".

How to add the secrets to GitHub
1. Go to the repository on GitHub.
2. Settings → Secrets and variables → Actions → "New repository secret".
3. Create two secrets named exactly `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` and paste the corresponding values.

Workflow notes
- The workflow runs on pushes to `main`, installs dependencies with `npm ci`, runs `npm run build` and deploys the `build` directory using `netlify-cli`.
- If your build output directory differs, update the workflow's `--dir` argument accordingly.
- Large files (>50MB) should be moved out of git history or managed with Git LFS — GitHub will warn and reject very large files.

Example manual deploy (locally)
```bash
# build the app
npm ci
npm run build

# deploy with netlify CLI (install via `npm i -g netlify-cli` if needed)
npx netlify-cli deploy --dir=build --prod --site <SITE_ID> --auth <PERSONAL_ACCESS_TOKEN>
```

If you want, I can add these instructions to `README.md` instead, or create a short PR that also documents adding the secrets in the repo settings.
