import React from 'react'
import {Box, Typography} from '@mui/material'
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaFacebook } from "react-icons/fa";
import '../Footer/Footer.css'

const Footer = () => {
  // const imageURL="https://t4.ftcdn.net/jpg/03/10/37/25/360_F_310372527_QHGvFcWTuqalbHPabQTmNwJNEQlWeiKv.jpg"
  return (
    <>
    <div className='FooterDiv'>
    <Box
        sx={{ textAlign: "center", bgcolor: "darkgreen", color: "white", p: 0.2,my:5 }}
      >
        <Box
        //Styling icons onhover animating to goldcolour
          sx={{
                my: 3,               //margin:3
                "& svg": {                  //Targettin svg images directly
                  fontSize: "30px",
                  cursor: "pointer",
                  mr: 3,     //margin right:2

                  
                },
                "& svg:hover": {             //Styling onhover
                  color: "goldenrod",
                  transform: "translateX(5px)",
                  transition: "all 400ms",
                },
              }}
          >   
          <h3>Follow us on </h3>

            <a href='https://www.facebook.com/singer.sunitha/' bgcolor='orange'><FaFacebook sx={{ color: "orange"}} /></a>
            <a href='https://www.instagram.com/upadrastasunitha/?hl=en'><AiFillTwitterCircle /></a>
            <a href='https://www.instagram.com/alludus_kitchen?igsh=MTVsOXg0azIzMjV1dA=='><PiInstagramLogoFill /></a>
            <a href='https://www.vahrehvah.com/'><GitHubIcon /></a>
            <a href='https://www.youtube.com/channel/UC_R8qIXaTKpkAJuuiZhHTmA'><YouTubeIcon /></a>
        </Box>
  
      <Typography
            variant="h7"
            //Styling for responsive design(mobile)
            sx={{
              "@media (max-width:600px)": {
                fontSize: "1rem",
              },
            }}>
              All Rights Reserved &copy; Alludu's Kitchen
      </Typography>
    </Box>  
    </div>
  </>
  );
};

export default Footer