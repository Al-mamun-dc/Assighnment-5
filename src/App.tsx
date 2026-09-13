import Nav from "./component/Nav"
import Banner from "./component/Banner"
import Technologies from "./component/technologies/Technologies";
import { Suspense } from "react";
import type { itechnologies } from "./type/technologiestype";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TechnologiesFetch=async():Promise<itechnologies[]>=>{
  const res = fetch('/Data.json');
  const data = await (await res).json();
  return data;
};
const TechnologiesPromise=TechnologiesFetch();
function App() {
  

  return (
    <>
      <Nav/>
      <Banner/>
      <Suspense fallback={
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-xl font-semibold text-gray-600">
        Loading Technologies...
      </p>
    </div>
  }> 
        <Technologies TechnologiesPromise={TechnologiesPromise}/>
        </Suspense>
         <ToastContainer position="top-right" autoClose={2000} />
     
    </>
  )
}

export default App
