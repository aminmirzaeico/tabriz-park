'use client'

import { Form } from "./form";
import Image from "next/image";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { useEffect, useState } from "react";

export default function Login() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    }, []);
    let skeleton = (
        <div className="flex w-full flex-col gap-4 text-center align-center items-center justify-center mt-6 h-96 p-12">
            <div className="skeleton h-20 w-52 shrink-0 rounded-md"></div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="skeleton h-3 w-1/2 rounded-md"></div>
                    <div className="skeleton h-3 w-52 rounded-md"></div>
                </div>
            </div>
            <div className="skeleton h-8 w-52 rounded-md"></div>
        </div>
    )

    let content = (
        <>
            <div className="flex flex-col text-center align-center justify-center w-full mt-6">
                <div className="flex text-center align-center justify-center w-full">
                    <Image
                        src="/logo.png"
                        alt="Parke Man Logo"
                        className="dark:invert"
                        width={250}
                        height={24}
                        priority
                    />
                </div>
                <h1 className="font-extrabold p-2 text-xl">خوش آمدید</h1>
                <p>وارد حساب کاربری خود شوید</p>
            </div>
            <Form />
        </>
    )

    return (
        <>
            <div className=" ease-in duration-500 h-screen min-w-screen p-0 m-0 bg-green-400 dark:text-slate-50 overflow-hidden">
                {!loading && <ThemeSwitcher />}
                <div className="flex flex-col items-center justify-center max-w-96 mx-auto mt-24 p-4 sm:p-0">
                    <div className="border-success border rounded-3xl w-full mx-auto bg-slate-50 dark:bg-slate-900 box-border shadow-2xl">
                        {loading ? skeleton : content}
                    </div>
                </div>
            </div>
        </>
    );
}
