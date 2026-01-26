import Image from "next/image";

import "./styles.scss";

export default function Banner({ image, mImage, children }) {
  return (
    <div className="banner-wrapper">
      <Image
        src={image}
        width={1360}
        height={450}
        alt=""
        className="img-desktop"
      />
      {mImage ? (
        <Image
          src={mImage}
          width={400}
          height={400}
          alt=""
          className="img-mobile"
        />
      ) : (
        <Image src={image} width={1360} height={450} alt="" />
      )}

      <div className="content-wrapper">
        <div className="content-inline left">{children}</div>
        <div className="content-inline right"></div>
      </div>
    </div>
  );
}
