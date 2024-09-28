/*import { Alert } from "react-bootstrap";
import FormCadCategorias from "./Formularios/FormCadCategoria";
import Pagina from "../layouts/Pagina";
export default function TelaCadastroCategoria(props) {
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Categoria
                    </h2>
                </Alert>
                <FormCadCategorias />
            </Pagina>
        </div>
    );
}*/

import { Alert } from "react-bootstrap";
import FormCadCategorias from "./Formularios/FormCadCategoria";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaCategorias from "./Tabelas/TabelaCategorias";
import { categorias } from "../../dados/mockCategoria";
export default function TelaCadastroCategorias(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState(categorias);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        codigo:0,
        categ:""
    });

    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Categoria
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaCategorias listaDeCategorias={listaDeCategorias}
                                        setListaDeCategorias={setListaDeCategorias} 
                                        setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setCategoriaSelecionada={setCategoriaSelecionada} /> :
                        <FormCadCategorias 
                                        categoriaSelecionada={categoriaSelecionada}
                                        listaDeCategorias={listaDeCategorias}
                                        setListaDeCategorias={setListaDeCategorias}
                                        setExibirTabela={setExibirTabela}
                                        setCategoriaSelecionada={setCategoriaSelecionada}
                                        modoEdicao={modoEdicao}
                                        setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </div>
    );
}