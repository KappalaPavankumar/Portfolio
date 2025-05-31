export default function Contact(){
    return(
        <section id="contact" className="my-40 flex-col align-center justify-center mx-20 max-auto p-3">
            <h2 className="p-10 bg-emerald-200 flex justify-center font-bold text-6xl text-red-500 text-center">My Contact</h2>
            <div className="p-10 bg-emerald-200 flex justify-center">
                
                <a rel="noreferrer" target="_blank" className="p-10 text-center hover:underline" href="https://in.linkedin.com/">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="Linkedin" className="w-20 h-20"/>
                
                <span className="font-bold">linkedin</span>
                </a>
                <a rel="noreferrer" target="_blank" className="p-10 text-center hover:underline" href="https://github.com/KappalaPavankumar/">
                <img src="https://img.icons8.com/m_outlined/512/github.png" alt="Git" className="w-20 h-20"/>
                
                <span className="font-bold">github</span>
                </a>
            </div>

        </section>
    );
}