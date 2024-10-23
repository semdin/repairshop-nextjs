import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-slate-700 bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">

        <div className="flex flex-col gap-6 p-12 rounded-xl bg-gray-900 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Mehmet's Computer <br/> Repair Shop
          </h1>
          <address>
            555 Gateway Lane <br />
            Istanbul, IST 34400
          </address>
          <p>
            <Link href="tel:5428925988" className="hover:underline">
              542-892-5988
            </Link>
          </p>
        </div>

      </main>


    </div>
  );
}
