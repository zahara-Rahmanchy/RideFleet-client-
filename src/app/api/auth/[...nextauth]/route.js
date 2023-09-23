import {connectMongoDB} from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";
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
  ],
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
