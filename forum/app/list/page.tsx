import { connectDB } from "@/utils/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <div className="bg-[rgb(249, 250, 255)] p-4">
      {result.map((v) => (
        <div
          key={v._id.toString()}
          className="bg-white p-6 mb-4 shadow-sm rounded-md"
        >
          <h4 className="text-xl font-semibold">{v.title}</h4>
          <p className="my-1 text-zinc-500">1월 1일</p>
        </div>
      ))}
    </div>
  );
}
