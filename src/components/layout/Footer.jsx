import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer"> 
    <div className="container">

        
        <div className="footer__wrapper">
        <div className="team__logo">
                <img src="/images/logo1.png" alt=""/>
        </div>
         <div className="footer__item">
            <div className='item1'>
                <div className="contract">
                        <div className="contract__title">
                            <h3>Liên hệ</h3>
                            </div>
                        <div className="contract__item">
                            <div className="email">
                            <p><strong>Gmail: </strong>xxx@dalteam.com</p> 
                        </div>
                        <div className="phone">
                            <p><strong>Phone: </strong>09xxxx1212xx</p> 
                        </div>
                        <div className="social">
                        </div>
                    </div>
                </div>
                <div className="icon">
                        <FacebookIcon color="secondary"></FacebookIcon>
                        <InstagramIcon color="secondary"></InstagramIcon>
                        <LinkedInIcon color="secondary"></LinkedInIcon>
                        <TwitterIcon color="secondary"></TwitterIcon>
                </div>
            </div>
            <div className='item1'>
                <div className="contract">
                    <div className="contract__title">
                        <h3>ABOUT</h3>
                        <p>Liên hệ</p>
                        <p>Quy định chung</p>
                        <p> Giới thiệu</p>
                    </div>
                </div>
            </div>
        </div>

         </div>
        
      </div>
      <div className="footer__copyright">
            <p>
                Bản quyền @
            <script>document.write(new Date().getFullYear());</script>    
                của DAL Team        
            </p>  
      </div>
</footer>
  )
}

export default Footer