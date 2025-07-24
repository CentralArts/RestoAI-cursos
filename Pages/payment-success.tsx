import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Home as HomeIcon } from "lucide-react";

export default function PaymentSuccess() {
  const [loading, setLoading] = useState(true);
  const [processingPayment, setProcessingPayment] = useState(true);

  useEffect(() => {
    // TODO: Substituir por lógica Next.js para processar pagamento
    async function processPaymentSuccess() {
      try {
        // const urlParams = new URLSearchParams(window.location.search);
        // const sessionId = urlParams.get('session_id');
        // Buscar e atualizar pagamento, atualizar plano do usuário
      } catch (error) {
        // console.error(error);
      } finally {
        setProcessingPayment(false);
        setLoading(false);
      }
    }
    processPaymentSuccess();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-green-800">
            {processingPayment ? 'Processando Pagamento...' : 'Pagamento Concluído!'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {processingPayment ? (
            <div>
              <div className="w-8 h-8 mx-auto mb-4 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
              <p className="text-gray-600">Ativando seu plano Premium...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold text-gray-800">Bem-vindo ao Premium!</span>
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-gray-600 mb-6">Seu plano Premium foi ativado com sucesso. Agora você pode:</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Gerar até 6 receitas por vez</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Gerações ilimitadas por dia</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Salvar suas receitas favoritas</li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <HomeIcon className="w-4 h-4 mr-2" />Ir para a Página Inicial
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 