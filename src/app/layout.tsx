import Footer from "./components/nav/Footer";
import Header from "./components/nav/Header";
import "./styles/global.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["300", "400", "700", "900"],
    subsets: ["latin"],
    style: ["normal", "italic"],
    display: "swap",
});

export const metadata = {
    title: "akshay.",
    description: "Akshay's Personal Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} md:m-auto max-w-screen-lg text-white bg-[#1a2238] min-h-screen m-4`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
