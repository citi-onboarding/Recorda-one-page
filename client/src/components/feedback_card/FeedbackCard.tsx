import { FeedbackCardStyle, FeedbackCardUser, FeedbackUserImg, FeedbackUserName, FeedbackText } from "./styles";

type FeedbackProps = {
    userImage: string, 
    userName: string,
    userText: string
};

export const Feedback: React.ElementType = ({ userImage, userName, userText }: FeedbackProps) => {
    return (
        <FeedbackCardStyle>
            <FeedbackCardUser>
                <FeedbackUserImg src={userImage} alt="Foto do usuário que postou o feedback" />
                <FeedbackUserName>{userName}</FeedbackUserName>
            </FeedbackCardUser>
            <FeedbackText>{userText}</FeedbackText>
        </FeedbackCardStyle>
    );
}