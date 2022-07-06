import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsController } from './ingredients/ingredients.controller';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesService } from './recipes/recipes.service';
import { IngredientsService } from './ingredients/ingredients.service';

@Module({
  imports: [],
  controllers: [AppController, IngredientsController, RecipesController],
  providers: [AppService, RecipesService, IngredientsService],
})
export class AppModule {}
