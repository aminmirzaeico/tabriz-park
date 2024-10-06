import { Providers } from '../providers';
import { Vazirmatn } from "next/font/google";
import "@/app/globals.css";
import axios from 'axios';

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
    title: "تبریز پارک | Tabriz Park",
    description: "سامانه آنلاین رزرو پارکینگ در تبریز",
  };

axios.defaults.baseURL = process.env.APP_BASE_URL

export default function AuthLayout({ children }) {
    return (
        <html lang="fa" dir="rtl" className='p-0 m-0 bg-green-400'>
            <body className={vazirmatn.className}>
                <Providers>
                    <main>
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}