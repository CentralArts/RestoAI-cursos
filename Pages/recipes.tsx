import React, { useState, useEffect } from "react";
import { Recipe } from "@/entities/Recipe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight, Search, Filter, Clock, Utensils, ChefHat } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [filterMealType, setFilterMealType] = useState("all");
  const [currentTab, setCurrentTab] = useState("all");

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    setLoading(true);
    // TODO: Substitua por chamada real à API ou dados mockados
    setTimeout(() => {
      setRecipes([]); // Coloque receitas mockadas aqui
      setLoading(false);
    }, 1000);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    // Em Next.js, useRouter para navegação
    // router.push(`/recipe-detail?id=${recipe.id}`);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = currentTab === "all" ||
      (currentTab === "sweet" && recipe.is_sweet) ||
      (currentTab === "savory" && !recipe.is_sweet);
    const matchesDifficulty = filterDifficulty === "all" || recipe.difficulty === filterDifficulty;
    const matchesMealType = filterMealType === "all" || recipe.meal_type === filterMealType;
    return matchesSearch && matchesType && matchesDifficulty && matchesMealType;
  });

  const resetFilters = () => {
    setFilterDifficulty("all");
    setFilterMealType("all");
    setSearchTerm("");
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-10 mb-20 md:mb-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Receitas</h1>
        <p className="text-gray-600">Explore receitas deliciosas e expanda seu repertório culinário</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-3 md:items-center mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Buscar por nome ou ingrediente..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter size={16} />
                  Filtros
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => setFilterDifficulty("all")} className={filterDifficulty === "all" ? "bg-amber-50" : ""}>Todas dificuldades</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterDifficulty("fácil")} className={filterDifficulty === "fácil" ? "bg-amber-50" : ""}>Fácil</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterDifficulty("médio")} className={filterDifficulty === "médio" ? "bg-amber-50" : ""}>Médio</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterDifficulty("difícil")} className={filterDifficulty === "difícil" ? "bg-amber-50" : ""}>Difícil</DropdownMenuItem>
                </DropdownMenuGroup>
                <div className="h-px bg-gray-100 my-2" />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => setFilterMealType("all")} className={filterMealType === "all" ? "bg-amber-50" : ""}>Todas refeições</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterMealType("café da manhã")} className={filterMealType === "café da manhã" ? "bg-amber-50" : ""}>Café da manhã</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterMealType("almoço")} className={filterMealType === "almoço" ? "bg-amber-50" : ""}>Almoço</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterMealType("jantar")} className={filterMealType === "jantar" ? "bg-amber-50" : ""}>Jantar</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterMealType("sobremesa")} className={filterMealType === "sobremesa" ? "bg-amber-50" : ""}>Sobremesa</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterMealType("lanche")} className={filterMealType === "lanche" ? "bg-amber-50" : ""}>Lanche</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" onClick={resetFilters} className="text-gray-500">Limpar</Button>
          </div>
        </div>
        <Tabs defaultValue="all" onValueChange={setCurrentTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="savory">Salgadas</TabsTrigger>
            <TabsTrigger value="sweet">Doces</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Filter size={14} /> Filtros ativos:
            {filterDifficulty !== "all" && (<Badge variant="secondary">{filterDifficulty}</Badge>)}
            {filterMealType !== "all" && (<Badge variant="secondary">{filterMealType}</Badge>)}
            {(filterDifficulty !== "all" || filterMealType !== "all") && (
              <Button variant="ghost" size="sm" onClick={resetFilters} className="h-7 text-xs">Limpar</Button>
            )}
          </div>
          <TabsContent value="all" className="m-0">
            {renderRecipeGrid(filteredRecipes, loading, handleRecipeClick)}
          </TabsContent>
          <TabsContent value="savory" className="m-0">
            {renderRecipeGrid(filteredRecipes, loading, handleRecipeClick)}
          </TabsContent>
          <TabsContent value="sweet" className="m-0">
            {renderRecipeGrid(filteredRecipes, loading, handleRecipeClick)}
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex justify-center">
        <Button variant="outline" className="border-[#ff7b54] text-[#ff7b54]">
          <Utensils size={16} className="mr-2" />
          Criar nova receita
        </Button>
      </div>
    </div>
  );
}

function renderRecipeGrid(recipes: Recipe[], loading: boolean, handleRecipeClick: (recipe: Recipe) => void) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardContent className="p-4">
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <div className="flex justify-between">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  if (recipes.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl shadow-md">
        <ChefHat size={48} className="text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-600 mb-2">Nenhuma receita encontrada</h3>
        <p className="text-gray-500 mb-6">Tente outros critérios de busca ou limpe os filtros</p>
        <Button variant="outline" onClick={() => window.location.reload()}>Recarregar receitas</Button>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Card
          key={recipe.title}
          className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow card-hover"
          onClick={() => handleRecipeClick(recipe)}
        >
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
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                  <Clock className="w-3 h-3 mr-1" /> {recipe.cooking_time} min
                </Badge>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1 line-clamp-1">{recipe.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {recipe.ingredients.slice(0, 3).map(i => i.name).join(", ")}
              {recipe.ingredients.length > 3 ? ", ..." : ""}
            </p>
            <div className="flex justify-between items-center">
              <Badge className={recipe.is_sweet ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"}>
                {recipe.is_sweet ? "Doce" : "Salgado"}
              </Badge>
              <div className="text-[#ff7b54] flex items-center text-sm font-medium">
                Ver detalhes
                <ChevronRight size={16} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 