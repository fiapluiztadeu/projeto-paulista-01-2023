import React from "react";
import {ContainerPage, TittlePage} from '../../components/main'
export default function Sobre (){
return(
    <>
    <ContainerPage>
        <TittlePage>PAGINA SOBRE </TittlePage>
        <p>CONTEUDO LALALALFLFALFAL</p>
                <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        </table>
        <p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>
</ContainerPage>
    </>
)

}