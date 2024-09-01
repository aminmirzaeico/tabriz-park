import { Providers } from '../providers';
import { Vazirmatn } from "next/font/google";
import "@/app/globals.css";
import { MainFooter } from '../components/myFooter';

const vazirmatn = Vazirmatn({ subsets: ["latin", "arabic"] });

export const metadata = {
  title: "تبریز پارک | Tabriz Park",
  description: "سامانه آنلاین رزرو پارکینگ در تبریز",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>
        <Providers>
          <main>{children}</main>
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
