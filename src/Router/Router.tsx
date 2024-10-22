import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  )
}