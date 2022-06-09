import { 
  Citi,
  HeartFooter,
  LogoFooter
} from "../../assets";


import {
  Footer,
  SocialMediaContainer,
  TopContainer,
  MediaContainer,
  BottonContainer,
  Container,
  Image, 
} from "./styles";

import {
  MediaContent,
} from "../../components";


export const FooterSection: React.ElementType = () => {
  return (
    <Footer>
      <Container>
          <TopContainer>
            <Image src={LogoFooter} alt="Logo da Recorda One" id="FooterLogo" />
            <MediaContainer>
              <p id="TextFollowUs">Nos siga nas redes sociais</p>
              <SocialMediaContainer>
                <MediaContent socialMediaLink={"#"} image={HeartFooter} imageName={"Instagram icon"}></MediaContent>
                <MediaContent socialMediaLink={"#"} image={HeartFooter} imageName={"LinkedIn icon"}></MediaContent>
                <MediaContent socialMediaLink={"#"} image={HeartFooter} imageName={"Github Icon"}></MediaContent>
              </SocialMediaContainer>
            </MediaContainer>
          </TopContainer>
          <BottonContainer>
            <hr />
            <p> Made with &lt;/&gt;  and <Image src={HeartFooter} alt="Heart Icon" className="FooterIcon" /> by <Image src={Citi} alt="Citi Icon" id="TextFooter" className="FooterIcon" /> </p>
          </BottonContainer>
      </Container>   
    </Footer>
  );
}