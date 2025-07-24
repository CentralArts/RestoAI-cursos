{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;\red15\green112\blue1;\red191\green28\blue37;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;\cssrgb\c80392\c19216\c19216;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
import\cf0  \cf5 React\cf0 , \{ useState, useEffect \} \cf2 from\cf0  \cf6 "react"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ useNavigate \} \cf2 from\cf0  \cf6 "react-router-dom"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ createPageUrl \} \cf2 from\cf0  \cf6 "@/utils"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 InvokeLLM\cf0 , \cf5 GenerateImage\cf0  \} \cf2 from\cf0  \cf6 "@/integrations/Core"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 User\cf0  \} \cf2 from\cf0  \cf6 "@/entities/User"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 SavedRecipe\cf0  \} \cf2 from\cf0  \cf6 "@/entities/SavedRecipe"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 Button\cf0  \} \cf2 from\cf0  \cf6 "@/components/ui/button"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 Skeleton\cf0  \} \cf2 from\cf0  \cf6 "@/components/ui/skeleton"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 Tabs\cf0 , \cf5 TabsContent\cf0 , \cf5 TabsList\cf0 , \cf5 TabsTrigger\cf0  \} \cf2 from\cf0  \cf6 "@/components/ui/tabs"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 Dialog\cf0 , \cf5 DialogContent\cf0 , \cf5 DialogHeader\cf0 , \cf5 DialogTitle\cf0 , \cf5 DialogFooter\cf0 , \cf5 DialogDescription\cf0  \} \cf2 from\cf0  \cf6 "@/components/ui/dialog"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 Card\cf0 , \cf5 CardContent\cf0  \} \cf2 from\cf0  \cf6 "@/components/ui/card"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 Badge\cf0  \} \cf2 from\cf0  \cf6 "@/components/ui/badge"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \{ \cf5 ChevronLeft\cf0 , \cf5 Clock\cf0 , \cf5 Save\cf0 , \cf5 Share2\cf0 , \cf5 Utensils\cf0 , \cf5 ArrowRight\cf0 , \cf5 X\cf0 , \cf5 AlertTriangle\cf0 , \cf5 Star\cf0  \} \cf2 from\cf0  \cf6 "lucide-react"\cf0 ;\cb1 \
\cf2 \cb3 import\cf0  \cf5 RecipeDetails\cf0  \cf2 from\cf0  \cf6 "../components/RecipeDetails"\cf0 ;\cb1 \
\
\cf2 \cb3 const\cf0  \cf5 MAX_FREE_GENERATIONS_PER_DAY\cf0  = \cf7 3\cf0 ;\cb1 \
\cf2 \cb3 const\cf0  \cf5 RECIPES_PER_GENERATION_FREE\cf0  = \cf7 3\cf0 ;\cb1 \
\cf2 \cb3 const\cf0  \cf5 RECIPES_PER_GENERATION_PREMIUM\cf0  = \cf7 6\cf0 ;\cb1 \
\
\cf2 \cb3 export\cf0  \cf2 default\cf0  \cf2 function\cf0  \cf5 Generate\cf0 () \{\cb1 \
\cb3   \cf2 const\cf0  navigate = useNavigate();\cb1 \
\cb3   \cf2 const\cf0  [currentUser, setCurrentUser] = useState(\cf2 null\cf0 );\cb1 \
\cb3   \cf2 const\cf0  [ingredients, setIngredients] = useState([]);\cb1 \
\cb3   \cf2 const\cf0  [loadingRecipes, setLoadingRecipes] = useState(\cf2 false\cf0 );\cb1 \
\cb3   \cf2 const\cf0  [recipes, setRecipes] = useState([]);\cb1 \
\cb3   \cf2 const\cf0  [error, setError] = useState(\cf2 null\cf0 );\cb1 \
\cb3   \cf2 const\cf0  [selectedRecipe, setSelectedRecipe] = useState(\cf2 null\cf0 );\cb1 \
\cb3   \cf2 const\cf0  [recipeType, setRecipeType] = useState(\cf6 "all"\cf0 );\cb1 \
\cb3   \cf2 const\cf0  [showRecipeDialog, setShowRecipeDialog] = useState(\cf2 false\cf0 );\cb1 \
\cb3   \cf2 const\cf0  [showLimitModal, setShowLimitModal] = useState(\cf2 false\cf0 );\cb1 \
\cb3   \cf2 const\cf0  [isSaving, setIsSaving] = useState(\cf2 false\cf0 );\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 const\cf0  fetchUserAndIngredients = \cf2 async\cf0  () => \{\cb1 \
\cb3       \cf2 try\cf0  \{\cb1 \
\cb3         \cf2 const\cf0  userData = \cf2 await\cf0  \cf5 User\cf0 .me();\cb1 \
\cb3         setCurrentUser(userData);\cb1 \
\
\cb3         \cf2 const\cf0  searchParams = \cf2 new\cf0  \cf5 URLSearchParams\cf0 (window.location.search);\cb1 \
\cb3         \cf2 const\cf0  ingredientsParam = searchParams.\cf2 get\cf0 (\cf6 "ingredients"\cf0 );\cb1 \
\
\cb3         \cf2 if\cf0  (!ingredientsParam) \{\cb1 \
\cb3           navigate(createPageUrl(\cf6 "Home"\cf0 ));\cb1 \
\cb3           \cf2 return\cf0 ;\cb1 \
\cb3         \}\cb1 \
\cb3         \cf2 const\cf0  ingredientsList = ingredientsParam.split(\cf6 ","\cf0 );\cb1 \
\cb3         setIngredients(ingredientsList);\cb1 \
\
\cb3       \} \cf2 catch\cf0  (err) \{\cb1 \
\cb3         console.error(\cf6 "Erro ao buscar usu\'e1rio:"\cf0 , err);\cb1 \
\cb3         navigate(createPageUrl(\cf6 "Home"\cf0 ));\cb1 \
\cb3       \}\cb1 \
\cb3     \};\cb1 \
\cb3     fetchUserAndIngredients();\cb1 \
\cb3   \}, [navigate]);\cb1 \
\
\cb3   \cf2 const\cf0  handleGenerateRecipesClick = \cf2 async\cf0  () => \{\cb1 \
\cb3     setLoadingRecipes(\cf2 true\cf0 );\cb1 \
\cb3     setError(\cf2 null\cf0 );\cb1 \
\cb3     setRecipes([]);\cb1 \
\
\cb3     \cf2 try\cf0  \{\cb1 \
\cb3       \cf8 // Buscar dados atualizados do usu\'e1rio\cf0 \cb1 \
\cb3       \cf2 const\cf0  freshUserData = \cf2 await\cf0  \cf5 User\cf0 .me();\cb1 \
\cb3       setCurrentUser(freshUserData);\cb1 \
\
\cb3       \cf8 // Verificar limita\'e7\'e3o para usu\'e1rios gratuitos\cf0 \cb1 \
\cb3       \cf2 if\cf0  (freshUserData.plan === \cf6 "free"\cf0 ) \{\cb1 \
\cb3         \cf2 const\cf0  today = \cf2 new\cf0  \cf5 Date\cf0 ().toDateString(); \cf8 // Formato simples: "Wed Oct 25 2023"\cf0 \cb1 \
\cb3         \cf2 const\cf0  lastGenDate = freshUserData.last_generation_date ? \cf2 new\cf0  \cf5 Date\cf0 (freshUserData.last_generation_date).toDateString() : \cf2 null\cf0 ;\cb1 \
\cb3         \cb1 \
\cb3         \cf2 let\cf0  dailyCount = freshUserData.daily_generations || \cf7 0\cf0 ;\cb1 \
\cb3         \cb1 \
\cb3         \cf8 // Se \'e9 um novo dia, resetar contador\cf0 \cb1 \
\cb3         \cf2 if\cf0  (lastGenDate !== today) \{\cb1 \
\cb3           dailyCount = \cf7 0\cf0 ;\cb1 \
\cb3         \}\cb1 \
\cb3         \cb1 \
\cb3         \cf8 // Verificar limite\cf0 \cb1 \
\cb3         \cf2 if\cf0  (dailyCount >= \cf5 MAX_FREE_GENERATIONS_PER_DAY\cf0 ) \{\cb1 \
\cb3           setShowLimitModal(\cf2 true\cf0 );\cb1 \
\cb3           setLoadingRecipes(\cf2 false\cf0 );\cb1 \
\cb3           \cf2 return\cf0 ;\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\
\cb3       \cf2 const\cf0  recipesToGenerate = freshUserData.plan === \cf6 "premium"\cf0  ? \cf5 RECIPES_PER_GENERATION_PREMIUM\cf0  : \cf5 RECIPES_PER_GENERATION_FREE\cf0 ;\cb1 \
\cb3       \cb1 \
\cb3       \cf2 let\cf0  basePrompt = \cf6 `Crie \cf0 $\{recipesToGenerate\}\cf6  receitas diferentes usando alguns ou todos esses ingredientes: \cf0 $\{ingredients.join(\cf6 ", "\cf0 )\}\cf6 . `\cf0 ;\cb1 \
\
\cb3       \cf8 // Adicionar prefer\'eancias do usu\'e1rio\cf0 \cb1 \
\cb3       \cf2 if\cf0  (freshUserData.preferences?.dietary_restrictions?.length > \cf7 0\cf0 ) \{\cb1 \
\cb3         \cf2 const\cf0  restrictions = freshUserData.preferences.dietary_restrictions.filter(r => r !== \cf6 'nenhum'\cf0 );\cb1 \
\cb3         \cf2 if\cf0  (restrictions.length > \cf7 0\cf0 ) \{\cb1 \
\cb3           basePrompt += \cf6 `As receitas DEVEM ser \cf0 $\{restrictions.join(\cf6 ', '\cf0 )\}\cf6 . `\cf0 ;\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\
\cb3       \cf2 if\cf0  (freshUserData.preferences?.favorite_cuisines?.length > \cf7 0\cf0 ) \{\cb1 \
\cb3         basePrompt += \cf6 `Prefira estilos: \cf0 $\{freshUserData.preferences.favorite_cuisines.join(\cf6 ', '\cf0 )\}\cf6 . `\cf0 ;\cb1 \
\cb3       \}\cb1 \
\
\cb3       basePrompt += \cf6 `\cf0 \cb1 \
\cf6 \cb3       Para cada receita, forne\'e7a:\cf0 \cb1 \
\cf6 \cb3       - Nome criativo\cf0 \cb1 \
\cf6 \cb3       - Lista completa de ingredientes com quantidades\cf0 \cb1 \
\cf6 \cb3       - Modo de preparo detalhado\cf0 \cb1 \
\cf6 \cb3       - Tempo de preparo em minutos\cf0 \cb1 \
\cf6 \cb3       - N\'edvel de dificuldade (f\'e1cil, m\'e9dio ou dif\'edcil)\cf0 \cb1 \
\cf6 \cb3       - Se \'e9 doce ou salgada\cf0 \cb1 \
\cf6 \cb3       - Tipo de refei\'e7\'e3o (caf\'e9 da manh\'e3, almo\'e7o, jantar, sobremesa, lanche)`\cf0 ;\cb1 \
\cb3       \cb1 \
\cb3       \cf2 const\cf0  response = \cf2 await\cf0  \cf5 InvokeLLM\cf0 (\{\cb1 \
\cb3         prompt: basePrompt,\cb1 \
\cb3         response_json_schema: \{\cb1 \
\cb3           \cf6 "type"\cf0 : \cf6 "object"\cf0 ,\cb1 \
\cb3           \cf6 "properties"\cf0 : \{\cb1 \
\cb3             \cf6 "recipes"\cf0 : \{\cb1 \
\cb3               \cf6 "type"\cf0 : \cf6 "array"\cf0 ,\cb1 \
\cb3               \cf6 "items"\cf0 : \{\cb1 \
\cb3                 \cf6 "type"\cf0 : \cf6 "object"\cf0 ,\cb1 \
\cb3                 \cf6 "properties"\cf0 : \{\cb1 \
\cb3                   \cf6 "title"\cf0 : \{ \cf6 "type"\cf0 : \cf6 "string"\cf0  \},\cb1 \
\cb3                   \cf6 "ingredients"\cf0 : \{\cb1 \
\cb3                     \cf6 "type"\cf0 : \cf6 "array"\cf0 ,\cb1 \
\cb3                     \cf6 "items"\cf0 : \{\cb1 \
\cb3                       \cf6 "type"\cf0 : \cf6 "object"\cf0 ,\cb1 \
\cb3                       \cf6 "properties"\cf0 : \{\cb1 \
\cb3                         \cf6 "name"\cf0 : \{ \cf6 "type"\cf0 : \cf6 "string"\cf0  \},\cb1 \
\cb3                         \cf6 "quantity"\cf0 : \{ \cf6 "type"\cf0 : \cf6 "string"\cf0  \},\cb1 \
\cb3                         \cf6 "unit"\cf0 : \{ \cf6 "type"\cf0 : \cf6 "string"\cf0  \}\cb1 \
\cb3                       \},\cb1 \
\cb3                       \cf6 "required"\cf0 : [\cf6 "name"\cf0 , \cf6 "quantity"\cf0 , \cf6 "unit"\cf0 ]\cb1 \
\cb3                     \}\cb1 \
\cb3                   \},\cb1 \
\cb3                   \cf6 "instructions"\cf0 : \{\cb1 \
\cb3                     \cf6 "type"\cf0 : \cf6 "array"\cf0 ,\cb1 \
\cb3                     \cf6 "items"\cf0 : \{ \cf6 "type"\cf0 : \cf6 "string"\cf0  \}\cb1 \
\cb3                   \},\cb1 \
\cb3                   \cf6 "cooking_time"\cf0 : \{ \cf6 "type"\cf0 : \cf6 "integer"\cf0  \},\cb1 \
\cb3                   \cf6 "difficulty"\cf0 : \{\cb1 \
\cb3                     \cf6 "type"\cf0 : \cf6 "string"\cf0 ,\cb1 \
\cb3                     \cf6 "enum"\cf0 : [\cf6 "f\'e1cil"\cf0 , \cf6 "m\'e9dio"\cf0 , \cf6 "dif\'edcil"\cf0 ]\cb1 \
\cb3                   \},\cb1 \
\cb3                   \cf6 "is_sweet"\cf0 : \{ \cf6 "type"\cf0 : \cf6 "boolean"\cf0  \},\cb1 \
\cb3                   \cf6 "meal_type"\cf0 : \{\cb1 \
\cb3                     \cf6 "type"\cf0 : \cf6 "string"\cf0 ,\cb1 \
\cb3                     \cf6 "enum"\cf0 : [\cf6 "caf\'e9 da manh\'e3"\cf0 , \cf6 "almo\'e7o"\cf0 , \cf6 "jantar"\cf0 , \cf6 "sobremesa"\cf0 , \cf6 "lanche"\cf0 ]\cb1 \
\cb3                   \}\cb1 \
\cb3                 \},\cb1 \
\cb3                 \cf6 "required"\cf0 : [\cf6 "title"\cf0 , \cf6 "ingredients"\cf0 , \cf6 "instructions"\cf0 , \cf6 "cooking_time"\cf0 , \cf6 "difficulty"\cf0 , \cf6 "is_sweet"\cf0 , \cf6 "meal_type"\cf0 ]\cb1 \
\cb3               \}\cb1 \
\cb3             \}\cb1 \
\cb3           \},\cb1 \
\cb3           \cf6 "required"\cf0 : [\cf6 "recipes"\cf0 ]\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\
\cb3       \cf2 if\cf0  (response?.recipes?.length > \cf7 0\cf0 ) \{\cb1 \
\cb3         \cf8 // Mostrar receitas IMEDIATAMENTE sem imagens\cf0 \cb1 \
\cb3         \cf2 const\cf0  quickRecipes = response.recipes.map((r, index) => (\{\cb1 \
\cb3           ...r,\cb1 \
\cb3           id: \cf6 `recipe-\cf0 $\{\cf5 Date\cf0 .now()\}\cf6 -\cf0 $\{index\}\cf6 `\cf0 ,\cb1 \
\cb3           image_url: \cf2 null\cf0 ,\cb1 \
\cb3           isLoadingImage: \cf2 false\cf0  \cf8 // N\'e3o mostrar loading de imagem\cf0 \cb1 \
\cb3         \}));\cb1 \
\cb3         \cb1 \
\cb3         setRecipes(quickRecipes);\cb1 \
\cb3         setLoadingRecipes(\cf2 false\cf0 ); \cf8 // PARAR LOADING AQUI\cf0 \cb1 \
\
\cb3         \cf8 // Atualizar contador do usu\'e1rio gratuito\cf0 \cb1 \
\cb3         \cf2 if\cf0  (freshUserData.plan === \cf6 "free"\cf0 ) \{\cb1 \
\cb3           \cf2 const\cf0  today = \cf2 new\cf0  \cf5 Date\cf0 ().toDateString();\cb1 \
\cb3           \cf2 const\cf0  lastGenDate = freshUserData.last_generation_date ? \cf2 new\cf0  \cf5 Date\cf0 (freshUserData.last_generation_date).toDateString() : \cf2 null\cf0 ;\cb1 \
\cb3           \cf2 const\cf0  newCount = (lastGenDate === today) ? (freshUserData.daily_generations || \cf7 0\cf0 ) + \cf7 1\cf0  : \cf7 1\cf0 ;\cb1 \
\cb3           \cb1 \
\cb3           \cf2 await\cf0  \cf5 User\cf0 .updateMyUserData(\{\cb1 \
\cb3             daily_generations: newCount,\cb1 \
\cb3             last_generation_date: \cf2 new\cf0  \cf5 Date\cf0 ().toISOString()\cb1 \
\cb3           \});\cb1 \
\cb3           \cb1 \
\cb3           setCurrentUser(prev => (\{\cb1 \
\cb3             ...prev,\cb1 \
\cb3             daily_generations: newCount,\cb1 \
\cb3             last_generation_date: \cf2 new\cf0  \cf5 Date\cf0 ().toISOString()\cb1 \
\cb3           \}));\cb1 \
\cb3         \}\cb1 \
\
\cb3         \cf8 // Gerar imagens em background (OPCIONAL e SILENCIOSO)\cf0 \cb1 \
\cb3         quickRecipes.forEach((recipe, i) => \{\cb1 \
\cb3           setTimeout(\cf2 async\cf0  () => \{\cb1 \
\cb3             \cf2 try\cf0  \{\cb1 \
\cb3               \cf2 const\cf0  imagePrompt = \cf6 `Professional food photo of \cf0 $\{recipe.title\}\cf6 , \cf0 $\{recipe.is_sweet ? \cf6 'sweet'\cf0  : \cf6 'savory'\cf0 \}\cf6  dish, appetizing, studio lighting`\cf0 ;\cb1 \
\cb3               \cf2 const\cf0  imageResponse = \cf2 await\cf0  \cf5 GenerateImage\cf0 (\{ prompt: imagePrompt \});\cb1 \
\cb3               \cb1 \
\cb3               \cf2 if\cf0  (imageResponse?.url) \{\cb1 \
\cb3                 setRecipes(prev => prev.map(r => \cb1 \
\cb3                   r.id === recipe.id ? \{ ...r, image_url: imageResponse.url \} : r\cb1 \
\cb3                 ));\cb1 \
\cb3               \}\cb1 \
\cb3             \} \cf2 catch\cf0  (err) \{\cb1 \
\cb3               console.log(\cf6 `Imagem n\'e3o gerada para \cf0 $\{recipe.title\}\cf6 `\cf0 );\cb1 \
\cb3             \}\cb1 \
\cb3           \}, i * \cf7 3000\cf0 ); \cf8 // 3 segundos entre cada imagem\cf0 \cb1 \
\cb3         \});\cb1 \
\
\cb3       \} \cf2 else\cf0  \{\cb1 \
\cb3         setError(\cf6 "N\'e3o foi poss\'edvel gerar receitas. Tente novamente."\cf0 );\cb1 \
\cb3         setLoadingRecipes(\cf2 false\cf0 );\cb1 \
\cb3       \}\cb1 \
\
\cb3     \} \cf2 catch\cf0  (err) \{\cb1 \
\cb3       console.error(\cf6 "Erro ao gerar receitas:"\cf0 , err);\cb1 \
\cb3       setError(\cf6 "Erro ao gerar receitas. Tente novamente."\cf0 );\cb1 \
\cb3       setLoadingRecipes(\cf2 false\cf0 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 const\cf0  handleSaveRecipe = \cf2 async\cf0  () => \{\cb1 \
\cb3     \cf2 if\cf0  (!selectedRecipe || !currentUser || currentUser.plan !== \cf6 "premium"\cf0 ) \cf2 return\cf0 ;\cb1 \
\cb3     setIsSaving(\cf2 true\cf0 );\cb1 \
\cb3     \cf2 try\cf0  \{\cb1 \
\cb3       \cf2 const\cf0  recipeToSave = \{\cb1 \
\cb3         user_id: currentUser.id,\cb1 \
\cb3         title: selectedRecipe.title,\cb1 \
\cb3         ingredients: selectedRecipe.ingredients,\cb1 \
\cb3         instructions: selectedRecipe.instructions,\cb1 \
\cb3         cooking_time: selectedRecipe.cooking_time,\cb1 \
\cb3         difficulty: selectedRecipe.difficulty,\cb1 \
\cb3         is_sweet: selectedRecipe.is_sweet,\cb1 \
\cb3         meal_type: selectedRecipe.meal_type,\cb1 \
\cb3         image_url: selectedRecipe.image_url,\cb1 \
\cb3       \};\cb1 \
\cb3       \cf2 await\cf0  \cf5 SavedRecipe\cf0 .create(recipeToSave);\cb1 \
\cb3       alert(\cf6 "Receita salva com sucesso!"\cf0 );\cb1 \
\cb3       setShowRecipeDialog(\cf2 false\cf0 );\cb1 \
\cb3     \} \cf2 catch\cf0  (err) \{\cb1 \
\cb3       console.error(\cf6 "Erro ao salvar receita:"\cf0 , err);\cb1 \
\cb3       alert(\cf6 "Erro ao salvar a receita. Tente novamente."\cf0 );\cb1 \
\cb3     \} \cf2 finally\cf0  \{\cb1 \
\cb3       setIsSaving(\cf2 false\cf0 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 const\cf0  handleShare = () => \{\cb1 \
\cb3     alert(\cf6 "Funcionalidade de compartilhamento ser\'e1 implementada em breve!"\cf0 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 const\cf0  openRecipeDialog = (recipe) => \{\cb1 \
\cb3     setSelectedRecipe(recipe);\cb1 \
\cb3     setShowRecipeDialog(\cf2 true\cf0 );\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 const\cf0  filteredRecipes = recipeType === \cf6 "all"\cf0  \cb1 \
\cb3     ? recipes \cb1 \
\cb3     : recipeType === \cf6 "sweet"\cf0  \cb1 \
\cb3       ? recipes.filter(r => r.is_sweet) \cb1 \
\cb3       : recipes.filter(r => !r.is_sweet);\cb1 \
\
\cb3   \cf2 if\cf0  (!currentUser) \{\cb1 \
\cb3     \cf2 return\cf0  (\cb1 \
\cb3       <div className=\cf6 "flex items-center justify-center h-screen"\cf0 >\cb1 \
\cb3         <div className=\cf6 "w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"\cf0 ></div>\cb1 \
\cb3         <p className=\cf6 "ml-2"\cf0 >\cf5 Carregando\cf0 ...</p>\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\cb3   \cb1 \
\cb3   \cf2 const\cf0  today = \cf2 new\cf0  \cf5 Date\cf0 ().toDateString();\cb1 \
\cb3   \cf2 const\cf0  lastGenDate = currentUser.last_generation_date ? \cf2 new\cf0  \cf5 Date\cf0 (currentUser.last_generation_date).toDateString() : \cf2 null\cf0 ;\cb1 \
\cb3   \cf2 const\cf0  dailyCount = (lastGenDate === today) ? (currentUser.daily_generations || \cf7 0\cf0 ) : \cf7 0\cf0 ;\cb1 \
\cb3   \cb1 \
\cb3   \cf2 return\cf0  (\cb1 \
\cb3     <div className=\cf6 "container mx-auto px-4 py-6 md:py-10 mb-16 md:mb-6"\cf0 >\cb1 \
\cb3       <\cf5 Button\cf0  \cb1 \
\cb3         variant=\cf6 "ghost"\cf0  \cb1 \
\cb3         className=\cf6 "mb-6 text-gray-600"\cf0 \cb1 \
\cb3         onClick=\{() => navigate(createPageUrl(\cf6 "Home"\cf0 ))\}\cb1 \
\cb3       >\cb1 \
\cb3         <\cf5 ChevronLeft\cf0  size=\{\cf7 16\cf0 \} className=\cf6 "mr-1"\cf0  /> \cf5 Voltar\cf0 \cb1 \
\cb3       </\cf5 Button\cf0 >\cb1 \
\cb3       \cb1 \
\cb3       <div className=\cf6 "mb-6 text-center"\cf0 >\cb1 \
\cb3         <h1 className=\cf6 "text-2xl md:text-3xl font-bold mb-3"\cf0 >\cf5 Receitas\cf0  com seus ingredientes</h1>\cb1 \
\cb3         <div className=\cf6 "flex flex-wrap gap-2 mb-4 justify-center"\cf0 >\cb1 \
\cb3           \{ingredients.map((ing) => (\cb1 \
\cb3             <\cf5 Badge\cf0  key=\{ing\} className=\cf6 "bg-amber-100 text-amber-800 border-amber-200"\cf0 >\cb1 \
\cb3               \{ing\}\cb1 \
\cb3             </\cf5 Badge\cf0 >\cb1 \
\cb3           ))\}\cb1 \
\cb3         </div>\cb1 \
\cb3         <p className=\cf6 "text-sm text-gray-600 max-w-md mx-auto"\cf0 >\cb1 \
\cb3           \{currentUser.plan === \cf6 'free'\cf0  \cb1 \
\cb3             ? \cf6 `Plano Gratuito: \cf0 $\{\cf5 RECIPES_PER_GENERATION_FREE\cf0 \}\cf6  receitas por vez. Limite: \cf0 $\{dailyCount\}\cf6 /\cf0 $\{\cf5 MAX_FREE_GENERATIONS_PER_DAY\cf0 \}\cf6  hoje`\cf0 \cb1 \
\cb3             : \cf6 `Plano Premium: \cf0 $\{\cf5 RECIPES_PER_GENERATION_PREMIUM\cf0 \}\cf6  receitas por vez, sem limites!`\cf0 \}\cb1 \
\cb3         </p>\cb1 \
\cb3         \{currentUser.plan === \cf6 'free'\cf0  && (\cb1 \
\cb3           <\cf5 Button\cf0  variant=\cf6 "link"\cf0  className=\cf6 "text-[#ff7b54]"\cf0  onClick=\{() => navigate(createPageUrl(\cf6 "Upgrade"\cf0 ))\}>\cb1 \
\cb3             \cf5 Fa\cf9 \'e7\cf0 a \cf5 Upgrade\cf0  para \cf5 Premium\cf0 !\cb1 \
\cb3           </\cf5 Button\cf0 >\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 "flex justify-center mb-6"\cf0 >\cb1 \
\cb3         <\cf5 Button\cf0 \cb1 \
\cb3           onClick=\{handleGenerateRecipesClick\}\cb1 \
\cb3           disabled=\{loadingRecipes || (currentUser.plan === \cf6 'free'\cf0  && dailyCount >= \cf5 MAX_FREE_GENERATIONS_PER_DAY\cf0 )\}\cb1 \
\cb3           className=\cf6 "bg-[#ff7b54] hover:bg-[#e45826] py-3 px-6 text-lg"\cf0 \cb1 \
\cb3         >\cb1 \
\cb3           \{loadingRecipes ? (\cb1 \
\cb3             <div className=\cf6 "flex items-center gap-2"\cf0 >\cb1 \
\cb3               <div className=\cf6 "w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"\cf0 ></div>\cb1 \
\cb3               <span>\cf5 Gerando\cf0 ...</span>\cb1 \
\cb3             </div>\cb1 \
\cb3           ) : (\cb1 \
\cb3             <>\cb1 \
\cb3               <\cf5 Utensils\cf0  size=\{\cf7 18\cf0 \} className=\cf6 "mr-2"\cf0  />\cb1 \
\cb3               \cf5 Gerar\cf0  \cf5 Receitas\cf0 \cb1 \
\cb3             </>\cb1 \
\cb3           )\}\cb1 \
\cb3         </\cf5 Button\cf0 >\cb1 \
\cb3       </div>\cb1 \
\cb3       \cb1 \
\cb3       \{recipes.length > \cf7 0\cf0  && (\cb1 \
\cb3         <\cf5 Tabs\cf0  defaultValue=\cf6 "all"\cf0  onValueChange=\{setRecipeType\} className=\cf6 "mb-6"\cf0 >\cb1 \
\cb3           <\cf5 TabsList\cf0 >\cb1 \
\cb3             <\cf5 TabsTrigger\cf0  value=\cf6 "all"\cf0 >\cf5 Todas\cf0 </\cf5 TabsTrigger\cf0 >\cb1 \
\cb3             <\cf5 TabsTrigger\cf0  value=\cf6 "savory"\cf0 >\cf5 Salgadas\cf0 </\cf5 TabsTrigger\cf0 >\cb1 \
\cb3             <\cf5 TabsTrigger\cf0  value=\cf6 "sweet"\cf0 >\cf5 Doces\cf0 </\cf5 TabsTrigger\cf0 >\cb1 \
\cb3           </\cf5 TabsList\cf0 >\cb1 \
\cb3         </\cf5 Tabs\cf0 >\cb1 \
\cb3       )\}\cb1 \
\cb3       \cb1 \
\cb3       \{error && (\cb1 \
\cb3         <div className=\cf6 "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"\cf0 >\cb1 \
\cb3           \{error\}\cb1 \
\cb3         </div>\cb1 \
\cb3       )\}\cb1 \
\cb3       \cb1 \
\cb3       <div className=\cf6 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"\cf0 >\cb1 \
\cb3         \{loadingRecipes ? (\cb1 \
\cb3           \cf5 Array\cf0 (currentUser.plan === \cf6 "premium"\cf0  ? \cf5 RECIPES_PER_GENERATION_PREMIUM\cf0  : \cf5 RECIPES_PER_GENERATION_FREE\cf0 ).fill().map((_, i) => (\cb1 \
\cb3             <div key=\{i\} className=\cf6 "bg-white rounded-lg p-4 shadow-md animate-pulse"\cf0 >\cb1 \
\cb3               <\cf5 Skeleton\cf0  className=\cf6 "h-48 w-full mb-3"\cf0  />\cb1 \
\cb3               <\cf5 Skeleton\cf0  className=\cf6 "h-6 w-3/4 mb-3"\cf0  />\cb1 \
\cb3               <div className=\cf6 "space-y-2"\cf0 >\cb1 \
\cb3                 <\cf5 Skeleton\cf0  className=\cf6 "h-4 w-full"\cf0  />\cb1 \
\cb3                 <\cf5 Skeleton\cf0  className=\cf6 "h-4 w-full"\cf0  />\cb1 \
\cb3                 <\cf5 Skeleton\cf0  className=\cf6 "h-4 w-2/3"\cf0  />\cb1 \
\cb3               </div>\cb1 \
\cb3               <div className=\cf6 "mt-3 flex justify-between"\cf0 >\cb1 \
\cb3                 <\cf5 Skeleton\cf0  className=\cf6 "h-5 w-16 rounded-full"\cf0  />\cb1 \
\cb3                 <\cf5 Skeleton\cf0  className=\cf6 "h-5 w-20 rounded-full"\cf0  />\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3           ))\cb1 \
\cb3         ) : filteredRecipes.length === \cf7 0\cf0  && !error ? (\cb1 \
\cb3           <div className=\cf6 "col-span-full text-center py-16"\cf0 >\cb1 \
\cb3             <\cf5 Utensils\cf0  size=\{\cf7 48\cf0 \} className=\cf6 "mx-auto text-gray-300 mb-4"\cf0  />\cb1 \
\cb3             <h3 className=\cf6 "text-xl font-medium text-gray-600 mb-2"\cf0 >\cf5 Nenhuma\cf0  receita gerada ainda</h3>\cb1 \
\cb3             <p className=\cf6 "text-gray-500 mb-6"\cf0 >\cf5 Clique\cf0  em \cf6 "Gerar Receitas"\cf0  para come\cf9 \'e7\cf0 ar.</p>\cb1 \
\cb3           </div>\cb1 \
\cb3         ) : (\cb1 \
\cb3           filteredRecipes.map((recipe) => (\cb1 \
\cb3             <\cf5 Card\cf0  \cb1 \
\cb3               key=\{recipe.id\}\cb1 \
\cb3               className=\cf6 "overflow-hidden cursor-pointer hover:shadow-lg transition-all card-hover"\cf0 \cb1 \
\cb3               onClick=\{() => openRecipeDialog(recipe)\}\cb1 \
\cb3             >\cb1 \
\cb3               <div className=\cf6 "h-48 bg-gray-100 relative"\cf0 >\cb1 \
\cb3                 \{recipe.image_url ? (\cb1 \
\cb3                   <img \cb1 \
\cb3                     src=\{recipe.image_url\} \cb1 \
\cb3                     alt=\{recipe.title\} \cb1 \
\cb3                     className=\cf6 "w-full h-full object-cover"\cf0 \cb1 \
\cb3                   />\cb1 \
\cb3                 ) : (\cb1 \
\cb3                   <div className=\cf6 "absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100"\cf0 >\cb1 \
\cb3                     <\cf5 Utensils\cf0  size=\{\cf7 36\cf0 \} className=\cf6 "text-amber-500 opacity-60"\cf0  />\cb1 \
\cb3                   </div>\cb1 \
\cb3                 )\}\cb1 \
\cb3                 <div className=\cf6 "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent"\cf0 >\cb1 \
\cb3                   <div className=\cf6 "flex flex-wrap gap-1"\cf0 >\cb1 \
\cb3                     <\cf5 Badge\cf0  className=\cf6 "bg-white/20 backdrop-blur-sm text-white border-white/30"\cf0 >\cb1 \
\cb3                       \{recipe.difficulty\}\cb1 \
\cb3                     </\cf5 Badge\cf0 >\cb1 \
\cb3                     <\cf5 Badge\cf0  className=\cf6 "bg-white/20 backdrop-blur-sm text-white border-white/30"\cf0 >\cb1 \
\cb3                       <\cf5 Clock\cf0  className=\cf6 "w-3 h-3 mr-1"\cf0  /> \{recipe.cooking_time\} min\cb1 \
\cb3                     </\cf5 Badge\cf0 >\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3               <\cf5 CardContent\cf0  className=\cf6 "p-4"\cf0 >\cb1 \
\cb3                 <h3 className=\cf6 "font-semibold text-lg mb-1 line-clamp-1"\cf0 >\{recipe.title\}</h3>\cb1 \
\cb3                 <p className=\cf6 "text-gray-600 text-sm mb-3 line-clamp-2"\cf0 >\cb1 \
\cb3                   \{recipe.ingredients.slice(\cf7 0\cf0 , \cf7 3\cf0 ).map(i => i.name).join(\cf6 ", "\cf0 )\}\cb1 \
\cb3                   \{recipe.ingredients.length > \cf7 3\cf0  ? \cf6 ", ..."\cf0  : \cf6 ""\cf0 \}\cb1 \
\cb3                 </p>\cb1 \
\cb3                 <div className=\cf6 "flex justify-between items-center"\cf0 >\cb1 \
\cb3                   <\cf5 Badge\cf0  className=\{recipe.is_sweet ? \cf6 "bg-pink-100 text-pink-700"\cf0  : \cf6 "bg-blue-100 text-blue-700"\cf0 \}>\cb1 \
\cb3                     \{recipe.is_sweet ? \cf6 "Doce"\cf0  : \cf6 "Salgado"\cf0 \}\cb1 \
\cb3                   </\cf5 Badge\cf0 >\cb1 \
\cb3                   <div className=\cf6 "text-[#ff7b54]"\cf0 >\cb1 \
\cb3                     \cf5 Ver\cf0  detalhes\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </\cf5 CardContent\cf0 >\cb1 \
\cb3             </\cf5 Card\cf0 >\cb1 \
\cb3           ))\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\cb3             \cb1 \
\cb3       <\cf5 Dialog\cf0  open=\{showRecipeDialog\} onOpenChange=\{setShowRecipeDialog\}>\cb1 \
\cb3         <\cf5 DialogContent\cf0  className=\cf6 "max-w-4xl max-h-[90vh] overflow-y-auto"\cf0 >\cb1 \
\cb3           \{selectedRecipe && (\cb1 \
\cb3             <>\cb1 \
\cb3               <\cf5 DialogHeader\cf0 >\cb1 \
\cb3                 <div className=\cf6 "flex justify-between items-center"\cf0 >\cb1 \
\cb3                   <\cf5 DialogTitle\cf0  className=\cf6 "text-2xl"\cf0 >\{selectedRecipe.title\}</\cf5 DialogTitle\cf0 >\cb1 \
\cb3                   <\cf5 Button\cf0  variant=\cf6 "ghost"\cf0  size=\cf6 "icon"\cf0  className=\cf6 "rounded-full"\cf0  onClick=\{() => setShowRecipeDialog(\cf2 false\cf0 )\}>\cb1 \
\cb3                     <\cf5 X\cf0  size=\{\cf7 20\cf0 \} />\cb1 \
\cb3                   </\cf5 Button\cf0 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               </\cf5 DialogHeader\cf0 >\cb1 \
\cb3               \cb1 \
\cb3               <\cf5 RecipeDetails\cf0  \cb1 \
\cb3                 recipe=\{selectedRecipe\} \cb1 \
\cb3                 userIngredients=\{ingredients\}\cb1 \
\cb3                 loadingImage=\{\cf2 false\cf0 \}\cb1 \
\cb3               />\cb1 \
\cb3               \cb1 \
\cb3               <\cf5 DialogFooter\cf0  className=\cf6 "gap-2 sm:justify-between"\cf0 >\cb1 \
\cb3                 <\cf5 Button\cf0  variant=\cf6 "outline"\cf0  onClick=\{() => setShowRecipeDialog(\cf2 false\cf0 )\}>\cf5 Fechar\cf0 </\cf5 Button\cf0 >\cb1 \
\cb3                 <div className=\cf6 "flex gap-2"\cf0 >\cb1 \
\cb3                   <\cf5 Button\cf0  variant=\cf6 "outline"\cf0  className=\cf6 "gap-1"\cf0  onClick=\{handleShare\}><\cf5 Share2\cf0  size=\{\cf7 16\cf0 \} />\cf5 Compartilhar\cf0 </\cf5 Button\cf0 >\cb1 \
\cb3                   \{currentUser.plan === \cf6 "premium"\cf0  ? (\cb1 \
\cb3                     <\cf5 Button\cf0  \cb1 \
\cb3                       className=\cf6 "gap-1 bg-[#ff7b54] hover:bg-[#e45826]"\cf0 \cb1 \
\cb3                       onClick=\{handleSaveRecipe\}\cb1 \
\cb3                       disabled=\{isSaving\}\cb1 \
\cb3                     >\cb1 \
\cb3                       \{isSaving ? <div className=\cf6 "w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"\cf0 ></div> : <\cf5 Save\cf0  size=\{\cf7 16\cf0 \} />\}\cb1 \
\cb3                       \{isSaving ? \cf6 "Salvando..."\cf0  : \cf6 "Salvar"\cf0 \}\cb1 \
\cb3                     </\cf5 Button\cf0 >\cb1 \
\cb3                   ) : (\cb1 \
\cb3                     <div className=\cf6 "text-center p-2 bg-amber-50 rounded-md"\cf0 >\cb1 \
\cb3                       <p className=\cf6 "text-sm text-amber-700"\cf0 >\cf5 Assine\cf0  o \cf5 Premium\cf0  para salvar receitas!</p>\cb1 \
\cb3                       <\cf5 Button\cf0  variant=\cf6 "link"\cf0  size=\cf6 "sm"\cf0  className=\cf6 "text-[#ff7b54]"\cf0  onClick=\{() => \{setShowRecipeDialog(\cf2 false\cf0 ); navigate(createPageUrl(\cf6 "Upgrade"\cf0 ));\}\}>\cf5 Fazer\cf0  \cf5 Upgrade\cf0 </\cf5 Button\cf0 >\cb1 \
\cb3                     </div>\cb1 \
\cb3                   )\}\cb1 \
\cb3                 </div>\cb1 \
\cb3               </\cf5 DialogFooter\cf0 >\cb1 \
\cb3             </>\cb1 \
\cb3           )\}\cb1 \
\cb3         </\cf5 DialogContent\cf0 >\cb1 \
\cb3       </\cf5 Dialog\cf0 >\cb1 \
\
\cb3       <\cf5 Dialog\cf0  open=\{showLimitModal\} onOpenChange=\{setShowLimitModal\}>\cb1 \
\cb3         <\cf5 DialogContent\cf0 >\cb1 \
\cb3           <\cf5 DialogHeader\cf0 >\cb1 \
\cb3             <\cf5 DialogTitle\cf0  className=\cf6 "flex items-center"\cf0 ><\cf5 AlertTriangle\cf0  className=\cf6 "text-yellow-500 mr-2"\cf0  /> \cf5 Limite\cf0  \cf5 Di\cf9 \'e1\cf0 rio \cf5 Atingido\cf0 </\cf5 DialogTitle\cf0 >\cb1 \
\cb3             <\cf5 DialogDescription\cf0 >\cb1 \
\cb3               \cf5 Voc\cf9 \'ea\cf0  atingiu o limite de \{\cf5 MAX_FREE_GENERATIONS_PER_DAY\cf0 \} gera\cf9 \'e7\'f5\cf0 es di\cf9 \'e1\cf0 rias \cf2 do\cf0  plano gratuito.\cb1 \
\cb3             </\cf5 DialogDescription\cf0 >\cb1 \
\cb3           </\cf5 DialogHeader\cf0 >\cb1 \
\cb3           <div className=\cf6 "py-4"\cf0 >\cb1 \
\cb3             <p className=\cf6 "mb-4"\cf0 >\cf5 Volte\cf0  amanh\cf9 \'e3\cf0  ou assine o \cf5 Plano\cf0  \cf5 Premium\cf0  para acesso ilimitado!</p>\cb1 \
\cb3           </div>\cb1 \
\cb3           <\cf5 DialogFooter\cf0  className=\cf6 "sm:justify-start"\cf0 >\cb1 \
\cb3             <\cf5 Button\cf0  onClick=\{() => \{setShowLimitModal(\cf2 false\cf0 ); navigate(createPageUrl(\cf6 "Upgrade"\cf0 ))\}\} className=\cf6 "bg-[#ff7b54] hover:bg-[#e45826]"\cf0 >\cb1 \
\cb3               <\cf5 Star\cf0  size=\{\cf7 16\cf0 \} className=\cf6 "mr-2"\cf0 /> \cf5 Assinar\cf0  \cf5 Premium\cf0 \cb1 \
\cb3             </\cf5 Button\cf0 >\cb1 \
\cb3             <\cf5 Button\cf0  variant=\cf6 "outline"\cf0  onClick=\{() => setShowLimitModal(\cf2 false\cf0 )\}>\cf5 Fechar\cf0 </\cf5 Button\cf0 >\cb1 \
\cb3           </\cf5 DialogFooter\cf0 >\cb1 \
\cb3         </\cf5 DialogContent\cf0 >\cb1 \
\cb3       </\cf5 Dialog\cf0 >\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}