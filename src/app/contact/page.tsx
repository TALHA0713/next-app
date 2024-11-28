// src/app/contact/page.tsx
export default function ContactPage() {
    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
            <p className="text-gray-700 text-lg leading-7">
                Have questions or want to work with us? Get in touch!
            </p>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        rows={4}
                        placeholder="Your Message"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
