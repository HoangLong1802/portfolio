import Link from "next/link";
import { getPortfolioContent } from "@/lib/portfolio";

export default function NotFoundPage() {
  const content = getPortfolioContent("en");

  return (
    <section className="section-shell not-found">
      <p className="eyebrow">{content.notFound.eyebrow}</p>
      <h1>{content.notFound.title}</h1>
      <p>{content.notFound.body}</p>
      <Link className="text-link" href="/">
        {content.notFound.actionLabel}
      </Link>
    </section>
  );
}
