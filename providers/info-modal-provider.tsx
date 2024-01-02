"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/info-modal";

export const InfoModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
