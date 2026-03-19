"use client";
import { useState } from "react";
import Link from "next/link";

import Button from "../Button/Button";

import "./styles.scss";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = (e) => {
    if (e.target === e.currentTarget) {
      setMenuActive(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/">
          {" "}
          <h1>{"<WR />"}</h1>
        </Link>
        <div className="menu">
          <ul>
            {/* <li>
              <a href="#">Sobre</a>
            </li> */}
            <li>
              <Link href="/projetos">Projetos</Link>
            </li>
            {/* <li>
              <a href="#">Exp</a>
            </li> */}
            <li>
              <Link
                href="https://api.whatsapp.com/send/?phone=5585981399428"
                target="_blank"
              >
                Contato
              </Link>
            </li>
          </ul>
          <Button
            title="Resumo"
            icon="/icons/download-icon.svg"
            to="/pdf/weverton-ribeiro.pdf"
            target="_blank"
          />
        </div>
        <div className="m-menu-btn">
          <img src="/icons/bars-icon.svg" alt="" onClick={toggleMenu} />
          <div
            className={`m-menu-wrapper ${menuActive && "active"}`}
            onClick={closeMenu}
          >
            <div className="m-menu">
              <div className="container">
                <div className="btn-close-wrapper">
                  <img
                    src="/icons/close-icon.svg"
                    alt=""
                    className="btn-close"
                    onClick={toggleMenu}
                  />
                </div>
                <ul>
                  {/* <li>
                    <a href="#">Sobre</a>
                  </li> */}
                  <li>
                    <Link href="/projetos" onClick={toggleMenu}>Projetos</Link>
                  </li>
                  {/* <li>
                    <a href="#">Exp</a>
                  </li> */}
                  <li>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=5585981399428"
                      target="_blank"
                    >
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Button
                      title="Resumo"
                      icon="/icons/download-icon.svg"
                      to="/pdf/weverton-ribeiro.pdf"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <ul className="m-socials">
                      <li>
                        <Link
                          href="https://www.instagram.com/_tom_aster/"
                          target="_blank"
                        >
                          <img src="/icons/insta-icon.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://codepen.io/Weverton-Ribeiro"
                          target="_blank"
                        >
                          <img src="/icons/codepen-icon.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://github.com/WevertonRibeiro"
                          target="_blank"
                        >
                          <img src="/icons/github-icon.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/in/weverton-ribeir0/"
                          target="_blank"
                        >
                          <img src="/icons/linkedin-icon.svg" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
