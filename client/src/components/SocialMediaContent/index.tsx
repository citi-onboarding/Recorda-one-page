import { MediaStyle } from './styles'

type SocialProps = {
    image: string;
};

export const MediaContent: React.ElementType = ({image}: SocialProps) => {
    return(
        <MediaStyle><img src={image} alt="" /></MediaStyle>
    );
}