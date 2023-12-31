import Signup from "@components/Signup";

import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <Signup />;
};

export default page;
