
import {
    InitialContainer, FraseDeEfeito, Paragrafo, BotaoDownload, TopContainer, BottonContainer,
    DataContainer, ImagemContainer, DataContent
} from "./styles";

import { Dados } from "../../components";
import { OldPeople, Celular1, Celular2 } from "../../assets";

export const Initial: React.ElementType = () => {
    return (
        <>
            <InitialContainer>
                <TopContainer>
                    <FraseDeEfeito>frase de efeito</FraseDeEfeito>
                    <Paragrafo>Is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</Paragrafo>
                    <BotaoDownload>BAIXE AGORA!</BotaoDownload>
                    <img src={OldPeople} alt="Foto de grupo de idosos" />
                </TopContainer>
                <BottonContainer>
                    <DataContainer>
                        <DataContent id="Data1"><Dados numero={154} titulo={"FAMILIAS ASSISTIDAS"} /></DataContent>
                        <DataContent id="Data2"><Dados numero={980} titulo={"MODEL SENTENCE"} /></DataContent>
                        <DataContent id="Data3"><Dados numero={253} titulo={"STANDARD CHUNK"} /></DataContent>
                    </DataContainer>
                    <ImagemContainer>
                        <img src={Celular1} id="TelaApp1" alt="Tela do aplicativo" />
                        <img src={Celular2} id="TelaApp2" alt="Tela do aplicativo" />
                    </ImagemContainer>
                </BottonContainer>
            </InitialContainer>
        </>
    );
}