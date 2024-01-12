import React from "react";

export function useScrollProgress(
  element: React.MutableRefObject<HTMLDivElement | null>
) {
  const [percentage, setPercentage] = React.useState<number | undefined>();

  React.useEffect(() => {
    const current = element?.current;
    if (!current) return;

    current.addEventListener("scroll", function handleScroll() {
      const scrolled = current.scrollTop + current.clientHeight;
      const totalScroll = current.scrollHeight;
      console.log((totalScroll - scrolled) / scrolled);

      // setPercentage(scrolled / totalScroll);
    });
  }, [element]);

  return percentage;
}

// 300 - 0
// 450 - 100

// 310 - x
// 450 - 100
