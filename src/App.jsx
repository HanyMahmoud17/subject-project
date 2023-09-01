import { ThemeProvider } from '@emotion/react';
import './App.scss'
import { createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Subject from './pages/Subject';
import About from './components/About';


function App() {

  const theme = createTheme({
    palette : {
      primary : {
        main : "#7d57f3"
      },
      secondary : {
        main : "#D20000"
      },
      text : {
        primary : "#8d8d8d",
      },
    },
    direction: 'rtl',
    spacing : 2,
    typography : {
      fontFamily :"'IBM Plex Sans Arabic', sans-serif"
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course/:id' element={<Subject />} />
            <Route path='/about-us' element={<About />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
