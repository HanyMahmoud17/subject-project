import React from 'react';
import { Typography, Box, Link, Grid } from '@mui/material';
import { FaSnapchat, FaTwitter } from 'react-icons/fa';
import img from '../assets/images/myImage.jpeg';
import footerStyles from '../assets/css/footer.module.css';
// import myLogo from '../assets/images/footerLogo.png';
import myLogo from '../assets/images/subjectLogo.png';
import snapChat from '../assets/images/snapa.png';
import twitter from '../assets/images/x.png';

const Footer = () => {
  return (
    <div className='container'>
      <div
        className={`vs-card-content type-3 ${footerStyles.containerOne}`}
      >
        <div className={`vs-card-content type-3 ${footerStyles.cardContainer}`}>
          <div className={footerStyles.items}>
            <div className={footerStyles.content} >
              <div className="vs-card__title">
                <Typography
                  dir="rtl"
                  variant="h6"
                  className={footerStyles.textOne}
                >
                  تطوير: رياض بن تركي
                </Typography>
              </div>
              <Typography dir="rtl" variant="body1" className={footerStyles.textTwo}>
                إعلامي | أدرس القانون | عضو في الهيئة العامة للإعلام المرئي والمسموع | عضو في الهيئة السعودية للمحامين | مهتم بالتعليم الجامعي
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                <Link href="https://twitter.com/riyadh_turki" target="_blank">
                <i class={`fa-brands fa-x-twitter ${footerStyles.socialImage}`}></i>
                </Link>
                <Link
                  href="https://www.snapchat.com/add/riyadh_turki"
                  target="_blank"
                >
                  <i class={`fa-brands fa-square-snapchat ${footerStyles.socialImage}`}></i>
                </Link>
              </Box>
            </div>
            <div className={footerStyles.img}>
              <img
                draggable="false"
                src={img}
                alt="Riyad"
                className={footerStyles.imageOne}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={footerStyles.footerSection} >
        <div className={footerStyles.textThree}>
          <Typography>
            منصات تعليمية جاري العمل على تطويرها
          </Typography>
        </div>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6} sm={3}>
            <a
              href=""
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <div
                className={`rounded-lg bg-white overflow-hidden shadow hover:shadow-lg cursor-pointer ${footerStyles['gedoCard']}`}
              >
                <img
                  src={myLogo}
                  alt="altzam"
                  style={{ width: '120px', height: '40px' }}
                />
              </div>
            </a>
          </Grid>
          <Grid item xs={6} sm={3}>
            <a
              href=""
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <div
                className={`rounded-lg bg-white overflow-hidden shadow hover:shadow-lg cursor-pointer ${footerStyles['gedoCard']}`}
              >
                <img
                  src={myLogo}
                  alt="altzam"
                  style={{ width: '120px', height: '40px' }}
                />
              </div>
            </a>
          </Grid>
          <Grid item xs={6} sm={3}>
            <a
              href=""
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <div
                className={`rounded-lg bg-white overflow-hidden shadow hover:shadow-lg cursor-pointer ${footerStyles['gedoCard']}`}
              >
                <img
                  src={myLogo}
                  alt="altzam"
                  style={{ width: '120px', height: '40px' }}
                />
              </div>
            </a>
          </Grid>
          <Grid item xs={6} sm={3}>
            <a
              href=""
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <div
                className={`rounded-lg bg-white overflow-hidden shadow hover:shadow-lg cursor-pointer ${footerStyles['gedoCard']}`}
              >
                <img
                  src={myLogo}
                  alt="altzam"
                  style={{ width: '120px', height: '40px' }}
                />
              </div>
            </a>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mt: '19px',
            mb: "5px",
            fontWeight: '400',
          }}
        >
          جميع الحقوق محفوظة © 2023 All rights reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
