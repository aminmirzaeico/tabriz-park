import Image from "next/image";
import { Form } from "./form";

export const Content = () => {
    return (
        <>
            <div className="flex flex-col text-center align-center justify-center w-full mt-2">
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
    );
}
