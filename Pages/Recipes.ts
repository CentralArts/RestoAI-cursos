{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue255;\red255\green255\blue254;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red191\green28\blue37;\red19\green118\blue70;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c80392\c19216\c19216;\cssrgb\c3529\c52549\c34510;
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
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Recipe\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/Recipe"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Button\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Input\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/input"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Card\cf0 \strokec2 , \cf5 \strokec5 CardContent\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Badge\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Skeleton\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/skeleton"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 ChevronRight\cf0 \strokec2 , \cf5 \strokec5 Search\cf0 \strokec2 , \cf5 \strokec5 Filter\cf0 \strokec2 , \cf5 \strokec5 Clock\cf0 \strokec2 , \cf5 \strokec5 Utensils\cf0 \strokec2 , \cf5 \strokec5 ChefHat\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "lucide-react"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Tabs\cf0 \strokec2 , \cf5 \strokec5 TabsContent\cf0 \strokec2 , \cf5 \strokec5 TabsList\cf0 \strokec2 , \cf5 \strokec5 TabsTrigger\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/tabs"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{\cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4 \strokec2   \cf5 \strokec5 DropdownMenu\cf0 \strokec2 ,\cb1 \strokec2 \
\cb4 \strokec2   \cf5 \strokec5 DropdownMenuContent\cf0 \strokec2 ,\cb1 \strokec2 \
\cb4 \strokec2   \cf5 \strokec5 DropdownMenuGroup\cf0 \strokec2 ,\cb1 \strokec2 \
\cb4 \strokec2   \cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 ,\cb1 \strokec2 \
\cb4 \strokec2   \cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec2 ,\cb1 \strokec2 \
\cb4 \strokec2 \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/dropdown-menu"\cf0 \strokec2 ;\cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 default\cf0 \strokec2  \cf3 \strokec3 function\cf0 \strokec2  \cf5 \strokec5 Recipes\cf0 \strokec2 () \{\cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [recipes, setRecipes] = useState([]);\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [loading, setLoading] = useState(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [searchTerm, setSearchTerm] = useState(\cf6 \strokec6 ""\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [filterDifficulty, setFilterDifficulty] = useState(\cf6 \strokec6 "all"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [filterMealType, setFilterMealType] = useState(\cf6 \strokec6 "all"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [currentTab, setCurrentTab] = useState(\cf6 \strokec6 "all"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  navigate = useNavigate();\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   useEffect(() => \{\cb1 \strokec2 \
\cb4 \strokec2     loadRecipes();\cb1 \strokec2 \
\cb4 \strokec2   \}, []);\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  loadRecipes = \cf3 \strokec3 async\cf0 \strokec2  () => \{\cb1 \strokec2 \
\cb4 \strokec2     setLoading(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 try\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 const\cf0 \strokec2  data = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 Recipe\cf0 \strokec2 .list();\cb1 \strokec2 \
\cb4 \strokec2       setRecipes(data);\cb1 \strokec2 \
\cb4 \strokec2     \} \cf3 \strokec3 catch\cf0 \strokec2  (error) \{\cb1 \strokec2 \
\cb4 \strokec2       console.error(\cf6 \strokec6 "Erro ao carregar receitas:"\cf0 \strokec2 , error);\cb1 \strokec2 \
\cb4 \strokec2     \} \cf3 \strokec3 finally\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2       setLoading(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     \}\cb1 \strokec2 \
\cb4 \strokec2   \};\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  handleRecipeClick = (recipe) => \{\cb1 \strokec2 \
\cb4 \strokec2     navigate(createPageUrl(\cf6 \strokec6 `RecipeDetail?id=\cf0 \strokec2 $\{recipe.id\}\cf6 \strokec6 `\cf0 \strokec2 ));\cb1 \strokec2 \
\cb4 \strokec2   \};\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  filteredRecipes = recipes.filter(recipe => \{\cb1 \strokec2 \
\cb4 \strokec2     \cf7 \strokec7 // Filtro por texto\cf0 \cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||\cb1 \strokec2 \
\cb4 \strokec2       recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm.toLowerCase()));\cb1 \strokec2 \
\cb4 \strokec2     \cb1 \strokec2 \
\cb4 \strokec2     \cf7 \strokec7 // Filtro por tipo (doce/salgado)\cf0 \cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  matchesType = currentTab === \cf6 \strokec6 "all"\cf0 \strokec2  || \cb1 \strokec2 \
\cb4 \strokec2       (currentTab === \cf6 \strokec6 "sweet"\cf0 \strokec2  && recipe.is_sweet) || \cb1 \strokec2 \
\cb4 \strokec2       (currentTab === \cf6 \strokec6 "savory"\cf0 \strokec2  && !recipe.is_sweet);\cb1 \strokec2 \
\cb4 \strokec2     \cb1 \strokec2 \
\cb4 \strokec2     \cf7 \strokec7 // Filtro por dificuldade\cf0 \cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  matchesDifficulty = filterDifficulty === \cf6 \strokec6 "all"\cf0 \strokec2  || recipe.difficulty === filterDifficulty;\cb1 \strokec2 \
\cb4 \strokec2     \cb1 \strokec2 \
\cb4 \strokec2     \cf7 \strokec7 // Filtro por tipo de refei\'e7\'e3o\cf0 \cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  matchesMealType = filterMealType === \cf6 \strokec6 "all"\cf0 \strokec2  || recipe.meal_type === filterMealType;\cb1 \strokec2 \
\cb4 \strokec2     \cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 return\cf0 \strokec2  matchesSearch && matchesType && matchesDifficulty && matchesMealType;\cb1 \strokec2 \
\cb4 \strokec2   \});\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  resetFilters = () => \{\cb1 \strokec2 \
\cb4 \strokec2     setFilterDifficulty(\cf6 \strokec6 "all"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     setFilterMealType(\cf6 \strokec6 "all"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     setSearchTerm(\cf6 \strokec6 ""\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \};\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \strokec2 \
\cb4 \strokec2     <div className=\cf6 \strokec6 "container mx-auto px-4 py-6 md:py-10 mb-20 md:mb-8"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "mb-8"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <h1 className=\cf6 \strokec6 "text-2xl md:text-3xl font-bold mb-2"\cf0 \strokec2 >\cf5 \strokec5 Receitas\cf0 \strokec2 </h1>\cb1 \strokec2 \
\cb4 \strokec2         <p className=\cf6 \strokec6 "text-gray-600"\cf0 \strokec2 >\cf5 \strokec5 Explore\cf0 \strokec2  receitas deliciosas e expanda seu repert\cf8 \strokec8 \'f3\cf0 \strokec2 rio culin\cf8 \strokec8 \'e1\cf0 \strokec2 rio</p>\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2       \cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "bg-white rounded-xl shadow-md p-4 mb-8"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <div className=\cf6 \strokec6 "flex flex-col md:flex-row gap-3 md:items-center mb-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "relative flex-1"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 Search\cf0 \strokec2  className=\cf6 \strokec6 "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"\cf0 \strokec2  size=\{\cf9 \strokec9 18\cf0 \strokec2 \} />\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 Input\cf0 \cb1 \strokec2 \
\cb4 \strokec2               placeholder=\cf6 \strokec6 "Buscar por nome ou ingrediente..."\cf0 \cb1 \strokec2 \
\cb4 \strokec2               value=\{searchTerm\}\cb1 \strokec2 \
\cb4 \strokec2               onChange=\{(e) => setSearchTerm(e.target.value)\}\cb1 \strokec2 \
\cb4 \strokec2               className=\cf6 \strokec6 "pl-10"\cf0 \cb1 \strokec2 \
\cb4 \strokec2             />\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2           \cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "flex gap-3"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 DropdownMenu\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec2  asChild>\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Button\cf0 \strokec2  variant=\cf6 \strokec6 "outline"\cf0 \strokec2  className=\cf6 \strokec6 "flex gap-2"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 Filter\cf0 \strokec2  size=\{\cf9 \strokec9 16\cf0 \strokec2 \} />\cb1 \strokec2 \
\cb4 \strokec2                   \cf5 \strokec5 Filtros\cf0 \cb1 \strokec2 \
\cb4 \strokec2                 </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               </\cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 DropdownMenuContent\cf0 \strokec2  className=\cf6 \strokec6 "w-56"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 DropdownMenuGroup\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterDifficulty(\cf6 \strokec6 "all"\cf0 \strokec2 )\} className=\{filterDifficulty === \cf6 \strokec6 "all"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 Todas\cf0 \strokec2  dificuldades\cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterDifficulty(\cf6 \strokec6 "f\'e1cil"\cf0 \strokec2 )\} className=\{filterDifficulty === \cf6 \strokec6 "f\'e1cil"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 F\cf8 \strokec8 \'e1\cf0 \strokec2 cil\cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterDifficulty(\cf6 \strokec6 "m\'e9dio"\cf0 \strokec2 )\} className=\{filterDifficulty === \cf6 \strokec6 "m\'e9dio"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 M\cf8 \strokec8 \'e9\cf0 \strokec2 dio\cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterDifficulty(\cf6 \strokec6 "dif\'edcil"\cf0 \strokec2 )\} className=\{filterDifficulty === \cf6 \strokec6 "dif\'edcil"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 Dif\cf8 \strokec8 \'ed\cf0 \strokec2 cil\cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 </\cf5 \strokec5 DropdownMenuGroup\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 \cb1 \strokec2 \
\cb4 \strokec2                 <div className=\cf6 \strokec6 "h-px bg-gray-100 my-2"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                 \cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 DropdownMenuGroup\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterMealType(\cf6 \strokec6 "all"\cf0 \strokec2 )\} className=\{filterMealType === \cf6 \strokec6 "all"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 Todas\cf0 \strokec2  refei\cf8 \strokec8 \'e7\'f5\cf0 \strokec2 es\cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterMealType(\cf6 \strokec6 "caf\'e9 da manh\'e3"\cf0 \strokec2 )\} className=\{filterMealType === \cf6 \strokec6 "caf\'e9 da manh\'e3"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 Caf\cf8 \strokec8 \'e9\cf0 \strokec2  da manh\cf8 \strokec8 \'e3\cf0 \cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterMealType(\cf6 \strokec6 "almo\'e7o"\cf0 \strokec2 )\} className=\{filterMealType === \cf6 \strokec6 "almo\'e7o"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 Almo\cf8 \strokec8 \'e7\cf0 \strokec2 o\cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterMealType(\cf6 \strokec6 "jantar"\cf0 \strokec2 )\} className=\{filterMealType === \cf6 \strokec6 "jantar"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 Jantar\cf0 \cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterMealType(\cf6 \strokec6 "sobremesa"\cf0 \strokec2 )\} className=\{filterMealType === \cf6 \strokec6 "sobremesa"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 Sobremesa\cf0 \cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2  onClick=\{() => setFilterMealType(\cf6 \strokec6 "lanche"\cf0 \strokec2 )\} className=\{filterMealType === \cf6 \strokec6 "lanche"\cf0 \strokec2  ? \cf6 \strokec6 "bg-amber-50"\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                     \cf5 \strokec5 Lanche\cf0 \cb1 \strokec2 \
\cb4 \strokec2                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 </\cf5 \strokec5 DropdownMenuGroup\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               </\cf5 \strokec5 DropdownMenuContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             </\cf5 \strokec5 DropdownMenu\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             \cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 Button\cf0 \strokec2  variant=\cf6 \strokec6 "ghost"\cf0 \strokec2  onClick=\{resetFilters\} className=\cf6 \strokec6 "text-gray-500"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               \cf5 \strokec5 Limpar\cf0 \cb1 \strokec2 \
\cb4 \strokec2             </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2         </div>\cb1 \strokec2 \
\cb4 \strokec2         \cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 Tabs\cf0 \strokec2  defaultValue=\cf6 \strokec6 "all"\cf0 \strokec2  onValueChange=\{setCurrentTab\}>\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 TabsList\cf0 \strokec2  className=\cf6 \strokec6 "mb-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 TabsTrigger\cf0 \strokec2  value=\cf6 \strokec6 "all"\cf0 \strokec2 >\cf5 \strokec5 Todas\cf0 \strokec2 </\cf5 \strokec5 TabsTrigger\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 TabsTrigger\cf0 \strokec2  value=\cf6 \strokec6 "savory"\cf0 \strokec2 >\cf5 \strokec5 Salgadas\cf0 \strokec2 </\cf5 \strokec5 TabsTrigger\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 TabsTrigger\cf0 \strokec2  value=\cf6 \strokec6 "sweet"\cf0 \strokec2 >\cf5 \strokec5 Doces\cf0 \strokec2 </\cf5 \strokec5 TabsTrigger\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           </\cf5 \strokec5 TabsList\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           \cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "flex items-center gap-2 text-sm text-gray-500 mb-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 Filter\cf0 \strokec2  size=\{\cf9 \strokec9 14\cf0 \strokec2 \} />\cb1 \strokec2 \
\cb4 \strokec2             \cf5 \strokec5 Filtros\cf0 \strokec2  ativos:\cb1 \strokec2 \
\cb4 \strokec2             \{filterDifficulty !== \cf6 \strokec6 "all"\cf0 \strokec2  && (\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Badge\cf0 \strokec2  variant=\cf6 \strokec6 "secondary"\cf0 \strokec2 >\{filterDifficulty\}</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             )\}\cb1 \strokec2 \
\cb4 \strokec2             \{filterMealType !== \cf6 \strokec6 "all"\cf0 \strokec2  && (\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Badge\cf0 \strokec2  variant=\cf6 \strokec6 "secondary"\cf0 \strokec2 >\{filterMealType\}</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             )\}\cb1 \strokec2 \
\cb4 \strokec2             \{(filterDifficulty !== \cf6 \strokec6 "all"\cf0 \strokec2  || filterMealType !== \cf6 \strokec6 "all"\cf0 \strokec2 ) && (\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Button\cf0 \strokec2  variant=\cf6 \strokec6 "ghost"\cf0 \strokec2  size=\cf6 \strokec6 "sm"\cf0 \strokec2  onClick=\{resetFilters\} className=\cf6 \strokec6 "h-7 text-xs"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 \cf5 \strokec5 Limpar\cf0 \cb1 \strokec2 \
\cb4 \strokec2               </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             )\}\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2           \cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 TabsContent\cf0 \strokec2  value=\cf6 \strokec6 "all"\cf0 \strokec2  className=\cf6 \strokec6 "m-0"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             \{renderRecipeGrid(filteredRecipes, loading, handleRecipeClick)\}\cb1 \strokec2 \
\cb4 \strokec2           </\cf5 \strokec5 TabsContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 TabsContent\cf0 \strokec2  value=\cf6 \strokec6 "savory"\cf0 \strokec2  className=\cf6 \strokec6 "m-0"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             \{renderRecipeGrid(filteredRecipes, loading, handleRecipeClick)\}\cb1 \strokec2 \
\cb4 \strokec2           </\cf5 \strokec5 TabsContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 TabsContent\cf0 \strokec2  value=\cf6 \strokec6 "sweet"\cf0 \strokec2  className=\cf6 \strokec6 "m-0"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             \{renderRecipeGrid(filteredRecipes, loading, handleRecipeClick)\}\cb1 \strokec2 \
\cb4 \strokec2           </\cf5 \strokec5 TabsContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 Tabs\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2       \cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "flex justify-center"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 Button\cf0 \cb1 \strokec2 \
\cb4 \strokec2           variant=\cf6 \strokec6 "outline"\cf0 \cb1 \strokec2 \
\cb4 \strokec2           onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 "Home"\cf0 \strokec2 ))\}\cb1 \strokec2 \
\cb4 \strokec2           className=\cf6 \strokec6 "border-[#ff7b54] text-[#ff7b54]"\cf0 \cb1 \strokec2 \
\cb4 \strokec2         >\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 Utensils\cf0 \strokec2  size=\{\cf9 \strokec9 16\cf0 \strokec2 \} className=\cf6 \strokec6 "mr-2"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2           \cf5 \strokec5 Criar\cf0 \strokec2  nova receita\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2     </div>\cb1 \strokec2 \
\cb4 \strokec2   );\cb1 \strokec2 \
\cb4 \strokec2 \}\cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 function\cf0 \strokec2  renderRecipeGrid(recipes, loading, handleRecipeClick) \{\cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4 \strokec2   \cf3 \strokec3 if\cf0 \strokec2  (loading) \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         \{[\cf9 \strokec9 1\cf0 \strokec2 , \cf9 \strokec9 2\cf0 \strokec2 , \cf9 \strokec9 3\cf0 \strokec2 , \cf9 \strokec9 4\cf0 \strokec2 , \cf9 \strokec9 5\cf0 \strokec2 , \cf9 \strokec9 6\cf0 \strokec2 ].map((i) => (\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 Card\cf0 \strokec2  key=\{i\} className=\cf6 \strokec6 "overflow-hidden"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 Skeleton\cf0 \strokec2  className=\cf6 \strokec6 "h-48 w-full"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 CardContent\cf0 \strokec2  className=\cf6 \strokec6 "p-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Skeleton\cf0 \strokec2  className=\cf6 \strokec6 "h-6 w-3/4 mb-3"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Skeleton\cf0 \strokec2  className=\cf6 \strokec6 "h-4 w-full mb-2"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Skeleton\cf0 \strokec2  className=\cf6 \strokec6 "h-4 w-2/3 mb-4"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2               <div className=\cf6 \strokec6 "flex justify-between"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Skeleton\cf0 \strokec2  className=\cf6 \strokec6 "h-5 w-20 rounded-full"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Skeleton\cf0 \strokec2  className=\cf6 \strokec6 "h-5 w-16 rounded-full"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2               </div>\cb1 \strokec2 \
\cb4 \strokec2             </\cf5 \strokec5 CardContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           </\cf5 \strokec5 Card\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         ))\}\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2     );\cb1 \strokec2 \
\cb4 \strokec2   \}\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 if\cf0 \strokec2  (recipes.length === \cf9 \strokec9 0\cf0 \strokec2 ) \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "text-center py-16 bg-white rounded-xl shadow-md"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 ChefHat\cf0 \strokec2  size=\{\cf9 \strokec9 48\cf0 \strokec2 \} className=\cf6 \strokec6 "text-gray-300 mx-auto mb-4"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2         <h3 className=\cf6 \strokec6 "text-xl font-medium text-gray-600 mb-2"\cf0 \strokec2 >\cf5 \strokec5 Nenhuma\cf0 \strokec2  receita encontrada</h3>\cb1 \strokec2 \
\cb4 \strokec2         <p className=\cf6 \strokec6 "text-gray-500 mb-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           \cf5 \strokec5 Tente\cf0 \strokec2  outros crit\cf8 \strokec8 \'e9\cf0 \strokec2 rios de busca ou limpe os filtros\cb1 \strokec2 \
\cb4 \strokec2         </p>\cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 Button\cf0 \strokec2  variant=\cf6 \strokec6 "outline"\cf0 \strokec2  onClick=\{() => window.location.reload()\}>\cb1 \strokec2 \
\cb4 \strokec2           \cf5 \strokec5 Recarregar\cf0 \strokec2  receitas\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2     );\cb1 \strokec2 \
\cb4 \strokec2   \}\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \strokec2 \
\cb4 \strokec2     <div className=\cf6 \strokec6 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       \{recipes.map((recipe) => (\cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 Card\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2           key=\{recipe.id\} \cb1 \strokec2 \
\cb4 \strokec2           className=\cf6 \strokec6 "overflow-hidden cursor-pointer hover:shadow-lg transition-shadow card-hover"\cf0 \cb1 \strokec2 \
\cb4 \strokec2           onClick=\{() => handleRecipeClick(recipe)\}\cb1 \strokec2 \
\cb4 \strokec2         >\cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "h-48 bg-gray-100 relative"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             \{recipe.image_url ? (\cb1 \strokec2 \
\cb4 \strokec2               <img \cb1 \strokec2 \
\cb4 \strokec2                 src=\{recipe.image_url\} \cb1 \strokec2 \
\cb4 \strokec2                 alt=\{recipe.title\} \cb1 \strokec2 \
\cb4 \strokec2                 className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \cb1 \strokec2 \
\cb4 \strokec2               />\cb1 \strokec2 \
\cb4 \strokec2             ) : (\cb1 \strokec2 \
\cb4 \strokec2               <div className=\cf6 \strokec6 "absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Utensils\cf0 \strokec2  size=\{\cf9 \strokec9 36\cf0 \strokec2 \} className=\cf6 \strokec6 "text-amber-500 opacity-60"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2               </div>\cb1 \strokec2 \
\cb4 \strokec2             )\}\cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <div className=\cf6 \strokec6 "flex flex-wrap gap-1"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Badge\cf0 \strokec2  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm text-white border-white/30"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   \{recipe.difficulty\}\cb1 \strokec2 \
\cb4 \strokec2                 </\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Badge\cf0 \strokec2  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm text-white border-white/30"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 Clock\cf0 \strokec2  className=\cf6 \strokec6 "w-3 h-3 mr-1"\cf0 \strokec2  /> \{recipe.cooking_time\} min\cb1 \strokec2 \
\cb4 \strokec2                 </\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               </div>\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 CardContent\cf0 \strokec2  className=\cf6 \strokec6 "p-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <h3 className=\cf6 \strokec6 "font-semibold text-lg mb-1 line-clamp-1"\cf0 \strokec2 >\{recipe.title\}</h3>\cb1 \strokec2 \
\cb4 \strokec2             <p className=\cf6 \strokec6 "text-gray-600 text-sm mb-3 line-clamp-2"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               \{recipe.ingredients.slice(\cf9 \strokec9 0\cf0 \strokec2 , \cf9 \strokec9 3\cf0 \strokec2 ).map(i => i.name).join(\cf6 \strokec6 ", "\cf0 \strokec2 )\}\cb1 \strokec2 \
\cb4 \strokec2               \{recipe.ingredients.length > \cf9 \strokec9 3\cf0 \strokec2  ? \cf6 \strokec6 ", ..."\cf0 \strokec2  : \cf6 \strokec6 ""\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2             </p>\cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "flex justify-between items-center"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Badge\cf0 \strokec2  className=\{recipe.is_sweet ? \cf6 \strokec6 "bg-pink-100 text-pink-700"\cf0 \strokec2  : \cf6 \strokec6 "bg-blue-100 text-blue-700"\cf0 \strokec2 \}>\cb1 \strokec2 \
\cb4 \strokec2                 \{recipe.is_sweet ? \cf6 \strokec6 "Doce"\cf0 \strokec2  : \cf6 \strokec6 "Salgado"\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2               </\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <div className=\cf6 \strokec6 "text-[#ff7b54] flex items-center text-sm font-medium"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 \cf5 \strokec5 Ver\cf0 \strokec2  detalhes\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 ChevronRight\cf0 \strokec2  size=\{\cf9 \strokec9 16\cf0 \strokec2 \} />\cb1 \strokec2 \
\cb4 \strokec2               </div>\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           </\cf5 \strokec5 CardContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 Card\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       ))\}\cb1 \strokec2 \
\cb4 \strokec2     </div>\cb1 \strokec2 \
\cb4 \strokec2   );\cb1 \strokec2 \
\cb4 \strokec2 \}\cb1 \strokec2 \
\
}