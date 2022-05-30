import React from 'react'

import {useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Edit_Blog = () => {  

  const [blog,setBlog]= useState();
  const local = localStorage.getItem("authTokens")
  const [advice, setAdvice] = useState([]);
 
  const newBlog =(e)=>{
    e.preventDefault()
    console.log(category)
    
    let up =new FormData();
     up.append('title', title);
     up.append('category', category);
     up.append('content', content)
     up.append('image',image)
    fetch('https://nhatphidev2k.pythonanywhere.com/api/v1/post/list/', {
      method:'POST',
      headers: {
       'Authorization': `Bearer ${JSON.parse(local)}` , 
      },
      body:up
    })
    .then(res=> console.log(res))
    .catch(errors=> console.log(errors))
  }
  
  function usePageViews() {
    let location = useLocation();
   
    let string= location.pathname.substring(18);
   return string;
  
  }
  let array = usePageViews();
  console.log("id", array)
  const getBlog = async (id) => {
    try {
      const response = await fetch(`https://nhatphidev2k.pythonanywhere.com/api/v1/post/detail/${id}/`,
      {
        method:"GET"
      })
      const data = await response.json();
      setBlog(data.results);
    } 
    catch (error) {
      console.log("error", error);
    }
   };

  useEffect(() => {
  getBlog(array);
}, [array]);
console.log("blog",blog)
const [title, setTitle] = useState(blog.title);
const [category, setcategory] = useState(blog.category);
const [content, setcontent] = useState(blog.content);
const [image, setimage] = useState();

  const getLists = async () => {
    try {
      const response = await fetch("https://nhatphidev2k.pythonanywhere.com/api/v1/categories/");
      const data = await response.json();
      setAdvice(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getLists();
  }, []);
  const lists = () => {
    let list = advice.map((data, index) => (
     
      <option  name='category' key={data.id} id={data.id} >{data.id}</option>
     
    ));
    return list;
  };
  let up =new FormData();{}
     up.append('title', title);
    //  up.append('category', category);
    //  up.append('content', content)
    //  up.append('image',image)
     console.log(title)
    // fetch('https://nhatphidev2k.pythonanywhere.com/api/v1/post/list/', {
    //   method:'PATH',
    //   headers: {
    //    'Authorization': `Bearer ${JSON.parse(local)}` , 
    //   },
    //   body:up
    // })
    // .then(res=> console.log(res))
    // .catch(errors=> console.log(errors))
  

  return (
   <div className='create '>
   <div className='container'>
    <div className='create__form none'>
    <div className='form'>
      <form >
            <h3>Chỉnh sửa bài Blog</h3>
            <div className="form-group">
                <p>Tiêu đề</p>
                <input name="title" className='form__title' value={title}  onChange={(e)=> setTitle(e.target.value)}   type="text" placeholder="nhập tiêu đề bài viết"/>
               
            </div>
            <div className="form-group">
                <p>Hình ảnh</p>
                <input id='image'  name="image" className='form__title'  onChange={(e)=> setimage(e.target.files[0])}   type="file"   /> 
               
            </div>
            <div className="form-group">
                <p>Thể loại</p>
                <select  value={category}  onChange={(e)=>setcategory(e.target.value)}  className='form__category'>
                 {lists()}
                </select>
            </div>
            <div className="form-group">
                <p>Nội dung</p>                    
            <textarea name='content' className='form__content' value={content}  onChange={(e)=>setcontent(e.target.value)}  > </textarea>
            </div>
            <div className="form-group">
                <button onClick={(e)=>newBlog(e)}  className="form-submit" >Đăng bài</button>                      
            </div>        
      </form>
      </div>
    </div>

   </div>

   </div>
  
   )
  }

export default Edit_Blog