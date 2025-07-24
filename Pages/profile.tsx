import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, User as UserIcon, Bell, Settings, LogOut, Plus, Minus, Save, Star, ShoppingCart } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [preferences, setPreferences] = useState({ dietary_restrictions: [], favorite_cuisines: [] });
  const [newCuisine, setNewCuisine] = useState("");

  useEffect(() => {
    // TODO: Substituir por autenticação Next.js
    async function fetchUser() {
      try {
        // const userData = await User.me();
        // setUser(userData);
        // if (userData.preferences) setPreferences(userData.preferences);
      } catch (error) {
        // Redirecionar para login se necessário
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  const handleLogout = async () => {
    // await User.logout();
    // Redirecionar para Home
  };

  const toggleDietaryRestriction = (restriction: string) => {
    setPreferences((prev: any) => {
      const current = prev.dietary_restrictions || [];
      const updated = current.includes(restriction)
        ? current.filter((r: string) => r !== restriction)
        : [...current, restriction];
      return { ...prev, dietary_restrictions: updated };
    });
  };

  const addCuisine = () => {
    if (newCuisine.trim() !== "") {
      setPreferences((prev: any) => {
        const current = prev.favorite_cuisines || [];
        return { ...prev, favorite_cuisines: [...current, newCuisine.trim()] };
      });
      setNewCuisine("");
    }
  };

  const removeCuisine = (cuisine: string) => {
    setPreferences((prev: any) => {
      const current = prev.favorite_cuisines || [];
      return { ...prev, favorite_cuisines: current.filter((c: string) => c !== cuisine) };
    });
  };

  const savePreferences = async () => {
    setSaving(true);
    try {
      // await User.updateMyUserData({ preferences });
      // alert("Preferências salvas com sucesso!");
    } catch (error) {
      // alert("Erro ao salvar preferências. Tente novamente.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 rounded-full border-4 border-[#ff7b54] border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold mb-4">Você não está logado</h2>
        <p className="text-gray-600 mb-6">Faça login para ver seu perfil.</p>
        <Button>Voltar para o Início</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-10 mb-20 md:mb-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#ff7b54] to-[#ffb26b] flex items-center justify-center text-white text-2xl font-bold">
            {user.full_name ? user.full_name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">{user.full_name || "Usuário"}</h1>
              {user.plan === "premium" && (
                <Badge className="bg-yellow-400 text-yellow-900 gap-1 text-sm"><Star size={14}/> Premium</Badge>
              )}
            </div>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500 mt-1">
              Membro desde {format(new Date(user.created_date), "MMMM 'de' yyyy", {locale: ptBR})}
            </p>
            <p className="text-sm text-gray-500">Plano Atual: <span className="font-semibold capitalize">{user.plan}</span></p>
          </div>
          <Button variant="outline" className="md:self-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50" onClick={handleLogout}>
            <LogOut size={16} /> Sair
          </Button>
        </div>
        {user.plan !== 'premium' && (
          <Card className="mb-6 bg-amber-50 border-amber-200">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-amber-800">Desbloqueie todo o potencial do RestoAI!</h3>
                <p className="text-amber-700">Gere mais receitas, salve suas favoritas e aproveite uma experiência sem limites.</p>
              </div>
              <Button className="bg-[#ff7b54] hover:bg-[#e45826] whitespace-nowrap">
                <Star size={16} className="mr-2" /> Fazer Upgrade para Premium
              </Button>
            </CardContent>
          </Card>
        )}
        <Tabs defaultValue="preferences" className="w-full">
          <TabsList className="mb-6 grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="preferences" className="flex items-center gap-2"><CheckSquare size={16} /><span className="hidden sm:inline">Preferências</span></TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2"><UserIcon size={16} /><span className="hidden sm:inline">Perfil</span></TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2"><Settings size={16} /><span className="hidden sm:inline">Configurações</span></TabsTrigger>
          </TabsList>
          <TabsContent value="preferences" className="mt-0">
            <Card>
              <CardHeader><CardTitle className="text-xl">Preferências Culinárias</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Restrições Alimentares</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["vegetariano", "vegano", "sem_gluten", "sem_lactose", "nenhum"].map((restriction) => (
                      <div key={restriction} className="flex items-center space-x-2">
                        <Switch id={restriction} checked={(preferences.dietary_restrictions || []).includes(restriction)} onCheckedChange={() => toggleDietaryRestriction(restriction)}/>
                        <Label htmlFor={restriction} className="capitalize">{restriction.replace(/_/g, ' ')}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Cozinhas Favoritas</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(preferences.favorite_cuisines || []).map((cuisine: string) => (
                      <Badge key={cuisine} className="px-3 py-1.5 bg-amber-100 text-amber-800 border-amber-200 flex items-center gap-1">
                        {cuisine}
                        <button className="ml-1 text-amber-600 hover:text-amber-800" onClick={() => removeCuisine(cuisine)}><Minus size={14} /></button>
                      </Badge>
                    ))}
                    {(preferences.favorite_cuisines || []).length === 0 && (<p className="text-gray-500 text-sm">Nenhuma cozinha favorita adicionada</p>)}
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Adicionar cozinha (ex: italiana)" value={newCuisine} onChange={e => setNewCuisine(e.target.value)} onKeyPress={e => e.key === "Enter" && addCuisine()}/>
                    <Button variant="outline" size="icon" onClick={addCuisine} disabled={!newCuisine.trim()}><Plus size={16} /></Button>
                  </div>
                </div>
                <Button className="w-full bg-[#ff7b54] hover:bg-[#e45826] mt-4" onClick={savePreferences} disabled={saving}>
                  {saving ? <><div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>Salvando...</> : <><Save size={16} className="mr-2" />Salvar Preferências</>}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="profile" className="mt-0">
            <Card>
              <CardHeader><CardTitle className="text-xl">Informações de Perfil</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2"><Label htmlFor="name">Nome completo</Label><Input id="name" value={user.full_name || ""} disabled /></div>
                <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" value={user.email} disabled /></div>
                <p className="text-sm text-gray-500 mt-4">Seu perfil é gerenciado pela autenticação do Google.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="mt-0">
            <Card>
              <CardHeader><CardTitle className="text-xl">Configurações da Conta</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                {user.plan === 'premium' && (
                  <div>
                    <h3 className="text-lg font-medium mb-3">Gerenciar Assinatura</h3>
                    <Button variant="outline" className="w-full" onClick={() => alert("Redirecionar para o portal de gerenciamento de assinatura do Stripe/Mercado Pago.")}>Gerenciar Assinatura Premium</Button>
                    <p className="text-xs text-gray-500 mt-1 text-center">Você será redirecionado para o portal do nosso parceiro de pagamentos.</p>
                  </div>
                )}
                {user.plan !== 'premium' && (
                  <div>
                    <h3 className="text-lg font-medium mb-3">Plano Atual: <span className="capitalize">{user.plan || 'Gratuito'}</span></h3>
                    <Button className="w-full bg-[#ff7b54] hover:bg-[#e45826]">Fazer Upgrade para Premium</Button>
                  </div>
                )}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-3 text-red-600">Zona de Perigo</h3>
                  <Button variant="destructive" className="w-full" onClick={() => alert("Implementar exclusão de conta com confirmação.")}>Excluir minha conta</Button>
                  <p className="text-xs text-gray-500 mt-1">Esta ação é irreversível e todos os seus dados serão perdidos.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 