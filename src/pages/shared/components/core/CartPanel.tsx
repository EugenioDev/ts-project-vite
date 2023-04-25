import {useNavigate} from 'react-router-dom'
import {useCartPanel} from "../../../../services/cart/useCartPanel";
export default function CartPanel(){
    const isCloseCartPanel = useCartPanel(state => state.closeOverlay)

    const navigate = useNavigate()
    function goToCart() {
      navigate('cart') // è una funziona che accetta un parametro per reindirizzarti a una specifica pagina
    }

    function closeFromIcon() {
        isCloseCartPanel()
    }



    //Pannello di controllo del carrello pop-up
    return (
        <div className='fixed right-4 top-24 bg-white p-3 rounded-sm text-black w-80'>
            <div className='mb-2 text-right text-red-500'>
                <i className="fa fa-times  cursor-pointer" aria-hidden="true" onClick={closeFromIcon}></i>
            </div>
           <ul className='flex flex-col gap-2'>
               <li className='border-b border-gray-500 flex items-center justify-between pb-3'>
                   <div className='flex justify-between'>
                       <h3 className='font-bold'>Prodotto</h3>
                   </div>
                   <div className='flex items-center justify-end space-x-2'>
                       <p className='text-xs'>(2 x € 10)</p>
                       <p className='text-md font-bold'> € 20 </p>
                   </div>
               </li>
           </ul>
            {/*Totale Carrello*/}
            <div className='flex justify-between mt-2'>
                <h3 className='font-light'>Totale Ordini</h3>
                <p className='text-md font-bold'> € 20 </p>
            </div>
            {/*Root Cart al click ti riporta alla pagina carrello*/}
            <div className=' cursor-pointer hover:font-bold bg-sky-600 w-full transition hover:bg-sky-900 hover:text-white p-2 mt-2 text-center'
            onClick={goToCart}
            >
                Go to Cart
            </div>
        </div>
    )
}