'use client'

import { styled } from "styled-components"

export default function Table() {
    return (

        <Wrapper>
            <section>
                <table>
                    <tr>
                        <td>
                            <h1>Empresa: Monra Combate</h1>
                            <h1>Endereço: Alameda dos Anjos 616</h1>
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Tema do Treinamento:</h2>
                            <p>Noções basicas de prevenção e combate a incêndio.</p>
                        </td>
                        <td>
                            <h2>Responsáveis técnicos:</h2>
                            <p>TST responsável e Bombeiro habilitado a auxiliar nessa area (caso tenha) ou Lider da brigada</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Publico-alvo:</h2>
                            <p>Funcionários da empresa Monra Combate</p>
                        </td>
                        <td>
                            <h2>Tempo:</h2>
                            <p>4 horas/ 2 dias</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Requisito legal:</h2>
                            <p>lei: NR 23 e Leis nºs 8.078, de 11 de setembro de 1990, e 10.406, de 10 de janeiro de 2002 –
                                Código Civil;</p>
                        </td>
                        <td>
                            <h2>Recursos:</h2>
                            <p>Datashow para apresentação de slides.</p>
                            <p>Papel e caneta.</p>
                            <p>Extintores vazios para demonstração.</p>
                            <p>Local adequado para criar um foco de incêndio controlável.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Objetivo (s)</h2>
                            <li>Conscientizar conhecimento sobre como agir e como lidar com incêndios.</li>
                            <li>Disseminar conhecimentos sobre o uso prático de extintores.</li>
                        </td>
                        <td>

                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <h2>Etapas de Treinamento</h2>
                            <li>1º dia: Apresentação</li>
                            <p>O que é o fogo.</p>
                            <p>Classes de fogo.</p>
                            <p>Noções de conhecimento sobre o extintor.</p>
                            <p>Como Inspecionar o extintor.</p>
                            <p>Como usar o Extinto.</p>
                            <p>Metodos de prevenção. </p>
                            <p>Metedos de Extinção.</p>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <li>2º dia: Apresentação</li>
                            <p>Treinamentos práticos de combate.</p>
                            <p>Como evacuar e/ou liderar uma evacuação de um incêndio.</p>
                        </td>
                    </tr>
                </table>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.table`
    
        table {
            border: solid 1px;
            width: 100vw;
        }

        td {
            border: solid 1px;
            width: 100vw;
            height: 4em;
            padding: 10px;

        }

        h1{
            font-size: 2em;
        }

        h2 {
            color: red;
        }

        p {
            font-size: 1.3em;
        }

        li {
            font-size: 1.3em;
        }
`