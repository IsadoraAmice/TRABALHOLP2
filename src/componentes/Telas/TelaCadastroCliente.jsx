import { Alert } from "react-bootstrap";
import FormCadClientes from "./Formularios/FormCadClientes";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { clientes } from "../../dados/mockClientes"

export default function TelaCadastroCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeClientes, setListaDeClientes] = useState(clientes);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        codigo: 0,
        nome: "",
        endereco: "",
        email: "",
        senha: "",
        telefone: ""
    });
    

    return (
        <div>
            <Pagina>
                <Alert className="mt-2 mb-2 text-center" variant="success">
                    <h2>Cadastro de Cliente</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaClientes 
                            listaDeClientes={listaDeClientes}
                            setListaDeClientes={setListaDeClientes}
                            setExibirTabela={setExibirTabela}
                            setModoEdicao={setModoEdicao}
                            setClienteSelecionado={setClienteSelecionado}
                        /> :
                        <FormCadClientes
                            setClienteSelecionado={setClienteSelecionado}
                            listaDeClientes={listaDeClientes}
                            setListaDeClientes={setListaDeClientes}
                            setExibirTabela={setExibirTabela}
                            clienteSelecionado={clienteSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </div>
    );
}
