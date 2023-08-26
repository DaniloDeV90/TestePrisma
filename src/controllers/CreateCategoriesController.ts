import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";


export class CreateCategoryController {
    
    async handle  (request: Request, response: Response) {
        try {
            
        
        const  {name}  = request.body;

      
        const createCLiente = await prismaClient.category.create ({
            data: {name}
        })

        return response.json (createCLiente);
    } catch (erro) {
        response.json (erro)
    }
    }

}