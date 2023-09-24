import {connectMongoDB} from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import {signIn} from "next-auth/react";
import axios from "axios";
import {useRouter} from "next/navigation";
// const router = useRouter();
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const {email, password} = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({email});

          if (!user) {
            return null;
          }

          const passwordmatch = await bcrypt.compare(password, user.password);

          if (!passwordmatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SEC,
    }),
  ],
  callbacks: {
    async signIn({user, account}) {
      const {email} = user;
      if (account.provider === "google") {
        try {
          await connectMongoDB();
          const userExits = await User.findOne({email});
          if (!userExits) {
            const response = await axios.post(
              "https://ride-fleet-client-l6a9.vercel.app/api/SignUp",
              {
                name: user.name,
                email: user.email,
                password: "",
              }
            );
            if (response.status === 200) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
  session: {
    stragegy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SEC,
  pages: {
    signIn: "/Login",
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
