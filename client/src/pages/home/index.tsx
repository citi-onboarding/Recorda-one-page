import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi } from '../../assets';
import { InialSection } from "../inicitalSection";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <InialSection></InialSection>
        </HomeContainer>
    );
}