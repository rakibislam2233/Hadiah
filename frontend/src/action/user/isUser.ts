"use server";
import { authOptions } from "@/utils/authOptions/authOptions";
import { getServerSession } from "next-auth";
export const isUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
