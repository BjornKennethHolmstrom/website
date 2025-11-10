// src/routes/[...404]/+page.ts
export const prerender = true;
export const ssr = false; // Optional: make it client-side only

export function load({ url }) {
    return {
        path: url.pathname
    };
}
