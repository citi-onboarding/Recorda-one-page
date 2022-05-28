import { NewsCard } from "../pages/news/styles";

type propsTypes = {
    newsNumber: number, 
    newsText: string,
    newsLink: string
};

export const News = (props: propsTypes) => {
    return (
        <NewsCard>
            <h3>Notícia {props.newsNumber}</h3>
            <p className="newsDescription">{props.newsText}</p>
            <p className="readMore"><a href="{props.newsLink}">Ler mais &gt;</a></p>
        </NewsCard>
    );
}