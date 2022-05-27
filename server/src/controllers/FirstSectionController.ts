import {Request, Response } from 'express';
import { FirstSection } from '@models/FirstSection';
import { Citi, Crud } from '../global'

export default class FirstSectionController implements Crud{

    async create(request: Request, response: Response){
        const {info1, info2, info3, linkAppImage} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(info1, info2, info3, linkAppImage);
        if(isAnyUndefined) return response.status(400).send();

        const newFirstSection = { info1, info2, info3, linkAppImage};
        const {httpStatus, message} = await Citi.insertIntoDatabase(FirstSection, newFirstSection);

        return response.status(httpStatus).send({message});
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(FirstSection);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: firstSectionFound, message} = await Citi.findByID(FirstSection, id);

        if(!firstSectionFound) return response.status(400).send({message});

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(FirstSection, firstSectionFound);
        return response.status(httpStatus).send({messageFromDelete});
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {info1, info2, info3, linkAppImage} = request.body;

        const isAnyUndefined = await Citi.areValuesUndefined(info1, info2, info3, linkAppImage);
        if(isAnyUndefined) return response.status(400).send();

        const firstSectionWitchUpdates = {info1, info2, info3, linkAppImage};

        const {httpStatus, messageFromUpdate} = await Citi.updateValue(FirstSection, id, firstSectionWitchUpdates);
        return response.status(httpStatus).send({messageFromUpdate});
    }
}