export default function Header() {
    return (
        <header className="flex md:flex-row flex-col justify-between items-center text-center mt-4">
            <h2 className="text-[2rem] font-bold m-0">
                a<span className="accent">.</span>
            </h2>
            <ul className="flex md:gap-4 gap-2 md:justify-end justify-center items-center list-none m-0 p-0">
                {/* <li className="md:my-[10%] my-auto mb-[2%] text-end">
                    <a
                        className="no-underline text-white hover:text-[#9daaf2] bg-gradient-to-r from-[#ff6a3d] to-[#ff6a3d] bg-no-repeat bg-bottom hover:bg-top bg-[length:100%_2px] transition-all"
                        href="/#"
                    >
                        Home
                    </a>
                </li>
                <li className="md:my-[10%] my-auto mb-[2%] text-end">
                    <a
                        className="no-underline text-white hover:text-[#9daaf2] bg-gradient-to-r from-[#ff6a3d] to-[#ff6a3d] bg-no-repeat bg-bottom hover:bg-top bg-[length:100%_2px] transition-all"
                        href="/blog/"
                    >
                        Blog
                    </a>
                </li> */}
            </ul>
        </header>
    );
}
