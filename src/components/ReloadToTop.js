import { useEffect } from "react";

export const ReloadToTop = () =>
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.scrollTo(0, 0);
  }, []);
