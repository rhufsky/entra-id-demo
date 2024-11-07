"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

/**
 * ProviderContainer component that wraps its children with a SessionProvider.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child components to be wrapped by the SessionProvider.
 *
 * @returns {JSX.Element} The children components wrapped with a SessionProvider.
 */
export default function ProviderContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
