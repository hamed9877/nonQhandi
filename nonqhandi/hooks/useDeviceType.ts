import { useMediaQuery } from "./useMediaQuery";

const useDeviceType = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1240px)");

  return { isMobile, isTablet, isDesktop };
};

export default useDeviceType;
