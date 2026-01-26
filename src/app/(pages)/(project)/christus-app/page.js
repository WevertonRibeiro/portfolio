import Image from "next/image";

import BannerProject from "@/app/components/BannerProject/BannerProject";
import Mansory from "@/app/components/Mansory/Mansory";

import Christus from "../../../../../public/images/app-christus.jpg";

import "./styles.scss";

export const metadata = {
  title: "cristusApp",
  description: "Project page for cristusApp",
};

export default function CristusAppPage() {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
  ];
  const baseUrl = "/images/app-christus/";
  return (
    <main className="christus-app-page">
      <div className="container">
        <BannerProject
          image={<Image src={Christus} width={580} height={716} alt="" />}
          title="App Escola Christus"
          description="Aplicativo desenvolvido para alunos e pais da Escola Christus,
          facilitando o acesso a notas, datas de provas, comunicados e
          informações acadêmicas em um só lugar."
        />
      </div>
      <div className="section-title container">
        <h2>Galeria</h2>
      </div>
      <div className="container">
        <Mansory images={images.map((image) => baseUrl + image)} rows={4} />
      </div>
    </main>
  );
}
