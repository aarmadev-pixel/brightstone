export function DraftNotice({ title }: { title: string }) {
  return (
    <div
      className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950"
      role="note"
    >
      <p className="font-heading font-semibold">{title}</p>
      <p className="mt-1">
        This page is draft information for internal review. It must be checked
        by the business before public launch and should not be treated as a
        finished legal policy.
      </p>
    </div>
  );
}
