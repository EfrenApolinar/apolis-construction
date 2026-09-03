import Link from "next/link";

const navLinks = [
    {label: "Company", href:"/about"},
    {label: "Services", href:"/services"},
    {label: "Gallery", href:"/gallery"},
    {label: "Contact", href:"/contact"},
    
];

export default function Header(){
    return (
        <header className =" fixed top-0 left-0 w-full z-50 bg-zinc-950/60 backdrop-blur-md">
            <div className = "max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                <Link href = "/" className ="flex items-center gap-3 text-white font-extrabold uppercase tracking-wide">
                <img src="/Apolis-logo.png" alt ="Apolis Construction logo" className="h-9 w-auto"/>
                Apolis Construction
                </Link>
                <nav className= "hidden md:flex items-center gap-8">
                    {navLinks.map((link)=>(
                        <Link 
                        key ={link.href}
                        href ={link.href}
                        className = "text-sm text-white hover:text-black transition-colors">
                            {link.label}
                        </Link>
                    ))}
                    <Link
                    href="/quotes"
                    className="bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-semibold uppercase px-6 py-2.5 rounded-full transition-colors">
                        Request a Quote
                    </Link>
                </nav>
            </div>
        </header>
    );   
}