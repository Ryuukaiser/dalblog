import React from "react";
import {  useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';

import Banner from "components/layout/Banner";
import Topic from "components/layout/Topic";
import AuthContext from "context/AuthContext";


const Profile = () => {
  // Content.propTypes = {
//   blog: PropTypes.shape({
//         title: PropTypes.string,
//         created_at: PropTypes.string,
//         image: PropTypes.string,
//         content: PropTypes.string,
//         user: PropTypes.string

//   }),
// }
  const [user, setUser] = useState([]);
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const local = localStorage.getItem("authTokens")

  let {logoutUser} = useContext(AuthContext);
  const getUser = async () => {
    try {
      const response = await fetch("https://nhatphidev2k.pythonanywhere.com/user/profile/", 
      {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${JSON.parse(local)}` , 
          "Content-Type": "application/json"
        }  
      });
      const data = await response.json();
      setUser(data);
    } 
    catch (error) {
      console.log("error", error);
    }};
    useEffect(() => {
      getUser();
    },[] );
  console.log("user", user)

  const getBlog = async () => {
    try {
      const response = await fetch(`https://nhatphidev2k.pythonanywhere.com/api/v1/post/${user.id}/user/?page=1`)
      const data = await response.json();
      setBlog(data.results);
    } 
    catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
  getBlog();
},[user.id]);
console.log("blog", blog)

  const deleteBlog =(e) => {
    const dl =async ()=>{
      console.log("id", e)
        const local = localStorage.getItem("authTokens")
        try {
          const response = await fetch(`https://nhatphidev2k.pythonanywhere.com/api/v1/post/delete/${e}`, 
          {
            method: "DELETE",
            headers: {
              'Authorization': `Bearer ${JSON.parse(local)}` , 
              "Content-Type": "application/json"
            }
          });
          navigate("/");
          toast.success("X??a th??nh c??ng!");
         
        } catch (error) {
          console.log("error", error);
        }
      };
      dl();
    }


 
      


const lists = () => {
  let list = blog.map((data, index) => (
    <div  className="blog__news" key={data.id} >  
    <div  className="news__image" >                          
        <img src={data.image} alt=""/>    
    </div>
    <div className='news__texts'>                  
        <div  className="news__title" >                          
            <h3>
              {data.title}
            </h3>
        </div>
        <div  className="news__content" >                          
            <p>
            {data.content}
            </p>
        </div>
        <div  className="news_more" >                          
            <a href={`/blogcontent/${data.id}/`}>Xem th??m {">>"}</a>
        </div>
    </div>  
    <div className="blog__crul">
    <button  onClick={() =>deleteBlog(data.id) } className="delete"><p>X??a</p></button>
    <button  className="edit"><a href={`/profile/editBlog/${data.id}`}>Ch???nh s???a</a></button>
    </div>
</div>
    ));
    return list;
};
  return (
    <div>
      <Banner></Banner>
      <section className="blog">
      <ToastContainer  position="top-center" reverseOrder={false} ></ToastContainer>
        <div className="container">
          <div className="blog__wrapper">
            <div className="blog__item news">
              <div className="blog__title">
                <h2>Blog c?? nh??n</h2>
              </div>
                {lists()}
                {/* <Pagination count={count %5 ===0 ? count/5: Math.round(count/5)+1}  page={page} onChange={handleChange} variant="outlined" color="secondary" /> */}
            </div>
            <div className="blog__item suggests">
              <div className="blog__title">
                <h2>T??i kho???n</h2>
              </div>
              <div className="suggests__blog">
              <div className="user__item">
        <div  className="user__image" >                          
          <img src={"https://nhatphidev2k.pythonanywhere.com/"+ user.avatar} alt=""/>    
      </div>                        
      <div  className="user__title" >                          
          <h3>
            {user.first_name + user.last_name }
          </h3>
          <p>
             {user.email}
          </p>
      </div>
        <hr/>
        <button><a href='/profile/change_password' className='button'> Thay ?????i m???t kh???u</a></button>
         <button ><a href='/profile/createBlog' className='button'>  ????ng b??i vi???t m???i</a></button>
         <button onClick={logoutUser}> ????ng xu???t</button>
    </div>  
              </div>
            </div>
          </div>
        </div>
      </section>
      <Topic></Topic>
    </div>
  );
};

export default Profile;
