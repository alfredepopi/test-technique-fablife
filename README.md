# Test technique Fablife

## Comment installer le projet NestJS et Prisma

### NestJS

Pour installer le projet il faudra faire les commandes suivantes:

```
cd fablife
npm install
```

### Prisma

Pour utiliser Prisma pour le projet NestJS il faut faire les commandes suivantes:

```
npm install prisma --save-dev
npx prisma
npx prisma init
```
Un fichier .env va se créer et il faudra mettre l'url de sa base de données.

## Comment utiliser le projet

Pour lancer le projet NestJS il faut faire la commande suivante:

```
npm run start
```

Pour appeler l'API, voici les requêtes HTTP pour les ingrédients et les recettes:

### Ingrédients

Méthodes GET pour une liste d'ingredients et POST:

```
http://localhost:3000/ingredients
```

Méthodes GET pour un ingrédient,PUT, DELETE:

```
http://localhost:3000/ingredients/{id}
```

### Recettes

Méthodes GET pour une liste de recettes et POST:

```
http://localhost:3000/recipes
```

Méthodes GET pour une recette,PUT, DELETE:

```
http://localhost:3000/recipes/{id}
```

