import { Cell, Celular1 } from "../../assets";

type CelularProps = {
    image: string;
};



export const TelaDeCelular: React.ElementType = ({image}: CelularProps) => {
    return(
        <img src={image} alt="" />
    );
}