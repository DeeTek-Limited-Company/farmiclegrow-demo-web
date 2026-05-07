import { redirect } from "next/navigation";
import { getPortalUrl } from "@/lib/portal";

export default function DashboardRedirectPage() {
  redirect(`${getPortalUrl()}/`);
}
