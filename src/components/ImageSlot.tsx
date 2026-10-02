import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { showImagePlaceholders } from "@/data/portfolio";

/**
 * Image slot.
 * - If the file exists in /public, the image is displayed (next/image, optimized).
 * - Otherwise a placeholder shows where the image goes and which file to add.
 *   Set `showImagePlaceholders = false` in src/data/portfolio.ts to hide empty slots.
 */
export default function ImageSlot({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  hint,
  compact = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  hint?: string;
  compact?: boolean;
}) {
  const exists = !!src && fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\/+/, "")));

  if (exists) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src!} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  if (!showImagePlaceholders) return null;

  return (
    <div
      className={`relative grid place-items-center overflow-hidden border-2 border-dashed border-line bg-paper text-center text-muted ${className}`}
      role="img"
      aria-label={`Image placeholder: ${alt}`}
    >
      <div className="grain absolute inset-0 opacity-60" />
      <div className="relative flex flex-col items-center gap-2 px-3">
        <svg width={compact ? 18 : 28} height={compact ? 18 : 28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="1.8" />
          <path d="m21 16-5-5-9 9" />
        </svg>
        {!compact && (
          <>
            <span className="text-sm font-medium">{hint ?? "Image"}</span>
            {src && <code className="rounded bg-surface px-2 py-0.5 text-[11px] text-accent">public{src}</code>}
          </>
        )}
      </div>
    </div>
  );
}
