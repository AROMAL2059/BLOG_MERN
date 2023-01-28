import { Route, Routes } from "react-router-dom"
import Post from './Post'
import Header from './Header'
import IndexPages from "./Pages/IndexPages"

import './App.css'
import Layout from "./Layout"
import LoginPage from "./Pages/LoginPage"
import RegistorPage from "./Pages/RegistorPage"
import { UserContextProvider } from "./UserContext"
import CreatePost from "./Pages/CreatePost"
import PostPage from "./Pages/PostPage"
import EditPage from "./Pages/EditPage"

function App() {


  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPages />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path="/register" element={<RegistorPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Route >

      </Routes>

    </UserContextProvider>

  )
}

export default App
