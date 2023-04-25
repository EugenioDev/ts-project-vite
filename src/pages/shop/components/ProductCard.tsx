import {Product} from "../../../model/product";

interface ProductCardProps {
    //Tutte le proprietà del prodotto potrebbero non esserci null || undefined
    //Si utilizza il Partial per inicare che alcune proprietà potrebbero essere opzionali.
    product:Partial<Product>,
    onAddToCart: (product:Partial<Product>) => void;
}
export default  function ProductCard(props:ProductCardProps){
    const {product,onAddToCart} = props
    return (
        <div key={product.id} className='bg-white text-black p-2 m-2 rounded-md'>
            {product.img && <img src={product.img} alt={product.name} className="h-64 w-full object-cover"/>}
            <div className='flex justify-between font-bold mt-2'>
                <h1>{product.name}</h1>
                <p>€{product.cost}</p>
            </div>
            <div>
                <p className='font-light text-sm'>{product.description}</p>
            </div>
            <button
                className="hover:font-bold bg-sky-600 w-full transition hover:bg-sky-900 hover:text-white p-2 mt-2"
                onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
        </div>
    )
}