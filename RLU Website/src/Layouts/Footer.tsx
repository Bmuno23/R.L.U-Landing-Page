export function Footer(){
    return <div className="bg-gray-800 text-white p-5">
        <div className="flex justify-around flex-wrap">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold">About</h1>
                <a href="/about"><p className="text-sm">About us</p></a>
                <a href="/contact"><p className="text-sm">Contact us</p></a>
                <a href="/about"><p className="text-sm">Privacy Policy</p></a>
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl font-bold">Social</h1>
                <a href="/about"><p className="text-sm">Facebook</p></a>
                <a href="/about"><p className="text-sm">Instagram</p></a>
                <a href="/about"><p className="text-sm">Twitter</p></a>
            </div>
            <div className="flex flex-col pl-4">
                <h1 className="text-xl font-bold ">Contact</h1>
                <p className="text-sm">Email: richmondlatinounited@gmail.com</p>
                <p className="text-sm">Phone: (804)-365-8356</p>
                </div>
                </div>
                </div>
}