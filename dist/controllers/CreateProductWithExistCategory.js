"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductWithExistCategory = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateProductWithExistCategory {
    async handle(request, response) {
        try {
            const { name, price, bar_code, id_category } = request.body;
            const product = await prismaClient_1.prismaClient.productCategory.create({
                data: {
                    product: {
                        create: {
                            bar_code,
                            name,
                            price
                        }
                    },
                    category: {
                        connect: {
                            id: id_category
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
exports.CreateProductWithExistCategory = CreateProductWithExistCategory;
//# sourceMappingURL=CreateProductWithExistCategory.js.map