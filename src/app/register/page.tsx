"use client";

import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

export default function Register() {
    const router = useRouter();
    const pb = new PocketBase("http://127.0.0.1:8090");
    async function handleSubmit(e: any) {
        e.preventDefault();
        const data = {
            username: e.target.userName.value,
            email: e.target.email.value,
            emailVisibility: true,
            password: e.target.password.value,
            passwordConfirm: e.target.passwordConfirm.value,
            name: e.target.name.value,
        };

        try {
            const record = await pb
                .collection("users")
                .create(data)
                .then(() => router.push("/login"));
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <form
                className="flex flex-col items-center justify-center gap-5 pt-20"
                onSubmit={handleSubmit}
            >
                <p className="text-[2rem]">Register</p>
                <div className="flex flex-col">
                    <label className="mb-4" htmlFor="userName">
                        Username
                    </label>
                    <input
                        className="h-8 rounded text-black px-3 py-2"
                        type="text"
                        name="userName"
                        id="userName"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-4" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="h-8 rounded text-black px-3 py-2"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-4" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="h-8 rounded text-black px-3 py-2"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-4" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="h-8 rounded text-black px-3 py-2"
                        type="text"
                        name="password"
                        id="password"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-4" htmlFor="passwordConfirm">
                        Confirm Password
                    </label>
                    <input
                        className="h-8 rounded text-black px-3 py-2"
                        type="text"
                        name="passwordConfirm"
                        id="passwordConfirm"
                    />
                </div>
                <button className="text-black bg-[#9daaf2] px-4 py-2 rounded" type="submit">
                    Register
                </button>
            </form>
        </>
    );
}
