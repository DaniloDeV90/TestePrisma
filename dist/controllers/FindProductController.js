"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProductController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class FindProductController {
    async handle(request, response) {
        try {
            const { id } = request.body;
            const product = await prismaClient_1.prismaClient.product.findFirst({
                where: {
                    id
                }, include: {
                    ProductCategory: {
                        select: {
                            category: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            });
            return response.json(product);
        }
        catch (erro) {
            response.json(erro);
        }
    }
}
exports.FindProductController = FindProductController;
//# sourceMappingURL=FindProductController.js.map