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
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \cf5 \strokec5 React\cf0 \strokec2 , \{ useEffect, useState \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'react'\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ useNavigate \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'react-router-dom'\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ createPageUrl \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 '@/utils'\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 User\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/User"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 StripePayment\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 "@/entities/StripePayment"\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Button\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 '@/components/ui/button'\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 Card\cf0 \strokec2 , \cf5 \strokec5 CardContent\cf0 \strokec2 , \cf5 \strokec5 CardHeader\cf0 \strokec2 , \cf5 \strokec5 CardTitle\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 '@/components/ui/card'\cf0 \strokec2 ;\cb1 \strokec2 \
\cf3 \cb4 \strokec3 import\cf0 \strokec2  \{ \cf5 \strokec5 CheckCircle\cf0 \strokec2 , \cf5 \strokec5 Star\cf0 \strokec2 , \cf5 \strokec5 Home\cf0 \strokec2  \} \cf3 \strokec3 from\cf0 \strokec2  \cf6 \strokec6 'lucide-react'\cf0 \strokec2 ;\cb1 \strokec2 \
\
\cf3 \cb4 \strokec3 export\cf0 \strokec2  \cf3 \strokec3 default\cf0 \strokec2  \cf3 \strokec3 function\cf0 \strokec2  \cf5 \strokec5 PaymentSuccess\cf0 \strokec2 () \{\cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  navigate = useNavigate();\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [loading, setLoading] = useState(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2   \cf3 \strokec3 const\cf0 \strokec2  [processingPayment, setProcessingPayment] = useState(\cf3 \strokec3 true\cf0 \strokec2 );\cb1 \strokec2 \
\
\cb4 \strokec2   useEffect(() => \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 const\cf0 \strokec2  processPaymentSuccess = \cf3 \strokec3 async\cf0 \strokec2  () => \{\cb1 \strokec2 \
\cb4 \strokec2       \cf3 \strokec3 try\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         \cf7 \strokec7 // Obter session_id dos par\'e2metros da URL\cf0 \cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  urlParams = \cf3 \strokec3 new\cf0 \strokec2  \cf5 \strokec5 URLSearchParams\cf0 \strokec2 (window.location.search);\cb1 \strokec2 \
\cb4 \strokec2         \cf3 \strokec3 const\cf0 \strokec2  sessionId = urlParams.\cf3 \strokec3 get\cf0 \strokec2 (\cf6 \strokec6 'session_id'\cf0 \strokec2 );\cb1 \strokec2 \
\
\cb4 \strokec2         \cf3 \strokec3 if\cf0 \strokec2  (sessionId) \{\cb1 \strokec2 \
\cb4 \strokec2           \cf7 \strokec7 // Buscar o pagamento pelo session_id e atualizar status\cf0 \cb1 \strokec2 \
\cb4 \strokec2           \cf3 \strokec3 const\cf0 \strokec2  payments = \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 StripePayment\cf0 \strokec2 .filter(\{ stripe_session_id: sessionId \});\cb1 \strokec2 \
\cb4 \strokec2           \cb1 \strokec2 \
\cb4 \strokec2           \cf3 \strokec3 if\cf0 \strokec2  (payments.length > \cf8 \strokec8 0\cf0 \strokec2 ) \{\cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 const\cf0 \strokec2  payment = payments[\cf8 \strokec8 0\cf0 \strokec2 ];\cb1 \strokec2 \
\cb4 \strokec2             \cb1 \strokec2 \
\cb4 \strokec2             \cf7 \strokec7 // Atualizar status do pagamento\cf0 \cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 StripePayment\cf0 \strokec2 .update(payment.id, \{\cb1 \strokec2 \
\cb4 \strokec2               status: \cf6 \strokec6 'completed'\cf0 \strokec2 ,\cb1 \strokec2 \
\cb4 \strokec2               payment_date: \cf3 \strokec3 new\cf0 \strokec2  \cf5 \strokec5 Date\cf0 \strokec2 ().toISOString()\cb1 \strokec2 \
\cb4 \strokec2             \});\cb1 \strokec2 \
\
\cb4 \strokec2             \cf7 \strokec7 // Atualizar plano do usu\'e1rio para premium\cf0 \cb1 \strokec2 \
\cb4 \strokec2             \cf3 \strokec3 await\cf0 \strokec2  \cf5 \strokec5 User\cf0 \strokec2 .updateMyUserData(\{\cb1 \strokec2 \
\cb4 \strokec2               plan: \cf6 \strokec6 'premium'\cf0 \cb1 \strokec2 \
\cb4 \strokec2             \});\cb1 \strokec2 \
\cb4 \strokec2           \}\cb1 \strokec2 \
\cb4 \strokec2         \}\cb1 \strokec2 \
\
\cb4 \strokec2         setProcessingPayment(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \} \cf3 \strokec3 catch\cf0 \strokec2  (error) \{\cb1 \strokec2 \
\cb4 \strokec2         console.error(\cf6 \strokec6 'Erro ao processar sucesso do pagamento:'\cf0 \strokec2 , error);\cb1 \strokec2 \
\cb4 \strokec2         setProcessingPayment(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \} \cf3 \strokec3 finally\cf0 \strokec2  \{\cb1 \strokec2 \
\cb4 \strokec2         setLoading(\cf3 \strokec3 false\cf0 \strokec2 );\cb1 \strokec2 \
\cb4 \strokec2       \}\cb1 \strokec2 \
\cb4 \strokec2     \};\cb1 \strokec2 \
\
\cb4 \strokec2     processPaymentSuccess();\cb1 \strokec2 \
\cb4 \strokec2   \}, []);\cb1 \strokec2 \
\
\cb4 \strokec2   \cf3 \strokec3 if\cf0 \strokec2  (loading) \{\cb1 \strokec2 \
\cb4 \strokec2     \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \strokec2 \
\cb4 \strokec2       <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <div className=\cf6 \strokec6 "w-10 h-10 rounded-full border-4 border-green-600 border-t-transparent animate-spin"\cf0 \strokec2 ></div>\cb1 \strokec2 \
\cb4 \strokec2       </div>\cb1 \strokec2 \
\cb4 \strokec2     );\cb1 \strokec2 \
\cb4 \strokec2   \}\cb1 \strokec2 \
\
\cb4 \strokec2   \cf3 \strokec3 return\cf0 \strokec2  (\cb1 \strokec2 \
\cb4 \strokec2     <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       <\cf5 \strokec5 Card\cf0 \strokec2  className=\cf6 \strokec6 "w-full max-w-md text-center shadow-xl"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 CardHeader\cf0 \strokec2  className=\cf6 \strokec6 "pb-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           <div className=\cf6 \strokec6 "flex justify-center mb-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             <div className=\cf6 \strokec6 "w-20 h-20 bg-green-500 rounded-full flex items-center justify-center"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 CheckCircle\cf0 \strokec2  className=\cf6 \strokec6 "w-12 h-12 text-white"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           </div>\cb1 \strokec2 \
\cb4 \strokec2           <\cf5 \strokec5 CardTitle\cf0 \strokec2  className=\cf6 \strokec6 "text-2xl font-bold text-green-800"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             \{processingPayment ? \cf6 \strokec6 'Processando Pagamento...'\cf0 \strokec2  : \cf6 \strokec6 'Pagamento Conclu\'eddo!'\cf0 \strokec2 \}\cb1 \strokec2 \
\cb4 \strokec2           </\cf5 \strokec5 CardTitle\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 CardHeader\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2         \cb1 \strokec2 \
\cb4 \strokec2         <\cf5 \strokec5 CardContent\cf0 \strokec2  className=\cf6 \strokec6 "space-y-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2           \{processingPayment ? (\cb1 \strokec2 \
\cb4 \strokec2             <div>\cb1 \strokec2 \
\cb4 \strokec2               <div className=\cf6 \strokec6 "w-8 h-8 mx-auto mb-4 rounded-full border-4 border-green-600 border-t-transparent animate-spin"\cf0 \strokec2 ></div>\cb1 \strokec2 \
\cb4 \strokec2               <p className=\cf6 \strokec6 "text-gray-600"\cf0 \strokec2 >\cf5 \strokec5 Ativando\cf0 \strokec2  seu plano \cf5 \strokec5 Premium\cf0 \strokec2 ...</p>\cb1 \strokec2 \
\cb4 \strokec2             </div>\cb1 \strokec2 \
\cb4 \strokec2           ) : (\cb1 \strokec2 \
\cb4 \strokec2             <>\cb1 \strokec2 \
\cb4 \strokec2               <div className=\cf6 \strokec6 "flex items-center justify-center gap-2 mb-4"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Star\cf0 \strokec2  className=\cf6 \strokec6 "w-6 h-6 text-yellow-500"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                 <span className=\cf6 \strokec6 "text-lg font-semibold text-gray-800"\cf0 \strokec2 >\cf5 \strokec5 Bem\cf0 \strokec2 -vindo ao \cf5 \strokec5 Premium\cf0 \strokec2 !</span>\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Star\cf0 \strokec2  className=\cf6 \strokec6 "w-6 h-6 text-yellow-500"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2               </div>\cb1 \strokec2 \
\cb4 \strokec2               \cb1 \strokec2 \
\cb4 \strokec2               <p className=\cf6 \strokec6 "text-gray-600 mb-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 \cf5 \strokec5 Seu\cf0 \strokec2  plano \cf5 \strokec5 Premium\cf0 \strokec2  foi ativado com sucesso. \cf5 \strokec5 Agora\cf0 \strokec2  voc\cf9 \strokec9 \'ea\cf0 \strokec2  pode:\cb1 \strokec2 \
\cb4 \strokec2               </p>\cb1 \strokec2 \
\cb4 \strokec2               \cb1 \strokec2 \
\cb4 \strokec2               <ul className=\cf6 \strokec6 "text-left space-y-2 mb-6"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                 <li className=\cf6 \strokec6 "flex items-center"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 CheckCircle\cf0 \strokec2  className=\cf6 \strokec6 "w-5 h-5 text-green-500 mr-2"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                   <span>\cf5 \strokec5 Gerar\cf0 \strokec2  at\cf9 \strokec9 \'e9\cf0 \strokec2  \cf8 \strokec8 6\cf0 \strokec2  receitas por vez</span>\cb1 \strokec2 \
\cb4 \strokec2                 </li>\cb1 \strokec2 \
\cb4 \strokec2                 <li className=\cf6 \strokec6 "flex items-center"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 CheckCircle\cf0 \strokec2  className=\cf6 \strokec6 "w-5 h-5 text-green-500 mr-2"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                   <span>\cf5 \strokec5 Gera\cf9 \strokec9 \'e7\'f5\cf0 \strokec2 es ilimitadas por dia</span>\cb1 \strokec2 \
\cb4 \strokec2                 </li>\cb1 \strokec2 \
\cb4 \strokec2                 <li className=\cf6 \strokec6 "flex items-center"\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2                   <\cf5 \strokec5 CheckCircle\cf0 \strokec2  className=\cf6 \strokec6 "w-5 h-5 text-green-500 mr-2"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                   <span>\cf5 \strokec5 Salvar\cf0 \strokec2  suas receitas favoritas</span>\cb1 \strokec2 \
\cb4 \strokec2                 </li>\cb1 \strokec2 \
\cb4 \strokec2               </ul>\cb1 \strokec2 \
\cb4 \strokec2               \cb1 \strokec2 \
\cb4 \strokec2               <\cf5 \strokec5 Button\cf0 \strokec2  \cb1 \strokec2 \
\cb4 \strokec2                 className=\cf6 \strokec6 "w-full bg-green-600 hover:bg-green-700"\cf0 \cb1 \strokec2 \
\cb4 \strokec2                 onClick=\{() => navigate(createPageUrl(\cf6 \strokec6 'Home'\cf0 \strokec2 ))\}\cb1 \strokec2 \
\cb4 \strokec2               >\cb1 \strokec2 \
\cb4 \strokec2                 <\cf5 \strokec5 Home\cf0 \strokec2  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec2  />\cb1 \strokec2 \
\cb4 \strokec2                 \cf5 \strokec5 Ir\cf0 \strokec2  para a \cf5 \strokec5 P\cf9 \strokec9 \'e1\cf0 \strokec2 gina \cf5 \strokec5 Inicial\cf0 \cb1 \strokec2 \
\cb4 \strokec2               </\cf5 \strokec5 Button\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2             </>\cb1 \strokec2 \
\cb4 \strokec2           )\}\cb1 \strokec2 \
\cb4 \strokec2         </\cf5 \strokec5 CardContent\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2       </\cf5 \strokec5 Card\cf0 \strokec2 >\cb1 \strokec2 \
\cb4 \strokec2     </div>\cb1 \strokec2 \
\cb4 \strokec2   );\cb1 \strokec2 \
\cb4 \strokec2 \}\cb1 \strokec2 \
}