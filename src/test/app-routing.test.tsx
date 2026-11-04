import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches the portfolio under the GitHub Pages repository path", () => {
    const router = createRouter({
      routeTree,
      basepath: "/pixel-perfect-playback-2009/",
      history: createMemoryHistory({ initialEntries: ["/pixel-perfect-playback-2009/"] }),
      context: { queryClient: new QueryClient() },
    });
    expect(router.latestLocation.pathname).toBe("/");
    expect(router.matchRoutes(router.latestLocation).at(-1)?.routeId).toBe("/");
    expect(router.buildLocation({ to: "/" }).publicHref).toBe("/pixel-perfect-playback-2009/");
  });

  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
