import styled from "styled-components";

import Header from "./../components/Header";
import About from "./../components/About";
import Tournaments from "./../components/Tournaments";
import Layout from "./../components/Layout";
import Footer from "./../components/Footer";
import { createTeam, submitOrder } from "./../util/db";

const test = async () => {
  console.log("TEST");
  var yolo = await createTeam({ datatest: "data" });
  console.log("TEST", yolo);
};

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <About />
        <Tournaments />
      </Layout>
      <button onClick={test}>Hello</button>
      <Footer />
    </>
  );
}
