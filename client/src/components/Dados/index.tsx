import { Numero, Titulo} from "./styles";

type DadosProps = {
    numero: number;
    titulo: string;
};

export const Dados: React.ElementType = ({numero, titulo}: DadosProps) => { 
    return (
        <>
            <Numero>{numero}</Numero>
            <Titulo>{titulo}</Titulo>
        </>
    );
} 