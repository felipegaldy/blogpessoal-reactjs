import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from '@material-ui/icons/PostAdd';
import CategoryIcon from '@material-ui/icons/Category';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <AppBar position="static">
        <Toolbar variant="dense" style={{backgroundColor: "#222", display: "flex", justifyContent: "space-between"}}>
          <Box style={{cursor: "pointer"}}>
            <Link to="/home" className="text-decorator-none">
              <Typography variant="h5" color="inherit">
                <img src="../../../assets/images/DSU_Developer.png" alt="logo" width="40px" height="30px" />
              </Typography>
            </Link>
          </Box>
          <Box display="flex" >
            <Box mx={1} style={{cursor: "pointer"}}>
            <Link to="/home" className="text-decorator-none" style={{ color: "white"}}>
              <Typography variant="h6" color="inherit">
              <HomeIcon color="inherit" fontSize="large" /> {/*home*/}
              </Typography>
            </Link>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                <PostAddIcon color='inherit' fontSize="large" /> {/*postagens*/} 
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                <CategoryIcon color="inherit" fontSize="large" /> {/*TEMAS*/}
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                <CreateNewFolderIcon color="inherit" fontSize="large" />{/*CADASTRAR TEMAS*/}
              </Typography>
            </Box>

            <Box mx={1} style={{cursor: "pointer" }}>
            <Link to="/login" className="text-decorator-none" style={{ color: "white"}}>
              <Typography variant="h6" color="inherit">
                <ExitToAppIcon color="inherit" fontSize="large" />{/*LOGOUT*/}
              </Typography>
              </Link>
            </Box>
          </Box>
          <Box style={{cursor: "pointer"}}>
            <Typography variant="h5" color="inherit">
              <img src="../../../assets/images/DSU_Developer.png" alt="logo" width="40px" height="30px" />
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}


export default Navbar;