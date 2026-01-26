import Image from "next/image";

import Banner from "@/app/components/Banner/Banner";
import Button from "@/app/components/Button/Button";
import Skill from "@/app/components/Skill/Skill";

import Imgbanner from "../../../../public/images/main-banner.png";
import ImgbannerM from "../../../../public/images/banner-mobile.jpg";
import Polenghi from "../../../../public/images/polenghi.jpg";
import Christus from "../../../../public/images/app-christus.jpg";
import MorseCode from "../../../../public/images/morse-code.jpg";

import "./styles.scss";

export const metadata = {
  title: "Home",
  description: "Portfolio home page built with Next.js",
};

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="container">
        <Banner image={Imgbanner} mImage={ImgbannerM}>
          <div className="banner-text-wrapper">
            <h2>
              Olá, Eu sou <span>Tom</span>
            </h2>
            <h3>Desenvolvedor fullstack focado em experiências web</h3>
            {/* <p>Aqui você encontra meus principais projetos e habilidades</p> */}
            <div className="buttons-banner-wrapper">
              <Button title="Ver meus projetos" type="solid" />
              <Button
                title="Contato"
                type="outlined"
                to="https://api.whatsapp.com/send/?phone=5585981399428"
              />
            </div>
          </div>
        </Banner>
      </div>
      <div className="skills-scroll">
        <div className="skills-wrapper container">
          <Skill icon="icons/react-icon.svg" name="React" color="#00D8FC" />
          <Skill icon="icons/vue-icon.svg" name="Vue" color="#41B883" />
          <Skill icon="icons/next-icon.svg" name="Next" />
          <Skill icon="icons/nuxt-icon.svg" name="Nuxt" color="#2F495E" />
          <Skill icon="icons/node-icon.svg" name="Node" color="#689F63" />
        </div>
      </div>
      <div className="section-title container">
        <h2>Projetos em destaque</h2>
      </div>
      <div className="projects-wrapper container">
        <div className="project-wrapper">
          <div className="image-wrapper">
            <Image src={Polenghi} width={631} height={390} alt="" />
          </div>
          <div className="description-wrapper">
            <h3>Site Polenghi</h3>
            <p>
              Site institucional desenvolvido para a marca Polenghi, com foco em
              apresentar o portfólio de produtos.
            </p>
            <div className="buttons-project-wrapper">
              <Button
                title="Ver online"
                type="solid"
                href="https://www.polenghi.com.br/"
                target="_blank"
              />
              {/* <Button
                title="Github"
                type="outlined"
                to="https://www.polenghi.com.br/"
              /> */}
            </div>
          </div>
        </div>
        <div className="project-wrapper reverse">
          <div className="image-wrapper">
            <Image src={Christus} width={580} height={716} alt="" />
          </div>
          <div className="description-wrapper">
            <h3>App Escola Christus</h3>
            <p>
              Aplicativo desenvolvido para alunos e pais da Escola Christus,
              facilitando o acesso a notas, datas de provas, comunicados e
              informações acadêmicas em um só lugar.
            </p>
            <Button title="Ver galeria" type="solid" to="/christus-app" />
          </div>
        </div>
        <div className="project-wrapper">
          <div className="image-wrapper">
            <Image src={MorseCode} width={631} height={390} alt="" />
          </div>
          <div className="description-wrapper">
            <h3>Simulador Morse Interativo</h3>
            <p>
              Uma interface digital que simula a escrita em código Morse,
              permitindo a entrada de sinais por cliques e pressionamentos com
              retorno visual em tempo real.
            </p>
            <div className="buttons-project-wrapper">
              <Button title="Ver online" />
              <Button title="Github" type="outlined" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact-banner container">
          <h2>Vamos construir algo juntos?</h2>
          <p>
            Tem uma ideia, projeto ou desafio em mente? Vamos conversar e
            transformar isso em uma solução real.
          </p>
          <Button title="Me manda um Oi!" type="outlined" color="black" />
        </div>
      </div>
    </div>
  );
}
