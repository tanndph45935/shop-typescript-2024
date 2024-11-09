import AdminHeader from './AdminHeader'
import AdminSideBar from './AdminSideBar'
import '../../public/css/style.css'

export const AdminLayout = ({children}:any) => {
    return(
        <div className='adminLayout'>
            <AdminSideBar />
            <section id="content">
                <AdminHeader />
                {children}
            </section>
        </div>
    )
}
