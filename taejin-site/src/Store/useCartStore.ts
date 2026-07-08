import { create } from "zustand";
// Importa o tipo 'Iteminfo' para garantir a tipagem estática do TypeScript
import type { Iteminfo } from "../Types/Item";
import moto from '../assets/T300.png'
import { createJSONStorage, persist } from "zustand/middleware";

// Definição da estrutura (Type) do nosso estado global (Store)
type CartStore = {
  cart: Iteminfo[];                    // O estado: um array contendo os itens do carrinho
  sporting: Iteminfo[];   // Um array para itens de sporting (não utilizado no momento)
  scooters: Iteminfo[];    // Um array para itens de scooters (não utilizado no momento)
  trail: Iteminfo[];       // Um array para itens de trail (não utilizado no momento)
  addToCart: (item: Iteminfo) => void; // Função para adicionar um item ao carrinho
  deleteFromCart: (itemId: number) => void; // Função para remover um item do carrinho pelo ID
};

// Criação da Store do Zustand utilizando o tipo 'CartStore'
export const useCartStore = create<CartStore>()(
  // 1. Estado Inicial: O carrinho começa como um array vazio
  persist((set) =>({
    cart: [],
    sporting: [
      {_id:1, title: 'T-250', model: 'T-sporting', price: 13000, image: moto},
      {_id:2, title: 'T-300X', model: 'T-sporting', price: 13000, image: moto},
      {_id:3, title: 'T-400', model: 'T-sporting', price: 13000, image: moto},
      {_id:4, title: 'T-500', model: 'T-sporting', price: 13000, image: moto},
      {_id:5, title: 'T-600', model: 'T-sporting', price: 13000, image: moto},
      {_id:6, title: 'T-720', model: 'T-sporting', price: 13000, image: moto},
      {_id:7, title: 'T-1000', model: 'T-sporting', price: 13000, image: moto},
      {_id:8, title: 'T-1120', model: 'T-sporting', price: 13000, image: moto}
    ],
    scooters: [
      {_id:9, title: 'TJ-120', model: 'TJ-scooter', price: 13000, image:  moto},
      {_id:10, title: 'TJ-160', model: 'TJ-scooter', price: 13000, image: moto},
      {_id:11, title: 'TJ-250', model: 'TJ-scooter', price: 13000, image: moto},
      {_id:12, title: 'TJ-300', model: 'TJ-scooter', price: 13000, image: moto},
      {_id:13, title: 'TJ-400', model: 'TJ-scooter', price: 13000, image: moto},
      {_id:14, title: 'TJ-670', model: 'TJ-scooter', price: 1300, image:  moto},
      {_id:15, title: 'TJ-900', model: 'TJ-scooter', price: 13000, image: moto},
      {_id:16, title: 'TJ-1110', model: 'TJ-scooter', price: 13000, image: moto}
    ],
    trail: [
      {_id:17, title: 'JIN-320', model: 'T-trail', price: 13000, image: moto},
      {_id:18, title: 'JIN-420', model: 'T-trail', price: 13000, image: moto},
      {_id:19, title: 'JIN-550', model: 'T-trail', price: 13000, image: moto},
      {_id:20, title: 'JIN-550', model: 'T-trail', price: 13000, image: moto},
      {_id:21, title: 'JIN-600', model: 'T-trail', price: 13000, image: moto},
      {_id:22, title: 'JIN-800', model: 'T-trail', price: 13000, image: moto},
    ],
    // 2. Ação 'addToCart': Adiciona um novo item ao carrinho
    // Usamos o 'set' para atualizar o estado. O 'state' representa o estado atual.
    // [...state.cart, item] usa o operador spread para copiar os itens existentes e adicionar o novo no final.
    addToCart: (item: Iteminfo) => 
      set((state) => ({ 
        cart: [...state.cart, item] 
      })),

    // 3. Ação 'deleteFromCart': Remove um item baseado no ID recebido
    // O método '.filter()' percorre o carrinho e mantém apenas os itens cujo ID seja DIFERENTE do itemId enviado.
    // Nota: Verifique se no seu tipo 'Iteminfo' o ID realmente se chama '_id' e é um 'number'.
    deleteFromCart: (itemId: number) => 
      set((state) => ({ 
        cart: state.cart.filter((item) => item._id !== itemId) 
      })),
    }),
    {
      name: 'cart-storage', // Nome do armazenamento local (localStorage)
      storage: createJSONStorage(() => localStorage), // Define que será usado o localStorage
      partialize: (state) => ({ cart: state.cart }) // Apenas o estado do carrinho será persistido
    }));