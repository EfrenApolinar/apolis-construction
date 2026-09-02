"use client";

import { stat } from "fs";
import { useState } from "react";

export default function QuoteForm(){
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        setStatus("sending");
        console.log({name,email, phone, message });
        setStatus("success");

    }

    if (status === "success"){
        return(
            <p className="text-lg font-semibold">
                Thanks - we got your request and will reach out soon.
            </p>
        );
    }
/* this is the submit form  */
    return (
        <form onSubmit = {handleSubmit} className = "space-y-5 max-w-xl">
            <input
            type = "text"
            placeholder ="Name"
            value={name}
            onChange = {(e) => setName(e.target.value)}
            required
            className = "w-full border border-zinc-300 rounded px-4 py-3"
            />

            <input
            type="email"
            placeholder ="Email"
            value ={email}
            onChange ={(e) => setEmail(e.target.value)}
            className="w-full border border-zinc-300 rounded px-4 py-3"
            />

            <input
            type="tel"
            placeholder = "Phone"
            value = {phone}
            onChange ={(e) => setPhone(e.target.value)}
            className="w-full border border-zinc-300 rounded px-4 py-3"
            required
            />

            <textarea
            placeholder = "Tell us about your project"
            value = {message}
            onChange = {(e)=> setMessage(e.target.value)}
            required
            rows ={5}
            className="w-full border border-zinc-300 rounded px-4 py-3"
            />

            <button
            type = "submit"
            disabled ={status ==="sending"}
            className="bg-zinc-900 hover;bg-zinc-700 text-white font-semibold uppercase text-sm px-8 py-3 rounded-full transition-colors disabled:opacity-50"
            >
                {status === "sending"? "Sending..." : "Request Quote"}
            </button>
        </form>
    );
}