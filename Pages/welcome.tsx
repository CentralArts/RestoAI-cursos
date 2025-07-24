import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChefHat, ArrowRight } from "lucide-react";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.658-3.302-11.303-7.862l-6.571,4.819C9.656,39.663,16.318,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.022,35.136,44,30.024,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);

export default function Welcome() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    // TODO: Substituir por autenticação Next.js
    async function checkUser() {
      try {
        // await User.me();
        // Redirecionar para Home se logado
      } catch (e) {
        setIsLoading(false);
      }
    }
    checkUser();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      // await User.loginWithRedirect(window.location.origin + createPageUrl("Home"));
    } catch (error) {
      setIsLoggingIn(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#ff7b54] to-[#ffb26b]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-white">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff7b54] to-[#e45826] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* Lado Esquerdo - Cadastro/Informaçõess */}
          <div className="flex-1 bg-gradient-to-br from-[#ff7b54] to-[#e45826] p-8 md:p-12 text-white flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <ChefHat className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bem-vindo ao RestoAI</h2>
              <p className="text-lg text-white/90 mb-8">Sua cozinha inteligente que transforma ingredientes em receitas incríveis</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white/90"><div className="w-2 h-2 bg-white rounded-full mr-3"></div><span>Gere receitas personalizadas com IA</span></div>
              <div className="flex items-center text-white/90"><div className="w-2 h-2 bg-white rounded-full mr-3"></div><span>Salve suas receitas favoritas</span></div>
              <div className="flex items-center text-white/90"><div className="w-2 h-2 bg-white rounded-full mr-3"></div><span>Personalize com suas preferências</span></div>
              <div className="flex items-center text-white/90"><div className="w-2 h-2 bg-white rounded-full mr-3"></div><span>Acesso a receitas ilimitadas (Premium)</span></div>
            </div>
            <div className="text-center">
              <Button variant="link" className="text-white hover:text-white/80 underline">Continuar sem login <ArrowRight size={16} className="ml-1" /></Button>
            </div>
          </div>
          {/* Lado Direito - Login */}
          <div className="flex-1 bg-gradient-to-br from-[#ffb26b] to-[#ffd93d] p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Login</h3>
                <p className="text-gray-700">Entre em sua conta e comece a cozinhar!</p>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <input type="email" placeholder="Email" disabled className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 text-gray-500 cursor-not-allowed" />
                </div>
                <div>
                  <input type="password" placeholder="Senha" disabled className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 text-gray-500 cursor-not-allowed" />
                </div>
                <Button disabled className="w-full bg-gray-400 text-gray-600 cursor-not-allowed py-3">Login Tradicional (Em Breve)</Button>
              </div>
              <div className="text-center mb-4"><span className="text-sm text-gray-600">ou</span></div>
              <Button onClick={handleLogin} disabled={isLoggingIn} className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-md py-3 text-base font-medium">
                {isLoggingIn ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                    <span>Entrando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <GoogleIcon className="w-5 h-5" />
                    <span>Entrar com Google</span>
                  </div>
                )}
              </Button>
              <p className="text-xs text-gray-600 text-center mt-4">Ao continuar, você concorda com nossos Termos de Serviço</p>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-700">
                  Novo por aqui?{' '}
                  <button className="text-[#ff7b54] hover:text-[#e45826] font-medium">O Google criará sua conta automaticamente</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 