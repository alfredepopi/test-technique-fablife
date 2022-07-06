import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { Ingredients } from 'src/ingredients.interface';

@Controller('ingredients')
export class IngredientsController {
    constructor(private ingredientservice: IngredientsService) {}

    @Post()
    async create(@Body() body: any, msg: string): Promise<Ingredients> {
        const post: Ingredients = await this.ingredientservice.create(
            body.name,
            body.aisle,
            
        );
        return post;
    }

    @Get()
    async findAll() {
        const allIngredients = await this.ingredientservice.findAll();
        return allIngredients;
    }

    @Get(':id')
    async findIngredient(@Param('id') id: string) {
        const OneIngredient = await this.ingredientservice.findIngredient(id);
        return OneIngredient;
    }

    @Put(':id')
    async update(@Body() body: any,@Param('id') id: string, msg: string) {
        const change = await this.ingredientservice.update(id, body.name, body.aisle, msg);
        return change;
    }

    @Delete(':id')
    async delete(@Param('id') id: string, msg: string) {
        const  deleteIngredient  = await this.ingredientservice.delete(id, msg);
        if(deleteIngredient) {
        return deleteIngredient
        }
        else {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'Conflit',
              }, HttpStatus.CONFLICT);
        }
    }
}
