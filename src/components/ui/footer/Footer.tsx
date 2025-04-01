import Link from "next/link";

export const Footer = () => {
    return (
        <div className="flex w-full justify-center text-xs mb-10">
            <Link href='/' className="flex justify-center py-4 text-center">
                <footer className="py-1 text-center text-lg font-bold" >
                    <p>&copy; {new Date().getFullYear()} Training Corp S.A.S</p>
                </footer>
            </Link>
        </div>
    );
}