import { redirect } from "next/navigation";
import { getPortalUrl } from "@/lib/portal";

export default function BuyerRedirectPage() {
  redirect(`${getPortalUrl()}/buyer`);
}
