// import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
// import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>Hello World</div>
      <div>
        <Link href='/address'>Address</Link>
      </div>
      <div>
        <Link href='/name'>Name</Link>
      </div>
    </div>
  );
}
