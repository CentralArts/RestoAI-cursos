{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;\red107\green0\blue1;\red191\green28\blue37;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;\cssrgb\c50196\c0\c0;\cssrgb\c80392\c19216\c19216;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "react"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ useNavigate \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "react-router-dom"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/utils"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 User\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/entities/User"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Input\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/input"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Badge\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Plus\cf0 \strokec4 , \cf5 \strokec5 Search\cf0 \strokec4 , \cf5 \strokec5 Utensils\cf0 \strokec4 , \cf5 \strokec5 Mic\cf0 \strokec4 , \cf5 \strokec5 RefreshCw\cf0 \strokec4 , \cf5 \strokec5 Star\cf0 \strokec4 , \cf5 \strokec5 ChevronRight\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "lucide-react"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 IngredientSuggestions\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "../components/IngredientSuggestions"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 RecipesCarousel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "../components/RecipesCarousel"\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 COMMON_INGREDIENTS\cf0 \strokec4  = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf6 \strokec6 "arroz"\cf0 \strokec4 , \cf6 \strokec6 "feij\'e3o"\cf0 \strokec4 , \cf6 \strokec6 "macarr\'e3o"\cf0 \strokec4 , \cf6 \strokec6 "ovos"\cf0 \strokec4 , \cf6 \strokec6 "leite"\cf0 \strokec4 , \cf6 \strokec6 "farinha de trigo"\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 "a\'e7\'facar"\cf0 \strokec4 , \cf6 \strokec6 "sal"\cf0 \strokec4 , \cf6 \strokec6 "\'f3leo"\cf0 \strokec4 , \cf6 \strokec6 "manteiga"\cf0 \strokec4 , \cf6 \strokec6 "frango"\cf0 \strokec4 , \cf6 \strokec6 "carne bovina"\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 "cebola"\cf0 \strokec4 , \cf6 \strokec6 "tomate"\cf0 \strokec4 , \cf6 \strokec6 "batata"\cf0 \strokec4 , \cf6 \strokec6 "cenoura"\cf0 \strokec4 , \cf6 \strokec6 "p\'e3o"\cf0 \strokec4 , \cf6 \strokec6 "queijo"\cf0 \cb1 \strokec4 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Home\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [user, setUser] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [loading, setLoading] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [ingredient, setIngredient] = useState(\cf6 \strokec6 ""\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedIngredients, setSelectedIngredients] = useState([]);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [suggestions, setSuggestions] = useState([]);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isListening, setIsListening] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  navigate = useNavigate();\cb1 \
\cb3   \cb1 \
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  fetchUserData = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3       \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  userData = \cf2 \strokec2 await\cf0 \strokec4  \cf5 \strokec5 User\cf0 \strokec4 .me();\cb1 \
\cb3         setUser(userData);\cb1 \
\cb3       \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3         console.error(\cf6 \strokec6 "Usu\'e1rio n\'e3o autenticado ou erro em User.me() em Home.js:"\cf0 \strokec4 , error);\cb1 \
\cb3         setUser(\cf2 \strokec2 null\cf0 \strokec4 ); \cb1 \
\cb3       \}\cb1 \
\cb3     \};\cb1 \
\cb3     \cb1 \
\cb3     fetchUserData();\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (ingredient.trim() !== \cf6 \strokec6 ""\cf0 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  filtered = \cf5 \strokec5 COMMON_INGREDIENTS\cf0 \strokec4 .filter(item => \cb1 \
\cb3         item.toLowerCase().includes(ingredient.toLowerCase()) &&\cb1 \
\cb3         !selectedIngredients.includes(item)\cb1 \
\cb3       );\cb1 \
\cb3       setSuggestions(filtered);\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3       setSuggestions(\cf5 \strokec5 COMMON_INGREDIENTS\cf0 \strokec4 .filter(item => !selectedIngredients.includes(item)));\cb1 \
\cb3     \}\cb1 \
\cb3   \}, [ingredient, selectedIngredients]);\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleIngredientChange = (e) => \{\cb1 \
\cb3     setIngredient(e.target.value);\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  addIngredient = (item) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (item && !selectedIngredients.includes(item)) \{\cb1 \
\cb3       setSelectedIngredients([...selectedIngredients, item]);\cb1 \
\cb3       setIngredient(\cf6 \strokec6 ""\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  removeIngredient = (item) => \{\cb1 \
\cb3     setSelectedIngredients(selectedIngredients.filter(i => i !== item));\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleKeyPress = (e) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 "Enter"\cf0 \strokec4  && ingredient.trim() !== \cf6 \strokec6 ""\cf0 \strokec4 ) \{\cb1 \
\cb3       addIngredient(ingredient.trim());\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleSpeechRecognition = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!(\cf6 \strokec6 'webkitSpeechRecognition'\cf0 \strokec4  \cf2 \strokec2 in\cf0 \strokec4  window)) \{\cb1 \
\cb3       alert(\cf6 \strokec6 "Desculpe, a funcionalidade de voz n\'e3o \'e9 suportada pelo seu navegador."\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  recognition = \cf2 \strokec2 new\cf0 \strokec4  window.webkitSpeechRecognition();\cb1 \
\cb3     recognition.lang = \cf6 \strokec6 'pt-BR'\cf0 \strokec4 ;\cb1 \
\cb3     recognition.continuous = \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3     setIsListening(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cb1 \
\cb3     recognition.onresult = (event) => \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  transcript = event.results[\cf7 \strokec7 0\cf0 \strokec4 ][\cf7 \strokec7 0\cf0 \strokec4 ].transcript.toLowerCase();\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  words = transcript.split(\cf8 \strokec8 /\\s+/\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  newIngredients = words.filter(word => word.length > \cf7 \strokec7 2\cf0 \strokec4  && !selectedIngredients.includes(word));\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (newIngredients.length > \cf7 \strokec7 0\cf0 \strokec4 ) \{\cb1 \
\cb3         setSelectedIngredients(prev => [...prev, ...newIngredients]);\cb1 \
\cb3       \}\cb1 \
\cb3       setIsListening(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     \};\cb1 \
\cb3     recognition.onerror = () => setIsListening(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     recognition.onend = () => setIsListening(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     recognition.start();\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleGenerateRecipe = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (selectedIngredients.length === \cf7 \strokec7 0\cf0 \strokec4 ) \{\cb1 \
\cb3       alert(\cf6 \strokec6 "Por favor, adicione pelo menos um ingrediente!"\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3     navigate(createPageUrl(\cf6 \strokec6 `Generate?ingredients=\cf0 \strokec4 $\{selectedIngredients.join(\cf6 \strokec6 ","\cf0 \strokec4 )\}\cf6 \strokec6 `\cf0 \strokec4 ));\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  clearIngredients = () => \{\cb1 \
\cb3     setSelectedIngredients([]);\cb1 \
\cb3   \};\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "container mx-auto px-4 py-6 md:py-10 mb-20 md:mb-0"\cf0 \strokec4 >\cb1 \
\cb3       <div className=\cf6 \strokec6 "text-center max-w-3xl mx-auto mb-12 animate-slide-in"\cf0 \strokec4 >\cb1 \
\cb3         <h1 className=\cf6 \strokec6 "text-3xl md:text-4xl font-bold mb-3 text-[#2c3333]"\cf0 \strokec4 >\cb1 \
\cb3           \cf5 \strokec5 Rest\cf9 \strokec9 \'f4\cf5 \strokec5 AI\cf0 \cb1 \strokec4 \
\cb3         </h1>\cb1 \
\cb3         <p className=\cf6 \strokec6 "text-gray-600 text-lg"\cf0 \strokec4 >\cb1 \
\cb3           \cf5 \strokec5 O\cf0 \strokec4  que voc\cf9 \strokec9 \'ea\cf0 \strokec4  tem em casa hoje? \cf5 \strokec5 Adicione\cf0 \strokec4  os ingredientes dispon\cf9 \strokec9 \'ed\cf0 \strokec4 veis e descubra receitas deliciosas.\cb1 \
\cb3         </p>\cb1 \
\cb3       </div>\cb1 \
\cb3       \cb1 \
\cb3       <div className=\cf6 \strokec6 "max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10 animate-slide-in"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center gap-3 mb-6"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex-1 relative"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Input\cf0 \cb1 \strokec4 \
\cb3               value=\{ingredient\}\cb1 \
\cb3               onChange=\{handleIngredientChange\}\cb1 \
\cb3               onKeyPress=\{handleKeyPress\}\cb1 \
\cb3               placeholder=\cf6 \strokec6 "Digite um ingrediente..."\cf0 \cb1 \strokec4 \
\cb3               className=\cf6 \strokec6 "pr-12 py-6 text-lg border-[#ffb26b] focus:border-[#ff7b54] focus:ring-[#ff7b54]"\cf0 \cb1 \strokec4 \
\cb3             />\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3               variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  \cb1 \
\cb3               className=\cf6 \strokec6 "absolute right-2 top-1/2 transform -translate-y-1/2"\cf0 \cb1 \strokec4 \
\cb3               onClick=\{() => addIngredient(ingredient)\}\cb1 \
\cb3               disabled=\{!ingredient.trim()\}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Plus\cf0 \strokec4  size=\{\cf7 \strokec7 20\cf0 \strokec4 \} className=\cf6 \strokec6 "text-[#ff7b54]"\cf0 \strokec4  />\cb1 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3           \cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3             variant=\cf6 \strokec6 "outline"\cf0 \cb1 \strokec4 \
\cb3             className=\cf6 \strokec6 "aspect-square h-full p-3 border-[#ffb26b]"\cf0 \cb1 \strokec4 \
\cb3             onClick=\{handleSpeechRecognition\}\cb1 \
\cb3             disabled=\{isListening\}\cb1 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Mic\cf0 \strokec4  \cb1 \
\cb3               size=\{\cf7 \strokec7 24\cf0 \strokec4 \} \cb1 \
\cb3               className=\{isListening ? \cf6 \strokec6 "text-red-500 animate-pulse"\cf0 \strokec4  : \cf6 \strokec6 "text-[#ff7b54]"\cf0 \strokec4 \} \cb1 \
\cb3             />\cb1 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3         \cb1 \
\cb3         \{selectedIngredients.length > \cf7 \strokec7 0\cf0 \strokec4  && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "mb-6"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex justify-between items-center mb-3"\cf0 \strokec4 >\cb1 \
\cb3               <h3 className=\cf6 \strokec6 "font-semibold"\cf0 \strokec4 >\cf5 \strokec5 Ingredientes\cf0 \strokec4  selecionados</h3>\cb1 \
\cb3               <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  size=\cf6 \strokec6 "sm"\cf0 \strokec4  onClick=\{clearIngredients\} className=\cf6 \strokec6 "text-gray-500"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 RefreshCw\cf0 \strokec4  size=\{\cf7 \strokec7 14\cf0 \strokec4 \} className=\cf6 \strokec6 "mr-1"\cf0 \strokec4  /> \cf5 \strokec5 Limpar\cf0 \cb1 \strokec4 \
\cb3               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             </div>\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex flex-wrap gap-2"\cf0 \strokec4 >\cb1 \
\cb3               \{selectedIngredients.map((item) => (\cb1 \
\cb3                 <\cf5 \strokec5 Badge\cf0 \strokec4  \cb1 \
\cb3                   key=\{item\} \cb1 \
\cb3                   className=\cf6 \strokec6 "px-3 py-1.5 bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   \{item\}\cb1 \
\cb3                   <button \cb1 \
\cb3                     className=\cf6 \strokec6 "ml-2 text-amber-800 hover:text-amber-900"\cf0 \cb1 \strokec4 \
\cb3                     onClick=\{() => removeIngredient(item)\}\cb1 \
\cb3                   >\cb1 \
\cb3                     \cf9 \strokec9 \'d7\cf0 \cb1 \strokec4 \
\cb3                   </button>\cb1 \
\cb3                 </\cf5 \strokec5 Badge\cf0 \strokec4 >\cb1 \
\cb3               ))\}\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\cb3         \cb1 \
\cb3         <\cf5 \strokec5 IngredientSuggestions\cf0 \strokec4  \cb1 \
\cb3           suggestions=\{suggestions\} \cb1 \
\cb3           onSuggestionClick=\{addIngredient\}\cb1 \
\cb3         />\cb1 \
\cb3         \cb1 \
\cb3         <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3           className=\cf6 \strokec6 "w-full bg-[#ff7b54] hover:bg-[#e45826] py-6 text-lg mt-6 transition-all"\cf0 \cb1 \strokec4 \
\cb3           onClick=\{handleGenerateRecipe\}\cb1 \
\cb3           disabled=\{selectedIngredients.length === \cf7 \strokec7 0\cf0 \strokec4 \}\cb1 \
\cb3         >\cb1 \
\cb3           <\cf5 \strokec5 Utensils\cf0 \strokec4  size=\{\cf7 \strokec7 18\cf0 \strokec4 \} className=\cf6 \strokec6 "mr-2"\cf0 \strokec4  />\cb1 \
\cb3           \cf5 \strokec5 Gerar\cf0 \strokec4  \cf5 \strokec5 Receitas\cf0 \cb1 \strokec4 \
\cb3         </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3       </div>\cb1 \
\cb3       \cb1 \
\cb3       <div className=\cf6 \strokec6 "mb-10"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "px-10 py-3 flex justify-between items-center"\cf0 \strokec4 >\cb1 \
\cb3           <h2 className=\cf6 \strokec6 "text-2xl font-bold"\cf0 \strokec4 >\cf5 \strokec5 Inspira\cf9 \strokec9 \'e7\'f5\cf0 \strokec4 es \cf5 \strokec5 Culin\cf9 \strokec9 \'e1\cf0 \strokec4 rias</h2>\cb1 \
\cb3         </div>\cb1 \
\cb3         <\cf5 \strokec5 RecipesCarousel\cf0 \strokec4  />\cb1 \
\cb3       </div>\cb1 \
\cb3       \cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-white rounded-xl overflow-hidden shadow-md mb-10 transform hover:scale-105 transition-all duration-300"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "bg-gradient-to-r from-amber-400 to-orange-500 p-6 text-white"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex flex-col sm:flex-row items-center justify-between gap-4"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "text-center sm:text-left"\cf0 \strokec4 >\cb1 \
\cb3               <h3 className=\cf6 \strokec6 "text-xl font-bold mb-2 flex items-center justify-center sm:justify-start gap-2"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Star\cf0 \strokec4  size=\{\cf7 \strokec7 20\cf0 \strokec4 \} /> \cf5 \strokec5 Plano\cf0 \strokec4  \cf5 \strokec5 Premium\cf0 \strokec4  \cf5 \strokec5 Rest\cf9 \strokec9 \'f4\cf5 \strokec5 AI\cf0 \cb1 \strokec4 \
\cb3               </h3>\cb1 \
\cb3               <p className=\cf6 \strokec6 "opacity-90"\cf0 \strokec4 >\cf5 \strokec5 Desbloqueie\cf0 \strokec4  todo o potencial de nosso assistente de cozinha!</p>\cb1 \
\cb3             </div>\cb1 \
\cb3             <div className=\cf6 \strokec6 "text-3xl font-bold text-center sm:text-right"\cf0 \strokec4 >\cf5 \strokec5 R$19\cf0 \strokec4 ,\cf7 \strokec7 90\cf0 \strokec4 <span className=\cf6 \strokec6 "text-sm font-normal"\cf0 \strokec4 >/m\cf9 \strokec9 \'ea\cf0 \strokec4 s</span></div>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3         <div className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3           <ul className=\cf6 \strokec6 "space-y-2 mb-4"\cf0 \strokec4 >\cb1 \
\cb3             <li className=\cf6 \strokec6 "flex items-center text-sm"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 shrink-0"\cf0 \strokec4 >\cf9 \strokec9 \uc0\u10003 \cf0 \strokec4 </div>\cb1 \
\cb3               <span>\cf5 \strokec5 Gere\cf0 \strokec4  at\cf9 \strokec9 \'e9\cf0 \strokec4  \cf7 \strokec7 6\cf0 \strokec4  receitas por vez</span>\cb1 \
\cb3             </li>\cb1 \
\cb3             <li className=\cf6 \strokec6 "flex items-center text-sm"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 shrink-0"\cf0 \strokec4 >\cf9 \strokec9 \uc0\u10003 \cf0 \strokec4 </div>\cb1 \
\cb3               <span>\cf5 \strokec5 Gera\cf9 \strokec9 \'e7\'f5\cf0 \strokec4 es ilimitadas por dia</span>\cb1 \
\cb3             </li>\cb1 \
\cb3             <li className=\cf6 \strokec6 "flex items-center text-sm"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 shrink-0"\cf0 \strokec4 >\cf9 \strokec9 \uc0\u10003 \cf0 \strokec4 </div>\cb1 \
\cb3               <span>\cf5 \strokec5 Salve\cf0 \strokec4  receitas para acesso posterior</span>\cb1 \
\cb3             </li>\cb1 \
\cb3           </ul>\cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3             className=\cf6 \strokec6 "w-full bg-[#ff7b54] hover:bg-[#e45826]"\cf0 \cb1 \strokec4 \
\cb3             onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 "Upgrade"\cf0 \strokec4 ))\}\cb1 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Star\cf0 \strokec4  size=\{\cf7 \strokec7 16\cf0 \strokec4 \} className=\cf6 \strokec6 "mr-2"\cf0 \strokec4  />\cb1 \
\cb3             \cf5 \strokec5 Fazer\cf0 \strokec4  \cf5 \strokec5 Upgrade\cf0 \strokec4  \cf5 \strokec5 Agora\cf0 \cb1 \strokec4 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}