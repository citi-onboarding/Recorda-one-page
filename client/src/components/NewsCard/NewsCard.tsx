import { NewsCardStyle, NewsDescription, NewsReadMore, NewsRedirect, NewsTitle } from "./styles"; 

type NewsProps = {
    newsName: string, 
    newsText: string,
    newsLink: string
};

export const News: React.ElementType = ({ newsName, newsText, newsLink }: NewsProps) => {
    return (
        <NewsCardStyle>
            <NewsTitle>{newsName}</NewsTitle>
            <NewsDescription>{newsText}</NewsDescription>
            <NewsRedirect href={newsLink}><NewsReadMore>Ler mais</NewsReadMore>&gt;</NewsRedirect>
        </NewsCardStyle>
    );
}