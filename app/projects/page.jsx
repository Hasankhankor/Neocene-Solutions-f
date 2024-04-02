import Image from "next/image";



export default function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Neocene Solutions ',
            description: ' Neocene Solutions is dedicated to delivering an extensive array of services tailored to meet your specific needs. ',
            image: 'https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg',
            link: '',
        },
        {
            id: 2,
            name: 'Neocene Solutions',
            description: ' Neocene Solutions is dedicated to delivering an extensive array of services tailored to meet your specific needs. ',
            image: 'https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg',
            link: '',
        },
        {
            id: 3,
            name: 'Neocene Solutions',
            description: ' Neocene Solutions is dedicated to delivering an extensive array of services tailored to meet your specific needs.',
            image: 'https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg',
        },
    ];
    return (
        <div className="">
            <div className="bg-[url('https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg')] bg-center bg-cover ">
            <div>
  <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white text-center">Events</h1>
</div>


            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">

                {projects.map((project) => (
                    <div key={project.id} className="relative overflow-hidden rounded-xl group">
                        <div>
                            <Image src={project.image} width={480} height={380} alt="" className="w-full" />
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold">{project.name}</h1>
                            <p className="py-4 ">{project.description}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}