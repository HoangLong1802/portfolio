import type { ReactNode } from "react";
import { RootShell } from "@/components/layout/root-shell";
import { createRootMetadata, viewport } from "@/lib/seo";
import "../globals.css";

export { viewport };

export const metadata = createRootMetadata("vi");

type VietnameseLayoutProps = {
  readonly children: ReactNode;
};

export default function VietnameseLayout({ children }: VietnameseLayoutProps) {
  return <RootShell locale="vi">{children}</RootShell>;
}
