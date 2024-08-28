import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex md:space-x-4 flex-col md:flex-row">
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
