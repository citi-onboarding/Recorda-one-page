import { CitiFooter, HeartFooter, LogoFooter } from "../../assets";
import { Footer, SocialMediaContainer, TopContainer, Container, MediaContent, MediaContainer, BottonContainer } from "./styles";


export const FooterSection: React.ElementType = () => {
  return (
    <Footer>
        <section>
          <TopContainer>
            <img src={LogoFooter} alt="Logo da Recorda One" />
            <SocialMediaContainer>
              <p>Nos siga nas redes sociais</p>
              <MediaContainer>
                <MediaContent>i</MediaContent>
                <MediaContent>i</MediaContent>
                <MediaContent>i</MediaContent>
              </MediaContainer>

            </SocialMediaContainer>
          </TopContainer>
            <BottonContainer>
              <hr />
              <p> Made with &lt;/&gt;  and <img src={HeartFooter} alt="" className="FooterIcon" /> by <img src={CitiFooter} alt="" id="TextFooter" className="FooterIcon" /> </p>
            </BottonContainer>
        </section>
    </Footer>
  );
}