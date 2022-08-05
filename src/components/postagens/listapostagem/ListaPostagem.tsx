import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import Postagem from '../../../model/Postagem';

function ListaPostagem() {

  const [postagens, setPostagens] = React.useState<Postagem[]>([]);
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  React.useEffect(() => {
    if(token == ''){
      alert("Você precisa estar logado para acessar essa página");
      navigate('/login');
    }
  } , [token]);

  const getPostagens = async () => {
    await busca("/postagem", setPostagens, {
    headers: {
      'Authorization':  token
    }
  });
  }
  React.useEffect(() => {
    getPostagens();
  } , [postagens.length]);



  return (
    <>
    {
      postagens.map(postagem => (
      <Box m={2} >
        <Card variant="outlined"> 
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {postagem.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.texto}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.tema?.categoria}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
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
    </>)
}

export default ListaPostagem;