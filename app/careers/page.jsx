import React from 'react';

const CareersPage = () => {
    return (
        <div className="p-4 md:p-10 lg:p-20">
            <div className="bg-[url('https://ik.imagekit.io/os33grffu/_5c5f3a4e-8d85-4c1f-b394-9f6d52ca06d6%20(1).jfif?updatedAt=1716662567146')] bg-center bg-cover p-10 md:p-20">
                <div className="bg-orange-500 p-2 w-1">
                    <h1 className="text-2xl md:text-4xl font-semibold text-center text-white">CAREERS</h1>
                </div>
            </div>

            <div className="font-sans p-4 md:p-10">
                <header className="text-center mb-6 md:mb-10">
                    <h1 className="text-xl md:text-2xl font-bold">Welcome to Our Careers Page!</h1>
                    <p className="text-base md:text-lg">Explore exciting opportunities to join our team and make a difference.</p>
                </header>
                <p className="text-base md:text-lg mb-6">
                    We are not actively hiring; however, there are exciting projects on the horizon that you could potentially be a part of. If you have a strong enthusiasm for outdoor fieldwork or enjoy immersing yourself in computer-based tasks, there may be opportunities for you to join our team and experience premium-quality projects firsthand. Keep an eye on our career opportunities page for future openings and chances to contribute to our dynamic team.
                </p>
                <section className="bg-gray-100 p-4 md:p-6 rounded-lg">
                    <h2 className="text-lg md:text-xl font-semibold mb-4">Why Join Our Team?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Exciting projects and opportunities for growth</li>
                        <li>Collaborative and supportive work environment</li>
                        <li>Competitive salaries and benefits</li>
                        <li>Flexible work arrangements</li>
                        <li>Opportunity to make a positive impact</li>
                    </ul>
                </section>
                <div className="h-48"></div>
            </div>
        </div>
    );
}

export default CareersPage;
