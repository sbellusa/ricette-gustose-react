import { Form } from "react-bootstrap";
import { IngredientItem } from "../../interfaces/ingredienTypes";

interface IngredientsListItemProps {
  ingredient: IngredientItem,
  toggle: (ing: IngredientItem) => void
}

const IngredientsListItem = (props: IngredientsListItemProps) => {

  const toggleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    props.toggle(props.ingredient)
  };

  return (
    <>
      <li>
        <IngredientCheckbox value={props.ingredient.selected} label={props.ingredient.name} onChange={toggleChecked} />
      </li>
    </>
  )
}


interface IngredientCheckboxProps {
  label: string,
  value: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
const IngredientCheckbox = (props: IngredientCheckboxProps) => {
  return (
    <>
      {/* <label>
        <input type="checkbox" checked={props.value} onChange={props.onChange} />
        {props.label}
      </label> */}

      <div key={props.label} className="mb-3">
        <Form.Check type='switch' id={props.label}>
          <Form.Check.Input type='checkbox' checked={props.value} onChange={props.onChange} />
          <Form.Check.Label>{props.label}</Form.Check.Label>
        </Form.Check>
      </div>
    </>
  );
};

export default IngredientsListItem