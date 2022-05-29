
import { InitialContainer, FraseDeEfeito, Paragrafo, 
        BotaoDownload, TopContainer, BottonContainer,
        DadosContainer, ImagemContainer, DadoStyle
} from "./styles";

import { Dados } from "../../components";

import { Cell } from "../../assets";

export const Initial = () => {
    return(
        <>
        <InitialContainer>
            <TopContainer>
                <FraseDeEfeito>What is Lorem Ipsum</FraseDeEfeito>
                <Paragrafo>is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem Ipsum.</Paragrafo>
                <BotaoDownload>Baixe agora!</BotaoDownload>
            </TopContainer>
            <BottonContainer>
                <DadosContainer>
                   <DadoStyle id="Dado1"><Dados /></DadoStyle>
                   <DadoStyle id="Dado2"><Dados /></DadoStyle>
                   <DadoStyle id="Dado3"><Dados /></DadoStyle>
                </DadosContainer>
                <ImagemContainer>
                    <img src={Cell} className="imagem" id="primeiraImg" alt="Foto 1" />
                    <img src={Cell} className="imagem" id="segundaImg" alt="Foto 2" />
                </ImagemContainer>
            </BottonContainer>
        </InitialContainer>
        </>
    );
}