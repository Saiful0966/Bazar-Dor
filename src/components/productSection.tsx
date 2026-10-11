
import Card from "./Card";
import { Product } from "@/types/product";



export default function ProductSection({ products }: { products: Product[] }) {

    const increased = products
      .filter((p)=>p.change.dir==="up")
      .sort((a,b)=>b.change.pct-a.change.pct)
      .slice(0,6);

    const decreased = products
      .filter((p)=>p.change.dir==="down")
      .sort((a,b)=>b.change.pct-a.change.pct)
      .slice(0,6);

    return(
        <>

        {/* আজ দাম বেড়েছে */}

        <section className="space-y-6">

            <h2 className="text-2xl font-bold text-red-600">
                ▲ আজ দাম বেড়েছে
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    increased.map(product=>
                        <Card
                        key={product.id}
                        product={product}
                        />
                    )
                }

            </div>

        </section>

        {/* আজ দাম কমেছে */}

        <section className="space-y-6 mt-12">

            <h2 className="text-2xl font-bold text-green-600">
                ▼ আজ দাম কমেছে
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    decreased.map(product =>
                        <Card
                        key={product.id}
                        product={product}
                        />
                    )
                }

            </div>

        </section>

        </>
    )
}