import { Button } from "@/components/ui/button";
import { nounsFont } from "@/lib/fonts";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-5xl flex h-full flex-col items-center px-4 text-center">
      <h2
        className={`${nounsFont.className} pt-32 text-5xl tracking-tight md:text-6xl`}
      >
        404 | No encontrada
      </h2>
      <p className="mt-4 text-2xl">
        ¡Parece que la página que buscas no existe!
      </p>
      <Link href="/">
        <Button
          className={`${nounsFont.className} mt-6 text-lg md:mt-8 md:text-xl lg:mt-8 xl:mt-12`}
        >
          Ir a Inicio
        </Button>
      </Link>
    </div>
  );
}
