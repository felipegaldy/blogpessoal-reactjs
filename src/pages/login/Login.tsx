import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundColor: "#222", color: "white", minHeight:"70vh"}}>
        <Grid alignItems='center' xs={6}>
          <Box paddingX={20} >
            <form>
              <Typography
                variant="h3"
                gutterBottom
                color="white"
                component="h3"
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Entrar
              </Typography>
              <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
              <TextField id='senha' label='Senha' variant='outlined' name='senha' type='password' margin='normal' fullWidth />
              <Box textAlign='center'  >
                <Link to={"/home"} className='text-decorator-none'>
                  <Button type='submit' variant='contained' color="primary" fullWidth >
                    Logar
                  </Button>
                </Link>
              </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom alignItems='center' >Não tem uma conta ?</Typography>
              </Box>
              <Typography variant='subtitle1' gutterBottom alignItems='center' style={{fontWeight: 'bold'}} >Cadastre-se</Typography>
            </Box>
          </Box>
        </Grid>
        {/*
        <Grid xs={6} style={{
          backgroundImage: `url(https://i0.wp.com/blog.mcmattys.com/wp-content/uploads/2020/03/1584183927_802_unDraw-open-source-illustrations-built-in-SVG-free-and-without-attribution.png?w=1080&ssl=1)`,
          backgroundRepeat: 'no-repeat',
          width: '100vh',
          minHeight: '100vh',
          backgroundSize:'cover',
          backgroundPosition: 'center',
        }} ></Grid> 
        */}
      </Grid>
    </>
  );
}

export default Login;
