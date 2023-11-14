import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={`flex h-[1200px]`}>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Header />
    </main>
  )
}
