import React, { useEffect } from "react";

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  elementRef: React.MutableRefObject<T>,
  handler: (bool: boolean) => void,
  attached: boolean
) {
  useEffect(() => {

    if (!attached) return;

    const handleClick = (e: any) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        console.log(attached, elementRef, elementRef.current.contains(e.target))
        handler(false);
      }

      document.addEventListener("click", (e) => handleClick(e));
    };

    return () => {
      document.removeEventListener("click", (e) => handleClick(e));
    };
  }, [elementRef, handler, attached]);
};

export { useOutsideClick };
