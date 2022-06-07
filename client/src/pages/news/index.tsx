import { News } from "../../components/NewsCard/NewsCard";
import { NewsContainer, NewsTitle, CardsContainer, NewsTitleImage } from "./styles";
import { HearthImage } from "../../assets";

export const NewsSection: React.ElementType = () => {
    return (
        <NewsContainer>
            <NewsTitle><NewsTitleImage src={HearthImage} alt="Emoji de coração" /> Entendendo melhor <NewsTitleImage src={HearthImage} alt="Emoji de coração" /></NewsTitle>
            <CardsContainer>
                <News newsName={"News1"} newsText={"À medida que a demência progride, cada pessoa encontrará sua própria maneira de lidar, reagir e se adaptar às mudanças que ela traz. Desenvolver essas estratégias de enfrentamento pode ser um processo gradual e subconsciente."} newsLink={""}/>
                <News newsName={"News2"} newsText={"Esta ficha informativa fornece algumas estratégias práticas para lidar com os problemas de comportamento preocupantes e as dificuldades de comunicação frequentemente encontradas ao cuidar de uma pessoa com demência."} newsLink={""}/>
            </CardsContainer>
        </NewsContainer>
    );
}