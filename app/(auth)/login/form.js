"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

export function Form() {
    const [phoneNum, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter()

    useEffect(() => {
        const phoneInput = document.getElementById("phone");
        phoneInput.focus();
        phoneInput.select();
    }, []);

    const send = async () => {
        console.log(phoneNum);
        setIsSent(true);
    };

    const verify = async () => {
        if (code === "123") {
            router.push("/");
        } else {
            setError("کد وارد شده اشتباه است");
        }
    };

    const handleInvalid = (e) => {
        e.target.setCustomValidity("فرمت وارد شده صحیح نیست");
    };

    const handleInput = (e) => {
        e.target.setCustomValidity('');
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setError("");
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSent) {
            verify();
        } else {
            if (/^09\d{9}$/.test(phoneNum)) {
                send();
            } else {
                setError("شماره تلفن معتبر نیست");
            }
        }
    };

    return (
        <form className="flex flex-col gap-4 py-10 px-5 mx-auto text-center justify-center w-full dark:text-slate-50" onSubmit={handleSubmit}>
            <div>
                {isSent ? (
                    <>
                        <div className="label">
                            <span className="label-text-alt dark:text-slate-50">کد ارسالی</span>
                        </div>
                        <input
                            id="code"
                            type="text"
                            placeholder="کد ارسال شده را وارد کنید"
                            title="کد ارسال شده را وارد کنید"
                            className="input input-bordered input-success w-full max-w-xs bg-green-100 text-slate-700 placeholder:dark:text-slate-700"
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            onChange={handleCodeChange}
                            value={code}
                            required
                        />
                    </>
                ) : (
                    <>
                        <div className="label">
                            <span className="label-text-alt dark:text-slate-50">شماره تلفن</span>
                        </div>
                        <input
                            id="phone"
                            type="text"
                            // pattern="09\d{9}"
                            placeholder="شماره تلفن خود را وارد کنید"
                            title="شماره تلفن خود را وارد کنید"
                            className="input input-bordered input-success w-full max-w-xs bg-green-100 text-slate-700 placeholder:dark:text-slate-700"
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            onChange={handlePhoneChange}
                            value={phoneNum}
                            required
                        />
                    </>
                )}
            </div>
            {error && (
                <div className="flex items-center gap-2 mr-2">
                    <label className="cursor-pointer label">
                        <span className="label-text text-error">{error}</span>
                    </label>
                </div>
            )}
            {!isSent && (
                <div className="flex items-center gap-2 mr-2">
                    <label className="cursor-pointer label">
                        <input type="checkbox"
                            className="checkbox checkbox-success ml-2 dark:checked:bg-green-500 dark:checked:opacity-100" />
                        <span className="label-text dark:text-slate-50">مرا به خاطر بسپار</span>
                    </label>
                </div>
            )}
            <div className="flex w-full items-center justify-center flex-col gap-2">
                <div className="w-2/3 my-3 ">
                    <button className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800
                        shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm
                        px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-1000"
                        type="submit">
                        {isSent ? "تایید" : "ورود"}
                    </button>
                </div>
                {!isSent && (
                    <>
                        <div class="inline-flex items-center justify-center w-full">
                            <hr class="w-2/3 h-px my-5 bg-slate-400 border-0 dark:bg-gray-600" />
                            <span class="absolute px-2 text-sm text-slate-400 -translate-x-1/2
                        bg-slate-50 dark:bg-slate-900 left-1/2
                        dark:text-gray-600">یا ورود از طریق</span>
                        </div>
                        <div className="w-2/3 my-3 ">
                            <button className="w-full text-white bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700
                                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800
                                shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm
                                px-5 py-2.5 text-center me-2 mb-2 
                                transition-transform hover:ease-in duration-[5000] 
                                flex justify-center items-center">
                                <Link href="/">
                                    <Image
                                        src="/SsoTitle.png"
                                        alt="Parke Man Logo"
                                        className="invert scale-125"
                                        width={100}
                                        height={0}
                                        priority
                                    />
                                </Link>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </form>
    );
}
