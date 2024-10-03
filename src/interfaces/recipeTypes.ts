export interface RecipesResponse{
  count:number,
  total:number,
  items: RecipeItem[]
}

export interface RecipeItem {
  url: string
  title: string
  categories?: Category[]
  id: string
  image: string
  rating?: Rating
  description?: string
  prep_time: number
  cuisine: string
  ingredients: Ingredient[]
  basics: string[]
  cooking_instructions: CookingInstruction[]
  allergens?: string[]
  nutritional_information?: NutritionalInformation
}

export interface Category {
  title?: string
  uid?: string
}

export interface Rating {
  average?: number
  count?: number
}

export interface Ingredient {
  label: string
  uid: string
  name: string
  allergens: string[]
}

export interface CookingInstruction {
  instruction: string
  image?: string
}

export interface NutritionalInformation {
  per_hundred_grams?: NutritionalTable
  per_portion?: NutritionalTable
}

export interface NutritionalTable {
  energy_kcal?: number
  energy_kj?: number
  fat_mg?: number
  fat_saturates_mg?: number
  carbs_mg?: number
  carbs_sugars_mg?: number
  fibre_mg?: number
  protein_mg?: number
  salt_mg?: number
  net_weight_mg?: number
}