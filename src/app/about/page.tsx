// src/app/about/page.tsx
export default function AboutPage() {
    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
            <p className="text-gray-700 text-lg leading-7">
                We are a team of passionate developers dedicated to building beautiful and functional web applications.
            </p>
            <p className="text-gray-700 text-lg leading-7">
                Our goal is to create seamless user experiences and deliver exceptional results for our clients.
            </p>
            <img
                src="https://via.placeholder.com/400x300"
                alt="Team working"
                className="rounded-lg shadow-lg mx-auto"
            />
        </div>
    );
}
