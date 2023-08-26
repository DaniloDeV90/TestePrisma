"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCategorie = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateProductCategorie {
    async handle(request, response) {
        try {
            const { id_product, id_category } = request.body;
            console.log(request.body);
            const createCLiente = await prismaClient_1.prismaClient.productCategory.create({
                data: { id_category, id_product }
            });
            return response.json(createCLiente);
        }
        catch (erro) {
            response.json(erro);
        }
    }
}
exports.CreateProductCategorie = CreateProductCategorie;
//# sourceMappingURL=CreateProduct_CategoriesController.js.map