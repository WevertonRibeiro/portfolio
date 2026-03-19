import { NextResponse } from "next/server";
import { projectsData } from "@/app/data/projects";

// Modificamos a estrutura apenas para retornar dados reduzidos mais úteis
// num formato de lista (card), removendo arrays grandes de galeria sem necessidade.
export async function GET() {
  const list = projectsData.map((project) => ({
    slug: project.slug,
    title: project.title,
    heroImage: project.heroImage,
    rating: project.rating,
    shortDescription: project.shortDescription,
  }));

  return NextResponse.json({ data: list }, { status: 200 });
}
