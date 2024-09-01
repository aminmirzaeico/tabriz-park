
"use client";

import { Accordion } from "flowbite-react";
import Link from "next/link";

export function FAQ() {
  return (
    <Accordion dir="rtl" collapseAll className="w-full m-5">
      <Accordion.Panel>
        <Accordion.Title>تبریز پارک چیست؟</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            تبریز پارک یک سامانه آنلاین برای رزرو جای پارک در پارکینگ های شهر تبریز می باشد.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>چگونه رزرو کنیم؟</Accordion.Title>
        <Accordion.Content>
          <p className="text-gray-500 dark:text-gray-400">
            ابتدا باید
            <Link href="/login" className="text-cyan-600 hover:underline dark:text-cyan-500 mx-1">
              وارد
            </Link>
            شوید.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            سپس از بخش پارکینگ ها، پارکینگ مورد نظر خود را انتخاب کرده و ساعت ورود و ساعت خروج خود را انتخاب کنید. سپس روی رزرو کلیک کرده و مبلغ موردنظر را پرداخت کنید.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            تمام! جای پارک شما رزرو شده است و میتوانید در ساعت مشخص شده در آنجا پارک کنید.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>آیا میتوانیم جای پارک را به صورت ماهانه رزرو کنیم؟</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            بله! در بخش رزرو جای پارک میتوانید گزینه رزرو ماهانه را انتخاب کنید.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
