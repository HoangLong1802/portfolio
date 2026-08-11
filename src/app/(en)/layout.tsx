import type { ReactNode } from "react";
import { RootShell } from "@/components/layout/root-shell";
import { createRootMetadata, viewport } from "@/lib/seo";
import "../globals.css";

export { viewport };

export const metadata = createRootMetadata("en");

type EnglishLayoutProps = {
  readonly children: ReactNode;
};

export default function EnglishLayout({ children }: EnglishLayoutProps) {
  return <RootShell locale="en">{children}</RootShell>;
}
