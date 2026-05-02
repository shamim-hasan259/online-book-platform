"use client";

import { useSession } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";

const Profile = () => {
  const { data } = useSession();
  const user = data?.user;
  return (
    <section className="h-[60vh] flex flex-col items-center justify-center">
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5 ">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <Link href="/edit-profile">
          <Button className="bg-linear-to-l from-purple-500 to-purple-800">
            Edit Profile
          </Button>
        </Link>
      </Card>
    </section>
  );
};

export default Profile;
