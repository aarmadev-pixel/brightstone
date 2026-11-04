import { PhoneIncoming } from "lucide-react";
import { heroPreviewLines } from "@/data/demo-scripts";
import { cn } from "@/lib/cn";

export function ReceptionistPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b1628] p-4 shadow-[0_24px_80px_rgb(0_0_0_/_0.35)] sm:p-5",
        className,
      )}
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/60 to-transparent" />
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-heading text-sm font-semibold text-white">
            Brightstone Reception
          </p>
          <p className="mt-0.5 text-xs text-slate-400">
            Product preview · fictional demonstration data
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
          Simulated
        </span>
      </div>
      <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-royal/20 text-sky">
            <PhoneIncoming className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">
              Incoming Call
            </p>
            <p className="mt-1 text-sm text-white">Boiler service enquiry</p>
            <p className="text-xs text-slate-400">Demo customer · 08:42</p>
          </div>
        </div>
        <ul className="mt-5 space-y-3">
          {heroPreviewLines
            .filter((line) => line.speaker !== "system")
            .map((line) => (
              <li
                key={line.text}
                className={cn(
                  "max-w-[92%] rounded-2xl px-3.5 py-3 text-sm leading-6",
                  line.speaker === "customer"
                    ? "ml-auto bg-royal text-white"
                    : "bg-white/8 text-slate-100",
                )}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide opacity-70">
                  {line.label}
                </p>
                <p className="mt-1">“{line.text}”</p>
              </li>
            ))}
        </ul>
        <div className="mt-5 rounded-2xl border border-sky/20 bg-sky/8 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">
            Appointment Request Captured
          </p>
          <p className="mt-2 font-heading text-sm font-semibold text-white">
            Annual boiler service
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Preferred: Tuesday morning · Access via side gate
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Awaiting team confirmation · not a live booking
          </p>
        </div>
      </div>
    </div>
  );
}
