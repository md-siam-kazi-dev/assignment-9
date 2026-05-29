import { createAuthClient } from "better-auth/react"
import { jwtClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://assignment-9-bvgd.vercel.app",
    fetchOptions: {
    credentials: "include",
     plugins: [
    jwtClient() 
  ]
  },
})

export const { signIn, signUp, useSession } = createAuthClient()