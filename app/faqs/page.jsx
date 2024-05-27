import React from 'react';

const FaqsPage = () => {
    return (
        <div className="font-sans p-4 md:p-10 lg:p-20">
            <div className="bg-[url('https://ik.imagekit.io/os33grffu/_48ea1320-a24c-444a-a235-cfdf235ed05d%20(1).jfif?updatedAt=1716662413684')] bg-center bg-cover p-10 md:p-20">
                <div className="bg-orange-500 p-2 w-1">
                    <h1 className="text-2xl md:text-4xl font-semibold text-center text-white">FAQS</h1>
                </div>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
                <h2 className="mt-0 text-orange-500 text-lg md:text-xl">What services do you offer?</h2>
                <p className="text-black">We offer a range of geological consultancy services, including geological mapping, core logging, drill management, database and project management, as well as training programs tailored to meet industry standards.</p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
                <h2 className="mt-0 text-orange-500 text-lg md:text-xl">How experienced is your team?</h2>
                <p className="text-black">Our team comprises highly skilled and well-trained geologists with extensive experience in the field. We ensure that all team members are equipped with modern industry standards and methodologies to deliver top-quality results.</p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
                <h2 className="mt-0 text-orange-500 text-lg md:text-xl">Can you handle projects of various scales?</h2>
                <p className="text-black">Yes, we have the capability to manage projects of all sizes and complexities. Whether it’s small-scale geological mapping or large-scale database management, we have the expertise and resources to meet your project requirements.</p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
                <h2 className="mt-0 text-orange-500 text-lg md:text-xl">How do your services add value to projects?</h2>
                <p className="text-black">Our services provide invaluable insights into deposit types, enabling better understanding and decision-making. By leveraging our expertise, clients can enhance project efficiency, reduce risks, and increase the likelihood of project success.</p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
                <h2 className="mt-0 text-orange-500 text-lg md:text-xl">Do you offer training programs?</h2>
                <p className="text-black">Yes, we offer training programs designed to equip individuals with the necessary skills and knowledge in geological mapping, core logging, and other relevant areas. Our training programs are tailored to meet the specific needs of participants and are conducted by industry experts.</p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
                <h2 className="mt-0 text-orange-500 text-lg md:text-xl">Can you assist with project management?</h2>
                <p className="text-black">Absolutely, our team is experienced in all aspects of project management, from geological mapping and prospecting to drill management and data interpretation. We ensure seamless execution and successful outcomes for all projects we undertake.</p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
                <h1 className="mt-0 text-orange-500 text-lg md:text-xl">Are you currently hiring?</h1>
                <p className="text-black">While we are not actively hiring at the moment, we encourage individuals with a strong passion for outdoor fieldwork or computer-based tasks to keep an eye on our career opportunities page for future openings. Exciting projects may offer opportunities to join our team and contribute to our dynamic work environment.</p>
            </div>
        </div>
    );
};

export default FaqsPage;
