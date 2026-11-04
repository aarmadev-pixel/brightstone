import { registerHooks } from "node:module";

// Resolve the application's alias without changing production imports or mocking Next.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(new URL(`../src/${specifier.slice(2)}.ts`, import.meta.url).href, context);
    }
    if (specifier === "next/server") return nextResolve("next/server.js", context);
    if (specifier === "./enquiry") {
      return nextResolve(new URL("./enquiry.ts", context.parentURL).href, context);
    }
    return nextResolve(specifier, context);
  },
});
