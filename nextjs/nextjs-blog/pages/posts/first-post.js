import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  const title = "Hello World";
  return (
    <Layout>
      <Head>
        <title>My Posts</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
      <p>{title}</p>
    </Layout>
  );
}
