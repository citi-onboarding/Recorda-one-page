import {Request, Response } from 'express';
import { FirstSection } from '@models/FirstSection';
import { Citi, Crud } from '../global'

export default class FirstSectionController implements Crud{

    async create(request: Request, response: Response){
        const {info1Title, info1Subtitle, info2Title, info2Subtitle, info3Title, info3Subtitle, linkAppImage} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(info1Title, info1Subtitle, info2Title, info2Subtitle, info3Title, info3Subtitle, linkAppImage);
        if(isAnyUndefined) return response.status(400).send();

        const newFirstSection = {info1Title, info1Subtitle, info2Title, info2Subtitle, info3Title, info3Subtitle, linkAppImage};
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
        const {info1Title, info1Subtitle, info2Title, info2Subtitle, info3Title, info3Subtitle, linkAppImage} = request.body;

        const isAnyUndefined = await Citi.areValuesUndefined(info1Title, info1Subtitle, info2Title, info2Subtitle, info3Title, info3Subtitle, linkAppImage, id);
        if(isAnyUndefined) return response.status(400).send();

        const firstSectionWithUpdatedValues = {info1Title, info1Subtitle, info2Title, info2Subtitle, info3Title, info3Subtitle, linkAppImage};

        const {httpStatus, messageFromUpdate} = await Citi.updateValue(FirstSection, id, firstSectionWithUpdatedValues);
        return response.status(httpStatus).send({messageFromUpdate});
    }
}