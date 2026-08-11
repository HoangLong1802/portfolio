import Link from "next/link";
import { getPortfolioContent } from "@/lib/portfolio";

export default function VietnameseNotFoundPage() {
  const content = getPortfolioContent("vi");

  return (
    <section className="section-shell not-found">
      <p className="eyebrow">{content.notFound.eyebrow}</p>
      <h1>{content.notFound.title}</h1>
      <p>{content.notFound.body}</p>
      <Link className="text-link" href="/vi">
        {content.notFound.actionLabel}
      </Link>
    </section>
  );
}
