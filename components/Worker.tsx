"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import React from "react";

//@ts-ignore

export default function WorkerComponent({ callBack, gaId }) {
  const workerRef = useRef();

  useEffect(() => {
    workerRef.current = new Worker(new URL("../utils/ga.ts", import.meta.url));

    if (callBack) callBack();
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
    </>
  );
}
