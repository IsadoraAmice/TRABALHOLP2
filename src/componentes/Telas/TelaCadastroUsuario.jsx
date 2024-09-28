import { Alert } from "react-bootstrap";
import FormCadUsuario from "./Formularios/FormCadUsuario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaUsuario from "./Tabelas/TabelaUsuario";
import { usuario } from "../../dados/mockUsuario";

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState(usuario);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo: 0,
        nome: "",
        sexo: "",
        contato: "",
        senha: ""
    });
    

    return (
        <div>
            <Pagina>
                <Alert className="mt-2 mb-2 text-center" variant="success">
                    <h2>Cadastro de Usuário</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaUsuario 
                            listaDeUsuarios={listaDeUsuarios}
                            setListaDeUsuarios={setListaDeUsuarios}
                            setExibirTabela={setExibirTabela}
                            setModoEdicao={setModoEdicao}
                            setUsuarioSelecionado={setUsuarioSelecionado}
                        /> :
                        <FormCadUsuario
                            setUsuarioSelecionado={setUsuarioSelecionado}
                            listaDeUsuarios={listaDeUsuarios}
                            setListaDeUsuarios={setListaDeUsuarios}
                            setExibirTabela={setExibirTabela}
                            usuarioSelecionado={usuarioSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </div>
    );
}