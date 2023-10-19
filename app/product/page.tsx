export const metadata = {
    title: "products",
}
import axios from 'axios'
import Link from 'next/link'

type products = {
    id:number;
    category_id: number;
    name: string;
    price: number;
    stok: string;
    tag: string;
    images: string;
}
const getproducts = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/products');
    return res.data.data
}
const productsList = async () => {
    const products: products[] = await getproducts();
    return (
        <div>
            productsList
            <ul>
                {products.map((product, index ) => (
                    <Link href={'/products/${products.id}'} key={product.id}>
                        <li>{product.id}</li> 
                        <li>{product.category_id}</li> 
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                        <li>{product.stok}</li> 
                        <li>{product.tag}</li> 
                        <li>{product.images}</li> 
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default productsList