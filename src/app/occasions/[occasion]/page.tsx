import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import OccasionChrome from "@/components/OccasionChrome";
import { OccasionCta, OccasionProjects } from "@/components/OccasionBody";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { OCCASIONS, occasionById, occasionProjects } from "@/lib/occasions";

/*
 * One static page per occasion, pre-rendered from OCCASIONS. These exist because
 * the enquiry a buyer sends is already occasion-specific ("mariage", "anniversaire"),
 * so matching that in the URL shortens the conversation instead of asking them
 * to explain it.
 */
export function generateStaticParams() {
  return OCCASIONS.map((o) => ({ occasion: o.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ occasion: string }>;
}): Promise<Metadata> {
  const { occasion } = await params;
  const data = occasionById(occasion);
  if (!data) return {};

  return {
    title: `${data.title} | ${SITE.legalName}`,
    description: data.metaDescription,
    alternates: { canonical: `/occasions/${data.id}` },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url: `${SITE.domain}/occasions/${data.id}`,
      siteName: SITE.legalName,
      title: data.title,
      description: data.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
    },
  };
}

export default async function OccasionPage({
  params,
}: {
  params: Promise<{ occasion: string }>;
}) {
  const { occasion } = await params;
  const data = occasionById(occasion);
  if (!data) notFound();

  const projects = occasionProjects(data.id);

  return (
    <OccasionChrome>
      <main className="pt-[74px]">
        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
          <Reveal>
            <p className="eyebrow">{data.label}</p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight text-chalk sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-8 max-w-2xl font-light leading-relaxed text-ash">
              {data.intro}
            </p>
          </Reveal>

          <OccasionCta
            occasionLabel={data.label}
            occasionId={data.id}
            brief={data.brief}
          />
        </section>

        {/*
          Real projects, drawn from the same data the homepage uses. A thin page
          with no work on it is worse than no page: that is what doorway pages are.
        */}
        {projects.length > 0 && (
          <OccasionProjects
            projects={projects}
            occasionLabel={data.label}
          />
        )}
      </main>

      <Footer />
    </OccasionChrome>
  );
}
