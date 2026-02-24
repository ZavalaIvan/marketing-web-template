"use client"

import { useEffect, useState } from "react"

const FADE_DURATION_MS = 500
const MIN_VISIBLE_MS = 500
const FORCE_HIDE_MS = 10000
const PROGRESS_TICK_MS = 120

export default function PreloaderOverlay() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible")
  const [progress, setProgress] = useState(4)

  useEffect(() => {
    const start = performance.now()
    const timeouts: Array<ReturnType<typeof setTimeout>> = []
    const intervals: Array<ReturnType<typeof setInterval>> = []
    let finished = false

    const finish = () => {
      if (finished) return
      finished = true
      setProgress(100)

      const elapsed = performance.now() - start
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed)

      timeouts.push(
        setTimeout(() => {
          setPhase("fading")

          timeouts.push(
            setTimeout(() => {
              setPhase("hidden")
            }, FADE_DURATION_MS),
          )
        }, wait),
      )
    }

    const calculateProgress = () => {
      if (finished) return

      const stateProgress =
        document.readyState === "loading" ? 0.18 : document.readyState === "interactive" ? 0.72 : 1

      const entries = performance.getEntriesByType("resource")
      const resourcesTotal = entries.length
      const resourcesLoaded = entries.filter((entry) => (entry as PerformanceResourceTiming).responseEnd > 0).length
      const resourcesProgress = resourcesTotal > 0 ? resourcesLoaded / resourcesTotal : 0

      // Blend document lifecycle and observed resource timings.
      let estimated = stateProgress * 0.45 + resourcesProgress * 0.55

      if (document.readyState !== "complete") {
        // Keep motion smooth even when no new resource events are exposed.
        const elapsed = performance.now() - start
        const timeProgress = Math.min(0.92, elapsed / FORCE_HIDE_MS)
        estimated = Math.max(estimated, timeProgress)
        estimated = Math.min(estimated, 0.95)
      } else {
        estimated = 1
      }

      const next = Math.max(4, Math.round(estimated * 100))
      setProgress((prev) => (next > prev ? next : prev))
    }

    const onReadyStateChange = () => {
      calculateProgress()
      if (document.readyState === "complete") finish()
    }

    calculateProgress()
    intervals.push(setInterval(calculateProgress, PROGRESS_TICK_MS))

    if (document.readyState === "complete") {
      finish()
    } else {
      window.addEventListener("load", finish, { once: true })
      document.addEventListener("readystatechange", onReadyStateChange)
    }

    timeouts.push(setTimeout(finish, FORCE_HIDE_MS))

    return () => {
      window.removeEventListener("load", finish)
      document.removeEventListener("readystatechange", onReadyStateChange)
      for (const interval of intervals) {
        clearInterval(interval)
      }
      for (const timeout of timeouts) {
        clearTimeout(timeout)
      }
    }
  }, [])

  if (phase === "hidden") return null

  return (
    <div
      className={`preloader-wrap${phase === "fading" ? " is-fading" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Cargando contenido"
    >
      <div className="preloader-grid" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <p className="preloader-label">Loading...</p>
      <div className="preloader-progress" aria-hidden="true" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span className="preloader-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
