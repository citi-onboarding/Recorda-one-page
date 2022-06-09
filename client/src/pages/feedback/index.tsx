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
                    <Feedback userName={feedback[0].personName} userText={feedback[0].feedbackText} />
                    <Feedback userName={feedback[1].personName} userText={feedback[1].feedbackText} />
                    <FeedbackCardImg src={SeniorsImage} alt="Imagem dos idosos" />
                </UpperFeedbacks>
                <LowerFeedbacks>
                    <Feedback userName={feedback[2].personName} userText={feedback[2].feedbackText} />
                    <Feedback userName={feedback[3].personName} userText={feedback[3].feedbackText} />
                    <Feedback userName={feedback[4].personName} userText={feedback[4].feedbackText} />
                </LowerFeedbacks>
            </FeedbackCardsDiv>
        </FeedbackContainer>
    );
};