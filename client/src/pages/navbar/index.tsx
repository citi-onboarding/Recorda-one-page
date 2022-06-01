import { NavbarContainer, SearchBox, FlexBox } from "./styles";
import { LogoRecorda, SearchIcon } from "../../assets";

export const Navbar: React.ElementType = () => {
    return(
        <NavbarContainer>
            <nav>
                <img src={LogoRecorda} alt="Logo do site"/>
                <FlexBox>
                    <ul>
                        <li>
                            <a href="#">Link1</a>
                        </li>
                        <li>
                            <a href="#">Link2</a>
                        </li>
                        <li>
                            <a href="#">Link3</a>
                        </li>
                        <li>
                            <a href="#">Link4</a>
                        </li>
                    </ul>

                        <SearchBox>
                            <span><img src={SearchIcon} alt="" /></span>
                            <input type="search" name="" id="" />
                        </SearchBox>
                </FlexBox>
            </nav>
        </NavbarContainer>
    )
}

