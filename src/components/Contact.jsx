import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        college: '',
        students: '',
        quotation: '',
        message: ''
    });

    const coursesList = [
        "Power BI", "Advanced Excel", "Data Analytics Using Python", "Digital Marketing",
        "DBMS & SQL", "Predictive Analytics Using R", "Business Analytics", "Tableau",
        "R & Python Basics", "Business Intelligence & Big Data Basics", "Soft Skills Training",
        "Basic Excel Analytics", "Cyber Security", "Data Science", "Artificial Intelligence",
        "Machine Learning", "Computer Science", "Investment Banking", "Stock Market Trading",
        "Forensic Accounting", "HTML & CSS Masterclass"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSubmit = () => {
        const { name, phone, course, college, students, quotation, message } = formData;

        let waText = `Hello Gnanamaya Edutech, I have a new inquiry:\n\n`;
        if (name) waText += `*Name:* ${name}\n`;
        if (phone) waText += `*Phone:* ${phone}\n`;
        if (college) waText += `*College/Company:* ${college}\n`;
        if (course) waText += `*Interested Course:* ${course}\n`;
        if (students) waText += `*Number of Students:* ${students}\n`;
        if (quotation) waText += `*Need Quotation:* ${quotation}\n`;
        if (message) waText += `\n*Message:*\n${message}`;

        const encodedMessage = encodeURIComponent(waText);
        window.open(`https://wa.me/918722282131?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="contact" className="py-24 max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Get In Touch</span>
                    <h2 className="text-3xl font-bold mt-2">Contact Our Experts</h2>

                    <div className="mt-12 space-y-8">
                        <div className="flex gap-4">
                            <MapPin className="text-brand-green w-5 h-5 shrink-0" />
                            <div>
                                <div className="font-bold text-sm">Headquarters</div>
                                <p className="text-gray-500 text-sm">No 22, Vasanthappa Garden, HAL 2nd Stage, Doopanahalli, Indiranagar, Bangalore – 560008</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Phone className="text-brand-green w-5 h-5 shrink-0" />
                            <div>
                                <div className="font-bold text-sm">Phone</div>
                                <p className="text-gray-500 text-sm">+91 8722282131</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Mail className="text-brand-green w-5 h-5 shrink-0" />
                            <div>
                                <div className="font-bold text-sm">Email</div>
                                <p className="text-gray-500 text-sm">gnanamyaedutech@gmail.com</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full mt-1 p-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand-green outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase">Phone Number</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="+91 00000 00000"
                                    className="w-full mt-1 p-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand-green outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase">College / Company Name <span className="text-gray-300">(Optional)</span></label>
                            <input
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                type="text"
                                placeholder="E.g., Bangalore Institute of Technology"
                                className="w-full mt-1 p-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand-green outline-none bg-white"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase">Number of Students</label>
                                <input
                                    name="students"
                                    value={formData.students}
                                    onChange={handleChange}
                                    type="number"
                                    placeholder="e.g., 50"
                                    className="w-full mt-1 p-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand-green outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase">Need Quotation?</label>
                                <select
                                    name="quotation"
                                    value={formData.quotation}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand-green outline-none bg-white">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes, Please Provide</option>
                                    <option value="No">No, Just Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase">Interested Course</label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand-green outline-none bg-white">
                                <option value="">Select a course</option>
                                {coursesList.map((c, i) => (
                                    <option key={i} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                placeholder="How can we help you?"
                                className="w-full mt-1 p-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand-green outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            onClick={handleWhatsAppSubmit}
                            className="w-full mt-2 bg-brand-green text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
                        >
                            <Send className="w-4 h-4" /> Send Inquiry Via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
