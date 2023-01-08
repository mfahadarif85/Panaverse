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
        <p>I am learning Next.JS</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
        <Link href='/contact/contact'>Contact Us</Link>
        <div>
          <a href='/about/about'>About Us</a>
        </div>
        <div>
          <a href='https://www.google.com'>Google Homepage</a>
        </div>
        <div>
          <Link href='/posts/first-post'>First Post</Link>
        </div>
      </section>
    </Layout>
  );
}
