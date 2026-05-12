'use client';

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const leadSchema = z.object({
  name: z.string().min(2, "Enter your name").max(100),
  email: z.string().email("Enter a valid email").max(254),
  organization: z.string().min(2, "Enter your organization").max(120).optional().or(z.literal("")),
  role: z.enum(["buyer", "farmer", "agronomist", "partner", "other"]),
  message: z.string().min(10, "Tell us what you need").max(2000),
  website: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function RequestDemoForm() {
  const [mounted, setMounted] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      role: "buyer",
      message: "",
      website: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitError(null);

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.message || "Submission failed");
    }

    setIsSubmitted(true);
  };

  if (!mounted) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 h-[580px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-left">
        <div className="text-xs font-black uppercase tracking-widest text-primary">Request received</div>
        <div className="mt-3 text-2xl font-black text-white tracking-tight">We will reach out shortly.</div>
        <p className="mt-4 text-sm font-medium text-slate-300 leading-relaxed">
          We typically respond with next steps and a demo link. If you are a buyer, you can also create an account to explore the portal.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button asChild className="rounded-2xl h-12 font-black bg-primary hover:bg-primary/90 text-white">
            <a href="/signup">Create Buyer Account</a>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-2xl h-12 font-black border-2 border-white/10 text-white hover:bg-white/5"
            onClick={() => {
              setIsSubmitted(false);
              form.reset();
            }}
          >
            Submit Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      suppressHydrationWarning
      className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-left"
      onSubmit={form.handleSubmit(async (values) => {
        try {
          await onSubmit(values);
        } catch (e) {
          setSubmitError(e instanceof Error ? e.message : "Submission failed");
        }
      })}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-300">
            Full Name
          </Label>
          <Input
            id="name"
            className="mt-2 h-12 rounded-2xl bg-slate-950/30 border-white/10 text-white placeholder:text-slate-500"
            placeholder="Your name"
            {...form.register("name")}
          />
          {form.formState.errors.name ? (
            <div className="mt-2 text-xs font-bold text-red-200">{form.formState.errors.name.message}</div>
          ) : null}
        </div>

        <div>
          <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            className="mt-2 h-12 rounded-2xl bg-slate-950/30 border-white/10 text-white placeholder:text-slate-500"
            placeholder="you@company.com"
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <div className="mt-2 text-xs font-bold text-red-200">{form.formState.errors.email.message}</div>
          ) : null}
        </div>

        <div>
          <Label htmlFor="organization" className="text-xs font-black uppercase tracking-widest text-slate-300">
            Organization
          </Label>
          <Input
            id="organization"
            className="mt-2 h-12 rounded-2xl bg-slate-950/30 border-white/10 text-white placeholder:text-slate-500"
            placeholder="Company / Cooperative"
            {...form.register("organization")}
          />
          {form.formState.errors.organization ? (
            <div className="mt-2 text-xs font-bold text-red-200">{form.formState.errors.organization.message}</div>
          ) : null}
        </div>

        <div>
          <Label className="text-xs font-black uppercase tracking-widest text-slate-300">I am a</Label>
          <div className="mt-2">
            <Select
              value={form.watch("role")}
              onValueChange={(value) => form.setValue("role", value as LeadFormValues["role"], { shouldValidate: true })}
            >
              <SelectTrigger className="h-12 rounded-2xl bg-slate-950/30 border-white/10 text-white">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buyer">Buyer</SelectItem>
                <SelectItem value="farmer">Farmer</SelectItem>
                <SelectItem value="agronomist">Agronomist</SelectItem>
                <SelectItem value="partner">Partner</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {form.formState.errors.role ? (
            <div className="mt-2 text-xs font-bold text-red-200">{form.formState.errors.role.message}</div>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-300">
            What do you need?
          </Label>
          <Textarea
            id="message"
            className="mt-2 min-h-[120px] rounded-2xl bg-slate-950/30 border-white/10 text-white placeholder:text-slate-500"
            placeholder="Tell us your crops, volumes, destination, and what you want to see in the demo."
            {...form.register("message")}
          />
          {form.formState.errors.message ? (
            <div className="mt-2 text-xs font-bold text-red-200">{form.formState.errors.message.message}</div>
          ) : null}
        </div>
      </div>

      <input className="hidden" tabIndex={-1} autoComplete="off" {...form.register("website")} />

      {submitError ? <div className="mt-4 text-xs font-bold text-red-200">{submitError}</div> : null}

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          className="rounded-2xl h-12 font-black bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : "Request Demo"}
        </Button>
        <Button asChild variant="outline" className="rounded-2xl h-12 font-black border-2 border-white/10 text-white hover:bg-white/5">
          <a href="/signup">Create Buyer Account</a>
        </Button>
      </div>
    </form>
  );
}

