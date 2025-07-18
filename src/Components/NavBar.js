export default function NavBar(){
    return(
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl backdrop-blur-lg fixed top-0 z-10">
            <div className="container flex flex-col lg:flex-row gap-5 justify-between w-full
                            items-center max-w-5xl mx-auto">
                <div className="flex gap-2 flex-row-reverse">
                    <h3 className="text-3xl text-red-500 font-bold">My Portfolio</h3>
                    <img src="Professional.jpeg" alt="Pavan" className="w-10 rounded-full border border-[#fecaca] p-[1px]"/>
                </div>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    <li><a className="text-sm sm:text-base px-2 lg:px-5
                                    py-2 transaction roundeed hover:text-white
                                    hover:bg-red-600"
                            href="#about">About</a>
                    </li>
                    <li><a className="text-sm sm:text-base px-2 lg:px-5
                                    py-2 transaction roundeed hover:text-white
                                    hover:bg-red-600"
                            href="#skills">Skills</a>
                    </li>
                    <li><a className="text-sm sm:text-base px-2 lg:px-5
                                    py-2 transaction roundeed hover:text-white
                                    hover:bg-red-600"
                            href="#projects">Projects</a>
                    </li>
                    <li><a className="text-sm sm:text-base px-2 lg:px-5
                                    py-2 transaction roundeed hover:text-white
                                    hover:bg-red-600"
                            href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}