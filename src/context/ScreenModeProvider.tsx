import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
// My Assets:
import { ScreenModeType } from "@/types";
import { darkTheme, lightTheme } from "@/styles/themes";
import PresetStyle from "@/styles/config/preset";

const initState: ScreenModeType = "dark";

export const ScreenModeContext = createContext<{
  screenModeGob: ScreenModeType;
  handleScreenModeGob: () => void;
}>({
  screenModeGob: initState,
  handleScreenModeGob: () => {},
});

export default function ScreenModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [screenMode, setScreenMode] = useState(initState);
  const [hasTransition, setHasTransition] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    switch (localStorage.getItem("screen-mode")) {
      case "dark":
        setScreenMode(() => "dark");
        return setIsReady(() => true);
      case "light":
        setScreenMode(() => "light");
        return setIsReady(() => true);
      default:
        localStorage.setItem("screen-mode", screenMode);
        setScreenMode(() => screenMode);
        return setIsReady(() => true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setHasTransition(() => true), 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <ScreenModeContext.Provider
      value={{
        screenModeGob: useMemo(() => screenMode, [screenMode]),
        handleScreenModeGob: useCallback(() => {
          const theme = screenMode === "dark" ? "light" : "dark";
          setScreenMode(() => theme);
          localStorage.setItem("screen-mode", theme);
        }, [screenMode]),
      }}
    >
      <ThemeProvider
        theme={
          hasTransition
            ? screenMode === "dark"
              ? darkTheme
              : lightTheme
            : screenMode === "dark"
            ? { ...darkTheme, transitionDuration: "0s" }
            : { ...lightTheme, transitionDuration: "0s" }
        }
      >
        <PresetStyle isRead={isReady} />
        {children}
      </ThemeProvider>
    </ScreenModeContext.Provider>
  );
}
