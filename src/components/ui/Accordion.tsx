import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-mist bg-white shadow-[var(--shadow-card)]">
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-b border-mist last:border-b-0"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left font-heading text-base font-semibold text-navy sm:px-6">
            <span>{item.question}</span>
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-royal transition duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="px-5 pb-5 text-[0.95rem] leading-7 text-slate sm:px-6">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
