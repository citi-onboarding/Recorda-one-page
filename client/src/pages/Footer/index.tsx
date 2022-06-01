import { LogoFooter } from "../../assets";
import { Footer, RedesSociais, TopContainer, Redes} from "./styles";


export const FooterSection: React.ElementType = () => {
    return (
        <Footer>
          <TopContainer>
            <img src={LogoFooter} alt="Logo Recorda One" />
            <RedesSociais>
                <p>Nos siga nas redes sociais</p>
                <Redes>
                <img src="" alt="Rede Social 1" />
                <img src="" alt="Rede Social 1" />
                <img src="" alt="Rede Social 1" />
                </Redes>
            </RedesSociais>
          </TopContainer>
          <hr />
          <p>Mad with .. and .. by Citi </p>
        </Footer>
    );
}