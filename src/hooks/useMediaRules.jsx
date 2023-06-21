import { useMediaQuery } from "react-responsive";

export const useMediaRules = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 300px) and (max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return { isMobile, isTablet, isDesktop };
};
