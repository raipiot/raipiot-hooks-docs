import type { APIRoute } from "astro";
import { initSupubaseClient } from "~/utils/supubase";

export const POST: APIRoute = async ({ request }) => {
  const { token } = await request.json();
  const email = atob(token.slice(2, token.length - 2));
  const supabase = initSupubaseClient();
  const { error } = await supabase
    .from("subscribers")
    .delete()
    .match({ email });
  if (error) {
    console.log(error);
    return new Response("operation error", { status: 500 });
  }
  return new Response(JSON.stringify({ message: "Unsubscribed" }));
};
