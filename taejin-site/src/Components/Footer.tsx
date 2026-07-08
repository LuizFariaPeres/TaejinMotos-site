import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import emailjs from '@emailjs/browser'


export default function Footer(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!name || !email) return
        console.log('enviado!')
        setEmail('');
        setName('');
        sendGmail();
    }

    const sendGmail = () =>{
        const templateParams ={
            from_name: name,
            messanger: 'Muito Obrigado por testar',
            email: email
        }
        emailjs.send("service_r05t1od", "template_au7nt0s", templateParams, "xBXVdlKvGfB8YZC4i")
        .then((res)=>{
            console.log('Email enviado', res.status, res.text)
        }, (error)=>{
            console.error('Não foi possivel enviar o email', error)
        })
    }

    return(
        <div className="flex flex-col justify-center items-center-safe bg-[#454545] w-screen h-[400px] gap-5">
            <div className="flex w-full h-25 justify-evenly items-center">
                <div className="flex items-center p-3 gap-2 w-[20rem] h-[10em]">
                    <CgMail className="size-40"/>
                    <h1 className="text-[20px] text-wrap">Receba todas as nossas ofertas em primeira mão</h1>
                </div>
                <form onSubmit={handleSubmit} className="flex items-center gap-6">
                    <input value={name} onChange={(e) => setName(e.target.value)}
                        className="w-[20rem] h-8 p-1 text-center text-[#ffff] rounded-3xl bg-[#918e8e] placeholder:text-[#000]" type="text" placeholder="Digite seu Nome"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-[20rem] h-8 p-1 text-center text-[#ffff] rounded-3xl bg-[#918e8e] placeholder:text-[#000]" type="email" placeholder="Digite seu Gmail"/>
                    <button className="w-40 h-8  rounded-2xl text-[#ffff] bg-[#700505]" type="submit">Enviar</button>
                </form>
            </div>
            <div className="flex w-full p-8 justify-evenly">
                <div className="fle flex-col">
                    <h3 className="text-[20px] text-[#181818] underline">Home Map</h3>
                    <ul className="flex flex-col">
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/'>Home</Link>
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/produts'>Produtos</Link>
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/sale'>Sale</Link>
                    </ul>
                </div>
                <div className="fle flex-col">
                    <h3 className="text-[20px] text-[#181818] underline">Home Map</h3>
                    <ul className="flex flex-col">
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/'>Home</Link>
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/produts'>Produtos</Link>
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/sale'>Sale</Link>
                    </ul>
                </div>
                <div className="fle flex-col">
                    <h3 className="text-[20px] text-[#181818] underline">Home Map</h3>
                    <ul className="flex flex-col">
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/'>Home</Link>
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/produts'>Produtos</Link>
                        <Link className="text-[#918e8e] hover:text-[#6b1d22]" to='/sale'>Sale</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}