import { News } from "../../components/NewsCard/NewsCard";
import { NewsContainer, SectionTitle, CardsContainer } from "./styles";
import { Hearth } from "../../assets";

export const NewsSection: React.ElementType = () => {
    return (
        <NewsContainer>
            <SectionTitle><img src={Hearth} alt="Emoji de coração" /> Entendendo melhor <img src={Hearth} alt="Emoji de coração" /></SectionTitle>
            <CardsContainer>
                <News newsNumber={1} newsText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur sagittis volutpat. Aliquam nisl nibh, tincidunt at mi quis, finibus fermentum enim. Aliquam ac ultrices lectus. Fusce non luctus sapien. Integer at fringilla ex. Aenean eu enim eget nulla accumsan maximus. Mauris viverra ut libero mattis mattis. Integer imperdiet neque sed condimentum accumsan."} newsLink={""}/>
                <News newsNumber={2} newsText={"Suspendisse venenatis interdum vehicula. Morbi mattis mauris et pretium vestibulum. Nullam interdum nisi quis tempor accumsan. Praesent bibendum pellentesque dolor, sed faucibus massa mollis id. Vestibulum a justo eu nulla malesuada euismod. Suspendisse a tellus ut turpis suscipit sodales sit amet sit amet risus. Vivamus et libero elit."} newsLink={""}/>
            </CardsContainer>
        </NewsContainer>
    );
}