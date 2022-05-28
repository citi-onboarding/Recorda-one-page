import { NewsCard } from "../pages/news/styles";

type propsTypes = {
    newsNumber: number, 
    newsText: string,
    newsLink: string,
    newsColor: string
};

export const News = (props: propsTypes) => {
    return (
        <NewsCard className={props.newsColor}>
            <h3>Notícia {props.newsNumber}</h3>
            <p className="newsDescription">{props.newsText}</p>
            <a href="{props.newsLink}"><p className="readMore">Ler mais</p>&gt;</a>
        </NewsCard>
    );
}