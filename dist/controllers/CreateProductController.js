"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateProductController {
    async handle(req, res) {
        try {
            const { name, bar_code, price } = req.body;
            const produtoCriado = await prismaClient_1.prismaClient.product.create({
                data: { name, bar_code, price }
            });
            return res.json(produtoCriado);
        }
        catch (erro) {
            res.json(erro);
        }
    }
}
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=CreateProductController.js.map