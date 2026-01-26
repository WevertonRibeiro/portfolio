import Image from "next/image";

import BannerProject from "@/app/components/BannerProject/BannerProject";
import Mansory from "@/app/components/Mansory/Mansory";
import Button from "@/app/components/Button/Button";

import Ticketeira from "../../../../../public/images/ticketeira.jpg";

import "./styles.scss";

export const metadata = {
  title: "cristusApp",
  description: "Project page for cristusApp",
};

export default function TicketeiraPage() {
  const images = [
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
  ];
  const baseUrl = "/images/ticketeira/";
  return (
    <main className="ticketeira-page">
      <div className="container">
        <BannerProject
          image={<Image src={Ticketeira} width={580} height={716} alt="" />}
          title="Plataforma de Ticketing"
          description="Uma plataforma digital voltada à gestão e comercialização de ingressos para eventos, oferecendo aos usuários um sistema de busca, seleção e compra de entradas com facilidade e segurança."
        >
          <Button
            title="Ver online"
            type="solid"
            to="https://ticket.com.vc/"
            target="_blank"
          />
        </BannerProject>
      </div>
      <div className="section-title container">
        <h2>Galeria</h2>
      </div>
      <div className="container">
        <Mansory images={images.map((image) => baseUrl + image)} rows={3} />
      </div>
    </main>
  );
}
