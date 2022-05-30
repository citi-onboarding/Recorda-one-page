import { Numero, Titulo} from "./styles";

interface Props{
    numero: number;
    titulo: string;
}

export const Dados = ({numero, titulo}: Props) => { 
    return (
        <>
            <Numero>{numero}</Numero>
            <Titulo>{titulo}</Titulo>
        </>
    );
}