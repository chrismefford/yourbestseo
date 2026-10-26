import GuideArticle from "@/components/guides/GuideArticle";

export default function GuidePage({ slug }: { slug: string }) {
  return <GuideArticle slug={slug} />;
}
