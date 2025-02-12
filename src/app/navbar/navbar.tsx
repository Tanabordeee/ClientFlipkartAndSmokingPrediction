import Link from "next/link";
export default function Navbar(){
    return(
        <>
        <nav>
            <div className="gap-5 flex bg-[#1a2633] text-white justify-center">
                <Link className="p-5"href={"/"}>Machine Learning</Link>
                <Link className="p-5" href={"/neuralnetwork"}>Neural Network</Link>
                <Link className="p-5" href={"/demomachine"}>Demo Machine Learning</Link>
                <Link className="p-5" href={"/demoneural"}>Demo Neural Network</Link>
            </div>
        </nav>      
        </>  
    );
}