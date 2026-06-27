import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyExperience } from "@/components/case-study-experience";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study"
    };
  }

  return {
    title: `${study.title} - Case Study`,
    description: study.summary,
    openGraph: {
      title: `${study.title} - Preethi Suresh`,
      description: study.summary,
      type: "article"
    }
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyExperience study={study} />;
}
