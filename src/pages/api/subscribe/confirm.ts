import type { APIRoute } from "astro";
import { initSupubaseClient } from "~/utils/supubase";
import { isEmail } from "~/utils/verify";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { token } = body;
  const email = atob(token.slice(2, token.length - 2));
  console.log(email);
  if (isEmail(email)) {
    // do something with the email
    const supabase = initSupubaseClient();
    // check if the email exists in the database
    const { data, error } = await supabase
      .from("subscribers")
      .select()
      .eq("email", email);
    if (error) {
      throw new Error(error.message);
    }
    if (data.length === 0) {
      return new Response("Email not found", { status: 404 });
    }
    const { error: operationError } = await supabase
      .from("subscribers")
      .update({ is_confirmed: true })
      .eq("email", token);
    if (operationError) {
      throw new Error(operationError.message);
    }
    return new Response(
      JSON.stringify({
        message: "Email confirmed",
      }),
      { status: 200 }
    );
  } else {
    return new Response("Invalid email", { status: 400 });
  }
};
