export default function Contact(){
    return(
        <section id="contact" className="my-40 align-center max-w-5xl max-auto p-3">
            <h2 className="p-10 bg-emerald-200 flex justify-center font-bold text-6xl text-red-500 text-center">My Contact</h2>
            <div className="p-10 bg-emerald-200 flex justify-center">
                <a rel="noreferrer" target="_blank" className="p-10 text-center hover:underline " href="https://instagram.com">
                <img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=
                jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" className="w-20 h-20" />
                Instagram: 
                <span className="font-bold"> pavankumar9100</span><br></br>
                </a>
                <a rel="noreferrer" target="_blank" className="p-10 text-center hover:underline" href="https://in.linkedin.com/">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" className="w-20 h-20"/>
                Linkedin:
                <span className="font-bold">www.linkedin.com/in/pavankumar-kappala-2300ab257</span>
                </a>
            </div>

        </section>
    );
}