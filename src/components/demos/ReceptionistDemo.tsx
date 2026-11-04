"use client";

import { useMemo, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { demoScenarios, type DemoScenario } from "@/data/demo-scripts";
import { cn } from "@/lib/cn";

/**
 * Scripted demonstration only.
 * Designed so a real voice/telephony integration can later drive the same
 * scenario, step index, and captured-details panel without rewriting the UI.
 */
type DemoState = {
  scenarioId: string;
  stepIndex: number;
};

export function ReceptionistDemo() {
  const [state, setState] = useState<DemoState>({
    scenarioId: demoScenarios[0].id,
    stepIndex: 0,
  });

  const scenario = useMemo(
    () => demoScenarios.find((item) => item.id === state.scenarioId) ?? demoScenarios[0],
    [state.scenarioId],
  );

  const visibleLines = scenario.lines.slice(0, state.stepIndex);
  const complete = state.stepIndex >= scenario.lines.length;
  const started = state.stepIndex > 0;

  function selectScenario(next: DemoScenario) {
    setState({ scenarioId: next.id, stepIndex: 0 });
  }

  function playNext() {
    setState((current) => ({
      ...current,
      stepIndex: Math.min(current.stepIndex + 1, scenario.lines.length),
    }));
  }

  function restart() {
    setState((current) => ({ ...current, stepIndex: 0 }));
  }

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-mist bg-white shadow-[var(--shadow-card)]">
      <div className="border-b border-mist bg-offwhite px-5 py-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">
          Scripted simulation
        </p>
        <p className="mt-1 text-sm text-slate">
          This is not a live telephone call. Press play to step through an
          example conversation.
        </p>
      </div>
      <div className="grid gap-0 lg:grid-cols-[240px_1fr]">
        <div className="min-w-0 border-b border-mist p-4 lg:border-b-0 lg:border-r">
          <p className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate">
            Sample scenarios
          </p>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {demoScenarios.map((item) => {
              const selected = item.id === scenario.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectScenario(item)}
                  className={cn(
                    "min-w-[180px] rounded-xl border px-3 py-3 text-left transition lg:min-w-0",
                    selected
                      ? "border-royal bg-royal/8 text-navy"
                      : "border-mist bg-white text-slate hover:border-royal/30",
                  )}
                  aria-pressed={selected}
                >
                  <span className="block font-heading text-sm font-semibold">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate">
                    {item.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-heading text-lg font-semibold text-navy">
                {scenario.title}
              </p>
              <p className="text-sm text-slate">
                Step {Math.min(state.stepIndex, scenario.lines.length)} of{" "}
                {scenario.lines.length}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={complete ? restart : playNext}
                aria-label={
                  complete
                    ? "Restart demonstration"
                    : started
                      ? "Play next line"
                      : "Start demonstration"
                }
              >
                {complete ? (
                  <RotateCcw className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                {complete ? "Restart" : started ? "Play next line" : "Play"}
              </Button>
            </div>
          </div>
          <div
            className="mt-5 min-h-[280px] space-y-3 rounded-2xl bg-offwhite p-4"
            aria-live="polite"
          >
            {!started ? (
              <p className="text-sm leading-6 text-slate">
                Choose a scenario, then press play to reveal each line of the
                simulated conversation.
              </p>
            ) : null}
            {visibleLines.map((line, index) => (
              <div
                key={`${scenario.id}-${index}`}
                className={cn(
                  "max-w-[92%] rounded-2xl px-3.5 py-3 text-sm leading-6",
                  line.speaker === "customer" && "ml-auto bg-royal text-white",
                  line.speaker === "receptionist" && "bg-white text-navy shadow-sm",
                  line.speaker === "system" &&
                    "mx-auto max-w-full bg-navy text-center text-slate-200",
                )}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide opacity-70">
                  {line.label}
                </p>
                <p className="mt-1">{line.text}</p>
              </div>
            ))}
          </div>
          {complete ? (
            <div className="mt-4 rounded-2xl border border-sky/30 bg-sky/8 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-royal">
                {scenario.captured.title}
              </p>
              <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                {scenario.captured.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs text-slate">{item.label}</dt>
                    <dd className="font-heading text-sm font-semibold text-navy">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
