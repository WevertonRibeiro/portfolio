import { useLayoutEffect } from "react";

export default function useScrollLock(isOpen) {

  useLayoutEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen]);
}
