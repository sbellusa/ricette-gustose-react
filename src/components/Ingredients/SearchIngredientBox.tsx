import { useState } from 'react'
import ingredientsService from '../../services/ingredients'
import { IngredientQuery } from '../../interfaces/ingredienTypes'
import SearchIngredientBoxItem from './SearchIngredientBoxItem'
import { Button, Form, InputGroup, ListGroup, OverlayTrigger, Popover } from 'react-bootstrap'

interface SearchIngredientBoxProps {
  ingredients: IngredientQuery[],
  addIngredient: (ingredient: IngredientQuery) => void
}

const SearchIngredientBox = (props: SearchIngredientBoxProps) => {

  const [searchInput, setSearchInput] = useState('')
  const [ingredientsQueryResult, setIngredientsQueryResult] = useState<IngredientQuery[]>([])

  const handleSearchInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    console.log('Input: ', input)
    setSearchInput(input);

    if (!input) {
      setIngredientsQueryResult([])
    }
    else {
      const response = await ingredientsService.getQuery(input)
      const distinctItems = response.items.filter((o1) => !props.ingredients.some((o2) => o1.id === o2.id));
      setIngredientsQueryResult(distinctItems)
    }
  }

  const resetSearch = () => {
    setSearchInput('')
    setIngredientsQueryResult([])
  }

  return (
    <div>
      <OverlayTrigger
        trigger="click"
        placement='right'
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Body>
              <ListGroup as="ul">
                {ingredientsQueryResult.map(i =>
                  <SearchIngredientBoxItem key={i.id} ingredient={i} addIngredient={props.addIngredient} />
                )}
              </ListGroup>
            </Popover.Body>
          </Popover>
        }>
        <InputGroup className="mb-3">
          <Form.Control
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder="Search for an ingredient"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={resetSearch}>X</Button>
        </InputGroup>
      </OverlayTrigger>
    </div>
  )
}

export default SearchIngredientBox