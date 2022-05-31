type CelularProps = {
    image: string;
};


export const TelaDeCelular: React.ElementType = ({image}: CelularProps) => {
    return(
        <img src={image} alt="Foto de tela do aplicativo" />
    );
}