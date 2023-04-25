//Importare pocketbase e la sua istanza con connessione
import {Product} from "../../model/product";
import {useEffect, useState} from "react";
import {pb} from "../../pocketbase";
import ProductCard from "./components/ProductCard";
import ServerError from "../shared/components/core/ServerError";
import Loading from "../shared/components/core/Loading";
import {useCartPanel} from "../../services/cart/useCartPanel";


export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>([])
    //Spinner per stato del pending
    const [pending, setPending] = useState<boolean>(true)
    //Gestione dell'errore...
    const [error, setError] = useState<boolean>(false)
    const openCartPanel = useCartPanel(state => state.openOverlay)
    useEffect(() => {
        loadData()
    }, [])

    function loadData() {
        //mi collego alla collection e prendo la lista che ritorna una promise...then...
        pb.collection('products').getList<Product>()
            .then(res => {
                setError(false) //Errore gestione
                setPending(true)
                setProducts(res.items)
            }).catch(() => {
            setError(true)

        }).finally(() => {
            setPending(false)
        })
    }

// Aggiungi al carrello
    function addToCard(product: Partial<Product>) {
        openCartPanel()
    }

    return (
        <div>
            <h1 className='title'>Shop</h1>
            {pending && <Loading/>}
            {error && <ServerError message='Ops! Qualcosa è andato storto'/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {products && products.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={addToCard}/>
                    )
                })}
            </div>

        </div>
    )
}