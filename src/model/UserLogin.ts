interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token?: string | null; //não é obrigatório , o uso da ? indica que o campo é opcional
}

export default UserLogin;