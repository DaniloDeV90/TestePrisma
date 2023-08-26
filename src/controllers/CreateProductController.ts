import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
export class CreateProductController {
    async handle(req: Request, res: Response) {

        try {
        const { name, bar_code, price } = req.body;

      

        const produtoCriado = await prismaClient.product.create({

            data: { name, bar_code, price }

        })
        return res.json(produtoCriado);

        } catch (erro) {
            res.json (erro)
        }
    
    }
} 