"use client";

import { useState, useEffect } from "react";
import useScrollLock from "@/app/hooks/useScrollLock";

import "./styles.scss";

export default function Mansory({ images, rows }) {
  const [currentImage, setCurrentImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  useScrollLock(isModalOpen);

  return (
    <div
      className="mansory-wrapper"
      style={{ gridTemplateColumns: `repeat(${rows}, 1fr)` }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="mansory-item"
          onClick={() => {
            openModal(index);
          }}
        >
          <img src={src} />
        </div>
      ))}
      <div className={`mansory-modal-background ${isModalOpen && `active`}`}>
        <div className="btn-close" onClick={() => setIsModalOpen(false)}>
          <img src="/icons/xmark-icon.svg" alt="" />
        </div>
        <div className="mansory-modal-content">
          <img src={images[currentImage]} alt="" />
        </div>
      </div>
    </div>
  );
}
