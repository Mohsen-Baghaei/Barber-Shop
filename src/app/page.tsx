import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/barbers");
  return <main className="w-full p-5"></main>;
}
