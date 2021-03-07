export const getScaleAxis = (size: "width" | "height") =>
  (({ width: "scaleX", height: "scaleY" } as const)[size] ?? null);
