import { News } from "../../components/News";
import { NewsContainer } from "./styles";
import { CardsContainer } from "./styles";

export const NewsSection = () => {
    return (
        <NewsContainer>
            <h2>Entendendo Melhor</h2>
            <CardsContainer>
                <News newsLink="" newsNumber={1} newsText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur sagittis volutpat. Aliquam nisl nibh, tincidunt at mi quis, finibus fermentum enim. Aliquam ac ultrices lectus. Fusce non luctus sapien. Integer at fringilla ex. Aenean eu enim eget nulla accumsan maximus. Mauris viverra ut libero mattis mattis. Integer imperdiet neque sed condimentum accumsan."}/>
                <News newsLink="" newsNumber={2} newsText={"Suspendisse venenatis interdum vehicula. Morbi mattis mauris et pretium vestibulum. Nullam interdum nisi quis tempor accumsan. Praesent bibendum pellentesque dolor, sed faucibus massa mollis id. Vestibulum a justo eu nulla malesuada euismod. Suspendisse a tellus ut turpis suscipit sodales sit amet sit amet risus. Vivamus et libero elit."}/>
            </CardsContainer>
        </NewsContainer>
    );
}