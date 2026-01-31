export type Roles = "admin" | "member";
export type AuthSession = {
  sessionClaims?: { metadata?: { role?: Roles; [k: string]: unknown } };
};
