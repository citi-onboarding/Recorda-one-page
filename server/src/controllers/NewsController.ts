import { Request, Response } from 'express';
import { News } from '@models/News';
import { Citi, Crud } from '../global';

export default class FooterController implements Crud {

    async create(request: Request, response: Response){
        const {title, description, newsLink} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, newsLink);
        if(isAnyUndefined) return response.status(400).send();

        const newNews = { title, description, newsLink };
        const {httpStatus, message} = await Citi.insertIntoDatabase(News, newNews);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(News);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: newsFound, message} = await Citi.findByID(News, id);

        if(!newsFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(News, newsFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {title, description, newsLink} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, newsLink, id);
        if(isAnyUndefined) return response.status(400).send();

        const newsWithUpdatedValues = { title, description, newsLink };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(News, id, newsWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}