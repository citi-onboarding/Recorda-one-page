import { Citi2, Heart2, LogoFooter2 } from "../../assets";
import { Footer, SocialMediaContainer, TopContainer, MediaContainer, BottonContainer } from "./styles";
import { MediaContent } from "../../components";


export const FooterSection: React.ElementType = () => {
  return (
    <Footer>
        <section>
          <TopContainer>
            <img src={LogoFooter2} alt="Logo da Recorda One" id="FooterLogo" />
            <MediaContainer>
              <p id="TextFollowUs">Nos siga nas redes sociais</p>
              <SocialMediaContainer>
                <MediaContent image={Heart2}></MediaContent>
                <MediaContent image={Heart2}></MediaContent>
                <MediaContent image={Heart2}></MediaContent>
              </SocialMediaContainer>
            </MediaContainer>
          </TopContainer>
          <BottonContainer>
            <hr />
            <p> Made with &lt;/&gt;  and <img src={Heart2} alt="" className="FooterIcon" /> by <img src={Citi2} alt="" id="TextFooter" className="FooterIcon" /> </p>
          </BottonContainer>
        </section>
    </Footer>
  );
}