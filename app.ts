import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const server = serve({ port: 8000 });

console.log("Listening on port 8000.");

for await (const req of server) {
  req.respond({ body: "Hello from the server" });
}