export default function Home(){
  return(
    <main>
      {/*Hero*/}
        <section className = "relative min-h-screen flex items-center justify-center">
          {/*Background photo */}
          <img
          src = "/hero.jpg"
          alt =""
          className = "absolute inset-0 w-full h-full object-cover"
          />

          {/*Dark Overlay */}
          <div className = "absolute inset-0 bg-black/50"/> 

          {/*Content */}
          <div className ="relative z-10 text-center px-6 max-w-3xl">
            <h1 className = "text-6xl md:text-8xl font-extrabold uppercase text-white leading-none tracking-tight">
              uhh. I'll think of one
            </h1>
            <p className= "text-white mt-6 max-w-md mx-auto">
              Quality work. Serving the Greater Los Angeles area since 2004
            </p>
            
            <a href="#contact"
            className = "inline-block mt-10 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-sm tracking-wide uppercase px-10 py-4 rounded-full transition-colors"
            >
              Get Started
            </a>
            </div>
        </section>
    </main>
  )
}