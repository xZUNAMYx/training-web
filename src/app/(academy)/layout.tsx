// import { Sidebar } from "@/components/ui/sidebar/Sidebar";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

export default function AcademyLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="">
            <TopMenu />

            {/* <Sidebar /> */}

            <div className="px-0 sm:px-5">
                { children }
            </div>
        </main>
    );
} 