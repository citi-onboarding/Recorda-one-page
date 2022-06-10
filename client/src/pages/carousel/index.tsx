import api from "../../services/api";
import React, { useState, useEffect } from "react";
import { Container, BackgroundCarousel, BoxText, BoxSlider, Image } from "./styles";
import Slider from 'react-slick';
import { CarouselCard } from "../../components/carousel/CarouselCard";
import { BolinhasImage } from "../../assets";

type CardsData = {
  ProfilePictureLink: string, 
  PersonName: string,
  CardText: string
}

export const Carousel: React.ElementType = () => {

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
    const response  = await api.get('carousel');
    setCard(response.data);
  }
  useEffect(()=>{
    getCards();
  }, [])

  return (
    <BackgroundCarousel id="carousel">
      <Container>
          <BoxText>
            <h1>Inspirações</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste ipsam, veniam, quidem obcaecati et delectus tempora quam at cum id sunt asperiores maxime tempore ipsum temporibus quia quo illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur totam asperiores optio nesciunt inventore autem quia explicabo vero ab? Maxime provident nihil veritatis accusamus unde soluta corrupti animi quos!</p>
          </BoxText>
          <BoxSlider>
            <Slider {...settings}>
              {card.map((card)=>[
                <CarouselCard ProfilePictureLink={card.ProfilePictureLink} PersonName={card.PersonName} CardText={card.CardText} />
              ])}
            </Slider>
          </BoxSlider>
      <Image src={BolinhasImage} alt="Ilustração de pequenas bolinhas" id="ImagemDeBolinhas"/>
      </Container>
    </BackgroundCarousel>
  );
}