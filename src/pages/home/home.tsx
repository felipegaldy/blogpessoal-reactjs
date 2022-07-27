import React from "react";
import { Button, Paper } from "@material-ui/core";
import { Box } from "@mui/material";


function Home() {
    return(
        <>
            <Paper >
                <Box p={2}>
                    <Box display="flex" justifyContent="center" >
                        <h1>Hello world!</h1>
                    </Box>
                    <img src="https://obc.com.tr/wp-content/uploads/2019/01/banner-software-development.png" alt="developer-icon"
                    style={{width: "100%", height: "100%"}}
                    />
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color="primary">Botao 1</Button>
                        <Button variant="contained" color="secondary">Botao 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;