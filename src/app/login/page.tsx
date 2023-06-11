"use client";

import PocketBase from "pocketbase";

export default function Login() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    async function handleSubmit(e: any) {
        e.preventDefault();
        // pb.authStore.clear();
        // console.log(pb.authStore.token);
        const authData = await pb
            .collection("users")
            .authWithPassword(e.target.userName.value, e.target.password.value);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        // localStorage.setItem("AUTH_TOKEN", pb.authStore.token);
    }
    return (
        <>
            <form
                className="flex flex-col items-center justify-center gap-5 pt-20"
                onSubmit={handleSubmit}
            >
                <p className="text-[2rem]">Login</p>
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
                <button className="text-black bg-[#9daaf2] px-4 py-2 rounded" type="submit">
                    Login
                </button>
            </form>
        </>
    );
}
