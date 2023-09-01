import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, IconButton, Modal, Stack, Typography, useMediaQuery } from '@mui/material';
import pdfImage from "../assets/images/logofile.png"
import { Twitter, LinkedIn, WhatsApp, Share } from '@material-ui/icons';
import telegram from '../assets/images/telegram.svg';
import tableStyles from "../assets/css/tableStyle.module.css";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  bgcolor: 'background.paper',
  border: '1px solid #7d57f3 ',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
  padding: '15px'
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories };
}


export default function SubTable() {

  const isNonMobile = useMediaQuery('(min-width:1000px)');
  const [open, setOpen] = useState(false);
  // const [count, setCount] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  let { id } = useParams()

  const token = import.meta.env.VITE_API_TOKEN;

  const [subject, setsubject] = useState([]);
  const linkS="https://subject-sa.com"
  const urlShare=linkS + "/course/" + id

  let url = import.meta.env.VITE_API_URL + "/subjects/" + id
  let title = 'منصة سبجكت الرقمية'
  useEffect(() => {

    axios.get(url,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then(res => {
        setsubject(res.data.data);
        // console.log(res.data.data);
      })

  }, [url, id, token])

  // let url5 = import.meta.env.VITE_API_URL +
  //   `/counts`;
  // useEffect(() => {
  //   axios
  //     .get(url5, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     }).then(res => {
  //       setCount(res.data.data[0].count);
  //     })
  // }, [url5, token])
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlShare)}&text=${encodeURIComponent(title)}`;
  const telegramInUrl = `https://t.me/share/url?url=${encodeURIComponent(urlShare)}&text=${encodeURIComponent(title)}`;
  const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${urlShare}`)}`;

  const rows = [
    createData('رمز المقرر', subject.name),
    createData('اسم المقرر بالعربي', subject.description),
    createData('اسم المقرر بالإنجليزي', subject.version),
    createData('عدد الملفات', subject?.files?.data?.length),
  ];


  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }} data-aos="fade-down">
        <Table sx={{
          maxWidth: { xs: "350px", sm: "500px", md: "800px" },
          margin: "auto",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)",
          mb: 20,
          mt:20

        }} aria-label="customized table">
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={tableStyles.contents}>

      
      <Box className={tableStyles.itemsTable}>
        <Box className={tableStyles.itemtableOne}>
          <Typography variant="p" sx={{ fontSize: "18px" }}>  مشاهدات <span className={tableStyles.count}>{subject.count}</span></Typography>
        </Box>
        <Box className={tableStyles.item2}>
          <Typography variant="p" sx={{ fontSize: "18px" }}>مشاركة المقرر</Typography>
          <IconButton onClick={handleOpen}>
            <Box className={tableStyles.share}>

              <Share style={{ color: '#7d57f3' }} />
            </Box>
          </IconButton>

          <Modal
            open={open}
            onClose={handleClose}
            sx={{
              border: "none !important",
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className={tableStyles.iconShare} display="flex" flexDirection="column"
              gap="8px" borderRadius="12px" >
              <Button
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  width: '38px',
                  height: '38px',
                  minWidth: 'unset',
                  minHeight: 'unset',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  color: 'black',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    backgroundColor: '#ffffff',
                    color: 'white',
                    transform: 'scale(0.9)',
                  },
                }}
              >
                <Typography variant="body2" color="initial">
                  X
                </Typography>
              </Button>
              <Typography variant="2" color="initial" sx={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "19px",
                mt: "3px",
                mb: "8px",
              }}>مشاركة المقرر</Typography>
              <Button
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  backgroundColor: '#1CA1F3',
                  transition: 'transform 0.2s',
                  fontSize: '16px',
                  borderRadius: '15px',
                  '&:hover': {
                    backgroundColor: '#439ED7',
                    transform: 'translateY(-5px)',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px', // Adjust the value to increase or decrease the space between the icon and text
                }}
                variant="contained"
              >
                <Typography variant="2" color="white" sx={{ margin: 'auto' }}>
                  تويتر
                </Typography>
                <Twitter style={{ fontSize: '25px' }} />
              </Button>
              {' '}
              <Button
                href={telegramInUrl}
                target="_blank"
                sx={{
                  color: 'white',
                  backgroundColor: '#017AB5',
                  transition: 'transform 0.2s',
                  fontSize: '16px',
                  borderRadius: '15px',
                  '&:hover': {
                    backgroundColor: '#439ED7',
                    transform: 'translateY(-5px)',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                rel="noopener noreferrer"
                variant="contained"
              >
                <Typography variant="2" color="white" sx={{ margin: 'auto' }}>
                  تيلجرام
                </Typography>
                <img src={telegram} alt="Telegram Icon" style={{ width: '27px', borderRadius: '20px' }} />
              </Button>
              {' '}
              <Button
                href={whatsAppUrl}
                target="_blank"
                sx={{
                  color: 'white',
                  backgroundColor: '#24D367',
                  transition: 'transform 0.2s',
                  fontSize: '16px',
                  borderRadius: '15px',
                  '&:hover': {
                    backgroundColor: '#439ED7',
                    transform: 'translateY(-5px)',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                rel="noopener noreferrer"
                variant="contained"
              >
                <Typography variant="2" color="white" sx={{ margin: 'auto' }}>
                  واتساب
                </Typography>
                <WhatsApp style={{ fontSize: '25px' }} />
              </Button>
            </Box>
          </Modal>
        </Box>
      </Box>
      </Box>

      <Stack className='Files' mb={100}>

        <Typography
          data-aos="fade-in"
          data-aos-delay="500"
          className='sub-header'
          sx={{
            fontSize: "25px",
            position: "relative",
            fontWeight: "500",
            textAlign: "center",
            mb: 30,
            mt: 10
          }}
        >
          ملفات المقرر
        </Typography>

        <Stack spacing={12} alignItems={{ xs: "center", sm: "stretch" }}>
          {subject?.files?.data?.length > 0 && subject.files.data.map(file => {
            return (
              <Fragment key={file.id}>
                <Stack
                  data-aos="fade-up"
                  direction={{ xs: "row", sm: "row" }} bgcolor={"white"} borderRadius={"20px"}
                  overflow={"hidden"}
                  border={"1px solid #8d8d8d2b"}
                  maxWidth={{ xs: "95%", sm: "100%" }}
                  alignItems={{ xs: "center", sm: "start" }}
                  sx={{
                    transition: ".5s ease-in-out",
                    "&:hover": {
                      scale: 1.05,
                      translate: "0px -3px",
                      boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
                    }
                  }}
                >
                  <Box width="50%">
                    <img src={pdfImage} width={isNonMobile ? "140px" : "100px"} alt="" className='pdfImage' />
                  </Box>
                  <Stack p={12} flex={1} spacing={8}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        textAlign: "center"
                      }}
                    > {file.file_name} </Typography>
                    <Stack alignItems={{ xs: "center", sm: "flex-end" }}>
                      <a href={import.meta.env.VITE_APP_URL + `/media/${JSON.parse(file.file_url)[0].download_link}`} download={file.file_name} target='blank'>
                        <Button
                          variant='outlined'
                          sx={{
                            justifySelf: "self-end",
                            px: "50px",
                            color: "#7d57f3",
                            borderColor: "#7d57f3"
                          }}
                        > تحميل
                        </Button>
                      </a>
                    </Stack>
                  </Stack>
                </Stack>
              </Fragment>
            )
          })}
        </Stack>

      </Stack>
      <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mt: '19px',
            mb: "8px",
            fontWeight: '400',
          }}
        >
          جميع الحقوق محفوظة © 2023 All rights reserved
        </Typography>
    </>
  );
}
