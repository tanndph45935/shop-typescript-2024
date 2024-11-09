import Footer from "./footer"
import Header from "./header"

export const Layouts = ({children}:any) => {
    return(
        <div>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
