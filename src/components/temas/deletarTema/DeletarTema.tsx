import React, { ChangeEvent, useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../model/Tema';



function DeletarTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // id do tema a ser editado
  const [token, setToken] = useLocalStorage("token");

  const [tema, setTema] = useState<Tema>();

  useEffect(() => {
    if(token == ""){
        alert("Você precisa estar logado para acessar essa página");
        navigate("/login");
    }
    }, [token]);

    useEffect(() => {
        if(id != undefined){
            findById(id);
        }
    }, [id]);

    const findById = async (id: string) => {
        //adicionar try catch
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    };

    const sim = () => {
        navigate("/temas");
        deleteId(`/tema/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert("Tema deletado com sucesso");
    }
    const nao = () => {
        navigate("/temas");
    }

          
  return (
    <>
      <Box className='box-deletar-tema' m={2}> 
        <Card variant="outlined" className='card-deletar-tema'>
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.categoria}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box className='box-botoes-tema' >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="botao-sim" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;