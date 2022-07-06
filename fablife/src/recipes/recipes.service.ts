import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Recipes } from 'src/recipes.interface';

@Injectable()
export class RecipesService {
    prisma = new PrismaClient();

    async create(
        name : string,
        type : string,
        ingredients: string,
        instructions: string
    ): Promise<Recipes> {
        return this.prisma.recipe.create({
            data: {
                name: name,
                type: type,
                ingredients:ingredients,
                instructions: instructions,
            }
        });
    }

    async findAll() {
        return await this.prisma.recipe.findMany();
      }
  
  
      async findTraducteur(id: string): Promise<Recipes | undefined> {
        return await this.prisma.recipe.findFirst({
          where: {
            id: id,
          }
        });
      }
  
      async update(id: string, name: string, type: string, ingredients: string,
        instructions: string, msg: string) {
        msg = "BAZINGA"
         const update = await this.prisma.recipe.update({
          where: {
            id: id
          },
          data: {
            name: name,
            type: type,
            ingredients: ingredients,
            instructions: instructions,
          }
        });
        console.log(msg);
        return update
      }
  
      async delete(id: string, msg: string) {
        msg = "Recipe delete"
        await this.prisma.recipe.delete({
          where: {
            id: id
          }
        })
        return msg;
      }
}
