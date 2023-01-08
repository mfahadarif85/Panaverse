import Link from "next/link";
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is My Blog</p>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
      <h3>
        <Link href='/contact/contact'>Contact</Link>
      </h3>
    </div>
  );
}
