import FormNewPost from "@/components/FormNewPost";
import { getCurrentUser } from "@/lib/session";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto my-5">
      <FormNewPost />
    </main>
  );
}
