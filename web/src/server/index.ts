import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./appRouter";

const server = createHTTPServer({
  router: appRouter,
  responseMeta() {
    return {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "content-type, x-trpc-source",
      },
    };
  },
});

server.listen(3000);
