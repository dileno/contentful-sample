import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Check the secret and next parameters
  // This secret should be stored in your environment variables
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  // Redirect to the homepage
  redirect("/");
}
