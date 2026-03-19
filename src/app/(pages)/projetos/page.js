import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import "./styles.scss";

async function getProjects() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  try {
    const res = await fetch(`${baseUrl}/api/projects`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
}

export const metadata = {
  title: "Projetos | Portfolio",
  description: "Lista de todos os projetos.",
};

export default async function ProjetosPage() {
  const projects = await getProjects();

  return (
    <main className="projetos-page">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              heroImage={project.heroImage}
              rating={project.rating}
              shortDescription={project.shortDescription}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
