// import type { MiddlewareHandler } from "astro";

// export const onRequest: MiddlewareHandler = async (context, next) => {
//   const { request } = context;
  
//   // Log incoming request
//   console.log("=== SSR Request ===");
//   console.log("URL:", request.url);
//   console.log("Method:", request.method);
//   console.log("Headers:", Object.fromEntries(request.headers.entries()));
  
//   // Log query parameters if present
//   const url = new URL(request.url);
//   if (url.search) {
//     console.log("Query Params:", Object.fromEntries(url.searchParams.entries()));
//   }
  
//   const startTime = Date.now();
//   const response = await next();
//   const duration = Date.now() - startTime;
  
//   // Log response
//   console.log("=== SSR Response ===");
//   console.log("Status:", response.status);
//   console.log("Status Text:", response.statusText);
//   console.log("Response Headers:", Object.fromEntries(response.headers.entries()));
//   console.log("Duration:", `${duration}ms`);
//   console.log("===================\n");
  
//   return response;
// };


