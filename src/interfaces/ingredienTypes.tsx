export interface IngredientQueryResponse{
  count:number,
  total:number,
  items: IngredientQuery[]
}

export interface IngredientQuery {
  id: string
  name: string
  count: number
}

export interface IngredientItem extends IngredientQuery {
  selected: boolean  
}
