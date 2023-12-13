import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CarouselPromo } from "./components/carousel/CarouselPromo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Ecommerce from "./components/ecommerce/Ecommerce";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <CarouselPromo />
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="/search" element={<Ecommerce />} />
          </Routes>
          <CarouselPromo />
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
