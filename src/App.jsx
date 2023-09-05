import { Navigation } from "../components/navigation/Navigation";
import { MainContent } from "../pages/mainContent/MainContent";
import { Footer } from "../components/footer/Footer";
import { useEffect } from "react";

function App() {
  console.log("App.jsx");
  console.log(document.body);

  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("bg-danger");
    // document.body.classList.add("pt-3");

    // 👇️ set style on body element
    // document.body.style.backgroundColor = "salmon";

    return () => {
      // 👇️ optionally remove styles when component unmounts
      document.body.style.backgroundColor = null;

      document.body.classList.remove("bg-dark");
      document.body.classList.remove("pt-3");
    };
  }, []);

  return (
    <>
      <Navigation />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
