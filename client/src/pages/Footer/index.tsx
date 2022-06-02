import { Citi2, Heart2, LogoFooter } from "../../assets";
import { Footer, SocialMediaContainer, TopContainer, MediaContainer, BottonContainer, Container, Image } from "./styles";
import { MediaContent } from "../../components";


export const FooterSection: React.ElementType = () => {
  return (
    <Footer>
      <Container>
          <TopContainer>
            <Image src={LogoFooter} alt="Logo da Recorda One" id="FooterLogo" />
            <MediaContainer>
              <p id="TextFollowUs">Nos siga nas redes sociais</p>
              <SocialMediaContainer>
                <MediaContent image={Heart2} imageName={"Heart Icon"}></MediaContent>
                <MediaContent image={Heart2} imageName={"Heart Icon"}></MediaContent>
                <MediaContent image={Heart2} imageName={"Heart Icon"}></MediaContent>
              </SocialMediaContainer>
            </MediaContainer>
          </TopContainer>
          <BottonContainer>
            <hr />
            <p> Made with &lt;/&gt;  and <Image src={Heart2} alt="Heart Icon" className="FooterIcon" /> by <Image src={Citi2} alt="Citi Icon" id="TextFooter" className="FooterIcon" /> </p>
          </BottonContainer>
      </Container>   
    </Footer>
  );
}