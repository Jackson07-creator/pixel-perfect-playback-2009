# Pixel Perfect Playback

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8a2371cb-a463-4eec-b6af-95747e82a098).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` installs dependencies with npm,
tests routing, builds the static portfolio, and deploys `dist` on pushes to
`main` (or a manual Actions run).

In `Jackson07-creator/pixel-perfect-playback-2009`, open **Settings → Pages**
and select **GitHub Actions** as the source. GitHub Pages must be available for
the repository's visibility and your GitHub plan.

The deployed URL is:
https://jackson07-creator.github.io/pixel-perfect-playback-2009/

The workflow sets `GITHUB_PAGES=true` to use the repository subpath and
prerender the portfolio. It then packages only static client files in `dist`,
including all original certificate images and PDFs downloaded from the current
asset host. The workflow fails rather than deploying missing certificates.
Normal Lovable preview and publishing continue to use `/`.

Lovable manages commits and repository synchronization through the connected
Git integration. Check the Git panel and the repository's Actions tab to
confirm synchronization and the first deployment; adding this workflow alone
does not confirm a successful live deployment.
