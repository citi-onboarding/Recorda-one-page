import { Feedback } from "../../components/feedback_card/FeedbackCard";
import { SeniorsImage, FeedbackTitleEmoji } from "../../assets";
import { FeedbackContainer, FeedbackTitle, UpperFeedbacks, LowerFeedbacks, FeedbackCardsDiv, FeedbackTitleImage, FeedbackCardImg } from "./styles";

export const FeedbackSection: React.ElementType = () => {
    return (
        <FeedbackContainer id="feedback">
            <FeedbackTitle>O que as famílias estão falando sobre nós?<FeedbackTitleImage src={FeedbackTitleEmoji} alt="Emoji do título da seção de feedbacks" /></FeedbackTitle>
            <FeedbackCardsDiv>
                <UpperFeedbacks>
                    <Feedback userName={"Sofia Diniz"} userText={"Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare. Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userName={"Sofia Diniz"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <FeedbackCardImg src={SeniorsImage} alt="Imagem dos idosos" />
                </UpperFeedbacks>
                <LowerFeedbacks>
                    <Feedback userName={"Sofia Diniz"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userName={"Sofia Diniz"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userName={"Sofia Diniz"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                </LowerFeedbacks>
            </FeedbackCardsDiv>
        </FeedbackContainer>
    );
}