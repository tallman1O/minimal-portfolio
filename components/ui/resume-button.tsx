"use client";

import { IconFileCv, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const RESUME_URL = "/mehul_resume.pdf";

export function ResumeButton() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open CV"
        className="flex size-full items-center justify-center"
      >
        <IconFileCv className="size-full" />
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
              onClick={() => setOpen(false)}
              role="presentation"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label="Resume"
                className="relative flex h-[min(90vh,900px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <span className="text-sm font-medium">CV</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground underline-offset-2 hover:underline"
                    >
                      Open in new tab
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close"
                      className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <IconX className="size-4" />
                    </button>
                  </div>
                </div>
                <iframe
                  src={RESUME_URL}
                  title="Resume"
                  className="h-full w-full flex-1 border-0 bg-white"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
