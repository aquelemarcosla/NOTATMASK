import Head from "next/head";
import Header from "./ui/Header";
import BodyCenter from "./ui/BodyCenter";
import BodySecondary from "./ui/BodySecondary";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col h-auto font-primary " id="main">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Header />
      <BodyCenter />
      <BodySecondary />
      <Footer />
    </main>
  )
}
