import React, { useState, useEffect } from "react";
import { Recipe } from "@/entities/Recipe";
import { SavedRecipe } from "@/entities/SavedRecipe";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowLeft, Clock, Save, Share2, Bookmark, BookmarkCheck, ChefHat, Printer, Star } from "lucide-react";

export default function RecipeDetail() {
  // TODO: Adapte para buscar dados via getServerSideProps/getStaticProps ou useRouter
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [savingState, setSavingState] = useState(false);

  useEffect(() => {
    // TODO: Buscar receita pelo id da URL (useRouter)
    setLoading(false);
  }, []);

  const handleSaveRecipeToggle = async () => {
    if (!recipe) return;
    setSavingState(true);
    setTimeout(() => {
      setIsSaved(!isSaved);
      setSavingState(false);
    }, 1000);
  };

  const handleShare = () => {
    if (!recipe) return;
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: `Confira esta receita de ${recipe.title} que encontrei no RestôAI!`,
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado!");
    }
  };

  const handlePrint = () => window.print();

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><div className="w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"></div></div>;
  }
  if (!recipe) {
    return <div className="container mx-auto px-4 py-10 text-center"><h2>Receita não encontrada</h2><Button>Voltar</Button></div>;
  }

  return (
    <div className="container mx-auto px-4 py-6 mb-16 md:mb-8 print:py-0">
      <Button variant="ghost" className="mb-6 text-gray-600 print:hidden">
        <ArrowLeft size={16} className="mr-1" /> Voltar
      </Button>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 print:shadow-none">
        <div className="relative h-64 md:h-80 bg-gray-100 print:h-0 print:hidden">
          {recipe.image_url ? (
            <img src={recipe.image_url} alt={recipe.title} className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100">
              <ChefHat size={60} className="text-amber-500 opacity-60" />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="p-6 text-white">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className="bg-white/20 backdrop-blur-sm border-white/30"><Clock className="w-3 h-3 mr-1" /> {recipe.cooking_time} min</Badge>
                <Badge className="bg-white/20 backdrop-blur-sm border-white/30">{recipe.difficulty}</Badge>
                <Badge className="bg-white/20 backdrop-blur-sm border-white/30">{recipe.meal_type}</Badge>
                <Badge className={`${recipe.is_sweet ? 'bg-pink-500/70' : 'bg-blue-500/70'} border-transparent`}>
                  {recipe.is_sweet ? 'Doce' : 'Salgado'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">{recipe.title}</h1>
            <div className="flex gap-2 print:hidden">
              <Button variant="outline" size="sm" className="gap-1" onClick={handlePrint}><Printer size={16} />Imprimir</Button>
              <Button variant="outline" size="sm" className="gap-1" onClick={handleShare}><Share2 size={16} />Compartilhar</Button>
              <Button
                variant={isSaved ? "default" : "outline"}
                size="sm"
                className={`gap-1 ${isSaved ? 'bg-[#ff7b54] hover:bg-[#e45826]' : ''}`}
                onClick={handleSaveRecipeToggle}
                disabled={savingState}
              >
                {savingState ? <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"></div> : (isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />)}
                {isSaved ? 'Salvo' : 'Salvar'}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Ingredientes</h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ing, index) => (
                      <li key={index} className="flex items-baseline">
                        <span className="w-2 h-2 rounded-full bg-[#ff7b54] mr-3 mt-2"></span>
                        <span className="flex-1">
                          <span className="font-medium">{ing.name}</span>
                          {ing.quantity && ing.unit && (<span className="text-gray-600"> - {ing.quantity} {ing.unit}</span>)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Modo de Preparo</h2>
              <ol className="space-y-4 ml-6 list-decimal">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="pl-2"><p className="text-gray-800">{step}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 