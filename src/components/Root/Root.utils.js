import { redirect } from "react-router-dom";

export async function searchAction({ request }) {
  const formData = await request.formData();
  const query = Object.fromEntries(formData).game;
  return redirect(`/search/${query}`);
}