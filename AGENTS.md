<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- GitHub Pages uses a dedicated `GITHUB_PAGES=true` static prerender build with matching Vite/router base paths; default builds stay compatible with Lovable hosting.
- Pages deployment prepares only the static client in `dist` and materializes certificate asset pointers at build time, because GitHub Pages cannot serve SSR or proxy Lovable assets.
