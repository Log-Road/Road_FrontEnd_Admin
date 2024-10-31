import { useEffect, useRef, useState, useCallback } from "react";

interface DivSize {
  width: number;
  height: number;
}

export const useCalculateSize = (): [React.RefObject<HTMLDivElement>, DivSize] => {
  const [size, setSize] = useState<DivSize>({ width: 0, height: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const updateSize = useCallback(() => {
    if (divRef.current) {
      setSize({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, [])

  useEffect(() => {
    updateSize()
    window.addEventListener("resize", updateSize)

    return () => window.removeEventListener("resize", updateSize)
  }, [updateSize]);

  return [divRef, size];
};
