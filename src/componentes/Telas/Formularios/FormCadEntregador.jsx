import { useState } from "react";
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';
export default function FormCadEntregador(props) {
    const [entregador, setEntregador] = useState(props.entregadorSelecionado);
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if (form.checkValidity()){
            if (!props.modoEdicao){
                props.setListaDeEntregadores([...props.listaDeEntregadores, entregador]);

                props.setExibirTabela(true);
            }
            else{
                props.setListaDeEntregadores(props.listaDeEntregadores?.map((item) => {
                    if (item.codigo !== entregador.codigo)
                        return item
                    else
                        return entregador
                }));

                //voltar para o modo de inclusão
                props.setModoEdicao(false);
                props.setEntregadorSelecionado({
                    codigo:0,
                    categ:""
                });
                props.setExibirTabela(true);
            }

        }
        else{
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();

    }
    function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor    = evento.target.value; 
        setEntregador({ ...entregador, [elemento]:valor});
    }
    
    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        value={entregador.codigo}
                        disabled={props.modoEdicao}
                        onChange={manipularMudanca}
                    />
                    {props.modoEdicao && <input type="hidden" name="codigo" value={entregador.codigo} />}
                    <Form.Control.Feedback type='invalid'>Por favor, informe o código do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        value={entregador.nome}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o nome do entregador!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12">
                    <Form.Label>Sexo:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="sexo"
                        name="sexo"
                        value={entregador.sexo}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o sexo do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="12">
                    <Form.Label>Contato:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="contato"
                        name="contato"
                        value={entregador.contato}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o contato do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} md="12">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={entregador.cpf}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o CPF do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button type="submit">{props.modoEdicao ? "Alterar":"Confirmar"}</Button>
                </Col>
                <Col md={{offset:1}}>
                    <Button onClick={()=>{
                        props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>

    );




}