import Link from "next/link";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex justify-between md:items-center mt-4">
      <div className="flex items-center md:space-x-5">
        <Link className="hidden md:block" href="/">
          Mathew Tr
        </Link>
        <Navigation />
      </div>
      <div>Dark Toggle</div>
    </header>
  );
}
export default Header;
