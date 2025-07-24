import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Utensils, Mic, RefreshCw, Star } from "lucide-react";
import IngredientSuggestions from "@/components/IngredientSuggestions";
import RecipesCarousel from "@/components/RecipesCarousel";

const COMMON_INGREDIENTS = [
  "arroz", "feijão", "macarrão", "ovos", "leite", "farinha de trigo",
  "açúcar", "sal", "óleo", "manteiga", "frango", "carne bovina",
  "cebola", "tomate", "batata", "cenoura", "pão", "queijo"
];

export default function Home() {
  const [ingredient, setIngredient] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (ingredient.trim() !== "") {
      const filtered = COMMON_INGREDIENTS.filter(item =>
        item.toLowerCase().includes(ingredient.toLowerCase()) &&
        !selectedIngredients.includes(item)
      );
      setSuggestions(filtered);
    } else {
      setSuggestions(COMMON_INGREDIENTS.filter(item => !selectedIngredients.includes(item)));
    }
  }, [ingredient, selectedIngredients]);

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  };

  const addIngredient = (item: string) => {
    if (item && !selectedIngredients.includes(item)) {
      setSelectedIngredients([...selectedIngredients, item]);
      setIngredient("");
    }
  };

  const removeIngredient = (item: string) => {
    setSelectedIngredients(selectedIngredients.filter(i => i !== item));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && ingredient.trim() !== "") {
      addIngredient(ingredient.trim());
    }
  };

  const handleSpeechRecognition = () => {
    // Apenas para navegadores que suportam webkitSpeechRecognition
    if (!("webkitSpeechRecognition" in window)) {
      alert("Desculpe, a funcionalidade de voz não é suportada pelo seu navegador.");
      return;
    }
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    setIsListening(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      const words = transcript.split(/\s+/);
      const newIngredients = words.filter(word => word.length > 2 && !selectedIngredients.includes(word));
      if (newIngredients.length > 0) {
        setSelectedIngredients(prev => [...prev, ...newIngredients]);
      }
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const handleGenerateRecipe = () => {
    if (selectedIngredients.length === 0) {
      alert("Por favor, adicione pelo menos um ingrediente!");
      return;
    }
    // Em Next.js, useRouter para navegação
    // router.push(`/generate?ingredients=${selectedIngredients.join(",")}`);
  };

  const clearIngredients = () => {
    setSelectedIngredients([]);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-10 mb-20 md:mb-0">
      <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#2c3333]">RestôAI</h1>
        <p className="text-gray-600 text-lg">
          O que você tem em casa hoje? Adicione os ingredientes disponíveis e descubra receitas deliciosas.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10 animate-slide-in">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 relative">
            <Input
              value={ingredient}
              onChange={handleIngredientChange}
              onKeyPress={handleKeyPress}
              placeholder="Digite um ingrediente..."
              className="pr-12 py-6 text-lg border-[#ffb26b] focus:border-[#ff7b54] focus:ring-[#ff7b54]"
            />
            <Button
              variant="ghost"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => addIngredient(ingredient)}
              disabled={!ingredient.trim()}
            >
              <Plus size={20} className="text-[#ff7b54]" />
            </Button>
          </div>
          <Button
            variant="outline"
            className="aspect-square h-full p-3 border-[#ffb26b]"
            onClick={handleSpeechRecognition}
            disabled={isListening}
          >
            <Mic
              size={24}
              className={isListening ? "text-red-500 animate-pulse" : "text-[#ff7b54]"}
            />
          </Button>
        </div>
        {selectedIngredients.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Ingredientes selecionados</h3>
              <Button variant="ghost" size="sm" onClick={clearIngredients} className="text-gray-500">
                <RefreshCw size={14} className="mr-1" /> Limpar
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedIngredients.map((item) => (
                <Badge
                  key={item}
                  className="px-3 py-1.5 bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200"
                >
                  {item}
                  <button
                    className="ml-2 text-amber-800 hover:text-amber-900"
                    onClick={() => removeIngredient(item)}
                  >
                    ×
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}
        <IngredientSuggestions suggestions={suggestions} onSuggestionClick={addIngredient} />
        <Button
          className="w-full bg-[#ff7b54] hover:bg-[#e45826] py-6 text-lg mt-6 transition-all"
          onClick={handleGenerateRecipe}
          disabled={selectedIngredients.length === 0}
        >
          <Utensils size={18} className="mr-2" />
          Gerar Receitas
        </Button>
      </div>
      <div className="mb-10">
        <div className="px-10 py-3 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Inspirações Culinárias</h2>
        </div>
        <RecipesCarousel />
      </div>
      <div className="bg-white rounded-xl overflow-hidden shadow-md mb-10 transform hover:scale-105 transition-all duration-300">
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-center sm:justify-start gap-2">
                <Star size={20} /> Plano Premium RestôAI
              </h3>
              <p className="opacity-90">Desbloqueie todo o potencial de nosso assistente de cozinha!</p>
            </div>
            <div className="text-3xl font-bold text-center sm:text-right">R$19,90<span className="text-sm font-normal">/mês</span></div>
          </div>
        </div>
        <div className="p-6">
          <ul className="space-y-2 mb-4">
            <li className="flex items-center text-sm">
              <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 shrink-0">✓</div>
              <span>Gere até 6 receitas por vez</span>
            </li>
            <li className="flex items-center text-sm">
              <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 shrink-0">✓</div>
              <span>Gerações ilimitadas por dia</span>
            </li>
            <li className="flex items-center text-sm">
              <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 shrink-0">✓</div>
              <span>Salve receitas para acesso posterior</span>
            </li>
          </ul>
          <Button className="w-full bg-[#ff7b54] hover:bg-[#e45826]">Fazer Upgrade Agora</Button>
        </div>
      </div>
    </div>
  );
} 