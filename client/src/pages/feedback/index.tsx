import { Feedback } from "../../components/feedback_card/FeedbackCard";
import { SeniorsImage, FeedbackTitleEmoji } from "../../assets";
import { FeedbackContainer, FeedbackTitle, UpperFeedbacks, LowerFeedbacks, FeedbackCardsDiv, FeedbackTitleImage, FeedbackCardImg } from "./styles";

export const FeedbackSection: React.ElementType = () => {
    return (
        <FeedbackContainer>
            <FeedbackTitle>O que as famílias estão falando sobre nós?<FeedbackTitleImage src={FeedbackTitleEmoji} alt="Emoji do título da seção de feedbacks" /></FeedbackTitle>
            <FeedbackCardsDiv>
                <UpperFeedbacks>
                    <Feedback userImage={"https://pbs.twimg.com/media/EeTpvT8WAAA3VBs.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userImage={"https://pbs.twimg.com/media/EV6EI-wWkAA52pe?format=jpg&name=900x900"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <FeedbackCardImg src={SeniorsImage} alt="Imagem dos idosos" />
                </UpperFeedbacks>
                <LowerFeedbacks>
                    <Feedback userImage={"https://pbs.twimg.com/media/E6gI3x-WYAIeLbQ.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userImage={"https://i.ytimg.com/vi/tBq5HnDm3rw/hqdefault.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                    <Feedback userImage={"http://imagens1.ne10.uol.com.br/blogsjconline/oviral/2016/08/Olha-a-pose-do-gat%C3%A3o-ops.jpg"} userName={"João Pedro"} userText={"Fusce commodo lacus et neque luctus ornare."} />
                </LowerFeedbacks>
            </FeedbackCardsDiv>
        </FeedbackContainer>
    );
}