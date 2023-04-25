import {NavLink, Outlet} from 'react-router-dom'

export default function CMSPage(){
    const isActive = (obj) => {
        return obj.isActive ? 'text-sky-400' : 'text-white'
    }
    return (
        <div className='space-x-2'>
            <h1 className='title'>CMS</h1>
            <NavLink className={isActive} to="/cms/products">Products</NavLink>
            <NavLink className={isActive} to="/cms/orders">Orders</NavLink>
            <Outlet/>
        </div>
    )
}