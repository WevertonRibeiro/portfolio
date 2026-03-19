import Image from "next/image";
import { notFound } from "next/navigation";

import BannerProject from "@/app/components/BannerProject/BannerProject";
import Mansory from "@/app/components/Mansory/Mansory";
import Button from "@/app/components/Button/Button";

import "./styles.scss";

async function getProject(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  try {
    const res = await fetch(`${baseUrl}/api/projects/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Erro ao buscar o projeto:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.metaTitle,
    description: project.metaDescription,
  };
}

export default async function ProjectSinglePage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const {
    title,
    description,
    heroImage,
    imageWidth,
    imageHeight,
    link,
    galleryBaseUrl,
    galleryImages,
    mansoryRows,
  } = project;

  return (
    <main className="project-single-page">
      <div className="container">
        <BannerProject
          image={
            <Image src={heroImage} width={imageWidth} height={imageHeight} alt={title} />
          }
          title={title}
          description={description}
        >
          {link && (
            <Button
              title={link.title}
              type="solid"
              to={link.url}
              target="_blank"
            />
          )}
        </BannerProject>
      </div>
      <div className="section-title container">
        <h2>Galeria</h2>
      </div>
      <div className="container">
        <Mansory
          images={galleryImages.map((img) => galleryBaseUrl + img)}
          rows={mansoryRows}
        />
      </div>
    </main>
  );
}
