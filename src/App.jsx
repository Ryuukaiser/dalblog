import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login and Signup/Login";
import Home from "./pages/Home/Home";
import Reset_Password from "./pages/Login and Signup/Reset_Password";
import Category from "./pages/Blogs/Category";
import Profile from "./pages/Profile/Profile";
import Change_Password from "pages/Profile/Change_Password";
import BlogContent from "pages/Blogs/BlogContent";
import CreateBlog from "pages/Profile/CreateBlog"
import About from "pages/About/About";

import { AuthProvider } from "context/AuthContext";
import { AppProvider } from "context/AppContext";

import Layout from "./components/layout/Layout";

import "./css/style.css";

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="App">
        <AuthProvider>
              <Routes>
                  <Route element={<Login />} path="/login/" exact></Route>
                  <Route element={<Reset_Password />} path="/api/user/reset-password/:uid/:token" exact></Route>
                  <Route element={<CreateBlog />} path="/profile/createBlog/" exact></Route>
                  <Route element={<Change_Password />} path="/profile/change_password" exact></Route>  
              </Routes>
          <Layout>
              <Routes>
                {/* <PrivateRoute></PrivateRoute> */}
                <Route element={<Home />} path="/" exact></Route>            
                <Route element={<About />} path="/about" exact></Route>  
                <Route element={<Category />} path="/category/:id" exact></Route>
                <Route element={<Profile />} path="/profile/" exact></Route>                 
                <Route element={<BlogContent />} path="/blogcontent/:id/" exact></Route>
              </Routes>       
          </Layout>
          </AuthProvider>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
