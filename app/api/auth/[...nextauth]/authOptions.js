import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const authOptions = NextAuth({
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENTID,
      clientSecret:process.env.GOOGLE_CLIENTSECRET
    })
    ],
  secret:process.env.NEXTAUTH_SECRET
})

export default authOptions