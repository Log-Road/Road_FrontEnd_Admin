import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "@/Components/Layout/DefaultLayout";
import BackgroundLayout from "@/Components/Layout/BackgroundLayout"
import ClubManage from "@/Pages/ClubManage";
import PersonManage from "@/Pages/PersonManage";
import ContestManage from "@/Pages/ContestManage"
import Register from "@/Pages/Register";
import Post from "@/Pages/ProjectManage/Post";
import Main from "@/Pages/Main"
import ProjectManage from "@/Pages/ProjectManage"
import Award from "@/Pages/Award";
import Modify from "@/Pages/Register/Modify";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="club" element={<ClubManage />} />
          <Route path="person" element={<PersonManage />} />
          <Route path="contest" element={<ContestManage />} />
          <Route path="main" element={<Main />} />
          <Route path="project" element={<ProjectManage />} />
          <Route path="award" element={<Award />} />
        </Route>

        <Route path="/" element={<BackgroundLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="modify" element={<Modify />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}