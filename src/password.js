export const correctHash =
  "720f3315980c21b7a41fea4c7404538bbe306af23c9e42f5f5b1b8a786664089";

export async function sha256(str) {
  const buffer = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
