import { useAppTranslation } from "../hooks/hooks";
import svg from "./svg";

export const useOnboardingData = () => {
  const { t } = useAppTranslation();

  return [
    {
      id: "1",
      icon: svg.icons.onBoardingLog1,
      title: t("onBoardTitle1"),
      subtitle: t("onBoardMessage1"),
    },
    {
      id: "2",
      icon: svg.icons.onBoardingLog2,
      title: t("onBoardTitle2"),
      subtitle: t("onBoardMessage2"),
    },
    {
      id: "3",
      icon: svg.icons.onBoardingLog3,
      title: t("onBoardTitle3"),
      subtitle: t("onBoardMessage3"),
    },
  ];
};
