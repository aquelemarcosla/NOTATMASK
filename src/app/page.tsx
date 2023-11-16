import Head from "next/head";
import Header from "./components/Header";
import BodyCenter from "./components/BodyCenter";

export default function Home() {
  return (
    <main className="flex flex-col h-screen font-primary">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Header />
      <BodyCenter />
    </main>
  )
}
