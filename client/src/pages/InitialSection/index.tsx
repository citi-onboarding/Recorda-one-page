import {
    InitialContainer,
    FraseDeEfeito,
    Paragrafo,
    ButtonDownload,
    TopContainer,
    BottonContainer,
    DataContainer,
    DataContent,
    Image,
} from "./styles";

import {
    Dados,
} from "../../components";

import {
    OldPeopleImage,
    CellphoneImage,
    DownloadVector,
} from "../../assets";

import api from "../../services/api";

export const Initial: React.ElementType = () => {


    return (
        <InitialContainer>
            <TopContainer>
                <FraseDeEfeito>Recordar é amar</FraseDeEfeito>
                <Paragrafo>
                    Demonstre todo seu amor pelos idosos na sua vida com o<br/> aplicativo Recorda.
                    Ajude-os a administrar seus remédios e<br/> histórico médico de maneira simples e organizada.
                </Paragrafo>
                <ButtonDownload>
                    <Image src={DownloadVector} id="DownloadImageVector"></Image>
                </ButtonDownload>
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