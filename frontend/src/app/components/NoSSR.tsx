"use client";

import { useEffect, useState } from "react";

/**
 * Props interface for NoSSR component
 */
interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * NoSSR wrapper component to prevent hydration mismatches
 * Only renders children on the client side after hydration is complete
 * @param children - Child components to render only on client side
 * @param fallback - Optional fallback component to show during SSR
 * @returns JSX element or null during SSR
 */
export default function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
} 