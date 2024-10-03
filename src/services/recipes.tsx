import axios from 'axios'
import { RecipesResponse } from '../interfaces/recipeTypes';
const baseUrl = 'http://localhost:3000/api/recipes'


const getQuery = async (query: string[]): Promise<RecipesResponse> => {
  console.log('Initialising GET ingreditns query request...')

  const queryString= query.join(',');

  const queryUrl = `${baseUrl}/forIngredients/${queryString}`;
  const response = await axios.get(queryUrl)

  const parsed : RecipesResponse = response.data

  console.log('Success GET', parsed)
  console.log('Total entries: ', parsed.items.length)
  return parsed
}


export default { getQuery }