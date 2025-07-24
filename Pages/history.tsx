import React, { useState, useEffect } from "react";
import { Recipe } from "@/entities/Recipe";
import { SavedRecipe } from "@/entities/SavedRecipe";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, ChevronRight, BookOpen, History as HistoryIcon, Search, Bookmark } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function History() {
  const [generatedRecipes, setGeneratedRecipes] = useState<Recipe[]>([]);
  const [savedRecipes, setSavedRecipes] = useState<SavedRecipe[]>([]);
  const [loadingGenerated, setLoadingGenerated] = useState(true);
  const [loadingSaved, setLoadingSaved] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // TODO: Substituir por autenticação Next.js
    async function loadUserData() {
      try {
        // const userData = await User.me();
        // setCurrentUser(userData);
      } catch (error) {
        // Redirecionar para login se necessário
      }
    }
    loadUserData();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    async function loadGenerated() {
      setLoadingGenerated(true);
      try {
        // const allPublicRecipes = await Recipe.list("-created_date");
        // const userGenerated = allPublicRecipes.filter(r => r.created_by === currentUser.email);
        // setGeneratedRecipes(userGenerated);
      } catch (error) {
        // console.error(error);
      } finally {
        setLoadingGenerated(false);
      }
    }
    async function loadSaved() {
      setLoadingSaved(true);
      try {
        // const userSaved = await SavedRecipe.filter({ user_id: currentUser.id }, "-created_date");
        // setSavedRecipes(userSaved);
      } catch (error) {
        // console.error(error);
      } finally {
        setLoadingSaved(false);
      }
    }
    loadGenerated();
    if (currentUser?.plan === 'premium') {
      loadSaved();
    } else {
      setLoadingSaved(false);
    }
  }, [currentUser]);

  const groupRecipesByDate = (recipeList: any[]) => {
    const groups: any = {};
    recipeList.forEach(recipe => {
      const createdDate = new Date(recipe.created_date);
      const dateKey = format(createdDate, 'yyyy-MM-dd');
      if (!groups[dateKey]) {
        groups[dateKey] = { date: createdDate, recipes: [] };
      }
      groups[dateKey].recipes.push(recipe);
    });
    return Object.values(groups).sort((a: any, b: any) => b.date - a.date);
  };

  const groupedGeneratedRecipes = groupRecipesByDate(generatedRecipes);
  const groupedSavedRecipes = groupRecipesByDate(savedRecipes);

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) return 'Hoje';
    if (format(date, 'yyyy-MM-dd') === format(yesterday, 'yyyy-MM-dd')) return 'Ontem';
    return format(date, "d 'de' MMMM", { locale: ptBR });
  };

  const renderRecipeCard = (recipe: any, source: string) => (
    <Card key={recipe.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow card-hover">
      <div className="h-40 bg-gray-100 relative">
        {recipe.image_url ? (
          <img src={recipe.image_url} alt={recipe.title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100">
            <BookOpen size={30} className="text-amber-500 opacity-60" />
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
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{recipe.title}</h3>
          <Badge className={recipe.is_sweet ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"}>{recipe.is_sweet ? "Doce" : "Salgado"}</Badge>
        </div>
        <div className="text-[#ff7b54] flex items-center text-sm font-medium">Ver detalhes<ChevronRight size={16} /></div>
      </CardContent>
    </Card>
  );

  if (!currentUser) return <div className="flex justify-center items-center h-screen"><div className="w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"></div></div>;

  return (
    <div className="container mx-auto px-4 py-6 md:py-10 mb-20 md:mb-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Meu Histórico</h1>
        <p className="text-gray-600">Visualize suas receitas geradas e salvas</p>
      </div>
      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="generated" className="flex items-center gap-2"><HistoryIcon size={16} />Receitas Geradas</TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2" disabled={currentUser.plan !== 'premium'}><Bookmark size={16} />Receitas Salvas</TabsTrigger>
        </TabsList>
        <TabsContent value="generated" className="mt-0">
          {loadingGenerated ? (
            <div className="flex justify-center py-20"><div className="w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"></div></div>
          ) : generatedRecipes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <HistoryIcon size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">Nenhuma receita gerada ainda</h3>
              <p className="text-gray-500 mb-6">Experimente gerar receitas com os ingredientes que você tem em casa.</p>
              <Button className="bg-[#ff7b54] hover:bg-[#e45826]">Gerar minha primeira receita</Button>
            </div>
          ) : (
            <div className="space-y-8">
              {groupedGeneratedRecipes.map((group: any) => (
                <div key={group.date.toString()} className="space-y-4">
                  <h2 className="text-xl font-medium text-gray-800">{formatDate(group.date)}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.recipes.map((recipe: any) => renderRecipeCard(recipe, 'public'))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="saved" className="mt-0">
          {currentUser.plan !== 'premium' ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <Bookmark size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">Funcionalidade Premium</h3>
              <p className="text-gray-500 mb-6">Salve suas receitas favoritas fazendo upgrade para o plano Premium.</p>
              <Button className="bg-[#ff7b54] hover:bg-[#e45826]">Fazer Upgrade</Button>
            </div>
          ) : loadingSaved ? (
            <div className="flex justify-center py-20"><div className="w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"></div></div>
          ) : savedRecipes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <Bookmark size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">Nenhuma receita salva</h3>
              <p className="text-gray-500 mb-6">Salve suas receitas favoritas para acessá-las facilmente aqui.</p>
              <Button className="bg-[#ff7b54] hover:bg-[#e45826]">Descobrir Receitas</Button>
            </div>
          ) : (
            <div className="space-y-8">
              {groupedSavedRecipes.map((group: any) => (
                <div key={group.date.toString()} className="space-y-4">
                  <h2 className="text-xl font-medium text-gray-800">{formatDate(group.date)}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.recipes.map((recipe: any) => renderRecipeCard(recipe, 'saved'))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
} 