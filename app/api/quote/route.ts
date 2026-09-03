import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request){
    const{name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message ) {
        return NextResponse.json({error: "Missing required fields"} , {status: 400});
    }
    
    try {
        await resend.emails.send({
            from: "Quote From <onboarding@resend.dev>",
            to: "info@apolisconstruction.com",
            replyTo :email,
            subject:` New Quote Request from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`,
        });
        return NextResponse.json({ ok:true });
    }
    catch{
        return NextResponse.json({error: "Failted to Send" }, {status:500});
    }
}
