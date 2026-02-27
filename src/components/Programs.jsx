import React, { useState } from 'react';
import { Clock, BarChart } from 'lucide-react';
import CourseModal from './CourseModal';

const Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [filter, setFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(8);

    const programs = [
        {
            title: 'Power BI',
            description: 'Create dashboards and business intelligence reports using Microsoft Power BI.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Data modeling', 'Power Query', 'Visualizations', 'Dashboard publishing', 'Analytics AI features'] }
            ]
        },
        {
            title: 'Advanced Excel',
            description: 'Advanced Excel formulas, dashboards, automation, and business analysis.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Advanced formulas', 'Pivot tables', 'VBA intro', 'Data modeling', 'Financial dashboards'] }
            ]
        },
        {
            title: 'Data Analytics Using Python',
            description: 'Hands-on data analytics using Python, visualization, statistics, and machine learning basics.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Python basics', 'Pandas & NumPy', 'Data visualization', 'Statistical analysis', 'Machine learning intro', 'Capstone project'] }
            ]
        },
        {
            title: 'Digital Marketing',
            description: 'Learn SEO, SEM, social media marketing, analytics, and campaign execution.',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['SEO', 'SEM', 'Social media marketing', 'Email marketing', 'Analytics & reporting', 'Marketing project'] }
            ]
        },
        {
            title: 'DBMS & SQL',
            description: 'Database management, SQL queries, normalization, and real-world database design.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['SQL queries', 'Database design', 'Joins & optimization', 'NoSQL basics', 'E-commerce database project'] }
            ]
        },
        {
            title: 'Predictive Analytics Using R',
            description: 'Predictive modeling and statistical analysis using R programming.',
            image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Predictive models', 'Regression analysis', 'Time series forecasting', 'Classification models'] }
            ]
        },
        {
            title: 'Business Analytics',
            description: 'Business decision-making using analytics, predictive models, and reporting.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Business analytics foundations', 'Predictive analytics', 'Data interpretation', 'Visualization', 'Forecasting project'] }
            ]
        },
        {
            title: 'Tableau',
            description: 'Interactive dashboards and visual analytics using Tableau.',
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Tableau basics', 'Data blending', 'Dashboard design', 'Advanced analytics', 'Customer segmentation project'] }
            ]
        },
        {
            title: 'R & Python Basics',
            description: 'Programming fundamentals covering both R and Python.',
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Programming basics', 'Data structures', 'Visualization', 'Mini projects'] }
            ]
        },
        {
            title: 'Business Intelligence & Big Data Basics',
            description: 'Introduction to big data concepts, warehousing, and analytics reporting.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Data warehouse', 'Big data ecosystem', 'Visualization tools', 'Reporting systems'] }
            ]
        },
        {
            title: 'Soft Skills Training',
            description: 'Communication, leadership, interview, and workplace skills.',
            image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'All Levels',
            modules: [
                { title: 'Curriculum Breakdown', hours: 30, topics: ['Communication skills', 'Leadership', 'Interview preparation', 'Professional etiquette'] }
            ]
        },
        {
            title: 'Basic Excel Analytics',
            description: 'Excel fundamentals, formulas, charts, and business data handling.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
            duration: '20 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Curriculum Breakdown', hours: 20, topics: ['Excel basics', 'Formatting', 'Charts', 'Data tools', 'Budget tracker project'] }
            ]
        },
        {
            title: 'Cyber Security',
            description: 'Learn to protect networks, systems, and programs from digital attacks.',
            image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Module 1: Cybersecurity Fundamentals', hours: 5, topics: ['Information Security Concepts', 'Threat Landscape', 'Cyber Hygiene'] },
                { title: 'Module 2: Network Security', hours: 6, topics: ['Firewalls & IDS/IPS', 'VPNs & Secure Access', 'Wireless Security'] },
                { title: 'Module 3: Ethical Hacking & Penetration Testing', hours: 8, topics: ['Vulnerability Assessment', 'Exploitation Techniques', 'Web App Security'] },
                { title: 'Module 4: Cryptography', hours: 5, topics: ['Symmetric & Asymmetric Encryption', 'Hashing Algorithms', 'PKI'] },
                { title: 'Module 5: Incident Response & Forensics', hours: 6, topics: ['Incident Handling Basics', 'Digital Forensics Fundamentals', 'Disaster Recovery'] }
            ]
        },
        {
            title: 'Data Science',
            description: 'Extract meaningful insights from data using statistics and machine learning.',
            image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Module 1: Intro to Data Science & Python', hours: 4, topics: ['Python Refresher', 'Jupyter Notebooks', 'Data Science lifecycle'] },
                { title: 'Module 2: Data Wrangling & EDA', hours: 6, topics: ['Pandas & NumPy', 'Data Cleaning', 'Exploratory Data Analysis'] },
                { title: 'Module 3: Statistical Foundations', hours: 5, topics: ['Probability basics', 'Hypothesis Testing', 'A/B Testing'] },
                { title: 'Module 4: Machine Learning Fundamentals', hours: 8, topics: ['Supervised vs Unsupervised', 'Linear & Logistic Regression', 'Decision Trees'] },
                { title: 'Module 5: Data Visualization & Communication', hours: 7, topics: ['Matplotlib & Seaborn', 'Tableau intro', 'Storytelling with Data'] }
            ]
        },
        {
            title: 'Artificial Intelligence',
            description: 'Explore the foundations of AI, deep learning, and intelligent systems.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Module 1: Foundations of AI', hours: 4, topics: ['History of AI', 'Types of AI', 'Search Algorithms'] },
                { title: 'Module 2: Knowledge Representation & Reasoning', hours: 5, topics: ['Propositional Logic', 'First-Order Logic', 'Expert Systems'] },
                { title: 'Module 3: Machine Learning & Deep Learning Intro', hours: 8, topics: ['Neural Networks', 'Gradient Descent', 'Keras/TensorFlow Basics'] },
                { title: 'Module 4: Natural Language Processing', hours: 7, topics: ['Text Processing', 'Sentiment Analysis', 'Large Language Models overview'] },
                { title: 'Module 5: Computer Vision & AI Ethics', hours: 6, topics: ['Image Clarification', 'Object Detection', 'Bias and Fairness in AI'] }
            ]
        },
        {
            title: 'Machine Learning',
            description: 'Build predictive models and algorithms with supervised and unsupervised learning.',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Module 1: Machine Learning Concepts', hours: 4, topics: ['Bias-Variance Tradeoff', 'Overfitting/Underfitting', 'Cross-validation'] },
                { title: 'Module 2: Supervised Learning (Regression)', hours: 6, topics: ['Linear Regression', 'Polynomial Regression', 'Regularization (Ridge/Lasso)'] },
                { title: 'Module 3: Supervised Learning (Classification)', hours: 7, topics: ['Logistic Regression', 'SVM', 'Random Forests'] },
                { title: 'Module 4: Unsupervised Learning', hours: 6, topics: ['K-Means Clustering', 'Hierarchical Clustering', 'PCA for Dimensionality Reduction'] },
                { title: 'Module 5: Model Evaluation & Deployment', hours: 7, topics: ['Confusion Matrix', 'ROC/AUC curves', 'Deploying models via API'] }
            ]
        },
        {
            title: 'Computer Science',
            description: 'Core principles of computation, algorithms, data structures, and computer architecture.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Module 1: Introduction to Computation', hours: 4, topics: ['Binary & Hexadecimal', 'Boolean Logic', 'Basic components of a computer'] },
                { title: 'Module 2: Programming Fundamentals', hours: 8, topics: ['Variables & Data Types', 'Control Flow', 'Functions & Modules'] },
                { title: 'Module 3: Data Structures Basics', hours: 7, topics: ['Arrays & Strings', 'Linked Lists', 'Stacks & Queues'] },
                { title: 'Module 4: Algorithms Basics', hours: 6, topics: ['Sorting algorithms', 'Searching algorithms', 'Big O Notation'] },
                { title: 'Module 5: Software Engineering Principles', hours: 5, topics: ['Version Control (Git)', 'Debugging', 'Agile Methodologies'] }
            ]
        },
        {
            title: 'Investment Banking',
            description: 'Learn financial modeling, valuation, corporate finance, and M&A strategies.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Module 1: Financial Accounting Refresher', hours: 5, topics: ['3 Financial Statements', 'Linkages between statements', 'Key Financial Ratios'] },
                { title: 'Module 2: Financial Modeling Basics', hours: 8, topics: ['Excel Best Practices', 'Building a 3-Statement Model', 'Scenario Analysis'] },
                { title: 'Module 3: Corporate Valuation Methods', hours: 7, topics: ['Comparable Company Analysis', 'Precedent Transactions', 'DCF Modeling'] },
                { title: 'Module 4: Mergers & Acquisitions (M&A)', hours: 6, topics: ['M&A Process Overview', 'Accretion/Dilution Analysis', 'Pitchbook creation'] },
                { title: 'Module 5: LBO & Private Equity Basics', hours: 4, topics: ['LBO Mechanics', 'Debt Structuring', 'Returns Analysis (IRR)'] }
            ]
        },
        {
            title: 'Stock Market Trading',
            description: 'Understand stock market fundamentals, technical analysis, and trading strategies.',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Module 1: Market Fundamentals', hours: 5, topics: ['How the Stock Market Works', 'Types of asset classes', 'Market Indices'] },
                { title: 'Module 2: Fundamental Analysis', hours: 6, topics: ['Reading Earnings Reports', 'Economic Indicators', 'Evaluating company health'] },
                { title: 'Module 3: Technical Analysis', hours: 8, topics: ['Reading Candlestick Charts', 'Support & Resistance', 'Moving Averages, RSI, MACD'] },
                { title: 'Module 4: Trading Strategies & Planning', hours: 6, topics: ['Day Trading vs Swing Trading', 'Creating a trading plan', 'Backtesting'] },
                { title: 'Module 5: Risk Management & Psychology', hours: 5, topics: ['Position Sizing', 'Stop Losses & Take Profits', 'Managing Trading Emotions'] }
            ]
        },
        {
            title: 'Forensic Accounting',
            description: 'Investigate financial fraud, analyze evidence, and understand legal accounting frameworks.',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Module 1: Introduction to Financial Fraud', hours: 5, topics: ['The Fraud Triangle', 'Types of Financial Fraud', 'Regulatory Environment'] },
                { title: 'Module 2: Fraud Examination Techniques', hours: 7, topics: ['Interviewing suspects', 'Document Analysis', 'Data Mining for Fraud'] },
                { title: 'Module 3: Investigating Asset Misappropriation', hours: 6, topics: ['Cash Skimming', 'Billing Schemes', 'Payroll Fraud'] },
                { title: 'Module 4: Financial Statement Fraud', hours: 7, topics: ['Revenue Recognition schemes', 'Concealed Liabilities', 'Improper Disclosures'] },
                { title: 'Module 5: Litigation Support & Expert Witnessing', hours: 5, topics: ['Report Writing', 'Preparing Evidence', 'Testifying in Court'] }
            ]
        },
        {
            title: 'HTML & CSS Masterclass',
            description: 'Build responsive and modern websites from scratch using HTML5 and CSS3.',
            image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80',
            duration: '20 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Module 1: HTML5 Foundations', hours: 4, topics: ['Semantic HTML', 'Forms & Inputs', 'Multimedia Integration'] },
                { title: 'Module 2: CSS3 Styling Basics', hours: 5, topics: ['Selectors & Specificity', 'Box Model', 'Typography & Colors'] },
                { title: 'Module 3: Advanced Layouts (Flexbox & Grid)', hours: 5, topics: ['Flexbox basics and applications', 'CSS Grid systems', 'Building common layouts'] },
                { title: 'Module 4: Responsive Web Design', hours: 4, topics: ['Media Queries', 'Mobile-First approach', 'Responsive typography & images'] },
                { title: 'Module 5: CSS Animations & Polish', hours: 2, topics: ['Transitions', 'Keyframe Animations', 'CSS Variables'] }
            ]
        }
    ];

    const filteredPrograms = filter === 'All' ? programs : programs.filter(p => p.level === filter);

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 8);
    };

    const handleShowLess = () => {
        setVisibleCount(8);
        document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    };

    // Reset visible count when filter changes
    const handleFilterChange = (level) => {
        setFilter(level);
        setVisibleCount(8);
    };

    return (
        <>
            <section id="courses" className="py-20 bg-gray-50">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-10">
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Our Programs</span>
                        <h2 className="text-3xl font-bold mt-2">Master Industry Skills</h2>
                    </div>

                    {/* Running Course List / Marquee */}
                    <div className="relative flex overflow-x-hidden mb-12 sm:mb-16 bg-white py-4 border-y border-gray-100 shadow-sm w-screen -ml-4 sm:-ml-8 lg:-ml-[calc((100vw-100%)/2)] shadow-inner">
                        <div className="animate-marquee whitespace-nowrap flex items-center w-max hover:[animation-play-state:paused]">
                            {[...programs, ...programs].map((program, index) => (
                                <span
                                    key={index}
                                    onClick={() => setSelectedProgram(program)}
                                    className="mx-6 text-sm sm:text-base font-bold text-gray-700 hover:text-brand-green cursor-pointer transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-brand-green opacity-70"></span>
                                    {program.title}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'].map(level => (
                            <button
                                key={level}
                                onClick={() => handleFilterChange(level)}
                                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${filter === level ? 'bg-brand-green text-white shadow-md shadow-brand-green/30 scale-105' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:scale-105'}`}
                            >
                                {level === 'All' ? 'All Programs' : level}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all">
                        {filteredPrograms.slice(0, visibleCount).map((program, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col group">
                                <div className="relative overflow-hidden shrink-0">
                                    <img src={program.image} className="h-44 w-full object-cover group-hover:scale-105 transition duration-500" alt={program.title} />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="font-bold text-lg leading-snug">{program.title}</h3>
                                    <p className="text-gray-500 text-sm mt-3 flex-1">{program.description}</p>
                                    <div className="mt-5 flex items-center justify-between text-xs text-gray-400 font-bold border-t border-gray-100 pt-5">
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-green" /> {program.duration}</span>
                                        <span className="flex items-center gap-1.5"><BarChart className="w-4 h-4 text-brand-green" /> {program.level}</span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProgram(program)}
                                        className="w-full mt-6 py-3 border border-green-100 bg-green-50 text-brand-green font-bold text-sm rounded-xl hover:bg-brand-green hover:text-white transition shadow-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Buttons */}
                    {filteredPrograms.length > 8 && (
                        <div className="mt-12 mb-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                            {visibleCount < filteredPrograms.length && (
                                <button
                                    onClick={handleShowMore}
                                    className="bg-brand-green text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition shadow-md w-full sm:w-auto"
                                >
                                    Load More Courses
                                </button>
                            )}
                            {visibleCount > 8 && (
                                <button
                                    onClick={handleShowLess}
                                    className="bg-white text-gray-600 border border-gray-200 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition shadow-sm w-full sm:w-auto"
                                >
                                    Show Less
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <CourseModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
        </>
    );
};

export default Programs;
