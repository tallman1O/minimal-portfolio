"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import type React from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"
import { type RoughAnnotation } from "rough-notation/lib/model"
import { useContentReady } from "@/providers/content-ready"

// Matches content fade-in after Apple Hello splash (app/page.tsx)
const CONTENT_FADE_MS = 450

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 1,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const contentReady = useContentReady()
  const [splashDone, setSplashDone] = useState(false)

  useEffect(() => {
    if (!contentReady) {
      setSplashDone(false)
      return
    }
    const id = window.setTimeout(() => setSplashDone(true), CONTENT_FADE_MS)
    return () => window.clearTimeout(id)
  }, [contentReady])

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })

  // Wait for splash + fade; if isView, also wait for inView
  const shouldShow = splashDone && (!isView || isInView)

  useLayoutEffect(() => {
    const element = elementRef.current
    let annotation: RoughAnnotation | null = null

    if (shouldShow && element) {
      const annotationConfig = {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      }

      const currentAnnotation = annotate(element, annotationConfig)
      annotation = currentAnnotation
      // Single play: iterations defaults to 1; no hide/show on resize (that replayed the animation)
      currentAnnotation.show()
    }

    return () => {
      annotation?.remove()
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}
