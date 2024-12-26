import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}
