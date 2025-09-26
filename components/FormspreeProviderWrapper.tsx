"use client";

import { FormspreeProvider } from "@formspree/react";

export default function FormspreeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormspreeProvider>{children}</FormspreeProvider>;
}
