export function CreateAuthToken(username: string, password: string): string {
  return Buffer.from(`${username}:${password}`).toString("base64");
}
