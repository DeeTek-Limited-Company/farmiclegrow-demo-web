import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  organization: z.string().min(2).max(120).optional(),
  role: z.enum(["buyer", "farmer", "agronomist", "partner", "other"]),
  message: z.string().min(10).max(2000),
  website: z.string().optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = leadSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid request", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}

