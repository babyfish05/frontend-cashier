export const metadata = {
    title: "category",
}
import axios from 'axios'
import Link from 'next/link'

type Category = {
    id:number;
    name: string;
}
const getCategory = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/category');
    return res.data.data
}
const CategoryList = async () => {
    const category: Category[] = await getCategory();
    return (
        <div>
            CategoryList
            <ul>
                {category.map((category, index ) => (
                    <Link href={'/category/${category.id}'} key={category.id}>
                        <li>{category.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList