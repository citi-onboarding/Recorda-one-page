import { MediaStyle } from './styles'

type SocialProps = {
    image: string;
    imageName: string;
};

export const MediaContent: React.ElementType = ({image, imageName}: SocialProps) => {
    return(
        <MediaStyle><img src={image} alt={imageName} /></MediaStyle>
    );
}