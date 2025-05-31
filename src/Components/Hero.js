export default function Hero(){
    return(
        <section 
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row
        justify-center items-center align-center mt-40
        mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
                <div>
                    <h4 className="text-center text-3xl font-bold">
                        Hi and welcome to 
                    </h4>
                    <h4 className="text-center text-3xl font-bold">My Portfolio Website</h4>
                </div>
                <p className="text-center text-2xl">I am your <span className="text-[#8b5cf6] font-bold">Web Developer</span></p>
            </div>
            <div className="flex-1">
                <img src="Professional.jpeg" 
                alt="Pavan"
                className=" bg-cover rounded-full h--10 w--10"/>

            </div>  


        </section>
    );
}