export type Ingredient = {
  name: string;
  quantity?: string;
  unit?: string;
};

export type Recipe = {
  title: string;
  ingredients: Ingredient[];
  instructions: string[];
  cooking_time: number;
  difficulty: 'fácil' | 'médio' | 'difícil';
  meal_type: 'café da manhã' | 'almoço' | 'jantar' | 'sobremesa' | 'lanche';
  is_sweet: boolean;
  image_url?: string;
  created_by?: string;
};