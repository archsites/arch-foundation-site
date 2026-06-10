// Netlify Function entry that delegates to the TanStack Start SSR bundle.
//
// `npm run build` produces `dist/server/server.js`, which exports a default
// `{ fetch(request, env, ctx) => Response }` handler. We re-export that
// handler in Netlify Functions v2's modern shape: `default (req) => Response`.
//
// The `included_files` glob in netlify.toml ensures the entire dist/server
// directory (and its chunked asset files) ship into the function bundle.

import handler from "../../dist/server/server.js";

export default async (request, context) => {
  return handler.fetch(request, context, context);
};

export const config = {
  path: "/*",
  preferStatic: true,
};
