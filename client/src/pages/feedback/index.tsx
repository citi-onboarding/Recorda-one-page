import { Feedback } from "../../components/feedback_card/FeedbackCard";
import { SeniorsImage, FeedbackTitleEmoji } from "../../assets";
import { FeedbackContainer, FeedbackTitle, UpperFeedbacks, LowerFeedbacks, FeedbackCardsDiv, FeedbackTitleImage, FeedbackCardImg } from "./styles";
import api from "../../services/api";
import { useState, useEffect } from "react";

type FeedbackData = {
    personName: string,
    feedbackText: string
};

export const FeedbackSection: React.ElementType = () => {

    const [feedback, setFeedback] = useState<FeedbackData[]>([]);
    const getFeedback = async () => {
        const response = await api.get('feedback');
        setFeedback(response.data);
    };

    useEffect(() => {
        getFeedback();
    }, []);

    return (
        <FeedbackContainer>
            <FeedbackTitle>O que as famílias estão falando sobre nós?<FeedbackTitleImage src={FeedbackTitleEmoji} alt="Emoji do título da seção de feedbacks" /></FeedbackTitle>
            <FeedbackCardsDiv>
                <UpperFeedbacks>
                    { feedback.slice(0, 2).map((feedback) => [
                        <Feedback userName={feedback.personName} userText={feedback.feedbackText} />
                    ])}
                    <FeedbackCardImg src={SeniorsImage} alt="Imagem dos idosos" />
                </UpperFeedbacks>
                <LowerFeedbacks>
                    { feedback.slice(2, 5).map((feedback) => [
                        <Feedback userName={feedback.personName} userText={feedback.feedbackText} />
                    ])}
                </LowerFeedbacks>
            </FeedbackCardsDiv>
        </FeedbackContainer>
    );
};