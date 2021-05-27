import styled from "styled-components";

import Header from "./../components/Header";
import About from "./../components/About";
import Tournaments from "./../components/Tournaments";
import Layout from "./../components/Layout";
import Footer from "./../components/Footer";

import TeamCreator from "./../components/TeamCreator";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <About />
        <Tournaments />
      </Layout>

      <TeamCreator />
      <Footer />
    </>
  );
}
