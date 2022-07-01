import { ReactNode } from "react"
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Layout = ({children}: Props) => {
    return (
        <div className="bg-gray-900 text-gray-100">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

type Props = {
    children?: ReactNode;
}

export default Layout;