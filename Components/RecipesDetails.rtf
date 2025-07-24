{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red107\green0\blue1;\red19\green118\blue70;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c50196\c0\c0;\cssrgb\c3529\c52549\c34510;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Badge\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec4 ;\cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Skeleton\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/skeleton"\cf0 \strokec4 ;\cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Clock\cf0 \strokec4 , \cf5 \strokec5 ChefHat\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "lucide-react"\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cf7 \cb3 \strokec7 // Fun\'e7\'e3o para normalizar strings (remover acentos e converter para min\'fasculas)\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  normalizeString = (str) => \{\cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 return\cf0 \strokec4  str.normalize(\cf6 \strokec6 "NFD"\cf0 \strokec4 ).replace(\cf8 \cb3 \strokec8 /[\\u0300-\\u036f]/\cf2 \cb3 \strokec2 g\cf0 \strokec4 , \cf6 \strokec6 ""\cf0 \strokec4 ).toLowerCase();\cb1 \strokec4 \
\cb3 \strokec4 \};\cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 RecipeDetails\cf0 \strokec4 (\{ recipe, userIngredients, loadingImage \}) \{\cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 if\cf0 \strokec4  (!recipe) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4   \cb1 \strokec4 \
\cb3 \strokec4   \cf7 \strokec7 // Converter ingredients de string para array, se necess\'e1rio\cf0 \cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  userIngredientsArray = \cf5 \strokec5 Array\cf0 \strokec4 .isArray(userIngredients) \cb1 \strokec4 \
\cb3 \strokec4     ? userIngredients \cb1 \strokec4 \
\cb3 \strokec4     : userIngredients.split(\cf6 \strokec6 ","\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4   \cb1 \strokec4 \
\cb3 \strokec4   \cf7 \strokec7 // Normalizar os ingredientes do usu\'e1rio\cf0 \cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  normalizedUserIngredients = userIngredientsArray.map(ing => normalizeString(ing));\cb1 \strokec4 \
\cb3 \strokec4   \cb1 \strokec4 \
\cb3 \strokec4   \cf7 \strokec7 // Verificar quais ingredientes o usu\'e1rio j\'e1 possui\cf0 \cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  ingredientStatus = recipe.ingredients.map(ing => \{\cb1 \strokec4 \
\cb3 \strokec4     \cf7 \strokec7 // Normalizar o nome do ingrediente da receita\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \cf2 \strokec2 const\cf0 \strokec4  normalizedIngName = normalizeString(ing.name);\cb1 \strokec4 \
\cb3 \strokec4     \cb1 \strokec4 \
\cb3 \strokec4     \cf7 \strokec7 // Verificar correspond\'eancias exatas ou substrings\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \cf2 \strokec2 const\cf0 \strokec4  hasIngredient = normalizedUserIngredients.some(userIng => \{\cb1 \strokec4 \
\cb3 \strokec4       \cf2 \strokec2 const\cf0 \strokec4  normalizedUserIng = normalizeString(userIng);\cb1 \strokec4 \
\cb3 \strokec4       \cb1 \strokec4 \
\cb3 \strokec4       \cf7 \strokec7 // Verificar correspond\'eancia exata\cf0 \cb1 \strokec4 \
\cb3 \strokec4       \cf2 \strokec2 if\cf0 \strokec4  (normalizedIngName === normalizedUserIng) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 true\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4       \cb1 \strokec4 \
\cb3 \strokec4       \cf7 \strokec7 // Verificar se o ingrediente do usu\'e1rio est\'e1 contido no ingrediente da receita\cf0 \cb1 \strokec4 \
\cb3 \strokec4       \cf2 \strokec2 if\cf0 \strokec4  (normalizedIngName.includes(normalizedUserIng)) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 true\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4       \cb1 \strokec4 \
\cb3 \strokec4       \cf7 \strokec7 // Verificar plurais comuns (ex: "lim\'e3o" vs "lim\'f5es")\cf0 \cb1 \strokec4 \
\cb3 \strokec4       \cf2 \strokec2 if\cf0 \strokec4  (normalizedUserIng.endsWith(\cf6 \strokec6 "s"\cf0 \strokec4 ) && normalizedIngName === normalizedUserIng.slice(\cf9 \strokec9 0\cf0 \strokec4 , -\cf9 \strokec9 1\cf0 \strokec4 )) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 true\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4       \cf2 \strokec2 if\cf0 \strokec4  (normalizedIngName.endsWith(\cf6 \strokec6 "s"\cf0 \strokec4 ) && normalizedUserIng === normalizedIngName.slice(\cf9 \strokec9 0\cf0 \strokec4 , -\cf9 \strokec9 1\cf0 \strokec4 )) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 true\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4       \cb1 \strokec4 \
\cb3 \strokec4       \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\cb3 \strokec4     \cb1 \strokec4 \
\cb3 \strokec4     \cf2 \strokec2 return\cf0 \strokec4  \{ ...ing, userHas: hasIngredient \};\cb1 \strokec4 \
\cb3 \strokec4   \});\cb1 \strokec4 \
\cb3 \strokec4   \cb1 \strokec4 \
\cb3 \strokec4   \cf7 \strokec7 // Calcular porcentagem de ingredientes que o usu\'e1rio j\'e1 tem\cf0 \cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  userHasCount = ingredientStatus.filter(ing => ing.userHas).length;\cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  matchPercentage = \cf5 \strokec5 Math\cf0 \strokec4 .round((userHasCount / ingredientStatus.length) * \cf9 \strokec9 100\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4   \cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \strokec4 \
\cb3 \strokec4     <div className=\cf6 \strokec6 "space-y-6"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4       <div className=\cf6 \strokec6 "relative h-64 bg-gray-100 rounded-lg overflow-hidden"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4         \{loadingImage ? (\cb1 \strokec4 \
\cb3 \strokec4           <div className=\cf6 \strokec6 "absolute inset-0 flex items-center justify-center"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             <div className=\cf6 \strokec6 "w-12 h-12 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"\cf0 \strokec4 ></div>\cb1 \strokec4 \
\cb3 \strokec4           </div>\cb1 \strokec4 \
\cb3 \strokec4         ) : recipe.image_url ? (\cb1 \strokec4 \
\cb3 \strokec4           <img \cb1 \strokec4 \
\cb3 \strokec4             src=\{recipe.image_url\} \cb1 \strokec4 \
\cb3 \strokec4             alt=\{recipe.title\} \cb1 \strokec4 \
\cb3 \strokec4             className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \cb1 \strokec4 \
\cb3 \strokec4           />\cb1 \strokec4 \
\cb3 \strokec4         ) : (\cb1 \strokec4 \
\cb3 \strokec4           <div className=\cf6 \strokec6 "absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             <\cf5 \strokec5 ChefHat\cf0 \strokec4  size=\{\cf9 \strokec9 60\cf0 \strokec4 \} className=\cf6 \strokec6 "text-amber-500 opacity-60"\cf0 \strokec4  />\cb1 \strokec4 \
\cb3 \strokec4           </div>\cb1 \strokec4 \
\cb3 \strokec4         )\}\cb1 \strokec4 \
\cb3 \strokec4         \cb1 \strokec4 \
\cb3 \strokec4         <div className=\cf6 \strokec6 "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4           <div className=\cf6 \strokec6 "p-6 text-white"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             <div className=\cf6 \strokec6 "flex flex-wrap gap-2 mt-2"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               <\cf5 \strokec5 Badge\cf0 \strokec4  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm border-white/30"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <\cf5 \strokec5 Clock\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 mr-1"\cf0 \strokec4  /> \{recipe.cooking_time\} min\cb1 \strokec4 \
\cb3 \strokec4               </\cf5 \strokec5 Badge\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               <\cf5 \strokec5 Badge\cf0 \strokec4  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm border-white/30"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 \{recipe.difficulty\}\cb1 \strokec4 \
\cb3 \strokec4               </\cf5 \strokec5 Badge\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               <\cf5 \strokec5 Badge\cf0 \strokec4  className=\cf6 \strokec6 "bg-white/20 backdrop-blur-sm border-white/30"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 \{recipe.meal_type\}\cb1 \strokec4 \
\cb3 \strokec4               </\cf5 \strokec5 Badge\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               <\cf5 \strokec5 Badge\cf0 \strokec4  className=\{\cf6 \strokec6 `\cf0 \strokec4 $\{recipe.is_sweet ? \cf6 \strokec6 'bg-pink-500/70'\cf0 \strokec4  : \cf6 \strokec6 'bg-blue-500/70'\cf0 \strokec4 \}\cf6 \strokec6  border-transparent`\cf0 \strokec4 \}>\cb1 \strokec4 \
\cb3 \strokec4                 \{recipe.is_sweet ? \cf6 \strokec6 'Doce'\cf0 \strokec4  : \cf6 \strokec6 'Salgado'\cf0 \strokec4 \}\cb1 \strokec4 \
\cb3 \strokec4               </\cf5 \strokec5 Badge\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             </div>\cb1 \strokec4 \
\cb3 \strokec4           </div>\cb1 \strokec4 \
\cb3 \strokec4         </div>\cb1 \strokec4 \
\cb3 \strokec4       </div>\cb1 \strokec4 \
\cb3 \strokec4       \cb1 \strokec4 \
\cb3 \strokec4       <div className=\cf6 \strokec6 "flex items-center"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4         <span className=\cf6 \strokec6 "text-sm text-gray-500 mr-2"\cf0 \strokec4 >\cf5 \strokec5 Compatibilidade\cf0 \strokec4  de ingredientes:</span>\cb1 \strokec4 \
\cb3 \strokec4         <div className=\cf6 \strokec6 "flex items-center flex-1"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4           <div className=\cf6 \strokec6 "w-full bg-gray-200 rounded-full h-2.5 mr-2"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             <div \cb1 \strokec4 \
\cb3 \strokec4               className=\cf6 \strokec6 "bg-[#ff7b54] h-2.5 rounded-full"\cf0 \strokec4  \cb1 \strokec4 \
\cb3 \strokec4               style=\{\{ width: \cf6 \strokec6 `\cf0 \strokec4 $\{matchPercentage\}\cf6 \strokec6 %`\cf0 \strokec4  \}\}\cb1 \strokec4 \
\cb3 \strokec4             ></div>\cb1 \strokec4 \
\cb3 \strokec4           </div>\cb1 \strokec4 \
\cb3 \strokec4           <span className=\cf6 \strokec6 "text-sm font-medium text-gray-700"\cf0 \strokec4 >\{matchPercentage\}%</span>\cb1 \strokec4 \
\cb3 \strokec4         </div>\cb1 \strokec4 \
\cb3 \strokec4       </div>\cb1 \strokec4 \
\cb3 \strokec4       \cb1 \strokec4 \
\cb3 \strokec4       <div className=\cf6 \strokec6 "grid grid-cols-1 md:grid-cols-2 gap-6"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4         <div>\cb1 \strokec4 \
\cb3 \strokec4           <h2 className=\cf6 \strokec6 "text-xl font-semibold mb-4"\cf0 \strokec4 >\cf5 \strokec5 Ingredientes\cf0 \strokec4 </h2>\cb1 \strokec4 \
\cb3 \strokec4           <ul className=\cf6 \strokec6 "space-y-2"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             \{ingredientStatus.map((ing, index) => (\cb1 \strokec4 \
\cb3 \strokec4               <li \cb1 \strokec4 \
\cb3 \strokec4                 key=\{index\} \cb1 \strokec4 \
\cb3 \strokec4                 className=\{\cf6 \strokec6 `flex justify-between items-center p-2 rounded-lg \cf0 \strokec4 $\{\cb1 \strokec4 \
\cb3 \strokec4                   ing.userHas ? \cf6 \strokec6 'bg-green-50 border border-green-100'\cf0 \strokec4  : \cf6 \strokec6 'bg-gray-50 border border-gray-100'\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \strokec4 \
\cb3 \strokec4               >\cb1 \strokec4 \
\cb3 \strokec4                 <span className=\{\cf6 \strokec6 `\cf0 \strokec4 $\{ing.userHas ? \cf6 \strokec6 'text-green-800'\cf0 \strokec4  : \cf6 \strokec6 ''\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \strokec4 \
\cb3 \strokec4                   \{ing.name\}\cb1 \strokec4 \
\cb3 \strokec4                 </span>\cb1 \strokec4 \
\cb3 \strokec4                 <span className=\cf6 \strokec6 "text-gray-600 text-sm"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                   \{ing.quantity\} \{ing.unit\}\cb1 \strokec4 \
\cb3 \strokec4                 </span>\cb1 \strokec4 \
\cb3 \strokec4               </li>\cb1 \strokec4 \
\cb3 \strokec4             ))\}\cb1 \strokec4 \
\cb3 \strokec4           </ul>\cb1 \strokec4 \
\cb3 \strokec4         </div>\cb1 \strokec4 \
\cb3 \strokec4         \cb1 \strokec4 \
\cb3 \strokec4         <div>\cb1 \strokec4 \
\cb3 \strokec4           <h2 className=\cf6 \strokec6 "text-xl font-semibold mb-4"\cf0 \strokec4 >\cf5 \strokec5 Modo\cf0 \strokec4  de \cf5 \strokec5 Preparo\cf0 \strokec4 </h2>\cb1 \strokec4 \
\cb3 \strokec4           <ol className=\cf6 \strokec6 "space-y-3 ml-5 list-decimal"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             \{recipe.instructions.map((step, index) => (\cb1 \strokec4 \
\cb3 \strokec4               <li key=\{index\} className=\cf6 \strokec6 "text-gray-700"\cf0 \strokec4 >\{step\}</li>\cb1 \strokec4 \
\cb3 \strokec4             ))\}\cb1 \strokec4 \
\cb3 \strokec4           </ol>\cb1 \strokec4 \
\cb3 \strokec4         </div>\cb1 \strokec4 \
\cb3 \strokec4       </div>\cb1 \strokec4 \
\cb3 \strokec4     </div>\cb1 \strokec4 \
\cb3 \strokec4   );\cb1 \strokec4 \
\cb3 \strokec4 \}\cb1 \strokec4 \
}