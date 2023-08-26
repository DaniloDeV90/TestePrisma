"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCategoryController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class FindCategoryController {
    async handle(request, response) {
        try {
            const { id } = request.body;
            const createCLiente = await prismaClient_1.prismaClient.category.findFirst({
                where: { id },
                include: {
                    ProductCategory: true
                }
            });
            return response.json(createCLiente);
        }
        catch (erro) {
            response.json(erro);
        }
    }
}
exports.FindCategoryController = FindCategoryController;
//# sourceMappingURL=FindCategoryController.js.map