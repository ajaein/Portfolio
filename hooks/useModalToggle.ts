import { useCallback, useRef, useState } from "react";

export const useModalToggle = (initialState: boolean = false) => {
  const [modal, setModal] = useState(initialState);
  const currentScroll = useRef(0);

  const lockScroll = useCallback(() => {
    currentScroll.current = window.scrollY
    document.body.style.overflowY = "scroll";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${currentScroll.current}px`; 
  }, []);

  const openScroll = useCallback(() => {
    document.querySelector(".modal-backdrop > .modal")?.scrollTo(0, 0);
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("width");
    document.body.style.removeProperty("top");
    window.scrollTo(0, currentScroll.current);
  }, [currentScroll]);

  const toggleModal = useCallback(() => {
    setModal((prev) => !prev);
    if (!modal) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [modal, lockScroll, openScroll]);

  return [modal, toggleModal] as const;
};
