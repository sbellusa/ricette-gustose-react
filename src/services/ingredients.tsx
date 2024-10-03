import axios from 'axios'
import { IngredientQueryResponse } from '../interfaces/ingredienTypes';
const baseUrl = 'http://localhost:3000/api/ingredients' //http://localhost:3000/api/ingredients/


const getQuery = async (query: string): Promise<IngredientQueryResponse> => {
  console.log('Initialising GET ingredients query request...')

  const queryUrl = `${baseUrl}/${query}`;
  const response = await axios.get(queryUrl)

  const parsed : IngredientQueryResponse = response.data

  console.log('Success GET', parsed)
  console.log('Total entries: ', parsed.items.length)
  return parsed
}


export default { getQuery }