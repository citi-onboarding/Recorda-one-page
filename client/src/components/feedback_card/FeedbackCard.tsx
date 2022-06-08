import { FeedbackCardStyle, FeedbackUserName, FeedbackText } from "./styles";

type FeedbackProps = { 
    userName: string,
    userText: string
};

export const Feedback: React.ElementType = ({ userName, userText }: FeedbackProps) => {
    return (
        <FeedbackCardStyle>
            <FeedbackUserName>{userName}</FeedbackUserName>
            <FeedbackText>{userText}</FeedbackText>
        </FeedbackCardStyle>
    );
}