import { MediaStyle } from './styles'

type SocialProps = {
    image: string,
    imageName: string,
    socialMediaLink: string,
};

export const MediaContent: React.ElementType = ({image, imageName, socialMediaLink}: SocialProps) => {
    return(
        <MediaStyle><a href={socialMediaLink} target="_blank"><img src={image} alt={imageName} /></a></MediaStyle>
    );
}