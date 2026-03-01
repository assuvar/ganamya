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
                { title: 'Module 1: Getting Started with Power BI', hours: 5, topics: ['Introduction to BI', 'Power BI Interface', 'Connecting to Data Sources'] },
                { title: 'Module 2: Data Transformation', hours: 6, topics: ['Power Query Editor', 'Cleaning Data', 'Merging & Appending Queries'] },
                { title: 'Module 3: Data Modeling & DAX', hours: 8, topics: ['Creating Relationships', 'Introduction to DAX', 'Calculated Columns & Measures'] },
                { title: 'Module 4: Data Visualization', hours: 6, topics: ['Creating Charts & Graphs', 'Formatting Visuals', 'Interactive Dashboards'] },
                { title: 'Module 5: Publishing & Sharing', hours: 5, topics: ['Power BI Service', 'Publishing Reports', 'Workspaces & Apps'] }
            ]
        },
        {
            title: 'Advanced Excel',
            description: 'Advanced Excel formulas, dashboards, automation, and business analysis.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Module 1: Advanced Functions', hours: 6, topics: ['Logical Functions', 'Lookup Functions (VLOOKUP, XLOOKUP)', 'Text Functions'] },
                { title: 'Module 2: Data Analysis Tools', hours: 6, topics: ['Pivot Tables & Charts', 'What-If Analysis', 'Goal Seek & Solver'] },
                { title: 'Module 3: Data Validation & Formatting', hours: 5, topics: ['Advanced Conditional Formatting', 'Custom Data Validation', 'Protecting Sheets'] },
                { title: 'Module 4: Dashboard Creation', hours: 7, topics: ['Designing Dashboards', 'Interactive Form Controls', 'Slicers & Timelines'] },
                { title: 'Module 5: Introduction to Macros & VBA', hours: 6, topics: ['Recording Macros', 'VBA Editor Basics', 'Automating Tasks'] }
            ]
        },
        {
            title: 'Data Analytics Using Python',
            description: 'Hands-on data analytics using Python, visualization, statistics, and machine learning basics.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Module 1: Python Basics for Data', hours: 5, topics: ['Python Syntax', 'Data Types & Structures', 'Control Flow'] },
                { title: 'Module 2: NumPy & Pandas', hours: 8, topics: ['NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning & Manipulation'] },
                { title: 'Module 3: Data Visualization', hours: 6, topics: ['Matplotlib Basics', 'Seaborn for Statistical Plots', 'Customizing Visuals'] },
                { title: 'Module 4: Statistical Analysis', hours: 5, topics: ['Descriptive Statistics', 'Probability distributions', 'Hypothesis Testing'] },
                { title: 'Module 5: Intro to Machine Learning', hours: 6, topics: ['Scikit-learn Basics', 'Linear Regression', 'Classification Basics'] }
            ]
        },
        {
            title: 'Digital Marketing',
            description: 'Learn SEO, SEM, social media marketing, analytics, and campaign execution.',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Module 1: Digital Marketing Fundamentals', hours: 5, topics: ['Marketing Principles', 'Customer Journey', 'Digital Channels Overview'] },
                { title: 'Module 2: SEO & Content Marketing', hours: 7, topics: ['On-page & Off-page SEO', 'Keyword Research', 'Content Strategy'] },
                { title: 'Module 3: Social Media Marketing', hours: 6, topics: ['Platform Strategies (FB, IG, LinkedIn)', 'Community Management', 'Paid Social Campaigns'] },
                { title: 'Module 4: Search Engine Marketing (SEM)', hours: 6, topics: ['Google Ads Network', 'PPC Campaigns', 'Ad Copywriting & Bidding'] },
                { title: 'Module 5: Analytics & Email Marketing', hours: 6, topics: ['Google Analytics 4', 'Email Automation', 'Measuring ROI'] }
            ]
        },
        {
            title: 'DBMS & SQL',
            description: 'Database management, SQL queries, normalization, and real-world database design.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Module 1: Database Concepts', hours: 5, topics: ['Relational Data Models', 'ER Diagrams', 'Normalization'] },
                { title: 'Module 2: SQL Fundamentals', hours: 6, topics: ['SELECT statements', 'Filtering & Sorting Data', 'Data Types'] },
                { title: 'Module 3: Advanced SQL Queries', hours: 8, topics: ['Joins (Inner, Left, Right)', 'Subqueries', 'Aggregate Functions & GROUP BY'] },
                { title: 'Module 4: Database Administration', hours: 6, topics: ['Creating & Altering Tables', 'Indexes', 'Views & Triggers'] },
                { title: 'Module 5: NoSQL & Industry Standards', hours: 5, topics: ['Introduction to NoSQL', 'MongoDB Basics', 'Database Security'] }
            ]
        },
        {
            title: 'Predictive Analytics Using R',
            description: 'Predictive modeling and statistical analysis using R programming.',
            image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Advanced',
            modules: [
                { title: 'Module 1: Introduction to R & RStudio', hours: 5, topics: ['R Syntax & Data Types', 'Data Import/Export', 'Dplyr package'] },
                { title: 'Module 2: Exploratory Data Analysis (EDA)', hours: 6, topics: ['Summary Statistics', 'Data Visualization with ggplot2', 'Handling Missing Values'] },
                { title: 'Module 3: Linear & Logistic Regression', hours: 7, topics: ['Simple & Multiple Regression', 'Model Assumptions', 'Binary Classification'] },
                { title: 'Module 4: Advanced Predictive Models', hours: 6, topics: ['Decision Trees', 'Random Forests', 'Model Evaluation & Tuning'] },
                { title: 'Module 5: Time Series Forecasting', hours: 6, topics: ['Time Series Objects', 'ARIMA Models', 'Forecasting Principles'] }
            ]
        },
        {
            title: 'Business Analytics',
            description: 'Business decision-making using analytics, predictive models, and reporting.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Module 1: Business Analytics Fundamentals', hours: 5, topics: ['Role of a Business Analyst', 'Metrics & KPIs', 'Data-Driven Decision Making'] },
                { title: 'Module 2: Descriptive & Diagnostic Analytics', hours: 6, topics: ['Data Summarization', 'Root Cause Analysis', 'Performance Dashboards'] },
                { title: 'Module 3: Predictive & Prescriptive Analytics', hours: 7, topics: ['Forecasting Techniques', 'Optimization Models', 'Simulation Basics'] },
                { title: 'Module 4: Data Storytelling & Visualization', hours: 6, topics: ['Visual Best Practices', 'Communicating Insights', 'Presentation Skills'] },
                { title: 'Module 5: Capstone Project', hours: 6, topics: ['Problem Framing', 'End-to-End Analysis', 'Executive Reporting'] }
            ]
        },
        {
            title: 'Tableau',
            description: 'Interactive dashboards and visual analytics using Tableau.',
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Intermediate',
            modules: [
                { title: 'Module 1: Tableau Fundamentals', hours: 5, topics: ['Tableau Workspace', 'Connecting to Data', 'Basic Charts (Bar, Line, Pie)'] },
                { title: 'Module 2: Data Manipulation & Blending', hours: 6, topics: ['Joins vs. Blends', 'Calculated Fields', 'Parameters & Sets'] },
                { title: 'Module 3: Advanced Visualizations', hours: 7, topics: ['Dual Axis Charts', 'Heat Maps', 'Geographic Mapping'] },
                { title: 'Module 4: Interactive Dashboards & Stories', hours: 6, topics: ['Dashboard Layouts', 'Dashboard Actions (Filters, Highlights)', 'Storytelling in Tableau'] },
                { title: 'Module 5: Tableau Server & Online', hours: 6, topics: ['Publishing Dashboards', 'Data Extracts vs. Live', 'User Permissions'] }
            ]
        },
        {
            title: 'R & Python Basics',
            description: 'Programming fundamentals covering both R and Python.',
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Module 1: Core Programming Concepts', hours: 6, topics: ['Variables & Types', 'Loops & Conditions', 'Functions (R & Python)'] },
                { title: 'Module 2: Data Structures', hours: 6, topics: ['Python Lists/Dicts', 'R Vectors/Lists', 'Working with Strings'] },
                { title: 'Module 3: Data Import & Manipulation', hours: 7, topics: ['Pandas in Python', 'Dplyr in R', 'Reading CSV/Excel files'] },
                { title: 'Module 4: Beginner Data Visualization', hours: 6, topics: ['Matplotlib Basics', 'Base R Graphics', 'Creating Simple Plots'] },
                { title: 'Module 5: Mini Coding Projects', hours: 5, topics: ['Data Cleaning Project', 'Basic Analysis Project', 'Comparing R & Python'] }
            ]
        },
        {
            title: 'Business Intelligence & Big Data Basics',
            description: 'Introduction to big data concepts, warehousing, and analytics reporting.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Module 1: Big Data Ecosystem', hours: 5, topics: ['V\'s of Big Data', 'Hadoop Basics', 'Cloud Computing Overview'] },
                { title: 'Module 2: Data Warehousing', hours: 6, topics: ['ETL Processes', 'Data Marts vs Data Lakes', 'Star & Snowflake Schemas'] },
                { title: 'Module 3: BI Tools & Reporting', hours: 7, topics: ['Evaluating BI Tools', 'Designing Enterprise Reports', 'Self-Service BI'] },
                { title: 'Module 4: Modern Data Architecture', hours: 6, topics: ['Data Pipelines', 'Real-time Analytics', 'Data Governance'] },
                { title: 'Module 5: Case Studies', hours: 6, topics: ['Retail Big Data use case', 'Financial Services Analytics', 'Healthcare Data'] }
            ]
        },
        {
            title: 'Soft Skills Training',
            description: 'Communication, leadership, interview, and workplace skills.',
            image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80',
            duration: '30 Hours',
            level: 'All Levels',
            modules: [
                { title: 'Module 1: Effective Communication', hours: 6, topics: ['Verbal & Non-verbal Communication', 'Active Listening', 'Public Speaking basics'] },
                { title: 'Module 2: Professional Etiquette', hours: 5, topics: ['Email Etiquette', 'Meeting Conduct', 'Time Management'] },
                { title: 'Module 3: Teamwork & Leadership', hours: 7, topics: ['Conflict Resolution', 'Emotional Intelligence', 'Leading Small Teams'] },
                { title: 'Module 4: Interview Preparation', hours: 6, topics: ['Resume Building', 'Mock Interviews', 'Salary Negotiation'] },
                { title: 'Module 5: Critical Thinking & Problem Solving', hours: 6, topics: ['Analytical Thinking', 'Decision Making Frameworks', 'Creative Problem Solving'] }
            ]
        },
        {
            title: 'Basic Excel Analytics',
            description: 'Excel fundamentals, formulas, charts, and business data handling.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
            duration: '20 Hours',
            level: 'Beginner',
            modules: [
                { title: 'Module 1: Excel Essentials', hours: 4, topics: ['Navigating the Ribbon', 'Entering Data', 'Basic Formatting'] },
                { title: 'Module 2: Fundamental Formulas', hours: 4, topics: ['SUM, AVERAGE, MIN, MAX', 'Relative vs Absolute References', 'Basic IF statements'] },
                { title: 'Module 3: Data Organization', hours: 4, topics: ['Sorting & Filtering', 'Finding & Replacing', 'Freezing Panes'] },
                { title: 'Module 4: Working with Charts', hours: 4, topics: ['Creating Column & Pie Charts', 'Formatting Chart Elements', 'Sparklines'] },
                { title: 'Module 5: Practical Applications', hours: 4, topics: ['Personal Budget Tracker', 'Basic Inventory List', 'Printing & Sharing'] }
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
            <section id="courses" className="py-20 bg-brand-light">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-10">
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Our Programs</span>
                        <h2 className="text-3xl font-bold mt-2">Master Industry Skills</h2>
                    </div>

                    {/* Running Course List / Marquee */}
                    <div className="relative flex overflow-x-hidden mb-12 sm:mb-16 bg-white py-4 border-y border-brand-navy/10 shadow-sm w-screen -ml-4 sm:-ml-8 lg:-ml-[calc((100vw-100%)/2)] shadow-inner">
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
                                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${filter === level ? 'bg-brand-green text-white shadow-md shadow-brand-green/30 scale-105' : 'bg-white text-brand-navy/70 hover:bg-gray-100 border border-brand-navy/20 hover:scale-105'}`}
                            >
                                {level === 'All' ? 'All Programs' : level}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all">
                        {filteredPrograms.slice(0, visibleCount).map((program, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-brand-navy/10 flex flex-col group">
                                <div className="relative overflow-hidden shrink-0">
                                    <img src={program.image} className="h-44 w-full object-cover group-hover:scale-105 transition duration-500" alt={program.title} />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="font-bold text-lg leading-snug">{program.title}</h3>
                                    <p className="text-brand-navy/60 text-sm mt-3 flex-1">{program.description}</p>
                                    <div className="mt-5 flex items-center justify-between text-xs text-brand-navy/50 font-bold border-t border-brand-navy/10 pt-5">
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
                                    className="bg-white text-brand-navy/70 border border-brand-navy/20 px-8 py-3 rounded-xl font-bold hover:bg-brand-light transition shadow-sm w-full sm:w-auto"
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
