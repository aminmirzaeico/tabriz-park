'use client'

import ThemeSwitcher from "../../components/ThemeSwitcher";
import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";
import { Content } from "./content";

export default function Login() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    }, []);

    return (
        <>
            <div className=" ease-in duration-500 h-screen min-w-screen p-0 m-0 bg-green-400 dark:text-slate-50 ">
                {!loading && <ThemeSwitcher />}
                <div className="flex flex-col items-center justify-center max-w-96 mx-auto mt-12 p-4 sm:p-0">
                    <div className="border-success border rounded-3xl w-full mx-auto bg-slate-50 dark:bg-slate-900 box-border shadow-2xl">
                        {loading ? <Skeleton /> : <Content />}
                    </div>
                </div>
            </div>
        </>
    );
}
