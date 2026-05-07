import { redirect } from "next/navigation";
import { getPortalUrl } from "@/lib/portal";

export default function SignupRedirectPage() {
  redirect(`${getPortalUrl()}/buyer/signup`);
}
