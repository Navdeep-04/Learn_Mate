import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, SearchX } from 'lucide-react';

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4'>
            <div className='max-w-lg w-full text-center'>

                {/* Icon */}
                <div className='flex justify-center mb-6'>
                    <div className='w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center'>
                        <SearchX className='w-10 h-10 text-emerald-600' />
                    </div>
                </div>

                {/* Error Code */}
                <h1 className='text-8xl font-extrabold text-emerald-500 tracking-tight'>
                    404
                </h1>

                {/* Message */}
                <h2 className='text-2xl font-bold text-slate-900 mt-4'>
                    Page Not Found
                </h2>

                <p className='text-slate-500 text-sm mt-3 leading-relaxed'>
                    Sorry, the page you are looking for doesn't exist or
                    may have been moved. Please check the URL or return
                    to the homepage.
                </p>

                {/* Buttons */}
                <div className='flex items-center justify-center gap-3 mt-8 flex-wrap'>

                    <button
                        onClick={() => navigate(-1)}
                        className='flex items-center gap-2 px-5 h-11 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-all'
                    >
                        <ArrowLeft size={16} />
                        Go Back
                    </button>

                    <Link
                        to='/dashboard'
                        className='flex items-center gap-2 px-5 h-11 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-600 transition-all'
                    >
                        <Home size={16} />
                        Back to Home
                    </Link>

                </div>

                {/* Footer */}
                <p className='text-xs text-slate-400 mt-12'>
                    Error Code: 404 | Page Not Found
                </p>

            </div>
        </div>
    );
};

export default NotFoundPage;
