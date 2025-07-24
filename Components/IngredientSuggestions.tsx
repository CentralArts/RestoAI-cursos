import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export default function IngredientSuggestions({ suggestions, onSuggestionClick }) {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2">Sugestões:</h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.slice(0, 10).map((suggestion) => (
          <Badge
            key={suggestion}
            variant="outline"
            className="cursor-pointer px-3 py-1.5 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center gap-1"
            onClick={() => onSuggestionClick(suggestion)}
          >
            <Plus size={12} className="text-gray-400" />
            {suggestion}
          </Badge>
        ))}
      </div>
    </div>
  );
} 