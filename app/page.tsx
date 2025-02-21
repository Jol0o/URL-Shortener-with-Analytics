import { userCreateUserAction } from "@/lib/user/application/controllers/user.create-user.action";
import Header from "@/components/shared/Header";
import UserGrid from "@/components/user/UserGrid";
import { currentUser } from '@clerk/nextjs/server'
import { userFetchAllUserAction } from './../lib/user/application/controllers/user.fetch-all-users.action';
import { User } from "@/lib/user/domain/entities/user";

export default async function Home() {
  const user = await currentUser();
  let userList: User[] = [];

  if (user) {
    try {
      await userCreateUserAction(user.id);
      const { data } = await userFetchAllUserAction();
      userList = data || [];
    } catch (err) {
      console.error("Error creating user:", err);
    }
  } else {
    console.log("No user is logged in");
    return
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Chat with People</h1>
        <UserGrid data={userList} id={user.id} />
      </main>
    </div>
  );
}