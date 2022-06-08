import { News } from "../../components/NewsCard/NewsCard";
import { NewsContainer, NewsTitle, CardsContainer, NewsTitleImage } from "./styles";
import { HearthImage } from "../../assets";
import axios from "axios";
import { useState, useEffect } from "react";

type NewsData = {
    title: string,
    description: string,
    newsLink: string,
}

export const NewsSection: React.ElementType = () => {
    const [news, setNews] = useState<NewsData[]>([])
    async function getNews() {
        const response = await axios.get('http://localhost:3001/news')
        setNews(response.data)
    }
    useEffect(() => {
        getNews()
    }, [])
    return (
        <NewsContainer>
            <NewsTitle><NewsTitleImage src={HearthImage} alt="Emoji de coração" /> Entendendo melhor <NewsTitleImage src={HearthImage} alt="Emoji de coração" /></NewsTitle>
            <CardsContainer>
                { news.map((news) =>[
                        < News newsTitle={news.title} newsDescription={news.description} newsLink={news.newsLink}/>
                ])
                }
            </CardsContainer>
        </NewsContainer>
    );
}