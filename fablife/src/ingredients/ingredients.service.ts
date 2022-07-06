import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { identity } from 'rxjs';
import { Ingredients } from 'src/ingredients.interface';

@Injectable()
export class IngredientsService {
    prisma = new PrismaClient();

    async create(
        name: string,
        aisle: string,
    ): Promise<Ingredients> {
         return await this.prisma.ingredient.create({
            data: {
                name: name,
                aisle: aisle,
            },
        });
        
        
    }

    async findAll() {
        return await this.prisma.ingredient.findMany();
    }

    async findIngredient(id: string) {
        return await this.prisma.ingredient.findFirst({
            where: {
                id: id,
            }
        });
    }

    async update(id: string, name: string, aisle: string, msg: string) {
        msg = "Ingredient update";
        await this.prisma.ingredient.update({
            where: {
                id: id
            },
            data: {
                name: name,
                aisle: aisle,
            }
        })
        return msg;
    }

    async delete(id: string, msg: string) {
        msg = "Ingredient delete"
        await this.prisma.ingredient.delete({
            where: {
                id: id
            }
        })
        return msg;
    }
}
