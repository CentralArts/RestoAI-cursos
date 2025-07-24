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
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Recipe\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/Recipe"\cf0 \strokec2 ; \cf7 \strokec7 // Para "Geradas" se mantivermos essa l\'f3gica\cf0 \cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 SavedRecipe\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/SavedRecipe"\cf0 \strokec2 ; \cf7 \strokec7 // Para "Salvas"\cf0 \cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 User\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/User"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Button\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Card\cf0 \strokec2 , \cf5 \strokec5 CardContent\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Badge\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Tabs\cf0 \strokec2 , \cf5 \strokec5 TabsContent\cf0 \strokec2 , \cf5 \strokec5 TabsList\cf0 \strokec2 , \cf5 \strokec5 TabsTrigger\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/components/ui/tabs"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Clock\cf0 \strokec2 , \cf5 \strokec5 ChevronRight\cf0 \strokec2 , \cf5 \strokec5 BookOpen\cf0 \strokec2 , \cf5 \strokec5 History\cf0 \strokec2  as \cf5 \strokec5 HistoryIcon\cf0 \strokec2 , \cf5 \strokec5 Search\cf0 \strokec2 , \cf5 \strokec5 Bookmark\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "lucide-react"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ format \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "date-fns"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ ptBR \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "date-fns/locale"\cf0 \strokec2 ;\cb1 \strokec2 \
\
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 default\cf0 \strokec2  \cf3 \strokec3 function\cf0 \strokec2  \cf5 \strokec5 History\cf0 \strokec2 () \{\cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [generatedRecipes, setGeneratedRecipes] = useState([]); \cf7 \strokec7 // Da entidade Recipe, criadas pelo usu\'e1rio\cf0 \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [savedRecipes, setSavedRecipes] = useState([]); \cf7 \strokec7 // Da entidade SavedRecipe\cf0 \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [loadingGenerated, setLoadingGenerated] = useState(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [loadingSaved, setLoadingSaved] = useState(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [currentUser, setCurrentUser] = useState(\cf3 \strokec3 null\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  navigate = useNavigate();\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   useEffect(() => \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  loadUserData = \cf3 \strokec3 async\cf0 \strokec2  () => \{\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 try\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 const\cf0 \strokec2  userData = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 User\cf0 \strokec2 .me();\cb1 \strokec2 \
\cb4 \strokec2             setCurrentUser(userData);\cb1 \strokec2 \
\cb4 \strokec2         \} \cf3 \strokec3 catch\cf0 \strokec2  (error) \{\cb1 \strokec2 \
\cb4 \strokec2             console.error(\cf6 \strokec6 "Erro ao carregar usu\'e1rio:"\cf0 \strokec2 , error);\cb1 \strokec2 \
\cb4 \strokec2             navigate(createPageUrl(\cf6 \strokec6 "Home"\cf0 \strokec2 )); \cf7 \strokec7 // Ou p\'e1gina de login\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \}\cb1 \strokec2 \
\cb4 \strokec2     \};\cb1 \strokec2 \
\cb4 \strokec2     loadUserData();\cb1 \strokec2 \
\cb4 \strokec2   \}, [navigate]);\cb1 \strokec2 \
\
\cb4 \strokec2   useEffect(() => \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 if\cf0 \strokec2  (!currentUser) \cf3 \strokec3 return\cf0 \strokec2 ;\cb1 \strokec2 \
\
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  loadGenerated = \cf3 \strokec3 async\cf0 \strokec2  () => \{\cb1 \strokec2 \
\cb4 \strokec2       setLoadingGenerated(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 try\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         \cf7 \strokec7 // Estas s\'e3o receitas da entidade 'Recipe' que o usu\'e1rio 'criou' (ou seja, gerou e salvou l\'e1 anteriormente)\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf7 \strokec7 // Se a l\'f3gica mudou para n\'e3o salvar automaticamente em Recipe, esta lista pode ficar vazia ou ser removida.\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf7 \strokec7 // Por enquanto, mantenho a l\'f3gica que filtra Recipe por created_by\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  allPublicRecipes = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 Recipe\cf0 \strokec2 .list(\cf6 \strokec6 "-created_date"\cf0 \strokec2 ); \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  userGenerated = allPublicRecipes.filter(r => r.created_by === currentUser.email);\cb1 \strokec2 \
\cb4 \strokec2         setGeneratedRecipes(userGenerated);\cb1 \strokec2 \
\cb4 \strokec2       \} \cf3 \strokec3 catch\cf0 \strokec2  (error) \{\cb1 \strokec2 \
\cb4 \strokec2         console.error(\cf6 \strokec6 "Erro ao carregar receitas geradas:"\cf0 \strokec2 , error);\cb1 \strokec2 \
\cb4 \strokec2       \} \cf3 \strokec3 finally\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         setLoadingGenerated(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \}\cb1 \strokec2 \
\cb4 \strokec2     \};\cb1 \strokec2 \
\
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  loadSaved = \cf3 \strokec3 async\cf0 \strokec2  () => \{\cb1 \strokec2 \
\cb4 \strokec2       setLoadingSaved(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 try\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  userSaved = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 SavedRecipe\cf0 \strokec2 .filter(\{ user_id: currentUser.id \}, \cf6 \strokec6 "-created_date"\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2         setSavedRecipes(userSaved);\cb1 \strokec2 \
\cb4 \strokec2       \} \cf3 \strokec3 catch\cf0 \strokec2  (error) \{\cb1 \strokec2 \
\cb4 \strokec2         console.error(\cf6 \strokec6 "Erro ao carregar receitas salvas:"\cf0 \strokec2 , error);\cb1 \strokec2 \
\cb4 \strokec2       \} \cf3 \strokec3 finally\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         setLoadingSaved(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \}\cb1 \strokec2 \
\cb4 \strokec2     \};\cb1 \strokec2 \
\cb4 \strokec2     \cb1 \strokec2 \
\cb4 \strokec2     loadGenerated();\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 if\cf0 \strokec2  (currentUser.plan === \cf6 \strokec6 'premium'\cf0 \strokec2 ) \{ \cf7 \strokec7 // S\'f3 carrega salvas se for premium (embora a UI j\'e1 bloqueie)\cf0 \cb1 \strokec2 \
\cb4 \strokec2         loadSaved();\cb1 \strokec2 \
\cb4 \strokec2     \} \cf3 \strokec3 else\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         setLoadingSaved(\cf3 \strokec3 false\cf0 \strokec2 ); \cf7 \strokec7 // Se n\'e3o for premium, n\'e3o h\'e1 salvas para carregar\cf0 \cb1 \strokec2 \
\cb4 \strokec2     \}\cb1 \strokec2 \
\
\cb4 \strokec2   \}, [currentUser]);\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  handleRecipeClick = (recipe, source) => \{\cb1 \strokec2 \
\cb4 \strokec2     \cf7 \strokec7 // Adiciona source para que RecipeDetail saiba de onde buscar\cf0 \cb1 \strokec2 \
\cb4 \strokec2     navigate(createPageUrl(\cf6 \strokec6 `RecipeDetail?id=\cf0 \strokec2 $\{recipe.id\}\cf6 \strokec6 &source=\cf0 \strokec2 $\{source\}\cf6 \strokec6 `\cf0 \strokec2 ));\cb1 \strokec2 \
\cb4 \strokec2   \};\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf7 \strokec7 // Agrupar receitas por data (fun\'e7\'e3o pode ser reutilizada)\cf0 \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  groupRecipesByDate = (recipeList) => \{ \cf7 \strokec7 /* ... (manter como antes) ... */\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  groups = \{\};\cb1 \strokec2 \
\cb4 \strokec2     recipeList.forEach(recipe => \{\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 const\cf0 \strokec2  createdDate = \cf3 \strokec3 new\cf0 \strokec2  \cf5 \strokec5 Date\cf0 \strokec2 (recipe.created_date);\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 const\cf0 \strokec2  dateKey = format(createdDate, \cf6 \strokec6 'yyyy-MM-dd'\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 if\cf0 \strokec2  (!groups[dateKey]) \{\cb1 \strokec2 \
\cb4 \strokec2         groups[dateKey] = \{ date: createdDate, recipes: [] \};\cb1 \strokec2 \
\cb4 \strokec2       \}\cb1 \strokec2 \
\cb4 \strokec2       groups[dateKey].recipes.push(recipe);\cb1 \strokec2 \
\cb4 \strokec2     \});\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 return\cf0 \strokec2  \cf5 \strokec5 Object\cf0 \strokec2 .values(groups).sort((a, b) => b.date - a.date);\cb1 \strokec2 \
\cb4 \strokec2   \};\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  groupedGeneratedRecipes = groupRecipesByDate(generatedRecipes);\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  groupedSavedRecipes = groupRecipesByDate(savedRecipes);\cb1 \strokec2 \
\
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  formatDate = (date) => \{ \cf7 \strokec7 /* ... (manter como antes) ... */\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  today = \cf3 \strokec3 new\cf0 \strokec2  \cf5 \strokec5 Date\cf0 \strokec2 ();\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  yesterday = \cf3 \strokec3 new\cf0 \strokec2  \cf5 \strokec5 Date\cf0 \strokec2 (today);\cb1 \strokec2 \
\cb4 \strokec2     yesterday.setDate(yesterday.getDate() - \cf8 \strokec8 1\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 if\cf0 \strokec2  (format(date, \cf6 \strokec6 'yyyy-MM-dd'\cf0 \strokec2 ) === format(today, \cf6 \strokec6 'yyyy-MM-dd'\cf0 \strokec2 )) \cf3 \strokec3 return\cf0 \strokec2  \cf6 \strokec6 'Hoje'\cf0 \strokec2 ;\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 if\cf0 \strokec2  (format(date, \cf6 \strokec6 'yyyy-MM-dd'\cf0 \strokec2 ) === format(yesterday, \cf6 \strokec6 'yyyy-MM-dd'\cf0 \strokec2 )) \cf3 \strokec3 return\cf0 \strokec2  \cf6 \strokec6 'Ontem'\cf0 \strokec2 ;\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 return\cf0 \strokec2  format(date, \cf6 \strokec6 "d 'de' MMMM"\cf0 \strokec2 , \{ locale: ptBR \});\cb1 \strokec2 \
\cb4 \strokec2   \};\cb1 \strokec2 \
\
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  renderRecipeCard = (recipe, source) => (\cb1 \strokec2 \
\cb4 \strokec2     <\cf5 \strokec5 Card\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2       key=\{recipe.id\} \cb1 \strokec2 \
\cb4 \strokec2       className=\cf6 \strokec6 "overflow-hidden cursor-pointer hover:shadow-lg transition-shadow card-hover"\cf0 \cb1 \strokec2 \
\cb4 \strokec2       onClick=\{() => handleRecipeClick(recipe, source)\}\cb1 \strokec2 \
\cb4 \strokec2     >\cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "h-40 bg-gray-100 relative"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         \{recipe.image_url ? (\cb1 \strokec2 \
\cb4 \strokec2           <img src=\{recipe.image_url\} alt=\{recipe.title\} className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \strokec2 />\cb1 \strokec2 \
\cb4 \strokec2         ) : (\cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 BookOpen\cf0 \strokec2  size=\{\cf8 \strokec8 30\cf0 \strokec2 \} className=\cf6 \strokec6 "text-amber-500 opacity-60"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2         )\}\cb1 \strokec2 \
\cb4 \strokec2         <div className=\cf6 \strokec6 "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "flex flex-wrap gap-1"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 Badge\cf0 \strokec2  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm text-white border-white/30"\cf0 \strokec2 >\{recipe.difficulty\}</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <\cf5 \strokec5 Badge\cf0 \strokec2  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm text-white border-white/30"\cf0 \strokec2 ><\cf5 \strokec5 Clock\cf0 \strokec2  className=\cf6 \strokec6 "w-3 h-3 mr-1"\cf0 \strokec2  /> \{recipe.cooking_time\} min</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2         </div>\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2       <\cf5 \strokec5 CardContent\cf0 \strokec2  className=\cf6 \strokec6 "p-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <div className=\cf6 \strokec6 "flex justify-between items-start mb-2"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <h3 className=\cf6 \strokec6 "font-semibold text-lg line-clamp-1"\cf0 \strokec2 >\{recipe.title\}</h3>\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 Badge\cf0 \strokec2  className=\{recipe.is_sweet ? \cf6 \strokec6 "bg-pink-100 text-pink-700"\cf0 \strokec2  : \cf6 \strokec6 "bg-blue-100 text-blue-700"\cf0 \strokec2 \}>\{recipe.is_sweet ? \cf6 \strokec6 "Doce"\cf0 \strokec2  : \cf6 \strokec6 "Salgado"\cf0 \strokec2 \}</\cf5 \strokec5 Badge\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         </div>\cb1 \strokec2 \
\cb4 \strokec2         <div className=\cf6 \strokec6 "text-[#ff7b54] flex items-center text-sm font-medium"\cf0 \strokec2 >\cf5 \strokec5 Ver\cf0 \strokec2  detalhes<\cf5 \strokec5 ChevronRight\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} /></div>\cb1 \strokec2 \
\cb4 \strokec2       </\cf5 \strokec5 CardContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2     </\cf5 \strokec5 Card\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2   );\cb1 \strokec2 \
\
\cb4 \strokec2   \cf3 \strokec3 if\cf0 \strokec2  (!currentUser) \cf3 \strokec3 return\cf0 \strokec2  <div className=\cf6 \strokec6 "flex justify-center items-center h-screen"\cf0 \strokec2 ><div className=\cf6 \strokec6 "w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"\cf0 \strokec2 ></div></div>;\cb1 \strokec2 \
\cb4 \strokec2   \cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \strokec2 \
\cb4 \strokec2     <div className=\cf6 \strokec6 "container mx-auto px-4 py-6 md:py-10 mb-20 md:mb-8"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "mb-8"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <h1 className=\cf6 \strokec6 "text-2xl md:text-3xl font-bold mb-2"\cf0 \strokec2 >\cf5 \strokec5 Meu\cf0 \strokec2  \cf5 \strokec5 Hist\cf9 \strokec9 \'f3\cf0 \strokec2 rico</h1>\cb1 \strokec2 \
\cb4 \strokec2         <p className=\cf6 \strokec6 "text-gray-600"\cf0 \strokec2 >\cf5 \strokec5 Visualize\cf0 \strokec2  suas receitas geradas e salvas</p>\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2       \cb1 \strokec2 \
\cb4 \strokec2       <\cf5 \strokec5 Tabs\cf0 \strokec2  defaultValue=\cf6 \strokec6 "generated"\cf0 \strokec2  className=\cf6 \strokec6 "w-full"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 TabsList\cf0 \strokec2  className=\cf6 \strokec6 "mb-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 TabsTrigger\cf0 \strokec2  value=\cf6 \strokec6 "generated"\cf0 \strokec2  className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec2 ><\cf5 \strokec5 HistoryIcon\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} />\cf5 \strokec5 Receitas\cf0 \strokec2  \cf5 \strokec5 Geradas\cf0 \strokec2 </\cf5 \strokec5 TabsTrigger\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 TabsTrigger\cf0 \strokec2  value=\cf6 \strokec6 "saved"\cf0 \strokec2  className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec2  disabled=\{currentUser.plan !== \cf6 \strokec6 'premium'\cf0 \strokec2 \}><\cf5 \strokec5 Bookmark\cf0 \strokec2  size=\{\cf8 \strokec8 16\cf0 \strokec2 \} />\cf5 \strokec5 Receitas\cf0 \strokec2  \cf5 \strokec5 Salvas\cf0 \strokec2 </\cf5 \strokec5 TabsTrigger\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 TabsList\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         \cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 TabsContent\cf0 \strokec2  value=\cf6 \strokec6 "generated"\cf0 \strokec2  className=\cf6 \strokec6 "mt-0"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           \{loadingGenerated ? ( \cf7 \strokec7 /* Loading UI */\cf0 \strokec2  <div className=\cf6 \strokec6 "flex justify-center py-20"\cf0 \strokec2 ><div className=\cf6 \strokec6 "w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"\cf0 \strokec2 ></div></div>)\cb1 \strokec2 \
\cb4 \strokec2           : generatedRecipes.length === \cf8 \strokec8 0\cf0 \strokec2  ? ( \cf7 \strokec7 /* Empty State UI */\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "text-center py-16 bg-white rounded-xl shadow-md"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 HistoryIcon\cf0 \strokec2  size=\{\cf8 \strokec8 48\cf0 \strokec2 \} className=\cf6 \strokec6 "text-gray-300 mx-auto mb-4"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2               <h3 className=\cf6 \strokec6 "text-xl font-medium text-gray-600 mb-2"\cf0 \strokec2 >\cf5 \strokec5 Nenhuma\cf0 \strokec2  receita gerada ainda</h3>\cb1 \strokec2 \
\cb4 \strokec2               <p className=\cf6 \strokec6 "text-gray-500 mb-6"\cf0 \strokec2 >\cf5 \strokec5 Experimente\cf0 \strokec2  gerar receitas com os ingredientes que voc\cf9 \strokec9 \'ea\cf0 \strokec2  tem em casa.</p>\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Button\cf0 \strokec2  onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 "Home"\cf0 \strokec2 ))\} className=\cf6 \strokec6 "bg-[#ff7b54] hover:bg-[#e45826]"\cf0 \strokec2 >\cf5 \strokec5 Gerar\cf0 \strokec2  minha primeira receita</\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           ) : (\cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "space-y-8"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               \{groupedGeneratedRecipes.map((group) => (\cb1 \strokec2 \
\cb4 \strokec2                 <div key=\{group.date.toString()\} className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <h2 className=\cf6 \strokec6 "text-xl font-medium text-gray-800"\cf0 \strokec2 >\{formatDate(group.date)\}</h2>\cb1 \strokec2 \
\cb4 \strokec2                   <div className=\cf6 \strokec6 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                     \{group.recipes.map((recipe) => renderRecipeCard(recipe, \cf6 \strokec6 'public'\cf0 \strokec2 ))\}\cb1 \strokec2 \
\cb4 \strokec2                   </div>\cb1 \strokec2 \
\cb4 \strokec2                 </div>\cb1 \strokec2 \
\cb4 \strokec2               ))\}\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           )\}\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 TabsContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         \cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 TabsContent\cf0 \strokec2  value=\cf6 \strokec6 "saved"\cf0 \strokec2  className=\cf6 \strokec6 "mt-0"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2            \{currentUser.plan !== \cf6 \strokec6 'premium'\cf0 \strokec2  ? (\cb1 \strokec2 \
\cb4 \strokec2              <div className=\cf6 \strokec6 "text-center py-16 bg-white rounded-xl shadow-md"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Bookmark\cf0 \strokec2  size=\{\cf8 \strokec8 48\cf0 \strokec2 \} className=\cf6 \strokec6 "text-gray-300 mx-auto mb-4"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                 <h3 className=\cf6 \strokec6 "text-xl font-medium text-gray-600 mb-2"\cf0 \strokec2 >\cf5 \strokec5 Funcionalidade\cf0 \strokec2  \cf5 \strokec5 Premium\cf0 \strokec2 </h3>\cb1 \strokec2 \
\cb4 \strokec2                 <p className=\cf6 \strokec6 "text-gray-500 mb-6"\cf0 \strokec2 >\cf5 \strokec5 Salve\cf0 \strokec2  suas receitas favoritas fazendo upgrade para o plano \cf5 \strokec5 Premium\cf0 \strokec2 .</p>\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Button\cf0 \strokec2  onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 "Upgrade"\cf0 \strokec2 ))\} className=\cf6 \strokec6 "bg-[#ff7b54] hover:bg-[#e45826]"\cf0 \strokec2 >\cf5 \strokec5 Fazer\cf0 \strokec2  \cf5 \strokec5 Upgrade\cf0 \strokec2 </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2            ) : loadingSaved ? ( \cf7 \strokec7 /* Loading UI */\cf0 \strokec2  <div className=\cf6 \strokec6 "flex justify-center py-20"\cf0 \strokec2 ><div className=\cf6 \strokec6 "w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"\cf0 \strokec2 ></div></div>)\cb1 \strokec2 \
\cb4 \strokec2            : savedRecipes.length === \cf8 \strokec8 0\cf0 \strokec2  ? ( \cf7 \strokec7 /* Empty State UI */\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "text-center py-16 bg-white rounded-xl shadow-md"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Bookmark\cf0 \strokec2  size=\{\cf8 \strokec8 48\cf0 \strokec2 \} className=\cf6 \strokec6 "text-gray-300 mx-auto mb-4"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                 <h3 className=\cf6 \strokec6 "text-xl font-medium text-gray-600 mb-2"\cf0 \strokec2 >\cf5 \strokec5 Nenhuma\cf0 \strokec2  receita salva</h3>\cb1 \strokec2 \
\cb4 \strokec2                 <p className=\cf6 \strokec6 "text-gray-500 mb-6"\cf0 \strokec2 >\cf5 \strokec5 Salve\cf0 \strokec2  suas receitas favoritas para acess\cf9 \strokec9 \'e1\cf0 \strokec2 -las facilmente aqui.</p>\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Button\cf0 \strokec2  onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 "Home"\cf0 \strokec2 ))\} className=\cf6 \strokec6 "bg-[#ff7b54] hover:bg-[#e45826]"\cf0 \strokec2 >\cf5 \strokec5 Descobrir\cf0 \strokec2  \cf5 \strokec5 Receitas\cf0 \strokec2 </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2            ) : (\cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "space-y-8"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                  \{groupedSavedRecipes.map((group) => (\cb1 \strokec2 \
\cb4 \strokec2                     <div key=\{group.date.toString()\} className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                     <h2 className=\cf6 \strokec6 "text-xl font-medium text-gray-800"\cf0 \strokec2 >\{formatDate(group.date)\}</h2>\cb1 \strokec2 \
\cb4 \strokec2                     <div className=\cf6 \strokec6 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                         \{group.recipes.map((recipe) => renderRecipeCard(recipe, \cf6 \strokec6 'saved'\cf0 \strokec2 ))\}\cb1 \strokec2 \
\cb4 \strokec2                     </div>\cb1 \strokec2 \
\cb4 \strokec2                     </div>\cb1 \strokec2 \
\cb4 \strokec2                 ))\}\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           )\}\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 TabsContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       </\cf5 \strokec5 Tabs\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2     </div>\cb1 \strokec2 \
\cb4 \strokec2   );\cb1 \strokec2 \
\cb4 \strokec2 \}\cb1 \strokec2 \
}