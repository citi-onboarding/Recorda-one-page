import {
    ButtonDownload,
} from "./styles";

type ButtonProps = {
    value: string;
};

export const DownloadButton: React.ElementType = ({value}: ButtonProps) => {

    return( 
        <ButtonDownload>{value}</ButtonDownload>
    );
}