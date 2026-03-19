import Image from "next/image";
import Link from "next/link";

import "./styles.scss";

export default function ProjectCard({
  slug,
  title,
  heroImage,
  rating,
  shortDescription,
}) {
  return (
    <Link href={`/${slug}`} className="project-card">
      <div className="card-image-wrapper">
        <Image
          src={heroImage}
          alt={title}
          width={280}
          height={160}
          className="card-image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <span className="card-rating">
          {rating} ★ <span className="info-icon">ⓘ</span>
        </span>
        <p className="card-description">{shortDescription}</p>
      </div>
    </Link>
  );
}
