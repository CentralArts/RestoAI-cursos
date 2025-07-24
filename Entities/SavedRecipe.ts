export type Ingredient = {
  name: string;
  quantity?: string;
  unit?: string;
};

export type SavedRecipe = {
  user_id: string;
  original_recipe_id?: string;
  title: string;
  ingredients: Ingredient[];
  instructions: string[];
  cooking_time: number;
  difficulty: 'fácil' | 'médio' | 'difícil';
  is_sweet: boolean;
  meal_type: 'café da manhã' | 'almoço' | 'jantar' | 'sobremesa' | 'lanche';
  image_url?: string;
};