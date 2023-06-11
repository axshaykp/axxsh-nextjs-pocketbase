"use client";

export default function Home() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: any = null;
    function animate(event: any) {
        console.log("mouseover");
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter: any, index: number) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 10;
        }, 30);
    }
    return (
        <>
            <section>
                <div>
                    <p className="text-white font-bold text-5xl md:text-8xl mt-40 mr-auto leading-none">
                        hi,
                        <br />i am{" "}
                        <span
                            className="text-[#9daaf2]"
                            data-value="akshay"
                            onMouseOver={(e) => animate(e)}
                        >
                            akshay
                        </span>
                        <span className="text-[#ff6a3d]">.</span>
                    </p>
                    <p className="my-3 mx-0 text-base md:text-[2rem]">Web developer.</p>
                </div>
            </section>
            <section className="mt-40">
                <div className="max-w-3xl">
                    <h2 className="text-[2rem]">About</h2>
                    <p>
                        I am a self-taught Web Developer based in Kerala,India. I am an expert in
                        eg:
                        <a
                            className="no-underline text-[#f4db7d] hover:text-[#9daaf2] mx-1"
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            HTML,
                        </a>
                        <a
                            className="no-underline text-[#f4db7d] hover:text-[#9daaf2] me-1"
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CSS,
                        </a>
                        <a
                            className="no-underline text-[#f4db7d] hover:text-[#9daaf2] me-1"
                            href="https://sass-lang.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sass,
                        </a>
                        <a
                            className="no-underline text-[#f4db7d] hover:text-[#9daaf2] me-1"
                            href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            JavaScript,
                        </a>
                        <a
                            className="no-underline text-[#f4db7d] hover:text-[#9daaf2] me-1"
                            href="https://astro.build/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Astro,
                        </a>
                        <a
                            className="no-underline text-[#f4db7d] hover:text-[#9daaf2] me-1"
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Next JS
                        </a>
                        and
                        <a
                            className="no-underline text-[#f4db7d] hover:text-[#9daaf2] mx-1"
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React JS,
                        </a>
                        etc. But not limited to these technologies. Always trying out new
                        technologies out there.
                    </p>
                    <p>
                        Currently, I am working as Frontend Web Developer at
                        <a
                            className="no-underline text-[#f4db7d] hover:text-[#9daaf2] ms-1"
                            href="https://mojgenie.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mojgenie IT Solutions Pvt. Ltd.
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}
