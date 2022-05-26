import { Request, Response } from 'express';
import { Feedback } from '@models/Feedback';
import { Citi, Crud } from '../global'


export default class FeedbackController implements Crud{
    
    async create(request: Request, response: Response){
        const {ProfilePictureLink, PersonName, FeedbackText } = request.body;
        
        const isAnyUndefined = Citi.areValuesUndefined(ProfilePictureLink, PersonName, FeedbackText);
        if(isAnyUndefined) return response.status(400).send();

        const newFeedback = {ProfilePictureLink, PersonName, Feedback};
        const {httpStatus, message} = await Citi.insertIntoDatabase(Feedback, newFeedback);

        return response.status(httpStatus).send({message});


    }





}