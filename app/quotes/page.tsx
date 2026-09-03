import QuoteForm from "@/components/QuoteForm";

export default function Quote(){
    return (
        <main className="min-h-screen bg-olive-50 pt-32 px-6">
            <h1 className="text-4xl font-bold text-black uppercase">
                Book an Estimate
                <QuoteForm/>
            </h1>

        </main>
    );
}