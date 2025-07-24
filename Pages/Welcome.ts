{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red19\green118\blue70;\red191\green28\blue37;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c3529\c52549\c34510;\cssrgb\c80392\c19216\c19216;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ useNavigate \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 User\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/entities/User'\cf0 \strokec4 ;\cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/utils'\cf0 \strokec4 ;\cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/components/ui/button'\cf0 \strokec4 ;\cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ChefHat\cf0 \strokec4 , \cf5 \strokec5 ArrowRight\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Componente para o \'edcone do Google\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 GoogleIcon\cf0 \strokec4  = (props) => (\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4   <svg viewBox=\cf6 \strokec6 "0 0 48 48"\cf0 \strokec4  \{...props\}>\cb1 \strokec4 \
\cb3 \strokec4     <path fill=\cf6 \strokec6 "#FFC107"\cf0 \strokec4  d=\cf6 \strokec6 "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"\cf0 \strokec4  />\cb1 \strokec4 \
\cb3 \strokec4     <path fill=\cf6 \strokec6 "#FF3D00"\cf0 \strokec4  d=\cf6 \strokec6 "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"\cf0 \strokec4  />\cb1 \strokec4 \
\cb3 \strokec4     <path fill=\cf6 \strokec6 "#4CAF50"\cf0 \strokec4  d=\cf6 \strokec6 "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.658-3.302-11.303-7.862l-6.571,4.819C9.656,39.663,16.318,44,24,44z"\cf0 \strokec4  />\cb1 \strokec4 \
\cb3 \strokec4     <path fill=\cf6 \strokec6 "#1976D2"\cf0 \strokec4  d=\cf6 \strokec6 "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.022,35.136,44,30.024,44,24C44,22.659,43.862,21.35,43.611,20.083z"\cf0 \strokec4  />\cb1 \strokec4 \
\cb3 \strokec4   </svg>\cb1 \strokec4 \
\cb3 \strokec4 );\cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Welcome\cf0 \strokec4 () \{\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  navigate = useNavigate();\cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  [isLoading, setIsLoading] = useState(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  [isLoggingIn, setIsLoggingIn] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  [activeTab, setActiveTab] = useState(\cf6 \strokec6 'login'\cf0 \strokec4 );\cb1 \strokec4 \
\
\cb3 \strokec4   useEffect(() => \{\cb1 \strokec4 \
\cb3 \strokec4     \cf7 \strokec7 // Se o usu\'e1rio j\'e1 estiver logado, redireciona para a home\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \cf2 \strokec2 const\cf0 \strokec4  checkUser = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \strokec4 \
\cb3 \strokec4       \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \strokec4 \
\cb3 \strokec4         \cf2 \strokec2 await\cf0 \strokec4  \cf5 \strokec5 User\cf0 \strokec4 .me();\cb1 \strokec4 \
\cb3 \strokec4         navigate(createPageUrl(\cf6 \strokec6 "Home"\cf0 \strokec4 ));\cb1 \strokec4 \
\cb3 \strokec4       \} \cf2 \strokec2 catch\cf0 \strokec4  (e) \{\cb1 \strokec4 \
\cb3 \strokec4         \cf7 \strokec7 // Usu\'e1rio n\'e3o est\'e1 logado, para de carregar e mostra a p\'e1gina.\cf0 \cb1 \strokec4 \
\cb3 \strokec4         setIsLoading(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4       \}\cb1 \strokec4 \
\cb3 \strokec4     \}\cb1 \strokec4 \
\cb3 \strokec4     checkUser();\cb1 \strokec4 \
\cb3 \strokec4   \}, [navigate]);\cb1 \strokec4 \
\
\cb3 \strokec4   \cf2 \strokec2 const\cf0 \strokec4  handleLogin = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \strokec4 \
\cb3 \strokec4     setIsLoggingIn(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \strokec4 \
\cb3 \strokec4       \cf2 \strokec2 await\cf0 \strokec4  \cf5 \strokec5 User\cf0 \strokec4 .loginWithRedirect(window.location.origin + createPageUrl(\cf6 \strokec6 "Home"\cf0 \strokec4 ));\cb1 \strokec4 \
\cb3 \strokec4     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \strokec4 \
\cb3 \strokec4       console.error(\cf6 \strokec6 "Login failed:"\cf0 \strokec4 , error);\cb1 \strokec4 \
\cb3 \strokec4       alert(\cf6 \strokec6 "Ocorreu um erro durante o login. Tente novamente."\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4       setIsLoggingIn(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4     \}\cb1 \strokec4 \
\cb3 \strokec4   \};\cb1 \strokec4 \
\
\cb3 \strokec4   \cf2 \strokec2 if\cf0 \strokec4  (isLoading) \{\cb1 \strokec4 \
\cb3 \strokec4     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \strokec4 \
\cb3 \strokec4       <div className=\cf6 \strokec6 "flex items-center justify-center h-screen bg-gradient-to-br from-[#ff7b54] to-[#ffb26b]"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4         <div className=\cf6 \strokec6 "text-center"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4           <div className=\cf6 \strokec6 "w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"\cf0 \strokec4 ></div>\cb1 \strokec4 \
\cb3 \strokec4           <p className=\cf6 \strokec6 "mt-4 text-white"\cf0 \strokec4 >\cf5 \strokec5 Carregando\cf0 \strokec4 ...</p>\cb1 \strokec4 \
\cb3 \strokec4         </div>\cb1 \strokec4 \
\cb3 \strokec4       </div>\cb1 \strokec4 \
\cb3 \strokec4     );\cb1 \strokec4 \
\cb3 \strokec4   \}\cb1 \strokec4 \
\
\cb3 \strokec4   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \strokec4 \
\cb3 \strokec4     <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-[#ff7b54] to-[#e45826] flex items-center justify-center p-4"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4       <div className=\cf6 \strokec6 "w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4         <div className=\cf6 \strokec6 "flex flex-col md:flex-row min-h-[600px]"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4           \cb1 \strokec4 \
\cb3 \strokec4           \{\cf7 \strokec7 /* Lado Esquerdo - Cadastro/Informa\'e7\'f5es */\cf0 \strokec4 \}\cb1 \strokec4 \
\cb3 \strokec4           <div className=\cf6 \strokec6 "flex-1 bg-gradient-to-br from-[#ff7b54] to-[#e45826] p-8 md:p-12 text-white flex flex-col justify-center"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             <div className=\cf6 \strokec6 "text-center mb-8"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               <div className=\cf6 \strokec6 "inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <\cf5 \strokec5 ChefHat\cf0 \strokec4  className=\cf6 \strokec6 "text-white"\cf0 \strokec4  size=\{\cf8 \strokec8 32\cf0 \strokec4 \} />\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\cb3 \strokec4               <h2 className=\cf6 \strokec6 "text-3xl md:text-4xl font-bold mb-4"\cf0 \strokec4 >\cf5 \strokec5 Bem\cf0 \strokec4 -vindo ao \cf5 \strokec5 Rest\cf9 \strokec9 \'f4\cf5 \strokec5 AI\cf0 \strokec4 </h2>\cb1 \strokec4 \
\cb3 \strokec4               <p className=\cf6 \strokec6 "text-lg text-white/90 mb-8"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 \cf5 \strokec5 Sua\cf0 \strokec4  cozinha inteligente que transforma ingredientes em receitas incr\cf9 \strokec9 \'ed\cf0 \strokec4 veis\cb1 \strokec4 \
\cb3 \strokec4               </p>\cb1 \strokec4 \
\cb3 \strokec4             </div>\cb1 \strokec4 \
\
\cb3 \strokec4             <div className=\cf6 \strokec6 "space-y-4 mb-8"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               <div className=\cf6 \strokec6 "flex items-center text-white/90"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <div className=\cf6 \strokec6 "w-2 h-2 bg-white rounded-full mr-3"\cf0 \strokec4 ></div>\cb1 \strokec4 \
\cb3 \strokec4                 <span>\cf5 \strokec5 Gere\cf0 \strokec4  receitas personalizadas com \cf5 \strokec5 IA\cf0 \strokec4 </span>\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\cb3 \strokec4               <div className=\cf6 \strokec6 "flex items-center text-white/90"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <div className=\cf6 \strokec6 "w-2 h-2 bg-white rounded-full mr-3"\cf0 \strokec4 ></div>\cb1 \strokec4 \
\cb3 \strokec4                 <span>\cf5 \strokec5 Salve\cf0 \strokec4  suas receitas favoritas</span>\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\cb3 \strokec4               <div className=\cf6 \strokec6 "flex items-center text-white/90"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <div className=\cf6 \strokec6 "w-2 h-2 bg-white rounded-full mr-3"\cf0 \strokec4 ></div>\cb1 \strokec4 \
\cb3 \strokec4                 <span>\cf5 \strokec5 Personalize\cf0 \strokec4  com suas prefer\cf9 \strokec9 \'ea\cf0 \strokec4 ncias</span>\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\cb3 \strokec4               <div className=\cf6 \strokec6 "flex items-center text-white/90"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <div className=\cf6 \strokec6 "w-2 h-2 bg-white rounded-full mr-3"\cf0 \strokec4 ></div>\cb1 \strokec4 \
\cb3 \strokec4                 <span>\cf5 \strokec5 Acesso\cf0 \strokec4  a receitas ilimitadas (\cf5 \strokec5 Premium\cf0 \strokec4 )</span>\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\cb3 \strokec4             </div>\cb1 \strokec4 \
\
\cb3 \strokec4             <div className=\cf6 \strokec6 "text-center"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 variant=\cf6 \strokec6 "link"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 className=\cf6 \strokec6 "text-white hover:text-white/80 underline"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 "Home"\cf0 \strokec4 ))\}\cb1 \strokec4 \
\cb3 \strokec4               >\cb1 \strokec4 \
\cb3 \strokec4                 \cf5 \strokec5 Continuar\cf0 \strokec4  sem login <\cf5 \strokec5 ArrowRight\cf0 \strokec4  size=\{\cf8 \strokec8 16\cf0 \strokec4 \} className=\cf6 \strokec6 "ml-1"\cf0 \strokec4  />\cb1 \strokec4 \
\cb3 \strokec4               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             </div>\cb1 \strokec4 \
\cb3 \strokec4           </div>\cb1 \strokec4 \
\
\cb3 \strokec4           \{\cf7 \strokec7 /* Lado Direito - Login */\cf0 \strokec4 \}\cb1 \strokec4 \
\cb3 \strokec4           <div className=\cf6 \strokec6 "flex-1 bg-gradient-to-br from-[#ffb26b] to-[#ffd93d] p-8 md:p-12 flex flex-col justify-center"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4             <div className=\cf6 \strokec6 "max-w-sm mx-auto w-full"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               <div className=\cf6 \strokec6 "text-center mb-8"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <h3 className=\cf6 \strokec6 "text-3xl font-bold text-gray-800 mb-2"\cf0 \strokec4 >\cf5 \strokec5 Login\cf0 \strokec4 </h3>\cb1 \strokec4 \
\cb3 \strokec4                 <p className=\cf6 \strokec6 "text-gray-700"\cf0 \strokec4 >\cf5 \strokec5 Entre\cf0 \strokec4  em sua conta e comece a cozinhar!</p>\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\
\cb3 \strokec4               \{\cf7 \strokec7 /* Simula\'e7\'e3o de campos de login (apenas visual) */\cf0 \strokec4 \}\cb1 \strokec4 \
\cb3 \strokec4               <div className=\cf6 \strokec6 "space-y-4 mb-6"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <div>\cb1 \strokec4 \
\cb3 \strokec4                   <input\cb1 \strokec4 \
\cb3 \strokec4                     type=\cf6 \strokec6 "email"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                     placeholder=\cf6 \strokec6 "Email"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                     disabled\cb1 \strokec4 \
\cb3 \strokec4                     className=\cf6 \strokec6 "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 text-gray-500 cursor-not-allowed"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                   />\cb1 \strokec4 \
\cb3 \strokec4                 </div>\cb1 \strokec4 \
\cb3 \strokec4                 <div>\cb1 \strokec4 \
\cb3 \strokec4                   <input\cb1 \strokec4 \
\cb3 \strokec4                     type=\cf6 \strokec6 "password"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                     placeholder=\cf6 \strokec6 "Senha"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                     disabled\cb1 \strokec4 \
\cb3 \strokec4                     className=\cf6 \strokec6 "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 text-gray-500 cursor-not-allowed"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                   />\cb1 \strokec4 \
\cb3 \strokec4                 </div>\cb1 \strokec4 \
\cb3 \strokec4                 <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3 \strokec4                   disabled\cb1 \strokec4 \
\cb3 \strokec4                   className=\cf6 \strokec6 "w-full bg-gray-400 text-gray-600 cursor-not-allowed py-3"\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 >\cb1 \strokec4 \
\cb3 \strokec4                   \cf5 \strokec5 Login\cf0 \strokec4  \cf5 \strokec5 Tradicional\cf0 \strokec4  (\cf5 \strokec5 Em\cf0 \strokec4  \cf5 \strokec5 Breve\cf0 \strokec4 )\cb1 \strokec4 \
\cb3 \strokec4                 </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\
\cb3 \strokec4               <div className=\cf6 \strokec6 "text-center mb-4"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <span className=\cf6 \strokec6 "text-sm text-gray-600"\cf0 \strokec4 >ou</span>\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\
\cb3 \strokec4               \{\cf7 \strokec7 /* Bot\'e3o do Google - Funcional */\cf0 \strokec4 \}\cb1 \strokec4 \
\cb3 \strokec4               <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 onClick=\{handleLogin\}\cb1 \strokec4 \
\cb3 \strokec4                 disabled=\{isLoggingIn\}\cb1 \strokec4 \
\cb3 \strokec4                 className=\cf6 \strokec6 "w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-md py-3 text-base font-medium"\cf0 \cb1 \strokec4 \
\cb3 \strokec4               >\cb1 \strokec4 \
\cb3 \strokec4                 \{isLoggingIn ? (\cb1 \strokec4 \
\cb3 \strokec4                   <div className=\cf6 \strokec6 "flex items-center justify-center gap-2"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                     <div className=\cf6 \strokec6 "w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"\cf0 \strokec4 ></div>\cb1 \strokec4 \
\cb3 \strokec4                     <span>\cf5 \strokec5 Entrando\cf0 \strokec4 ...</span>\cb1 \strokec4 \
\cb3 \strokec4                   </div>\cb1 \strokec4 \
\cb3 \strokec4                 ) : (\cb1 \strokec4 \
\cb3 \strokec4                   <div className=\cf6 \strokec6 "flex items-center justify-center gap-3"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                     <\cf5 \strokec5 GoogleIcon\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \strokec4 \
\cb3 \strokec4                     <span>\cf5 \strokec5 Entrar\cf0 \strokec4  com \cf5 \strokec5 Google\cf0 \strokec4 </span>\cb1 \strokec4 \
\cb3 \strokec4                   </div>\cb1 \strokec4 \
\cb3 \strokec4                 )\}\cb1 \strokec4 \
\cb3 \strokec4               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \strokec4 \
\
\cb3 \strokec4               <p className=\cf6 \strokec6 "text-xs text-gray-600 text-center mt-4"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 \cf5 \strokec5 Ao\cf0 \strokec4  continuar, voc\cf9 \strokec9 \'ea\cf0 \strokec4  concorda com nossos \cf5 \strokec5 Termos\cf0 \strokec4  de \cf5 \strokec5 Servi\cf9 \strokec9 \'e7\cf0 \strokec4 o\cb1 \strokec4 \
\cb3 \strokec4               </p>\cb1 \strokec4 \
\
\cb3 \strokec4               <div className=\cf6 \strokec6 "text-center mt-6"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                 <p className=\cf6 \strokec6 "text-sm text-gray-700"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                   \cf5 \strokec5 Novo\cf0 \strokec4  por aqui?\{\cf6 \strokec6 ' '\cf0 \strokec4 \}\cb1 \strokec4 \
\cb3 \strokec4                   <button className=\cf6 \strokec6 "text-[#ff7b54] hover:text-[#e45826] font-medium"\cf0 \strokec4 >\cb1 \strokec4 \
\cb3 \strokec4                     \cf5 \strokec5 O\cf0 \strokec4  \cf5 \strokec5 Google\cf0 \strokec4  criar\cf9 \strokec9 \'e1\cf0 \strokec4  sua conta automaticamente\cb1 \strokec4 \
\cb3 \strokec4                   </button>\cb1 \strokec4 \
\cb3 \strokec4                 </p>\cb1 \strokec4 \
\cb3 \strokec4               </div>\cb1 \strokec4 \
\cb3 \strokec4             </div>\cb1 \strokec4 \
\cb3 \strokec4           </div>\cb1 \strokec4 \
\cb3 \strokec4         </div>\cb1 \strokec4 \
\cb3 \strokec4       </div>\cb1 \strokec4 \
\cb3 \strokec4     </div>\cb1 \strokec4 \
\cb3 \strokec4   );\cb1 \strokec4 \
\cb3 \strokec4 \}\cb1 \strokec4 \
}