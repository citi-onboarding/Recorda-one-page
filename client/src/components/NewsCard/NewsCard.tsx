import { NewsCardStyle, NewsDescription, NewsReadMore, NewsRedirect, NewsTitle } from "./styles"; 

type NewsProps = {
    newsTitle: string, 
    newsDescription: string,
    newsLink: string
};

export const News: React.ElementType = ({ newsTitle, newsDescription, newsLink }: NewsProps) => {
    return (
        <NewsCardStyle>
            <NewsTitle>{newsTitle}</NewsTitle>
            <NewsDescription>{newsDescription}</NewsDescription>
            <NewsRedirect href={newsLink}><NewsReadMore>Ler mais</NewsReadMore>&gt;</NewsRedirect>
        </NewsCardStyle>
    );
}