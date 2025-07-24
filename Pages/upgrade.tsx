import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CheckCircle, Star, ArrowLeft, CreditCard, Shield, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function UpgradePage() {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // TODO: Substituir por autenticação Next.js
    async function fetchUser() {
      try {
        // const userData = await User.me();
        // setCurrentUser(userData);
      } catch (error) {
        // alert('Você precisa estar logado para fazer o upgrade.');
        // Redirecionar para Home
      }
    }
    fetchUser();
  }, []);

  const handleUpgradeClick = async (planType: 'monthly' | 'yearly') => {
    if (!currentUser) {
      // alert('Por favor, faça login para continuar');
      return;
    }
    setLoading(true);
    try {
      // Lógica de upgrade (Stripe, etc)
    } catch (error) {
      // alert('Ocorreu um erro ao processar seu pedido. Tente novamente.');
      setLoading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 flex flex-col items-center justify-center p-4">
      <Button variant="ghost" className="absolute top-6 left-6 text-gray-700 hover:text-gray-900">
        <ArrowLeft size={20} className="mr-2" /> Voltar
      </Button>
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Escolha seu Plano Premium</h1>
          <p className="text-lg text-gray-600">Desbloqueie todo o potencial do RestoAI</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Plano Mensal */}
          <Card className="relative overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center bg-gradient-to-r from-[#ff7b54] to-[#ffb26b] text-white p-6">
              <CardTitle className="text-2xl font-bold">Premium Mensal</CardTitle>
              <CardDescription className="text-orange-100 text-lg">Perfeito para começar</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">R$ 19,90</span>
                <span className="text-lg opacity-90">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />Até <strong>6 receitas</strong> por vez</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />Gerações <strong>ilimitadas</strong> por dia</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /><strong>Salve receitas</strong> favoritas</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />Suporte <strong>prioritário</strong></li>
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Button className="w-full bg-[#ff7b54] hover:bg-[#e45826] py-3 text-lg font-semibold" onClick={() => handleUpgradeClick('monthly')} disabled={loading}>
                {loading ? (<><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>Aguarde...</>) : (<><CreditCard className="mr-2" size={18} />Assinar Mensal</>)}
              </Button>
            </CardFooter>
          </Card>
          {/* Plano Anual */}
          <Card className="relative overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-400 text-yellow-900 pt-1 pr-1 pb-1 pl-1 text-xs font-semibold inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80">ECONOMIZE 15%</Badge>
            </div>
            <CardHeader className="text-center bg-gradient-to-r from-green-500 to-green-700 text-white p-6">
              <CardTitle className="text-2xl font-bold">Premium Anual</CardTitle>
              <CardDescription className="text-green-100 text-lg">Melhor valor!</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">R$ 202,00</span>
                <span className="text-lg opacity-90">/ano</span>
              </div>
              <p className="text-sm text-green-100 mt-2">Equivale a R$ 16,83/mês</p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />Até <strong>6 receitas</strong> por vez</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />Gerações <strong>ilimitadas</strong> por dia</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /><strong>Salve receitas</strong> favoritas</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />Suporte <strong>prioritário</strong></li>
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Button className="w-full bg-green-600 hover:bg-green-700 py-3 text-lg font-semibold" onClick={() => handleUpgradeClick('yearly')} disabled={loading}>
                {loading ? (<><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>Aguarde...</>) : (<><CreditCard className="mr-2" size={18} />Assinar Anual</>)}
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="text-center bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Pagamento Seguro e Confiável</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="text-green-500" size={24} />
              <span className="text-gray-600">Processado pelo Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-amber-500" size={24} />
              <span className="text-gray-600">Ativação Imediata</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">Seus dados estão protegidos. Você será redirecionado para a página segura do Stripe.</p>
        </div>
      </div>
    </div>
  );
} 