import Link from "next/link";

function Header() {
  return (
    <header className="p-4 border border-yellow-200">
      <ul className="flex space-x-20">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/projects">Projects</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
