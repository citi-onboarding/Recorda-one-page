import { Citi2, Heart2, LogoFooter } from "../../assets";
import { Footer, SocialMediaContainer, TopContainer, MediaContainer, BottonContainer } from "./styles";
import { MediaContent } from "../../components";


export const FooterSection: React.ElementType = () => {
  return (
    <Footer>
        <section>
          <TopContainer>
            <img src={LogoFooter} alt="Logo da Recorda One" id="FooterLogo" />
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
            <p> Made with &lt;/&gt;  and <img src={Heart2} alt="Heart Icon" className="FooterIcon" /> by <img src={Citi2} alt="Citi Icon" id="TextFooter" className="FooterIcon" /> </p>
          </BottonContainer>
        </section>
    </Footer>
  );
}