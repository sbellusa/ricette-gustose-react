import './App.scss'
import { useState } from 'react'
import IngredientsList from './components/Ingredients/IngredientsList'
import RecipesList from './components/Recipes/RecipesList'
import { IngredientItem } from './interfaces/ingredienTypes'
import { RecipesResponse } from './interfaces/recipeTypes'
import { Stack } from 'react-bootstrap'

const App = () => {
  const [ingredients, setIngredients] = useState<IngredientItem[]>([])
  const [recipes, setRecipes] = useState<RecipesResponse>({ count: 0, total: 0, items: [] })

  return (
    <>
      <main>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
          <IngredientsList ingredients={ingredients} setIngredients={setIngredients} setRecipes={setRecipes} />
        </div>

        <div className="b-example-divider"></div>
        <Stack gap={3}>
          <h1>Ricette gustose</h1>
          <RecipesList recipes={recipes} ingredients={ingredients} />
        </Stack>
      </main>
    </>
  )
}


export default App
