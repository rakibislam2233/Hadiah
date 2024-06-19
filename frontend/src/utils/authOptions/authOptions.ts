import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account }) {
  //     const { name, email, image } = user;
  //     try {
  //       const res = await fetch(
  //         `${process.env.BACKEND_URL}/api/v1/auth/oauth`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             name,
  //             email,
  //             profileImage: image,
  //             provider: account.provider,
  //           }),
  //         }
  //       );

  //       const data = await res.json();
  //       if (data?.success === false && data?.message === "User already exists"){
  //         console.log(data?.data)
  //       }
  //         return true;
  //     } catch (error) {
  //       console.error(error);
  //       return true;
  //     }
  //   },
  //   async jwt({ token, user }) {
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     return session;
  //   },
  // },
  secret: process.env.NEXT_AUTH_SECRET,
};
