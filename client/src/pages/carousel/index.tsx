import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { Container, BackgroundCarousel, BoxText, BoxSlider } from "./styles";
import Slider from 'react-slick';
import { CarouselCard } from "../../components/carousel/CarouselCard";


type CardsData = {
  userImage: string, 
  userName: string,
  userText: string
}

export class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };

    
    const [card, setCard] = useState<CardsData[]>([])
    async function getCards(){
      const response  = await axios.get('http://localhost:3001/carousel')
      setCard(response.data)
    }
    useEffect(()=>{
      getCards
    }, [])

    return (
      <div>
        <Slider {...settings}>
          {card.map((card)=>[
            <CarouselCard ProfilePictureLink={card.userImage} PersonName={card.userName} CardText={card.userText} />
          ])}
        </Slider>
      </div>
    );
  }
}

export const Carousel: React.ElementType = () => {
  return (
    <BackgroundCarousel>
      <Container>
          <BoxText>
            <h1>Inspirações</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste ipsam, veniam, quidem obcaecati et delectus tempora quam at cum id sunt asperiores maxime tempore ipsum temporibus quia quo illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur totam asperiores optio nesciunt inventore autem quia explicabo vero ab? Maxime provident nihil veritatis accusamus unde soluta corrupti animi quos!</p>
          </BoxText>
          <BoxSlider>
            <SimpleSlider/>
          </BoxSlider>
      </Container>
    </BackgroundCarousel>
  );
}