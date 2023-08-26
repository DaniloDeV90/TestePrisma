import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";


export class FindCategoryController {


    
    async handle  (request: Request, response: Response) {
        try {
        const  {id}  = request.body;

  
        const createCLiente = await prismaClient.category.findFirst ({
            where: {id},
             include: {
                ProductCategory: true
            }
        })

        return response.json (createCLiente);
     } catch (erro) {
        response.json (erro)
    }
    }

}