import { Sidebar } from "@/components/ui/sidebar/Sidebar";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen px-5">
            <TopMenu />

            <Sidebar />

            <div className="px-0 sm:px-5">
                { children }
            </div>
        </main>
    );
} 