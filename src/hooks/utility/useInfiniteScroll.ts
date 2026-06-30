import { useCallback, useRef } from "react";

export function useInfiniteScroll(callback: () => void, options?: { threshold?: number }) {
  const observer = useRef<IntersectionObserver | null>(null);

  const sentinelRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      if (!node) return;
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) callback();
        },
        { threshold: options?.threshold ?? 0.1 },
      );
      observer.current.observe(node);
    },
    [callback, options?.threshold],
  );

  return sentinelRef;
}
