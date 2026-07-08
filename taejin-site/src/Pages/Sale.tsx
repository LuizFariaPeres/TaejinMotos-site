import { useState } from "react";
import Header from "../Components/Header"
import { IMaskInput } from "react-imask";
import { useCartStore } from "../Store/useCartStore";
import { cpf as cpfValidator } from "cpf-cnpj-validator";





export default function Sale(){
    const cart = useCartStore((state) => state.cart)

    const [cpf, setCpf] = useState('');
    const deleteFromCart = useCartStore((state) => state.deleteFromCart);

    const handlevalidor = (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const eValido = cpfValidator.isValid(cpf)

        if(!eValido){
            alert('CPF não é valido')
            return
        }

    }


    return(
        <div className="min-w-screen h-full bg-[#858483]">
            <Header/>
            <div className="flex flex-col w-full justify-center items-center gap-5 p-4">
                {cart.map((products, index) => (
                    <div key={index} className="flex w-full justify-center items-center gap-4 border-2">
                        <div className="flex flex-col w-[40%] justify-center items-center gap-2 p-2">
                            <h3 className="text-[30px] font-bold text-[#ec172e]">Escolha sua Taejin</h3>
                            <img src={products.image} alt={products.title}/>
                            <button onClick={() => deleteFromCart(products._id!)} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                                Remover
                            </button>
                        </div>
                        <div className="flex flex-col w-[60%] justify-center items-center gap-2 p-2">
                            <form onSubmit={handlevalidor}>
                                <label>Nome Completo</label>
                                <input type="text" placeholder="Digite seu nome completo" className="border border-gray-300 rounded-md p-2 w-full mb-4"/>
                                <label>E-mail</label>
                                <input type="email" placeholder="Digite seu E-mail" className="border border-gray-300 rounded-md p-2 w-full mb-4"/>
                                <label>CPF</label>
                                <IMaskInput
                                    id='cpf'
                                    className="border border-gray-300 rounded-md p-2 w-full mb-4"
                                    mask="000.000.000-00"
                                    value={cpf}
                                    placeholder="000.000.000-00"
                                    unmask={true}
                                    onAccept={(value:string) => setCpf(value)}
                                    inputMode='numeric'
                                />
                                <button type="submit" className="p-4 bg-[#ec172e] text-white rounded-md hover:bg-[#d41528]">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}