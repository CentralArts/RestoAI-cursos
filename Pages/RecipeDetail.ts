{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue255;\red255\green255\blue254;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red19\green118\blue70;\red191\green28\blue37;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c3529\c52549\c34510;\cssrgb\c80392\c19216\c19216;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \cf5 \strokec5 React\cf0 \strokec2 , \{ useState, useEffect \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "react"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ useNavigate \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "react-router-dom"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ createPageUrl \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/utils"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Recipe\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/Recipe"\cf0 \strokec2 ; \cf7 \strokec7 // Entidade para receitas "p\'fablicas"\cf0 \cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 SavedRecipe\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/SavedRecipe"\cf0 \strokec2 ; \cf7 \strokec7 // Entidade para receitas salvas pelo usu\'e1rio\cf0 \cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 User\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/User"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Button\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Badge\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Card\cf0 \strokec2 , \cf5 \strokec5 CardContent\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ format \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "date-fns"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ ptBR \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "date-fns/locale"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 ArrowLeft\cf0 \strokec2 , \cf5 \strokec5 Clock\cf0 \strokec2 , \cf5 \strokec5 Save\cf0 \strokec2 , \cf5 \strokec5 Share2\cf0 \strokec2 , \cf5 \strokec5 Bookmark\cf0 \strokec2 , \cf5 \strokec5 BookmarkCheck\cf0 \strokec2 , \cf5 \strokec5 ChefHat\cf0 \strokec2 , \cf5 \strokec5 Printer\cf0 \strokec2 , \cf5 \strokec5 Star\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "lucide-react"\cf0 \strokec2 ;\cb1 \strokec2 \
\
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 default\cf0 \strokec2  \cf3 \strokec3 function\cf0 \strokec2  \cf5 \strokec5 RecipeDetail\cf0 \strokec2 () \{\cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [recipe, setRecipe] = useState(\cf3 \strokec3 null\cf0 \strokec2 ); \cf7 \strokec7 // Pode ser da entidade Recipe ou SavedRecipe\cf0 \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [loading, setLoading] = useState(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [user, setUser] = useState(\cf3 \strokec3 null\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [isSaved, setIsSaved] = useState(\cf3 \strokec3 false\cf0 \strokec2 ); \cf7 \strokec7 // Verifica se esta receita espec\'edfica est\'e1 salva em SavedRecipe\cf0 \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [savingState, setSavingState] = useState(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  navigate = useNavigate();\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   useEffect(() => \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  loadData = \cf3 \strokec3 async\cf0 \strokec2  () => \{\cb1 \strokec2 \
\cb4 \strokec2       setLoading(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 try\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  searchParams = \cf3 \strokec3 new\cf0 \strokec2  \cf5 \strokec5 URLSearchParams\cf0 \strokec2 (window.location.search);\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  recipeId = searchParams.\cf3 \strokec3 get\cf0 \strokec2 (\cf6 \strokec6 "id"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  source = searchParams.\cf3 \strokec3 get\cf0 \strokec2 (\cf6 \strokec6 "source"\cf0 \strokec2 ) || \cf6 \strokec6 "public"\cf0 \strokec2 ; \cf7 \strokec7 // 'public' ou 'saved'\cf0 \cb1 \strokec2 \
\
\cb4 \strokec2         \cf3 \strokec3 if\cf0 \strokec2  (!recipeId) \{\cb1 \strokec2 \
\cb4 \strokec2           navigate(createPageUrl(\cf6 \strokec6 "Recipes"\cf0 \strokec2 ));\cb1 \strokec2 \
\cb4 \strokec2           \cf3 \strokec3 return\cf0 \strokec2 ;\cb1 \strokec2 \
\cb4 \strokec2         \}\cb1 \strokec2 \
\cb4 \strokec2         \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 let\cf0 \strokec2  userData = \cf3 \strokec3 null\cf0 \strokec2 ;\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 try\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2           \cf7 \strokec7 // Tenta buscar o usu\'e1rio, mas n\'e3o falha se n\'e3o estiver logado\cf0 \cb1 \strokec2 \
\cb4 \strokec2           userData = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 User\cf0 \strokec2 .me();\cb1 \strokec2 \
\cb4 \strokec2         \} \cf3 \strokec3 catch\cf0 \strokec2  (authError) \{\cb1 \strokec2 \
\cb4 \strokec2           \cf7 \strokec7 // \'c9 normal o usu\'e1rio n\'e3o estar logado, ele \'e9 um visitante.\cf0 \cb1 \strokec2 \
\cb4 \strokec2           \cf7 \strokec7 // A p\'e1gina continuar\'e1 a carregar o conte\'fado p\'fablico.\cf0 \cb1 \strokec2 \
\cb4 \strokec2           console.log(\cf6 \strokec6 "Usu\'e1rio n\'e3o autenticado ou erro ao buscar usu\'e1rio:"\cf0 \strokec2 , authError.message);\cb1 \strokec2 \
\cb4 \strokec2         \}\cb1 \strokec2 \
\cb4 \strokec2         setUser(userData);\cb1 \strokec2 \
\cb4 \strokec2         \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 let\cf0 \strokec2  recipeData;\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 if\cf0 \strokec2  (source === \cf6 \strokec6 "saved"\cf0 \strokec2 ) \{\cb1 \strokec2 \
\cb4 \strokec2             \cf7 \strokec7 // Se um visitante tentar acessar uma receita salva, redireciona.\cf0 \cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 if\cf0 \strokec2  (!userData) \{\cb1 \strokec2 \
\cb4 \strokec2                 navigate(createPageUrl(\cf6 \strokec6 "Recipes"\cf0 \strokec2 ));\cb1 \strokec2 \
\cb4 \strokec2                 \cf3 \strokec3 return\cf0 \strokec2 ;\cb1 \strokec2 \
\cb4 \strokec2             \}\cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 const\cf0 \strokec2  savedRecipes = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 SavedRecipe\cf0 \strokec2 .filter(\{ id: recipeId, user_id: userData.id \});\cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 if\cf0 \strokec2  (savedRecipes.length > \cf8 \strokec8 0\cf0 \strokec2 ) \{\cb1 \strokec2 \
\cb4 \strokec2                 recipeData = savedRecipes[\cf8 \strokec8 0\cf0 \strokec2 ];\cb1 \strokec2 \
\cb4 \strokec2                 setIsSaved(\cf3 \strokec3 true\cf0 \strokec2 ); \cf7 \strokec7 // Se veio de 'saved', j\'e1 est\'e1 salva\cf0 \cb1 \strokec2 \
\cb4 \strokec2             \}\cb1 \strokec2 \
\cb4 \strokec2         \} \cf3 \strokec3 else\cf0 \strokec2  \{ \cf7 \strokec7 // source === 'public' ou n\'e3o especificado\cf0 \cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 const\cf0 \strokec2  publicRecipes = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 Recipe\cf0 \strokec2 .list(); \cf7 \strokec7 // Assumindo que Recipe.list() busca da entidade Recipe global\cf0 \cb1 \strokec2 \
\cb4 \strokec2             recipeData = publicRecipes.find(r => r.id === recipeId);\cb1 \strokec2 \
\cb4 \strokec2             \cf7 \strokec7 // Se o usu\'e1rio estiver logado, verifica se ele j\'e1 salvou esta receita p\'fablica\cf0 \cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 if\cf0 \strokec2  (recipeData && userData && userData.plan === \cf6 \strokec6 'premium'\cf0 \strokec2 ) \{ \cf7 \strokec7 // Verificar se j\'e1 est\'e1 salva mesmo vindo de p\'fablica\cf0 \cb1 \strokec2 \
\cb4 \strokec2                 \cf3 \strokec3 const\cf0 \strokec2  userSavedVersion = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 SavedRecipe\cf0 \strokec2 .filter(\{ original_recipe_id: recipeId, user_id: userData.id \});\cb1 \strokec2 \
\cb4 \strokec2                 \cf3 \strokec3 if\cf0 \strokec2  (userSavedVersion.length > \cf8 \strokec8 0\cf0 \strokec2 ) \{\cb1 \strokec2 \
\cb4 \strokec2                     setIsSaved(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2                 \}\cb1 \strokec2 \
\cb4 \strokec2             \}\cb1 \strokec2 \
\cb4 \strokec2         \}\cb1 \strokec2 \
\cb4 \strokec2         \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 if\cf0 \strokec2  (!recipeData) \{\cb1 \strokec2 \
\cb4 \strokec2           navigate(createPageUrl(\cf6 \strokec6 "Recipes"\cf0 \strokec2 ));\cb1 \strokec2 \
\cb4 \strokec2           \cf3 \strokec3 return\cf0 \strokec2 ;\cb1 \strokec2 \
\cb4 \strokec2         \}\cb1 \strokec2 \
\cb4 \strokec2         setRecipe(recipeData);\cb1 \strokec2 \
\
\cb4 \strokec2       \} \cf3 \strokec3 catch\cf0 \strokec2  (error) \{\cb1 \strokec2 \
\cb4 \strokec2         console.error(\cf6 \strokec6 "Erro ao carregar receita:"\cf0 \strokec2 , error);\cb1 \strokec2 \
\cb4 \strokec2         navigate(createPageUrl(\cf6 \strokec6 "Recipes"\cf0 \strokec2 ));\cb1 \strokec2 \
\cb4 \strokec2       \} \cf3 \strokec3 finally\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         setLoading(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \}\cb1 \strokec2 \
\cb4 \strokec2     \};\cb1 \strokec2 \
\cb4 \strokec2     \cb1 \strokec2 \
\cb4 \strokec2     loadData();\cb1 \strokec2 \
\cb4 \strokec2   \}, [navigate]);\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  handleSaveRecipeToggle = \cf3 \strokec3 async\cf0 \strokec2  () => \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 if\cf0 \strokec2  (!recipe || !user || user.plan !== \cf6 \strokec6 "premium"\cf0 \strokec2 ) \cf3 \strokec3 return\cf0 \strokec2 ;\cb1 \strokec2 \
\cb4 \strokec2     \cb1 \strokec2 \
\cb4 \strokec2     setSavingState(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 try\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 if\cf0 \strokec2  (isSaved) \{\cb1 \strokec2 \
\cb4 \strokec2         \cf7 \strokec7 // L\'f3gica para remover de SavedRecipe (precisa encontrar pelo t\'edtulo ou um ID original se tiver)\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf7 \strokec7 // Se a receita atual veio de SavedRecipe, tem recipe.id que \'e9 o ID em SavedRecipe\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf7 \strokec7 // Se veio de Recipe (p\'fablica), precisamos encontrar em SavedRecipe pelo original_recipe_id\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  savedRecipeEntry = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 SavedRecipe\cf0 \strokec2 .filter(\{ original_recipe_id: recipe.id, user_id: user.id \}); \cf7 \strokec7 // Assumindo que recipe.id aqui \'e9 da entidade Recipe\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 if\cf0 \strokec2  (savedRecipeEntry.length > \cf8 \strokec8 0\cf0 \strokec2 ) \{\cb1 \strokec2 \
\cb4 \strokec2              \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 SavedRecipe\cf0 \strokec2 .\cf3 \strokec3 delete\cf0 \strokec2 (savedRecipeEntry[\cf8 \strokec8 0\cf0 \strokec2 ].id);\cb1 \strokec2 \
\cb4 \strokec2              setIsSaved(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2              alert(\cf6 \strokec6 "Receita removida das suas salvas!"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2         \} \cf3 \strokec3 else\cf0 \strokec2  \cf3 \strokec3 if\cf0 \strokec2  (recipe.user_id === user.id) \{ \cf7 \strokec7 // Se a receita aberta \'e9 uma SavedRecipe diretamente\cf0 \cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 SavedRecipe\cf0 \strokec2 .\cf3 \strokec3 delete\cf0 \strokec2 (recipe.id);\cb1 \strokec2 \
\cb4 \strokec2             setIsSaved(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2             alert(\cf6 \strokec6 "Receita removida das suas salvas!"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2         \}\cb1 \strokec2 \
\
\cb4 \strokec2       \} \cf3 \strokec3 else\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         \cf7 \strokec7 // Salvar em SavedRecipe\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  recipeToSave = \{\cb1 \strokec2 \
\cb4 \strokec2           user_id: user.id,\cb1 \strokec2 \
\cb4 \strokec2           original_recipe_id: recipe.original_recipe_id || recipe.id, \cf7 \strokec7 // Se j\'e1 for SavedRecipe, mant\'e9m, sen\'e3o usa o ID da Recipe\cf0 \cb1 \strokec2 \
\cb4 \strokec2           title: recipe.title,\cb1 \strokec2 \
\cb4 \strokec2           ingredients: recipe.ingredients,\cb1 \strokec2 \
\cb4 \strokec2           instructions: recipe.instructions,\cb1 \strokec2 \
\cb4 \strokec2           cooking_time: recipe.cooking_time,\cb1 \strokec2 \
\cb4 \strokec2           difficulty: recipe.difficulty,\cb1 \strokec2 \
\cb4 \strokec2           is_sweet: recipe.is_sweet,\cb1 \strokec2 \
\cb4 \strokec2           meal_type: recipe.meal_type,\cb1 \strokec2 \
\cb4 \strokec2           image_url: recipe.image_url,\cb1 \strokec2 \
\cb4 \strokec2         \};\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 SavedRecipe\cf0 \strokec2 .create(recipeToSave);\cb1 \strokec2 \
\cb4 \strokec2         setIsSaved(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2         alert(\cf6 \strokec6 "Receita salva com sucesso!"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \}\cb1 \strokec2 \
\cb4 \strokec2     \} \cf3 \strokec3 catch\cf0 \strokec2  (error) \{\cb1 \strokec2 \
\cb4 \strokec2       console.error(\cf6 \strokec6 "Erro ao salvar/remover receita:"\cf0 \strokec2 , error);\cb1 \strokec2 \
\cb4 \strokec2       alert(\cf6 \strokec6 "Ocorreu um erro. Tente novamente."\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     \} \cf3 \strokec3 finally\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2       setSavingState(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     \}\cb1 \strokec2 \
\cb4 \strokec2   \};\cb1 \strokec2 \
\cb4 \strokec2     \cb1 \strokec2 \
\cb4 \strokec2   \cf7 \strokec7 // ... (handleShare, handlePrint, loading/error states como antes)\cf0 \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  handleShare = () => \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 if\cf0 \strokec2  (!recipe) \cf3 \strokec3 return\cf0 \strokec2 ;\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 if\cf0 \strokec2  (navigator.share) \{\cb1 \strokec2 \
\cb4 \strokec2       navigator.share(\{\cb1 \strokec2 \
\cb4 \strokec2         title: recipe.title,\cb1 \strokec2 \
\cb4 \strokec2         text: \cf6 \strokec6 `Confira esta receita de \cf0 \strokec2 $\{recipe.title\}\cf6 \strokec6  que encontrei no Rest\'f4AI!`\cf0 \strokec2 ,\cb1 \strokec2 \
\cb4 \strokec2         url: window.location.href\cb1 \strokec2 \
\cb4 \strokec2       \}).\cf3 \strokec3 catch\cf0 \strokec2 (console.error);\cb1 \strokec2 \
\cb4 \strokec2     \} \cf3 \strokec3 else\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2       navigator.clipboard.writeText(window.location.href);\cb1 \strokec2 \
\cb4 \strokec2       alert(\cf6 \strokec6 "Link copiado!"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     \}\cb1 \strokec2 \
\cb4 \strokec2   \};\cb1 \strokec2 \
\
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  handlePrint = () => window.print();\cb1 \strokec2 \
\
\cb4 \strokec2   \cf3 \strokec3 if\cf0 \strokec2  (loading) \{ \cf7 \strokec7 /* ... loading UI ... */\cf0 \strokec2  \cf3 \strokec3 return\cf0 \strokec2  <div className=\cf6 \strokec6 "flex justify-center items-center h-screen"\cf0 \strokec2 ><div className=\cf6 \strokec6 "w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"\cf0 \strokec2 ></div></div>; \}\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 if\cf0 \strokec2  (!recipe) \{ \cf7 \strokec7 /* ... not found UI ... */\cf0 \strokec2  \cf3 \strokec3 return\cf0 \strokec2  <div className=\cf6 \strokec6 "container mx-auto px-4 py-10 text-center"\cf0 \strokec2 ><h2>\cf5 \strokec5 Receita\cf0 \strokec2  n\cf9 \strokec9 \'e3\cf0 \strokec2 o encontrada</h2><\cf5 \strokec5 Button\cf0 \strokec2  onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 "Recipes"\cf0 \strokec2 ))\}>\cf5 \strokec5 Voltar\cf0 \strokec2 </\cf5 \strokec5 Button\cf0 \strokec2 ></div>; \}\cb1 \strokec2 \
\
\cb4 \strokec2   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \strokec2 \
\cb4 \strokec2     <div className=\cf6 \strokec6 "container mx-auto px-4 py-6 mb-16 md:mb-8 print:py-0"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       \{\cf7 \strokec7 /* ... Bot\'e3o Voltar ... */\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2        <\cf5 \strokec5 Button\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2         variant=\cf6 \strokec6 "ghost"\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2         className=\cf6 \strokec6 "mb-6 text-gray-600 print:hidden"\cf0 \cb1 \strokec2 \
\cb4 \strokec2         onClick=\{() => navigate(-\cf8 \strokec8 1\cf0 \strokec2 )\} \cf7 \strokec7 // Ou uma rota espec\'edfica createPageUrl("Recipes")\cf0 \cb1 \strokec2 \
\cb4 \strokec2       >\cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 ArrowLeft\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} className=\cf6 \strokec6 "mr-1"\cf0 \strokec2  /> \cf5 \strokec5 Voltar\cf0 \cb1 \strokec2 \
\cb4 \strokec2       </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       \cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "bg-white rounded-xl shadow-lg overflow-hidden mb-8 print:shadow-none"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         \{\cf7 \strokec7 /* ... Imagem e Header da Receita ... */\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2         <div className=\cf6 \strokec6 "relative h-64 md:h-80 bg-gray-100 print:h-0 print:hidden"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           \{recipe.image_url ? (\cb1 \strokec2 \
\cb4 \strokec2             <img src=\{recipe.image_url\} alt=\{recipe.title\} className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \strokec2 />\cb1 \strokec2 \
\cb4 \strokec2           ) : (\cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 ChefHat\cf0 \strokec2  size=\{\cf8 \strokec8 60\cf0 \strokec2 \} className=\cf6 \strokec6 "text-amber-500 opacity-60"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           )\}\cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "p-6 text-white"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <div className=\cf6 \strokec6 "flex flex-wrap gap-2 mb-2"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Badge\cf0 \strokec2  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm border-white/30"\cf0 \strokec2 ><\cf5 \strokec5 Clock\cf0 \strokec2  className=\cf6 \strokec6 "w-3 h-3 mr-1"\cf0 \strokec2  /> \{recipe.cooking_time\} min</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Badge\cf0 \strokec2  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm border-white/30"\cf0 \strokec2 >\{recipe.difficulty\}</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Badge\cf0 \strokec2  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm border-white/30"\cf0 \strokec2 >\{recipe.meal_type\}</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Badge\cf0 \strokec2  className=\{\cf6 \strokec6 `\cf0 \strokec2 $\{recipe.is_sweet ? \cf6 \strokec6 'bg-pink-500/70'\cf0 \strokec2  : \cf6 \strokec6 'bg-blue-500/70'\cf0 \strokec2 \}\cf6 \strokec6  border-transparent`\cf0 \strokec2 \}>\{recipe.is_sweet ? \cf6 \strokec6 'Doce'\cf0 \strokec2  : \cf6 \strokec6 'Salgado'\cf0 \strokec2 \}</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               </div>\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2         </div>\cb1 \strokec2 \
\cb4 \strokec2         \cb1 \strokec2 \
\cb4 \strokec2         <div className=\cf6 \strokec6 "p-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <h1 className=\cf6 \strokec6 "text-2xl md:text-3xl font-bold"\cf0 \strokec2 >\{recipe.title\}</h1>\cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "flex gap-2 print:hidden"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Button\cf0 \strokec2  variant=\cf6 \strokec6 "outline"\cf0 \strokec2  size=\cf6 \strokec6 "sm"\cf0 \strokec2  className=\cf6 \strokec6 "gap-1"\cf0 \strokec2  onClick=\{handlePrint\}><\cf5 \strokec5 Printer\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} />\cf5 \strokec5 Imprimir\cf0 \strokec2 </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Button\cf0 \strokec2  variant=\cf6 \strokec6 "outline"\cf0 \strokec2  size=\cf6 \strokec6 "sm"\cf0 \strokec2  className=\cf6 \strokec6 "gap-1"\cf0 \strokec2  onClick=\{handleShare\}><\cf5 \strokec5 Share2\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} />\cf5 \strokec5 Compartilhar\cf0 \strokec2 </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               \{user && user.plan === \cf6 \strokec6 "premium"\cf0 \strokec2  ? (\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Button\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2                   variant=\{isSaved ? \cf6 \strokec6 "default"\cf0 \strokec2  : \cf6 \strokec6 "outline"\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2                   size=\cf6 \strokec6 "sm"\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2                   className=\{\cf6 \strokec6 `gap-1 \cf0 \strokec2 $\{isSaved ? \cf6 \strokec6 'bg-[#ff7b54] hover:bg-[#e45826]'\cf0 \strokec2  : \cf6 \strokec6 ''\cf0 \strokec2 \}\cf6 \strokec6 `\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2                   onClick=\{handleSaveRecipeToggle\}\cb1 \strokec2 \
\cb4 \strokec2                   disabled=\{savingState\}\cb1 \strokec2 \
\cb4 \strokec2                 >\cb1 \strokec2 \
\cb4 \strokec2                   \{savingState ? <div className=\cf6 \strokec6 "w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"\cf0 \strokec2 ></div> : (isSaved ? <\cf5 \strokec5 BookmarkCheck\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} /> : <\cf5 \strokec5 Bookmark\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} />)\}\cb1 \strokec2 \
\cb4 \strokec2                   \{isSaved ? \cf6 \strokec6 'Salvo'\cf0 \strokec2  : \cf6 \strokec6 'Salvar'\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2                 </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               ) : user && user.plan === \cf6 \strokec6 "free"\cf0 \strokec2  ? (\cb1 \strokec2 \
\cb4 \strokec2                  <div className=\cf6 \strokec6 "text-center p-2 bg-amber-50 rounded-md"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                     <p className=\cf6 \strokec6 "text-xs text-amber-700"\cf0 \strokec2 >\cf5 \strokec5 Assine\cf0 \strokec2  o \cf5 \strokec5 Premium\cf0 \strokec2  para salvar!</p>\cb1 \strokec2 \
\cb4 \strokec2                     <\cf5 \strokec5 Button\cf0 \strokec2  variant=\cf6 \strokec6 "link"\cf0 \strokec2  size=\cf6 \strokec6 "xs"\cf0 \strokec2  className=\cf6 \strokec6 "text-[#ff7b54] h-auto p-0"\cf0 \strokec2  onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 "Upgrade"\cf0 \strokec2 ))\}>\cf5 \strokec5 Fazer\cf0 \strokec2  \cf5 \strokec5 Upgrade\cf0 \strokec2 </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 </div>\cb1 \strokec2 \
\cb4 \strokec2               ) : ( \cf7 \strokec7 // Render nothing or a disabled save button for unauthenticated users\cf0 \cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 Button\cf0 \strokec2  variant=\cf6 \strokec6 "outline"\cf0 \strokec2  size=\cf6 \strokec6 "sm"\cf0 \strokec2  className=\cf6 \strokec6 "gap-1"\cf0 \strokec2  disabled title=\cf6 \strokec6 "Fa\'e7a login para salvar receitas"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                     <\cf5 \strokec5 Bookmark\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} /> \cf5 \strokec5 Salvar\cf0 \cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               )\}\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2           \cb1 \strokec2 \
\cb4 \strokec2           \{\cf7 \strokec7 /* ... Conte\'fado da Receita (Ingredientes, Modo de Preparo) ... */\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "grid grid-cols-1 md:grid-cols-2 gap-10"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <div>\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Card\cf0 \strokec2  className=\cf6 \strokec6 "bg-gray-50 border-none"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 CardContent\cf0 \strokec2  className=\cf6 \strokec6 "p-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <h2 className=\cf6 \strokec6 "text-xl font-semibold mb-4"\cf0 \strokec2 >\cf5 \strokec5 Ingredientes\cf0 \strokec2 </h2>\cb1 \strokec2 \
\cb4 \strokec2                   <ul className=\cf6 \strokec6 "space-y-3"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                     \{recipe.ingredients.map((ing, index) => (\cb1 \strokec2 \
\cb4 \strokec2                       <li key=\{index\} className=\cf6 \strokec6 "flex items-baseline"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                         <span className=\cf6 \strokec6 "w-2 h-2 rounded-full bg-[#ff7b54] mr-3 mt-2"\cf0 \strokec2 ></span>\cb1 \strokec2 \
\cb4 \strokec2                         <span className=\cf6 \strokec6 "flex-1"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                           <span className=\cf6 \strokec6 "font-medium"\cf0 \strokec2 >\{ing.name\}</span>\cb1 \strokec2 \
\cb4 \strokec2                           \{ing.quantity && ing.unit && (<span className=\cf6 \strokec6 "text-gray-600"\cf0 \strokec2 > - \{ing.quantity\} \{ing.unit\}</span>)\}\cb1 \strokec2 \
\cb4 \strokec2                         </span>\cb1 \strokec2 \
\cb4 \strokec2                       </li>\cb1 \strokec2 \
\cb4 \strokec2                     ))\}\cb1 \strokec2 \
\cb4 \strokec2                   </ul>\cb1 \strokec2 \
\cb4 \strokec2                 </\cf5 \strokec5 CardContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               </\cf5 \strokec5 Card\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2             <div>\cb1 \strokec2 \
\cb4 \strokec2               <h2 className=\cf6 \strokec6 "text-xl font-semibold mb-4"\cf0 \strokec2 >\cf5 \strokec5 Modo\cf0 \strokec2  de \cf5 \strokec5 Preparo\cf0 \strokec2 </h2>\cb1 \strokec2 \
\cb4 \strokec2               <ol className=\cf6 \strokec6 "space-y-4 ml-6 list-decimal"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 \{recipe.instructions.map((step, index) => (<li key=\{index\} className=\cf6 \strokec6 "pl-2"\cf0 \strokec2 ><p className=\cf6 \strokec6 "text-gray-800"\cf0 \strokec2 >\{step\}</p></li>))\}\cb1 \strokec2 \
\cb4 \strokec2               </ol>\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2         </div>\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2       \{\cf7 \strokec7 /* ... (se\'e7\'e3o de coment\'e1rios etc. como antes) ... */\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2     </div>\cb1 \strokec2 \
\cb4 \strokec2   );\cb1 \strokec2 \
\cb4 \strokec2 \}\cb1 \strokec2 \
}