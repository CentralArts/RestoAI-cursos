import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Clock, Save, Share2, Utensils, ArrowRight, X, AlertTriangle, Star } from "lucide-react";
import RecipeDetails from "@/components/RecipesDetails";

const MAX_FREE_GENERATIONS_PER_DAY = 3;
const RECIPES_PER_GENERATION_FREE = 3;
const RECIPES_PER_GENERATION_PREMIUM = 6;

export default function Generate() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loadingRecipes, setLoadingRecipes] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [recipeType, setRecipeType] = useState("all");
  const [showRecipeDialog, setShowRecipeDialog] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // TODO: Substituir por autenticação Next.js
    async function fetchUserAndIngredients() {
      try {
        // const userData = await User.me();
        // setCurrentUser(userData);
        // const searchParams = new URLSearchParams(window.location.search);
        // const ingredientsParam = searchParams.get("ingredients");
        // if (!ingredientsParam) return;
        // setIngredients(ingredientsParam.split(","));
      } catch (err) {
        // Redirecionar para Home
      }
    }
    fetchUserAndIngredients();
  }, []);

  const handleGenerateRecipesClick = async () => {
    setLoadingRecipes(true);
    setError(null);
    setRecipes([]);
    try {
      // Lógica de geração de receitas
    } catch (err) {
      setError("Erro ao gerar receitas. Tente novamente.");
      setLoadingRecipes(false);
    }
  };

  const handleSaveRecipe = async () => {
    if (!selectedRecipe || !currentUser || currentUser.plan !== "premium") return;
    setIsSaving(true);
    try {
      // await SavedRecipe.create(...)
    } catch (err) {
      // alert("Erro ao salvar a receita. Tente novamente.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleShare = () => {
    // alert("Funcionalidade de compartilhamento ser implementada em breve!");
  };

  const openRecipeDialog = (recipe: any) => {
    setSelectedRecipe(recipe);
    setShowRecipeDialog(true);
  };

  const filteredRecipes = recipeType === "all"
    ? recipes
    : recipeType === "sweet"
      ? recipes.filter(r => r.is_sweet)
      : recipes.filter(r => !r.is_sweet);

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"></div>
        <p className="ml-2">Carregando...</p>
      </div>
    );
  }

  const today = new Date().toDateString();
  const lastGenDate = currentUser.last_generation_date ? new Date(currentUser.last_generation_date).toDateString() : null;
  const dailyCount = (lastGenDate === today) ? (currentUser.daily_generations || 0) : 0;

  return (
    <div className="container mx-auto px-4 py-6 md:py-10 mb-16 md:mb-6">
      <Button variant="ghost" className="mb-6 text-gray-600">
        <ChevronLeft size={16} className="mr-1" /> Voltar
      </Button>
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Receitas com seus ingredientes</h1>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {ingredients.map((ing) => (
            <Badge key={ing} className="bg-amber-100 text-amber-800 border-amber-200">{ing}</Badge>
          ))}
        </div>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          {currentUser.plan === 'free'
            ? `Plano Gratuito: ${RECIPES_PER_GENERATION_FREE} receitas por vez. Limite: ${dailyCount}/${MAX_FREE_GENERATIONS_PER_DAY} hoje`
            : `Plano Premium: ${RECIPES_PER_GENERATION_PREMIUM} receitas por vez, sem limites!`}
        </p>
        {currentUser.plan === 'free' && (
          <Button variant="link" className="text-[#ff7b54]">Faça Upgrade para Premium!</Button>
        )}
      </div>
      <div className="flex justify-center mb-6">
        <Button onClick={handleGenerateRecipesClick} disabled={loadingRecipes || (currentUser.plan === 'free' && dailyCount >= MAX_FREE_GENERATIONS_PER_DAY)} className="bg-[#ff7b54] hover:bg-[#e45826] py-3 px-6 text-lg">
          {loadingRecipes ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              <span>Gerando...</span>
            </div>
          ) : (
            <>
              <Utensils size={18} className="mr-2" />
              Gerar Receitas
            </>
          )}
        </Button>
      </div>
      {recipes.length > 0 && (
        <Tabs defaultValue="all" onValueChange={setRecipeType} className="mb-6">
          <TabsList>
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="savory">Salgadas</TabsTrigger>
            <TabsTrigger value="sweet">Doces</TabsTrigger>
          </TabsList>
        </Tabs>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">{error}</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingRecipes ? (
          Array(currentUser.plan === "premium" ? RECIPES_PER_GENERATION_PREMIUM : RECIPES_PER_GENERATION_FREE).fill(null).map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-md animate-pulse">
              <Skeleton className="h-48 w-full mb-3" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <div className="mt-3 flex justify-between">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
            </div>
          ))
        ) : filteredRecipes.length === 0 && !error ? (
          <div className="col-span-full text-center py-16">
            <Utensils size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">Nenhuma receita gerada ainda</h3>
            <p className="text-gray-500 mb-6">Clique em "Gerar Receitas" para começar.</p>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-all card-hover" onClick={() => openRecipeDialog(recipe)}>
              <div className="h-48 bg-gray-100 relative">
                {recipe.image_url ? (
                  <img src={recipe.image_url} alt={recipe.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100">
                    <Utensils size={36} className="text-amber-500 opacity-60" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex flex-wrap gap-1">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">{recipe.difficulty}</Badge>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30"><Clock className="w-3 h-3 mr-1" /> {recipe.cooking_time} min</Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {recipe.ingredients.slice(0, 3).map((i: any) => i.name).join(", ")}
                  {recipe.ingredients.length > 3 ? ", ..." : ""}
                </p>
                <div className="flex justify-between items-center">
                  <Badge className={recipe.is_sweet ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"}>{recipe.is_sweet ? "Doce" : "Salgado"}</Badge>
                  <div className="text-[#ff7b54]">Ver detalhes</div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
      <Dialog open={showRecipeDialog} onOpenChange={setShowRecipeDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-2xl">{selectedRecipe.title}</DialogTitle>
                  <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setShowRecipeDialog(false)}>
                    <X size={20} />
                  </Button>
                </div>
              </DialogHeader>
              <RecipeDetails recipe={selectedRecipe} userIngredients={ingredients} loadingImage={false} />
              <DialogFooter className="gap-2 sm:justify-between">
                <Button variant="outline" onClick={() => setShowRecipeDialog(false)}>Fechar</Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-1" onClick={handleShare}><Share2 size={16} />Compartilhar</Button>
                  {currentUser.plan === "premium" ? (
                    <Button className="gap-1 bg-[#ff7b54] hover:bg-[#e45826]" onClick={handleSaveRecipe} disabled={isSaving}>
                      {isSaving ? <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div> : <Save size={16} />}
                      {isSaving ? "Salvando..." : "Salvar"}
                    </Button>
                  ) : (
                    <div className="text-center p-2 bg-amber-50 rounded-md">
                      <p className="text-sm text-amber-700">Assine o Premium para salvar receitas!</p>
                      <Button variant="link" size="sm" className="text-[#ff7b54]">Fazer Upgrade</Button>
                    </div>
                  )}
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={showLimitModal} onOpenChange={setShowLimitModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center"><AlertTriangle className="text-yellow-500 mr-2" /> Limite Diário Atingido</DialogTitle>
            <DialogDescription>Você atingiu o limite de {MAX_FREE_GENERATIONS_PER_DAY} gerações diárias do plano gratuito.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">Volte amanhã ou assine o Plano Premium para acesso ilimitado!</p>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button className="bg-[#ff7b54] hover:bg-[#e45826]">
              <Star size={16} className="mr-2" /> Assinar Premium
            </Button>
            <Button variant="outline" onClick={() => setShowLimitModal(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 