import Head from "next/head";
import { useRouter } from "next/router";

type SeoHeadProps = {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
};

const SITE_URL = "https://www.vertaalbureaumagda.nl";
const OG_IMAGE = "/hero-magda.jpg";

export default function SeoHead({ title, description, keywords, canonicalPath }: SeoHeadProps) {
  const router = useRouter();
  const path = canonicalPath ?? router.asPath;
  const normalizedPath = path === "/" ? "" : path.split("?")[0];
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content="Vertaalbureau Magda" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${SITE_URL}${OG_IMAGE}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${OG_IMAGE}`} />
    </Head>
  );
}
