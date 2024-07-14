import Head from 'next/head';
import SneakerList from '../components/SneakerList';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Tenis Loja</title>
      </Head>
      <Navbar />
      <Hero
        title="Descubra os melhores tênis para você"
        description="Os produtos mais confortáveis e estilosos para seu dia a dia"
        image="https://via.placeholder.com/1500x500"
      />
      <SneakerList />
      <Footer />
    </div>
  );
}

export default HomePage;