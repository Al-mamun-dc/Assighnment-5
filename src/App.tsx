import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Nav from "./component/Nav";
import Banner from "./component/Banner";
import Technologies from "./component/technologies/Technologies";
import Footer from "./component/Footer";

import type { itechnologies } from "./type/technologiestype";

import "react-toastify/dist/ReactToastify.css";

const TechnologiesFetch = async (): Promise<itechnologies[]> => {
  const res = await fetch("/Data.json");

  const data = await res.json();

  return data;
};

function App() {
  const TechnologiesPromise = TechnologiesFetch();

  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies TechnologiesPromise={TechnologiesPromise} />
      </Suspense>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;