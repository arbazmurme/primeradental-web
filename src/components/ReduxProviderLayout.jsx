"use client";

import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { store } from "@/redux/store";

export default function ReduxProviderLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return <Provider store={store}>{children}</Provider>;
}
