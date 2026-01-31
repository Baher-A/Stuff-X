export type Roles = "admin" | "member";

declare global {
  namespace Clerk {
    interface UserPublicMetadata {
      role?: Roles;
    }
  }
}

declare module "@clerk/backend" {
  interface JwtSessionClaims {
    metadata?: {
      role?: Roles;
    };
  }
}
