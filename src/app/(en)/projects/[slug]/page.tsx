import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/portfolio/project-detail-page";
import { getAllProjects, getPortfolioContent, getProjectBySlug } from "@/lib/portfolio";
import { createProjectMetadata } from "@/lib/seo";

type ProjectPageProps = {
  readonly params: Promise<{
    readonly slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProjects("en").map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const content = getPortfolioContent("en");
  const project = getProjectBySlug("en", slug);

  if (!project) {
    return createProjectMetadata(content, undefined);
  }

  return createProjectMetadata(content, project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const content = getPortfolioContent("en");
  const project = getProjectBySlug("en", slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage content={content} project={project} />;
}
