"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateCategoryController {
    async handle(request, response) {
        try {
            const { name } = request.body;
            const createCLiente = await prismaClient_1.prismaClient.category.create({
                data: { name }
            });
            return response.json(createCLiente);
        }
        catch (erro) {
            response.json(erro);
        }
    }
}
exports.CreateCategoryController = CreateCategoryController;
//# sourceMappingURL=CreateCategoriesController.js.map