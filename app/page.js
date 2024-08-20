import Link from 'next/link';
import Head from "next/head";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import AboutMe from './components/About-Me';

export default function LandingPage() {
  return (

    <div class="text-black bg-black">
      <Head>
        <title>Insight.</title>
      </Head>
      <Header />
      <Main />
      <AboutMe />
      <Footer />
    </div>
  );
}
