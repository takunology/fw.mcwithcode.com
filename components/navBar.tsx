export default function NavBar(){
    return (
        <nav className="bg-gray-800 border-gray-200 px-1 sm:px-5 py-3 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="" className="flex items-center">
                    <img src="./images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Fireworks Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-200">Fireworks Project</span>
                </a>
            </div>
        </nav>
    );
};