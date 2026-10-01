import type { MouseEvent } from "react";
import { Magnetic } from "./Interactive";
import { useCanAnimate, useInView } from "@/lib/use-anime";
import {
  AdminAltIcon,
  BigDataIcon,
  ChartNetworkIcon,
  ChartUserIcon,
  ChipBrainIcon,
  ComputerIcon,
  ScienceAiIcon,
} from "./CircuitIcon";

interface CapItem {
  key: string;
  label: string;
  Icon: (props: { on: boolean; label: string }) => React.JSX.Element;
}

const ITEMS: CapItem[] = [
  { key: "comp", label: "Languages", Icon: ComputerIcon },
  { key: "big", label: "Backend", Icon: BigDataIcon },
  { key: "sci", label: "GenAI & LLM", Icon: ScienceAiIcon },
  { key: "net", label: "Vector & Search", Icon: ChartNetworkIcon },
  { key: "chip", label: "Data & Infra", Icon: ChipBrainIcon },
  { key: "usr", label: "Cloud & Security", Icon: ChartUserIcon },
  { key: "admin", label: "Tools", Icon: AdminAltIcon },
];

/** Cursor-tracked spotlight position (ProjectCard pattern, no re-render). */
function trackSpot(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--gx", (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
  el.style.setProperty("--gy", (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
}

/**
 * Capability icon strip above the mind map. Each icon sits in the
 * portfolio's <Magnetic> wrapper (cursor pull + elastic release) and
 * plays its own hover choreography via .cap-<key>:hover rules.
 */
export function CapabilityIcons() {
  const canAnimate = useCanAnimate();
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={
        "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10 " +
        (canAnimate && !inView ? "circuit-paused" : "")
      }
      role="list"
      aria-label="Capability areas"
    >
      {ITEMS.map(({ key, label, Icon }) => (
        <div key={key} role="listitem" className="w-full">
          <Magnetic strength={0.3}>
            <figure
              className={
                "cap-item cap-" + key + " group relative w-full h-[128px] rounded-2xl border border-border/60 " +
                "bg-card p-3 text-center overflow-hidden flex flex-col items-center justify-center " +
                "hover:border-primary/60 transition-colors duration-300 cursor-default"
              }
              title={label}
              onMouseMove={trackSpot}
            >
              <span
                aria-hidden="true"
                className="cap-spot pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative block shrink-0 w-12 h-12 mb-2">
                <Icon on={canAnimate} label={label} />
              </span>
              <figcaption className="mono-label relative text-[10px] leading-tight text-muted-foreground group-hover:text-primary transition-colors line-clamp-2 h-[24px] flex items-center justify-center">
                {label.toUpperCase()}
              </figcaption>
            </figure>
          </Magnetic>
        </div>
      ))}
    </div>
  );
}
