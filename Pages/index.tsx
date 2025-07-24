import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

// Componente para o ícone do Google
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.658-3.302-11.303-7.862l-6.571,4.819C9.656,39.663,16.318,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.022,35.136,44,30.024,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);

export default function IndexPage() {
  // Em Next.js, useRouter substitui useNavigate
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Start loading to check auth
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    // TODO: Adapte a lógica de autenticação para Next.js
    setIsLoading(false);
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    // TODO: Adapte a lógica de login para Next.js
    setTimeout(() => setIsLoggingIn(false), 1000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-amber-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#ff7b54] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-amber-50" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center m-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff7b54] mb-6">
          <ChefHat className="text-white" size={36} />
        </div>
        <h1 className="text-3xl font-bold text-[#2c3333]">Bem-vindo ao RestôAI</h1>
        <p className="text-gray-600 mt-2 mb-8">Sua cozinha inteligente. Faça login para salvar receitas e preferências.</p>
        <Button
          onClick={handleLogin}
          disabled={isLoggingIn}
          className="w-full bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 shadow-md py-6 text-lg"
        >
          {isLoggingIn ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
              <span>Redirecionando...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <GoogleIcon className="w-6 h-6" />
              <span>Entrar com Google</span>
            </div>
          )}
        </Button>
        <p className="text-xs text-gray-500 mt-4">Ao continuar, você concorda com nossos Termos de Serviço.</p>
        <div className="mt-8">
          <Button variant="link" className="text-gray-600">Continuar como visitante</Button>
        </div>
      </div>
    </div>
  );
} 