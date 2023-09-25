"use client";
import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }: { children: any }) {
  return <Provider store={store}>{children}</Provider>;
}
