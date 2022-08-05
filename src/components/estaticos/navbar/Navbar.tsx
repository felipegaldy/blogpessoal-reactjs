import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CategoryIcon from "@material-ui/icons/Category";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import { Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import ".//Navbar.css";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar() {

  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  const logout = () => {
    setToken("");
    navigate("/login");
  }


  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">
          <Box className="cursor">
            <Link to="/home" className="text-decorator-none">
              <Typography variant="h5" color="inherit">
                <img
                  src="../../../assets/images/DSU_Developer.png"
                  alt="logo"
                  width="40px"
                  height="30px"
                />
              </Typography>
            </Link>
          </Box>
          <Box display="flex">
            <Box mx={1} className="cursor">
              <Link to="/home" className="text-decorator-none cursor">
                <Typography variant="h6" color="inherit">
                  <HomeIcon color="inherit" fontSize="large" /> {/*home*/}
                </Typography>
              </Link>
            </Box>
            <Box mx={1} className="cursor">
              <Link to="/posts" className="text-decorator-none cursor">
              <Typography variant="h6" color="inherit">
                <PostAddIcon color="inherit" fontSize="large" /> {/*postagens*/}
              </Typography>
              </Link>
            </Box>
            <Box mx={1} className="cursor">
            <Link to="/temas" className="text-decorator-none cursor">
              <Typography variant="h6" color="inherit">
                <CategoryIcon color="inherit" fontSize="large" /> {/*TEMAS*/}
              </Typography>
            </Link>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                <CreateNewFolderIcon color="inherit" fontSize="large" />
                {/*CADASTRAR TEMAS*/}
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Link to="/login" className="text-decorator-none cursor">
                <Typography variant="h6" color="inherit">
                  <PersonIcon color="inherit" fontSize="large" />
                  {/*LOGIN*/}
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className="cursor">
            <Typography variant="h5" color="inherit" onClick={logout} >
              <ExitToAppIcon color="inherit" fontSize="large" />
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
