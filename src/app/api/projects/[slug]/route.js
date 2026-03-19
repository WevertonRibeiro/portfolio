import { NextResponse } from "next/server";
import { projectsData } from "@/app/data/projects";

export async function GET(request, { params }) {
  const { slug } = await params;
  
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    return NextResponse.json(
      { error: "Projeto não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: project }, { status: 200 });
}
