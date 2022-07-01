import Link from "next/link"

export default function Footer(){
    return (
        <footer className="p-4 bg-gray-800 rounded-lg sm:px-6 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between lg:px-20">
                <a href="https://www.mcwithcode.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src="/mcwithcode_logo.png" className="mr-2 h-8" alt="mcwithcode Logo" />
                    <span className="self-center text-2x1 font-semibold whitespace-nowrap text-gray-300">Minecraft with Code Project</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0">
                    <li>
                        <a href="https://www.mcwithcode.com/Home/Privacy" className="mr-4 hover:underline md:mr-6">プライバシーポリシー</a>
                    </li>
                    <li>
                        <a href="https://www.mcwithcode.com/Contact" className="hover:underline">お問い合わせ</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 text-center">© 2022 <a href="https://www.mcwithcode.com/" className="hover:underline">Minecraft with Code Project / Takunology</a>
            </span>
        </footer>
    )
}