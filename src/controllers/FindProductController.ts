import {Request,Response} from "express"
import { prismaClient } from "../database/prismaClient";


export class FindProductController {
    async handle (request: Request, response: Response) {
        try {

        
        const {id} = request.body;

        const product = await prismaClient.product.findFirst ({
            where: {
                id
            },include: {
                ProductCategory: {
                    select: {
                       category: {
                        select:{
                            name: true
                        }
                       }
                    }
                }
            }
        })
       return  response.json (product)
    } catch (erro) {
        response.json (erro)
    }
    }

     
}