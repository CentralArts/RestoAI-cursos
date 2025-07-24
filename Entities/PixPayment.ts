export type PixPayment = {
  user_id: string;
  user_email: string;
  image_url: string;
  status: 'pendente' | 'aprovado' | 'rejeitado';
  created_date: string;
  approved_date?: string;
  notes?: string;
};