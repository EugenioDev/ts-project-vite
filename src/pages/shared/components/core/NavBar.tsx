import {NavLink} from "react-router-dom";
import logo from '../../../../assets/react.svg'
import CartPanel from "./CartPanel";
import {useCartPanel} from "../../../../services/cart/useCartPanel";

const isActive = (obj:{isActive: boolean}) => {
    return obj.isActive ? 'text-sky-400' : 'text-white'
}
export default function NavBar() {

    const isCartPanelOpen = useCartPanel(state => state.open)
    const toggleCartPanel = useCartPanel(state => state.toggle)

    return (
        <div className=' fixed top-0 left-0 right-0 shadow-xl z-10'>
            <div className="space-x-2 bg-slate-900 p-2 flex h-20 justify-between items-center">
                {/*Logo*/}
                <div className='flex items-center space-x-2'>
                    <img src={logo} alt="logo react" className=''/>
                    <NavLink to="shop" className={isActive}>Shop</NavLink>
                </div>

                {/*Cart button badge*/}
                <div>
                    <button className='bg-gray-200 rounded-md p-2 text-black font-bold' onClick={toggleCartPanel}>Cart: 0</button>
                </div>
                {/*Cart Panel pop-up*/}
                {isCartPanelOpen && <CartPanel/>}

                {/*Login logout e CMS buttons*/}
                <div className='fixed bottom-2 right-2 space-x-2 p-2'>
                    <NavLink className='bg-gray-200 rounded-md p-2 text-black font-bold' to="login">Login</NavLink>
                    <NavLink className='bg-gray-200 rounded-md p-2 text-black font-bold' to="cms">CMS</NavLink>
                    <NavLink className='bg-gray-200 rounded-md p-2 text-black font-bold' to="logout">Logout</NavLink>

                </div>
            </div>

        </div>
    )
}