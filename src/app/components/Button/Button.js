import Link from "next/link";
import "./styles.scss";

export default function Button({
  type = "solid",
  title = "Enviar",
  to,
  href,
  target,
  color = "primary",
  icon,
}) {
  const buttonTypes = ["solid", "outlined"];
  const buttonColors = ["primary", "black"];

  const getButtonType = () => {
    return buttonTypes.includes(type) ? type : "solid";
  };

  const getButtonColor = () => {
    return buttonColors.includes(color) ? color : "primary";
  };

  return (
    <>
      {to || href ? (
        to ? (
          <Link
            href={to}
            target={target}
            className={`button generic ${getButtonType()} ${getButtonColor()}`}
          >
            <span>{title}</span>
          </Link>
        ) : (
          <a
            href={href}
            target={target}
            className={`button generic ${getButtonType()} ${getButtonColor()}`}
          >
            <span>{title}</span>
          </a>
        )
      ) : (
        <button
          className={`button generic ${getButtonType()} ${getButtonColor()}`}
        >
          {icon && <img src={icon} width={25} height={25} alt="" />}
          <span>{title}</span>
        </button>
      )}
    </>
  );
}
