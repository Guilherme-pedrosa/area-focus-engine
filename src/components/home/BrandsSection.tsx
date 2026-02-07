import { CheckCircle } from "lucide-react";
import logosImage from "@/assets/logos-clientes-marcas.jpeg";

const clientes = [
  "Sodexo", "JBS", "Sapore", "GRSA", "SESI", "Cargill", 
  "Ambev", "Coco Bambu", "Sesc", "Cristal Alimentos", "Pizza Hut"
];

const marcas = [
  { name: "Rational", authorized: true },
  { name: "ITW" },
  { name: "Hobart" },
  { name: "Prática Klimaquip" },
  { name: "Tramontina" },
  { name: "Unox" },
  { name: "Cozil" },
  { name: "Macom" },
  { name: "Skymsen" },
  { name: "Robot Coupe" },
  { name: "Middleby" },
  { name: "Irinox" },
];

export default function BrandsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wedo">
        {/* Imagem com as logos */}
        <div className="flex justify-center">
          <img
            src={logosImage}
            alt="Principais Clientes e Marcas que Trabalhamos - Sodexo, JBS, Sapore, GRSA, SESI, Cargill, Ambev, Coco Bambu, Rational, Hobart, Tramontina, Unox e mais"
            className="w-full max-w-4xl rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Badge Rational */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive text-white rounded-lg font-bold text-sm">
            <CheckCircle className="w-4 h-4" />
            Parceiro Autorizado Rational
          </div>
        </div>
      </div>
    </section>
  );
}
