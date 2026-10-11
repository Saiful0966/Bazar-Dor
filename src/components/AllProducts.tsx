
import Card from "./Card";
import { Product } from "@/types/product";

export default function AllProducts({ products }: { products: Product[] }) {

    return(

        <section className="space-y-6">

            <div>

                <h2 className="text-3xl font-bold">
                    সব পণ্য
                </h2>

                <p className="text-gray-500 mt-2">
                    আজকের বাজারদরের সম্পূর্ণ তালিকা
                </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

                {
                    products.map(product=>
                        <Card
                            key={product.id}
                            product={product}
                        />
                    )
                }

            </div>

        </section>

    )
}