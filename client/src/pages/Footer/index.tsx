import api from "../../services/api";
import { useState, useEffect } from "react";

import {
  Citi,
  GithubIcon,
  HeartFooter,
  InstagramIcon,
  LinkedinIcon,
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

type FooterData = {
  socialMedia1: string,
  socialMedia2: string,
  socialMedia3: string,
}


export const FooterSection: React.ElementType = () => {

  const [links, setLinks] = useState<FooterData[]>([])
  async function getLinks() {
    try {
      const response = await api.get(`footer`);
      setLinks(response.data);
    }
    catch (error) {
      console.log("Error conecting to data base");
    }
  }

  useEffect(() => {
    getLinks()
  }, [])

  return (
    <Footer>
      <Container>
        <TopContainer>
          <Image src={LogoFooter} alt="Logo da Recorda One" id="FooterLogo" />
          <MediaContainer>
            <p id="TextFollowUs">Nos siga nas redes sociais</p>
            {
              links.map(
                (link) => [
                  <SocialMediaContainer>
                    <MediaContent socialMediaLink={link.socialMedia1} image={InstagramIcon} imageName={"Instagram icon"}></MediaContent>
                    <MediaContent socialMediaLink={link.socialMedia2} image={LinkedinIcon} imageName={"LinkedIn icon"}></MediaContent>
                    <MediaContent socialMediaLink={link.socialMedia3} image={GithubIcon} imageName={"Github Icon"}></MediaContent>
                  </SocialMediaContainer>
                ]
              )
            }
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