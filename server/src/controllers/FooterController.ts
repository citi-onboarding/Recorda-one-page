import { Request, Response } from 'express';
import { Footer } from '@models/Footer';
import { Citi, Crud } from '../global';

export default class FooterController implements Crud {

    async create(request: Request, response: Response){
        const {logo, socialMedia1, socialMedia2, socialMedia3, phone} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(logo, socialMedia1, socialMedia2, socialMedia3, phone);
        if(isAnyUndefined) return response.status(400).send();

        const newFooter = { logo, socialMedia1, socialMedia2, socialMedia3, phone };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Footer, newFooter);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Footer);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: footerFound, message} = await Citi.findByID(Footer, id);

        if(!footerFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(Footer, footerFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {logo, socialMedia1, socialMedia2, socialMedia3, phone} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(logo, socialMedia1, socialMedia2, socialMedia3, phone, id);
        if(isAnyUndefined) return response.status(400).send();

        const footerWithUpdatedValues = { logo, socialMedia1, socialMedia2, socialMedia3, phone };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Footer, id, footerWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}