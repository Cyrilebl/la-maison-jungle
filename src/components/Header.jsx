import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="flex items-center justify-center gap-8 border-b-2 border-neutral-900 pb-8 pt-10 text-center">
      {" "}
      <img className="size-11" src={logo} alt="Logo de la maison jungle" />
      <h1>La maison jungle</h1>
    </header>
  );
};
