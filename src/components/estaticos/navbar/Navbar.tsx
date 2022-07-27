import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";



function Navbar() {
  return (
    <>
        <AppBar position="static">
        <Toolbar variant="dense" style={{backgroundColor: "#222", display: "flex", justifyContent: "space-between"}}>
          <Box style={{cursor: "pointer"}}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>
          <Box display="flex" >
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                HOME
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                POSTAGENS
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                TEMAS
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                CADASTRAR TEMAS
              </Typography>
            </Box>

            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                LOGOUT
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}


export default Navbar;