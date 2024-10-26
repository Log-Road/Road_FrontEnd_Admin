import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import ClubManage from "@/Pages/ClubManage";
import PersonManage from "@/Pages/PersonManage";
import ContestManage from "@/Pages/ContestManage"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/club" element={<ClubManage />} />
          <Route path="/person" element={<PersonManage />} />
          <Route path="/contest" element={<ContestManage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}