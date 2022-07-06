import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipes } from 'src/recipes.interface';

@Controller('recipes')
export class RecipesController {
    constructor(private recipesservices: RecipesService) {}

    @Post()
    async create(@Body() body: any): Promise<Recipes> {
        const post: Recipes = await this.recipesservices.create(
            body.name,
            body.type,
            body.ingredients,
            body.instructions
        );
        return post;
    }

    @Get()
    async findAll() {
        const allPosts = await this.recipesservices.findAll();
        return allPosts;
    }

    @Get(':id')
    async findUser(@Param('id') id: string) {
        const OnePost = await this.recipesservices.findTraducteur(id);
        return OnePost;
    }

    @Put(':id')
    async update(@Body() body: any,@Param('id') id: string, msg: string) {
        const change = await this.recipesservices.update(id, body.name, body.type, body.ingredients, body.instructions, msg);
        return change;
    }

    @Delete(':id')
    async delete(@Param('id') id: string, msg: string) {
        const deleteTraducteur = await this.recipesservices.delete(id, msg);
        return deleteTraducteur;
    }
}
