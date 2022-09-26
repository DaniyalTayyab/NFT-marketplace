import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global.styles";

import { light } from "./styles/Themes";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Showcase from "./components/sections/showcase/Showcase";
import Team from "./components/sections/team/Team";
import Faq from "./components/sections/faq/Faq";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Team />
        <Showcase />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
