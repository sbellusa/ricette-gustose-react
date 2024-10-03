import { Badge, ListGroup } from 'react-bootstrap'
import { IngredientQuery } from '../../interfaces/ingredienTypes'

interface SearchIngredientBoxItemProps {
  ingredient: IngredientQuery
  addIngredient: (ingredient: IngredientQuery) => void
}

const SearchIngredientBoxItem = (props: SearchIngredientBoxItemProps) => {

  const handleSelectIngredient = () => {
    console.log('Clicked ingredient: ', props.ingredient)
    props.addIngredient(props.ingredient)
  }

  return (
    <ListGroup.Item action as="li" onClick={handleSelectIngredient} className="d-flex justify-content-between align-items-start">
      <img src={`http://localhost:3000/img/${props.ingredient.id}.jpg`} alt={props.ingredient.name} width={50} height={50} />
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.ingredient.name}</div>
      </div>
      <Badge bg="primary" pill>{props.ingredient.count}</Badge>
    </ListGroup.Item>
  )
}

export default SearchIngredientBoxItem