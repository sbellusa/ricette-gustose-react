import { Badge, Card, Stack } from "react-bootstrap";
import { RecipeItem } from "../../interfaces/recipeTypes";
import { IngredientItem } from "../../interfaces/ingredienTypes";

interface RecipesListItemProps {
  recipe: RecipeItem,
  ingredients: IngredientItem[]
}

const RecipesListItem = (props: RecipesListItemProps) => {

  const rec: RecipeItem = props.recipe

  const ingredientsList =
    rec.ingredients
      .map(x => x.name)
      .filter((x, i, a) => a.indexOf(x) == i) // Removes duplicates ingredients
      .map(i => ({
        bold: (props.ingredients.filter(x => x.selected).map(ing => ing.name).includes(i.replace("British ", ""))),
        ingName: i
      })) // Highlight ingredients from the selected list

  return (
    <>
      <Card className="m-2">
        <Card.Header className="p-0">
          <div className="recipe-header-image-fill" style={{ backgroundImage: `url("${rec.image}")` }}>
            <Badge bg="primary" pill className="float-end m-2">{rec.rating?.average}★ ({rec.rating?.count})</Badge>
            <Badge bg="secondary" pill className="float-start m-2">{rec.prep_time} mins</Badge>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title
            as="a"
            target="_blank"
            href={"https://www.gousto.co.uk/cookbook/recipes" + rec.url}
            className="card-text card-title h5 links-no-underline">
            {rec.title}
          </Card.Title>
          <Card.Text className="m-2 medium-text">{rec.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Stack>
            <b className="text-muted mt-2">Ingredients</b>
            <div className="m-2">
              {ingredientsList.map(i =>
                i.bold ?
                  <Badge bg="primary" className="m-1 p-2 small-text">{i.ingName}</Badge> :
                  <Badge bg="primary-subtle" className="m-1 p-2 text-muted small-text">{i.ingName}</Badge>
              )}
            </div>
          </Stack>
        </Card.Footer>
      </Card >
    </>
  )
}

export default RecipesListItem