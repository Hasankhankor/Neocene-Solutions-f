import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="bg-zinc-100">
            <div className="container items-center text-center border-b-2 lg:justify-between lg:flex py-14">
                <div className="py-4">

                    <h1 className="text-2xl font-medium lg:text-6xl" style={{fontSize: '22px'}}>Reach out to us and start your exploration journey today!</h1>

                </div>
                <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-yellow-500 hover:bg-yellow-400 hover:ring-2 hover:ring-yellow-500 ring-offset-2" href="">CONTACTUS <TbArrowUpRight className="text-xl" /> </a>

            </div>
        </div>
    )
}