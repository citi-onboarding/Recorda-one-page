import { NewsCard } from "../pages/news/styles";

type propsType = {
    newsNumber: number, 
    newsText: string,
    newsLink: string,
    newsClass: string
};

export const News = (props: propsType) => {
    return (
        <NewsCard className={props.newsClass}>
            <h3>Notícia {props.newsNumber}</h3>
            <p className="newsDescription">{props.newsText}</p>
            <a href="{props.newsLink}"><p className="newsReadMore">Ler mais</p>&gt;</a>
        </NewsCard>
    );
}