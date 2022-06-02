import { NewsCardStyle, NewsDescription, NewsReadMore, NewsRedirect, NewsTitle } from "./styles"; 

type NewsProps = {
    newsNumber: number, 
    newsText: string,
    newsLink: string
};

export const News: React.ElementType = ({ newsNumber, newsText, newsLink }: NewsProps) => {
    return (
        <NewsCardStyle>
            <NewsTitle>Notícia {newsNumber}</NewsTitle>
            <NewsDescription>{newsText}</NewsDescription>
            <NewsRedirect href={newsLink}><NewsReadMore>Ler mais</NewsReadMore>&gt;</NewsRedirect>
        </NewsCardStyle>
    );
}