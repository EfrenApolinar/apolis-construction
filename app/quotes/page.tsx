import QuoteForm from "@/components/QuoteForm";

export default function Quote(){
    return (
        <main className="min-h-screen bg-zinc-500 pt-32 px-6">
            <h1 className="text-4xl font-bold text-white uppercase">
                Book an Estimate
                <QuoteForm/>
            </h1>

        </main>
    );
}