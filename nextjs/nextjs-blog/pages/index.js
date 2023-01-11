import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Fahad. I'm learning software engineering.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
        <Link href='/contact'>Contact Me</Link>
        <div>
          <Link href='/about'>About Me</Link>
        </div>
        <div>
          <Link href='/posts/first-post'>First Post</Link>
        </div>
        <div>
          <Link href='/reviews'>Reviews</Link>
        </div>
      </section>
    </Layout>
  );
}
