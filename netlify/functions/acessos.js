import { getStore } from "@netlify/blobs";

const STORE = "vocacional-acessos";
const KEY = "total";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export default async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  if (request.method !== "GET" && request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: cors,
    });
  }

  try {
    const store = getStore(STORE);
    const raw = await store.get(KEY);
    const current = parseInt(raw ?? "0", 10) || 0;

    if (request.method === "POST") {
      const count = current + 1;
      await store.set(KEY, String(count));
      return new Response(JSON.stringify({ count }), { status: 200, headers: cors });
    }

    return new Response(JSON.stringify({ count: current }), { status: 200, headers: cors });
  } catch {
    return new Response(JSON.stringify({ count: 0 }), { status: 200, headers: cors });
  }
};
