# Chayawat — My Portfolio

Completed from the existing LAB10 React + Vite project.

## Run locally
```sh
bun install
bun dev
```

## Verify
```sh
bun run lint
bun run build
bun run preview
```

## LAB10 components
Navbar, Hero (TypeAnimation + Tilt), Skills (react-icons), Portfolio, Number (CountUp + useInView), Footer.
The two concept cards are sample content, not completed projects. Replace them with your own work in `src/data.js`. Add your real GitHub URL and email in the same file to show contact links.

## Deploy to GitHub Pages
1. Create a GitHub repository and use its real URL below.
2. Optionally set `homepage` in package.json to `https://Maxhub05.github.io/Portfolio/`. The relative Vite base already supports repository subpaths; to follow the lab literally, set base to `/Portfolio/` in vite.config.js.
3. Run:
```sh
git init
git add .
git commit -m "Complete LAB10 portfolio"
git branch -M main
git remote add origin https://github.com/Maxhub05/Portfolio.git
git push -u origin main
bun run deploy
```
4. GitHub repository > Settings > Pages > Deploy from a branch > gh-pages > /(root).

Deployment requires your own GitHub repository and authentication. No remote repository was created or published automatically.

## GitHub profile (LAB10 part 1)
Create a public repository named exactly your GitHub username and add a README introducing yourself, your skills and contact details. Add the view counter with your real username:
```md
![](https://komarev.com/ghpvc/?username=Maxhub05&color=green)
```
