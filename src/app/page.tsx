import Head from "next/head";
import Header from "./components/Header";
import BodyCenter from "./components/BodyCenter";
import BodySecondary from "./components/BodySecondary";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col h-auto font-primary">
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
