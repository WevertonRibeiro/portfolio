import Image from "next/image";

import "./styles.scss";

export default function Skill({ icon, name, color }) {
  return (
    <div className="skill-wrapper">
      <Image src={icon} width={40} height={40} alt="" />
      <span style={{ color: color }}>{name}</span>
    </div>
  );
}
