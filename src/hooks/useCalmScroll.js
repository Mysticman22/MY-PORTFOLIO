import { useScroll, useTransform } from "framer-motion";

export function useCalmScroll() {
  const { scrollY } = useScroll();

  // Very subtle vertical drift
  const y = useTransform(scrollY, [0, 600], [0, -6]);

  // Gentle opacity settling
  const opacity = useTransform(scrollY, [0, 300], [0.92, 1]);

  return { y, opacity };
}
