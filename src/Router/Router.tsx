import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "@/Components/Layout/DefaultLayout";
import BackgroundLayout from "@/Components/Layout/BackgroundLayout"
import ClubManage from "@/Pages/ClubManage";
import PersonManage from "@/Pages/PersonManage";
import ContestManage from "@/Pages/ContestManage"
import Register from "@/Pages/Register";
import Check from "@/Pages/Register/Check";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="club" element={<ClubManage />} />
          <Route path="person" element={<PersonManage />} />
          <Route path="contest" element={<ContestManage />} />
        </Route>

        <Route path="/" element={<BackgroundLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="check" element={<Check />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}