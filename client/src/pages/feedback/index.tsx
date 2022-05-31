import { Feedback } from "../../components/feedback_card/FeedbackCard";
import { SeniorsImage, FeedbackTitleEmoji } from "../../assets";
import { FeedbackContainer, FeedbackTitle, UpperFeedbacks, LowerFeedbacks, FeedbackCardsDiv, FeedbackEmoji, FeedbackCardImg } from "./styles";

export const FeedbackSection: React.ElementType = () => {
    return (
        <FeedbackContainer>
            <FeedbackTitle>O que as familias estão falando sobre nós?<FeedbackEmoji src={FeedbackTitleEmoji} alt="Emoji do título da seção de feedbacks" /></FeedbackTitle>
            <FeedbackCardsDiv>
                <UpperFeedbacks>
                    <Feedback userImage={"https://pbs.twimg.com/media/EeTpvT8WAAA3VBs.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userImage={"https://pbs.twimg.com/media/EeTpvT8WAAA3VBs.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <FeedbackCardImg src={SeniorsImage} alt="Imagem dos idosos" />
                </UpperFeedbacks>
                <LowerFeedbacks>
                    <Feedback userImage={"https://pbs.twimg.com/media/EeTpvT8WAAA3VBs.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userImage={"https://pbs.twimg.com/media/EeTpvT8WAAA3VBs.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userImage={"https://pbs.twimg.com/media/EeTpvT8WAAA3VBs.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                </LowerFeedbacks>
            </FeedbackCardsDiv>
        </FeedbackContainer>
    );
}