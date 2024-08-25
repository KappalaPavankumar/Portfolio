export default function Projects(){
    return(
        <section id="projects" className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-red-500 font-bold text-center">My Projects</h2>
            <div className="p-10 bg-red-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://react.dev/" className="w-full h-full">
                        <img src="https://cdn.tisglobalsummit.com/app/uploads/sites/7/2024/02/ia-tourism.jpg"></img>
                    </a><br></br>
                    <a href="https://react.dev/" className="w-full h-full">
                        <img src="https://miro.medium.com/v2/resize:fit:886/1*aMfa51Uc1p8AEIq3yfPvKA.png"></img>
                    </a>
                </div>
            
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h3 className="font-bold text-3xl text-center hover:underline">Project1</h3>
                    <p className="pb-7">"Tourism Innovation and Technology Harnessing the digital Experience based on Visitor experience" 
                    using Java, MYSQL, Spring Boot Framework ,JDBC connection</p><br></br>
                    <h3 className="font-bold text-3xl text-center hover:underline">Project2</h3>
                    <p className="pb-7">"Automate Sentimental Analysis on text based on Restaurant reviews" 
                    using Deep Learning with Python Language</p>
                   
                </div>
            </div>
        </section>
    );
}