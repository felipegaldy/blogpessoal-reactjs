import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css'; 
import Tema from '../../../model/Tema';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaTema() {

  const [temas, setTemas] = React.useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  React.useEffect(() => {
    if(token == ''){
      alert("Você precisa estar logado para acessar essa página");
      navigate('/login');
    }
  }, [token]);
 
  const getTemas = async () => {
    //adicionar try catch
    await busca("/tema", setTemas, {
    headers: {
      'Authorization':  token
    }
  });
  }

  React.useEffect(() => {
    getTemas();
  } , [temas.length]);



  return (
    <>
    <Grid container spacing={3} className='container-tema'> 
    {
      temas.map(tema => (
      <Box className='box-tema' m={2} > 
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {tema.categoria}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box className='box-tema-botoes' mb={1.5} >
              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="botao-tema botao-atualizar" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="botao-tema " size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </Grid> 
    </>
  );
}


export default ListaTema;