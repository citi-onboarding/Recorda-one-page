import api from "../../services/api";
import { useState, useEffect } from "react";

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

type InitialData = {
    id: number,
    info1Title: string,
    info1Subtitle: string,
    info2Title: string,
    info2Subtitle: string,
    info3Title: string,
    info3Subtitle: string,
}

export const Initial: React.ElementType = () => {

    const [data, setData] = useState<InitialData[]>([]);


    async function getData() {
        try {
            const response = await api.get(`firstsection`);
            setData(response.data);
        } catch (error) {
            console.log('Error connecting to database');
        }
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <InitialContainer>
            <TopContainer>
                <FraseDeEfeito>Recordar é amar</FraseDeEfeito>
                <Paragrafo>
                    Demonstre todo seu amor pelos idosos na sua vida com o<br /> aplicativo Recorda.
                    Ajude-os a administrar seus remédios e<br /> histórico médico de maneira simples e organizada.
                </Paragrafo>
                <ButtonDownload>
                    <Image src={DownloadVector} id="DownloadImageVector"></Image>
                </ButtonDownload>
                <Image src={OldPeopleImage} id="OldPeopleImage" alt="Ilustração de Grupo de Pessoas Idosas" />
            </TopContainer>
            <BottonContainer>
                {
                    data.map(
                        (data) => [
                            <DataContainer key={data.id}>
                                <DataContent id="Data1"><Dados numero={data.info1Title} titulo={data.info1Subtitle} /></DataContent>
                                <DataContent id="Data2"><Dados numero={data.info2Title} titulo={data.info2Subtitle} /></DataContent>
                                <DataContent id="Data3"><Dados numero={data.info3Title} titulo={data.info3Subtitle} /></DataContent>
                            </DataContainer>
                        ]
                    )
                }
                <Image src={CellphoneImage} id="ScreenPhone" alt="Ilustração De Telas do Aplicatico" />
            </BottonContainer>
        </InitialContainer>
    );
}