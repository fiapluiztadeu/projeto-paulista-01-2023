import React from "react";
import apiCEP from "../../services/apiCEP";
import { useState } from "react";

export default function Cep(){
    return(
        <>
        <h1>PESQUISAR CEP</h1>
        <h3> AQUI VAI MEU FORMS DE PESQUISA CEP        </h3>
        DIGITE SEU CEP:<input  type="text" placeholder="digite um cep" />

        </>
    )

}