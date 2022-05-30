import React from 'react'
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';


const theme = createTheme();

// Content.propTypes = {
//   blog: PropTypes.shape({
//         title: PropTypes.string,
//         created_at: PropTypes.string,
//         image: PropTypes.string,
//         content: PropTypes.string,
//         user: PropTypes.string

//   }),
// }

export const  Content= () => {

  const [blog,setBlog]= useState([])
  function usePageViews() {
    let location = useLocation();
   
    let string= location.pathname.substring(13);
   return string;
  }
let array = usePageViews();
let getBlog = async (id) => {
  let response = await fetch("http://nhatphidev2k.pythonanywhere.com/api/v1/post/detail/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log("id", id);
  let data = await response.json();
  console.log(data);
  setBlog(data);
  console.log("response", response);
};

useEffect(() => {
  getBlog(array);
}, [array]);

  return (
    <div className="content">
           <div className="content__header">
                <div className='content__breadcrumbs'>
                <Breadcrumbs separator="›" aria-label="breadcrumb">

                    <Link
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"
                      href="/"
                    >
                   <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      Trang chủ
                    </Link>
                    <Link
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"
                      href="/"
                    >
                      Thể loại
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center'  }}
                        color="text.primary"
                      >
                        {blog.title}
                    </Typography>
              
               </Breadcrumbs>
                </div>
          </div>
          <div className="content__name">
                   <h2>{blog.title}</h2>  
          </div>
          <div className="content__date">
                   <p>{blog.created_at}</p>
          </div>
         <div className="content__img">
           <img src={blog.image}>         
           </img>
          </div> 
            <div className='content__items'>
                    <div className='content__info'>
                        <article>
                          {blog.content}
                          </article>
                  </div>
            </div> 
            <div className="content__author">
                   <p>{blog.user}</p>  
          </div>   
        </div>
  )
}

export default Content