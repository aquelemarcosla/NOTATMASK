import Head from "next/head";
import Header from "./components/Header";
import BodyCenter from "./components/BodyCenter";

export default function Home() {
  return (
    <main className="flex flex-col h-screen font-libre">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Header />
    </main>
  )
}
