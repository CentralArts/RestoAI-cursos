import React from "react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, ChefHat } from "lucide-react";

// Função para normalizar strings (remover acentos e converter para minúsculas)
const normalizeString = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

type Ingredient = {
  name: string;
  quantity?: string;
  unit?: string;
  userHas?: boolean;
};

type Recipe = {
  title: string;
  ingredients: Ingredient[];
  instructions: string[];
  cooking_time: number;
  difficulty: string;
  meal_type: string;
  is_sweet: boolean;
  image_url?: string;
};

type Props = {
  recipe: Recipe;
  userIngredients: string[] | string;
  loadingImage?: boolean;
};

export default function RecipeDetails({ recipe, userIngredients, loadingImage }: Props) {
  if (!recipe) return null;

  // Converter ingredients de string para array, se necessário
  const userIngredientsArray = Array.isArray(userIngredients)
    ? userIngredients
    : userIngredients.split(",");

  // Normalizar os ingredientes do usuário
  const normalizedUserIngredients = userIngredientsArray.map(ing => normalizeString(ing));

  // Verificar quais ingredientes o usuário já possui
  const ingredientStatus = recipe.ingredients.map(ing => {
    const normalizedIngName = normalizeString(ing.name);
    const hasIngredient = normalizedUserIngredients.some(userIng => {
      const normalizedUserIng = normalizeString(userIng);
      if (normalizedIngName === normalizedUserIng) return true;
      if (normalizedIngName.includes(normalizedUserIng)) return true;
      if (normalizedUserIng.endsWith("s") && normalizedIngName === normalizedUserIng.slice(0, -1)) return true;
      if (normalizedIngName.endsWith("s") && normalizedUserIng === normalizedIngName.slice(0, -1)) return true;
      return false;
    });
    return { ...ing, userHas: hasIngredient };
  });

  // Calcular porcentagem de ingredientes que o usuário já tem
  const userHasCount = ingredientStatus.filter(ing => ing.userHas).length;
  const matchPercentage = Math.round((userHasCount / ingredientStatus.length) * 100);

  return (
    <div className="space-y-6">
      <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
        {loadingImage ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"></div>
          </div>
        ) : recipe.image_url ? (
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100">
            <ChefHat size={60} className="text-amber-500 opacity-60" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="p-6 text-white">
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge className="bg-white/20 backdrop-blur-sm border-white/30">
                <Clock className="w-3 h-3 mr-1" /> {recipe.cooking_time} min
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm border-white/30">
                {recipe.difficulty}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm border-white/30">
                {recipe.meal_type}
              </Badge>
              <Badge className={`${recipe.is_sweet ? 'bg-pink-500/70' : 'bg-blue-500/70'} border-transparent`}>
                {recipe.is_sweet ? 'Doce' : 'Salgado'}
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-sm text-gray-500 mr-2">Compatibilidade de ingredientes:</span>
        <div className="flex items-center flex-1">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
            <div
              className="bg-[#ff7b54] h-2.5 rounded-full"
              style={{ width: `${matchPercentage}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-700">{matchPercentage}%</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Ingredientes</h2>
          <ul className="space-y-2">
            {ingredientStatus.map((ing, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-2 rounded-lg ${ing.userHas ? 'bg-green-50 border border-green-100' : 'bg-gray-50 border border-gray-100'}`}
              >
                <span className={`${ing.userHas ? 'text-green-800' : ''}`}>{ing.name}</span>
                <span className="text-gray-600 text-sm">
                  {ing.quantity} {ing.unit}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Modo de Preparo</h2>
          <ol className="space-y-3 ml-5 list-decimal">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
} 