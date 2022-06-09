import { CarouselCardStyle, CarouselCardUser, CarouselUserImg, CarouselUserName, CarouselText } from "./styles";

type CarouselProps = {
    ProfilePictureLink: string, 
    PersonName: string,
    CardText: string
};

export const CarouselCard: React.ElementType = ({ ProfilePictureLink, PersonName, CardText }: CarouselProps) => {
    return (
        <CarouselCardStyle>
            <CarouselCardUser>
                <CarouselUserImg src={ProfilePictureLink} alt="Foto da pessoa que inspirou o projeto" />
                <CarouselUserName>{PersonName}</CarouselUserName>
            </CarouselCardUser>
            <CarouselText>{CardText}</CarouselText>
        </CarouselCardStyle>
    );
}