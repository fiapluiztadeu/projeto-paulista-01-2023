import React from "react";
import imgLogo from "../../imagens/logo192.png"
import {ContainerPage, TittlePage} from '../../components/main'

export default function Home(){
    return(
        <>
        <ContainerPage>
            <TittlePage>
                Titulo da Pagina HOME
            </TittlePage>
        
                 <h3> PAGINA PRINCIPAL        </h3>
                 <h2>titulo h2</h2>
                  <img src={imgLogo} alt="imagem"/>

        </ContainerPage>
        <h2>titulo h2</h2>
        </>
    )

}