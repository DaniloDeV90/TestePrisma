import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";


export class CreateProductCategorie {
    async handle  (request: Request, response: Response) {
        try {

        
        const  {id_product, id_category}  = request.body;

        console.log (request.body)
        const createCLiente = await prismaClient.productCategory.create ({
            data: {id_category,id_product}
        })

        return response.json (createCLiente);
    } catch (erro) {
        response.json (erro)
    }
    }

}