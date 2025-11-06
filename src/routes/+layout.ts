// src/routes/guides/+layout.ts
export const prerender = true;

// If you have dynamic guide pages, you might need this:
export async function load({ url }) {
  return {
    // This ensures the layout knows it's being prerendered
    status: 200
  };
}
