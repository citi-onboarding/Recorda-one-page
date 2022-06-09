import { NavbarContainer, SearchBox, FlexBox, MaxWidth } from "./styles";
import { LogoRecorda, SearchIcon } from "../../assets";

export const Navbar: React.ElementType = () => {
    return(
        <NavbarContainer>
            <nav>
                <MaxWidth>
                    <img src={LogoRecorda} alt="Logo do site"/>
                    <FlexBox>
                        <ul>
                            <li>
                                <a href="#initial_section">Sobre o App</a>
                            </li>
                            <li>
                                <a href="#carousel">Inspirações</a>
                            </li>
                            <li>
                                <a href="#feedback">Avaliações</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>

                            <SearchBox>
                                <span><img src={SearchIcon} alt="" /></span>
                                <input type="search" name="" id="" />
                            </SearchBox>
                    </FlexBox>
                </MaxWidth>
            </nav>
        </NavbarContainer>
    )
}

