import { ProductGrid } from "@/components/student/student-grid/ProductGrid"
import { Title } from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function ShopPage() {

  return (
    <>
      <Title 
        title="Academia"
        subtitle='Unidades de inglés'
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
    </>
  );
}
