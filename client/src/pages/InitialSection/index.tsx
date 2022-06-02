
import {
    InitialContainer, FraseDeEfeito, Paragrafo, ButtonDownload, TopContainer, BottonContainer,
    DataContainer, ImageContainer, DataContent, Image
} from "./styles";

import { Dados } from "../../components";
import { OldPeopleImage, CellphoneImage} from "../../assets";

export const Initial: React.ElementType = () => {
    return (
        <InitialContainer>
                <TopContainer>
                    <FraseDeEfeito>Frase de efeito</FraseDeEfeito>
                    <Paragrafo>Is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</Paragrafo>
                    <ButtonDownload>BAIXE AGORA!</ButtonDownload>
                <Image src={OldPeopleImage} id="OldPeopleImage" alt="Ilustração de Grupo de Pessoas Idosas" />
                </TopContainer>
                <BottonContainer>
                    <DataContainer>
                        <DataContent id="Data1"><Dados numero={154} titulo={"FAMILIAS ASSISTIDAS"} /></DataContent>
                        <DataContent id="Data2"><Dados numero={980} titulo={"MODEL SENTENCE"} /></DataContent>
                        <DataContent id="Data3"><Dados numero={253} titulo={"STANDARD CHUNK"} /></DataContent>
                    </DataContainer>
                    <Image src={CellphoneImage} id="ScreenPhone" alt="Ilustração De Telas do Aplicatico" />
                </BottonContainer>
        </InitialContainer>
    );
}