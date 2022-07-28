import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from '@material-ui/icons/PostAdd';
import CategoryIcon from '@material-ui/icons/Category';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Navbar() {
  return (
    <>
        <AppBar position="static">
        <Toolbar variant="dense" style={{backgroundColor: "#222", display: "flex", justifyContent: "space-between"}}>
          <Box style={{cursor: "pointer"}}>
            <Typography variant="h5" color="inherit">
              <img src="../../../assets/images/DSU_Developer.png" alt="logo" width="40px" height="30px" />
            </Typography>
          </Box>
          <Box display="flex" >
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
              <HomeIcon color="inherit" fontSize="large" /> {/*home*/}
              </Typography>
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

            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                <ExitToAppIcon color="inherit" fontSize="large" />{/*LOGOUT*/}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}


export default Navbar;