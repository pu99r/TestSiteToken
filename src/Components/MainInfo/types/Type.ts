export type User = {
  avatar: string | null;
  created_at: string;
  email: string;
  id: string;
  name: string;
  password: string | null;
  role: string;
  subscription: {
    additional_tokens: number;
    created_at: string;
    id: string;
    plan: {
      currency: string;
      id: string;
      type: string;
      price: number;
      tokens: number;
    };
    plan_id: string;
    user_id: string;
    tokens: number;
  };
  tg_id: number | null;
};
