export const correctHash =
  "669da9b37d25b71f7293cd9e2b26a8ff1069204a32e1a196f9220dc1dbe6590e";

export async function sha256(str) {
  const buffer = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
