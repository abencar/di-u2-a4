import { recipes } from './recipes.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {receta(recipes)}
    </div>

  );
}

export function receta(recipes){
  return (
    <div>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}