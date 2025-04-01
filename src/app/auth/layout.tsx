// import "../../app/globals.css";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex justify-center">
            <div className="w-full">
                { children }
            </div>
        </main>
    );
} 