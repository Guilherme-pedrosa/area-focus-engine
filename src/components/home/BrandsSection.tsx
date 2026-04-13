import { CheckCircle } from "lucide-react";
import logosImage from "@/assets/logos-clientes-marcas.jpeg";

const clientes = [
  "Sodexo", "JBS", "Sapore", "GRSA", "SESI", "Cargill", 
  "Ambev", "Coco Bambu", "Sesc", "Cristal Alimentos", "Pizza Hut"
];

const marcas = [
  { name: "Rational", authorized: true },
  { name: "Becker", authorized: true },
  { name: "Cozil" },
  { name: "G.Paniz" },
  { name: "Hobart" },
  { name: "Irinox" },
  { name: "Macom" },
  { name: "Middleby" },
  { name: "Prática Klimaquip" },
  { name: "Progás" },
  { name: "Ramalhos" },
  { name: "Robot Coupe" },
  { name: "Rodriaço" },
  { name: "Skymsen" },
  { name: "Tramontina" },
  { name: "Unox" },
  { name: "Vulcan" },
];

export default function BrandsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wedo">
        {/* Imagem com as logos */}
        <div className="flex justify-center">
          <img
            src={logosImage}
            alt="Principais Clientes e Marcas - Sodexo, JBS, Sapore, GRSA, SESI, Cargill, Ambev, Coco Bambu, Rational, Becker, Hobart, Tramontina, Unox, Cozil, Irinox, Robot Coupe, Middleby, Vulcan, G.Paniz, Ramalhos, Progás, Skymsen, Macom, Rodriaço e mais"
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
