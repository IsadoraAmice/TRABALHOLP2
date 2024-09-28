import { useState } from "react";
import { entregador } from "../../dados/mockEntregador";
import Pagina from "../layouts/Pagina";
import TabelaEntregadores from "./Tabelas/TabelaEntregadores";
import FormCadEntregador from "./Formularios/FormCadEntregador";
import { Alert } from "react-bootstrap";
export default function TelaCadastroEntregador(props){
    const [exibirTabela,setExibirTabela]=useState(true);
    const [listaDeEntregadores,setListaDeEntregadores]=useState(entregador);
    const[modoEdicao,setModoEdicao]=useState(false);
    const[entregadorSelecionado,setEntregadorSelecionado]=useState({
        codigo: 0,
        nome: "",
        sexo:"",
        contato:"",
        cpf:""
    });
    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                        <h2>
                            Cadastro de Entregadores
                        </h2>
                </Alert>
                {
                    exibirTabela ?
                    <TabelaEntregadores listaDeEntregadores={listaDeEntregadores}
                                        setListaDeEntregadores={setListaDeEntregadores}
                                        setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setEntregadorSelecionado={setEntregadorSelecionado}/> :
                    <FormCadEntregador
                                        entregadorSelecionado={entregadorSelecionado}
                                        listaDeEntregadores={listaDeEntregadores}
                                        setListaDeEntregadores={setListaDeEntregadores}
                                        setExibirTabela={setExibirTabela}
                                        setEntregadorSelecionado={setEntregadorSelecionado}
                                        modoEdicao={modoEdicao}
                                        setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </div>
    );

}