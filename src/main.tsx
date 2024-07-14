import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./sections/header.tsx";
import Hero from "./sections/hero.tsx";
import Completed from "./sections/completed.tsx";
import Services from "./sections/services.tsx";
import Reviews from "./sections/reviews.tsx";
import Footer from "./sections/footer.tsx";
import CallToAction from "./sections/call-to-action.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <div id="home" />
    <Header />
    <Hero />
    <Completed />
    <Services />
    <Reviews />
    <CallToAction />
    <Footer />
  </>,
);
