import Link from "next/link";

const navLinks = [
    {label: "About Us", href:"/about"},
    {label: "Services", href:"/services"},
    {label: "Gallery", href:"/gallery"},
    {label: "Contact", href:"/contact"}
];

export default function Header(){
    return (
        <header className =" fixed top-0 left-0 w-full z-50">
            <div className = "max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                <Link href = "/" className ="text-white font-extrabold uppercase tracking-wide">
                Apolis Construction
                </Link>
                <nav className= "hidden md:flex items-center gap-8">
                    {navLinks.map((link)=>(
                        <Link 
                        key ={link.href}
                        href ={link.href}
                        className = "text-sm text-white hover:text-zinc-300 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                    <Link
                    href="/contact"
                    className="bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-semibold uppercase px-6 py-2.5 rounded-full transition-colors">
                        Request a Quote
                    </Link>
                </nav>
            </div>
        </header>
    );   
}