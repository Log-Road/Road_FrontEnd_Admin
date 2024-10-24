import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import ClubManage from "../Pages/ClubManage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/club" element={<ClubManage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}