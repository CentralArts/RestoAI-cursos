import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Clock, X, ExternalLink } from "lucide-react";

// TODO: Substitua ALL_RECIPES por dados reais ou props
const ALL_RECIPES = [/* ... receitas ... */];

export default function RecipesCarousel() {
  const [showRecipeDialog, setShowRecipeDialog] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    const getRandomRecipes = () => {
      const shuffled = [...ALL_RECIPES].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    };
    const recipes = getRandomRecipes();
    setDisplayedRecipes(recipes);
    recipes.forEach(recipe => {
      const img = new window.Image();
      img.src = recipe.image;
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [recipe.id]: true }));
      };
    });
  }, []);

  const openRecipeDialog = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipeDialog(true);
  };

  return (
    <>
      <div className="px-16 overflow-x-auto -mx-4">
        <div className="flex space-x-4 min-w-full">
          {displayedRecipes.map((recipe) => (
            <Card key={recipe.id} className="min-w-[280px] max-w-[280px] shadow-md overflow-hidden card-hover">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white/90 text-gray-800 font-normal">
                      <Clock className="w-3 h-3 mr-1" />
                      {recipe.time} min
                    </Badge>
                    <Badge className={`bg-white/90 text-gray-800 font-normal`}>
                      {recipe.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg line-clamp-1 mb-2">{recipe.title}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Ingredientes principais:</p>
                  <div className="flex flex-wrap gap-1">
                    {recipe.ingredients.slice(0, 3).map((ing, i) => (
                      <Badge key={i} variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">
                        {ing.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  variant="link"
                  className="mt-4 text-[#ff7b54] hover:text-[#e45826] text-sm flex items-center gap-1 transition-colors p-0"
                  onClick={() => openRecipeDialog(recipe)}
                >
                  Ver receita completa
                  <ExternalLink size={14} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Dialog open={showRecipeDialog} onOpenChange={setShowRecipeDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-2xl">{selectedRecipe.title}</DialogTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setShowRecipeDialog(false)}
                  >
                    <X size={20} />
                  </Button>
                </div>
              </DialogHeader>
              <div className="space-y-6">
                <div className="h-60 relative rounded-lg overflow-hidden">
                  <img
                    src={selectedRecipe.image}
                    alt={selectedRecipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        <Clock className="w-3 h-3 mr-1" /> {selectedRecipe.time} min
                      </Badge>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        {selectedRecipe.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ingredientes</h3>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ing, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-[#ff7b54] rounded-full mr-2"></span>
                          <span>
                            {ing.name}
                            {ing.quantity && ing.unit && (
                              <span className="text-gray-600"> - {ing.quantity} {ing.unit}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Modo de Preparo</h3>
                    <ol className="space-y-2 list-decimal ml-5">
                      {selectedRecipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
                {selectedRecipe.notes && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Notas</h3>
                    <p className="text-gray-700">{selectedRecipe.notes}</p>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button
                  className="bg-[#ff7b54] hover:bg-[#e45826]"
                  onClick={() => setShowRecipeDialog(false)}
                >
                  Fechar
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 