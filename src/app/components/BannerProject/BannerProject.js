import "./styles.scss";

export default function BannerProject({ image, title, description, children }) {
  return (
    <div className="project-wrapper reverse">
      <div className="image-wrapper">{image}</div>
      <div className="description-wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
}
