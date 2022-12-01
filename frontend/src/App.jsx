import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import MainRoutes from "./screens/MainRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
         <MainRoutes/>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;
