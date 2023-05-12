import { connectDB } from "@/utils/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();

  return <div className="min-h-screen">hi</div>;
}
