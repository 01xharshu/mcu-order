"use client";

import React from "react";

export function SpoilerGate({ children, prerequisiteIds }: { children: React.ReactNode, prerequisiteIds: string[] }) {
  // Bypassed spoiler logic per user request
  return <>{children}</>;
}
