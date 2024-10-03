import SearchIngredientBox from './SearchIngredientBox'
import IngredientsListItem from './IngredientsListItem'
import recipesService from '../../services/recipes'
import { IngredientQuery, IngredientItem } from '../../interfaces/ingredienTypes'
import { RecipesResponse } from '../../interfaces/recipeTypes'
import { ListGroup } from 'react-bootstrap'

interface IngredientsListProps {
  ingredients: IngredientItem[],
  setIngredients: (ingredient: IngredientItem[]) => void
  setRecipes: (ingredient: RecipesResponse) => void
}


const IngredientsList = (props: IngredientsListProps) => {

  const addIngredient = (ing: IngredientQuery) => {
    let allSelected = props.ingredients
    const found = allSelected.filter(i => i.id === ing.id)

    if (found && found.length) {
      console.log(`Ingredient ${ing.name} already exists`)
    }
    else {
      const newIngredient: IngredientItem = { ...ing, selected: true }
      allSelected = allSelected.concat(newIngredient)
      props.setIngredients(allSelected)
      console.log(`Added ingredient ${ing.name}`)
      updateRecipes(allSelected)
    }

    console.log("Selected ingredients: ", allSelected)
  }

  const updateRecipes = (ing: IngredientItem[]) => {
    if (ing && ing.length) {
      recipesService.getQuery(ing.filter(x => x.selected === true).map(x => x.name)).then(response => {
        console.log(`Found ${response.count} recipes`)
        props.setRecipes(response)
      })
    }
    else {
      props.setRecipes({ count: 0, total: 0, items: [] })
    }
  }

  const toggleSelection = (ing: IngredientItem) => {
    const found = props.ingredients.filter(i => i.id === ing.id)

    if (found && found.length) {
      const newArray = props.ingredients.map(i => i.id !== ing.id ? i : { ...ing, selected: !ing.selected })

      props.setIngredients(newArray)

      updateRecipes(newArray)
    }
  }

  return (
    <>      
    <h2>Ingredients:</h2>
      <SearchIngredientBox ingredients={props.ingredients} addIngredient={addIngredient} />

      <ListGroup>
        {props.ingredients.map(i =>
          <IngredientsListItem key={i.id} ingredient={i} toggle={toggleSelection} />
        )}
      </ListGroup>


    </>
  )
}

export default IngredientsList