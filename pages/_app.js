import Head from "next/head";
import "../styles/globals.css";
import {StateContextProvider} from "../Context/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
      <Component {...pageProps} />
      </StateContextProvider>
      <script src="js/vendor/mordernizr-3.5.0.min.js"></script>
      <script src="js/vendor/jquery-1.12.4.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/jquery.nice-select.min.js"></script>
      <script src="js/jquery.meanmenu.js"></script>
      <script src="js/wow.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}
