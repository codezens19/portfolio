import React from 'react';
import styled from 'styled-components';
// import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const MainContent = styled.main`
  padding-top: 0;
`;

function App() {
  return (
    <AppContainer>
      {/* <Header /> */}
      <MainContent>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
