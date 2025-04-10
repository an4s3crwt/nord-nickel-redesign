import { redirect } from "next/navigation";

export default function PageRouter() {
  // Add any logic here to decide which page to redirect to.
  // For this example, we'll simply redirect to '/home'.
  redirect("/home");
}
