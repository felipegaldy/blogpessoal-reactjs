import axios from "axios";

export const api = axios.create({
    baseURL: "https://blogpessoalgaldy.herokuapp.com/"
    // baseURL: "https://blogpessoalgaldy.herokuapp.com/swagger-ui/index.html"
});

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados);
    setDado(resposta.data.token);
}

export const cadastroUsuario  = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados);
    setDado(resposta.data);
}

//headers: { Authorization: `Bearer ${token}` } header recebe o token e faz veirificação de autorização
export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header);
    setDado(resposta.data);
}

// export const cadastroTema = async (url: any, dados: any, setDado: any) => {
//     const resposta = await api.post(url, dados);
//     setDado(resposta.data);
// }

/*
    url: /usuarios/logar

    dados: {
        usuario: "",
        senha: ""
    }

    resposta é um objeto de objetos

    setdado: {
        id: number,
        nome: string,
        usuario: string,
        senha: string,
        foto: string,
        token?: string | null
    }
*/