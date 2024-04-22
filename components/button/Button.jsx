import Link from "next/link";

const Button = ({ buttonText, url, target, buttonClass }) => {
  return (
    <>
      <Link
        href={url}
        target={target ? "_blank" : ""}
        className={`button ${buttonClass}`}
      >
        {buttonText}
      </Link>
    </>
  );
};

export default Button;
