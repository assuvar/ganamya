import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Tell Instagram to process the embed code again after rendering
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }

        return () => {
            // Cleanup if needed, but normally it's fine to keep the script loaded
            document.body.removeChild(script);
        };
    }, []);

    const instaLink = "https://www.instagram.com/gnanamaya_edutech_llp/";

    return (
        <section id="gallery" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Instagram className="w-4 h-4" /> Follow Us on Instagram
                        </span>
                        <h2 className="text-3xl font-bold mt-2">Glimpses of Gnanamaya</h2>
                        <p className="text-gray-500 mt-2 max-w-xl text-sm">
                            Check out our latest training sessions, workshops, and student success stories on our official Instagram page.
                        </p>
                    </div>
                    <a
                        href={instaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-green transition shrink-0 flex items-center gap-2"
                    >
                        @gnanamaya_edutech_llp
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {/* Instagram Post 1 */}
                    <div className="w-full relative min-h-[500px] flex justify-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                        <blockquote
                            className="instagram-media w-full m-0"
                            data-instgrm-captioned
                            data-instgrm-permalink="https://www.instagram.com/p/DVDW-x4keuL/?utm_source=ig_embed&amp;utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{ background: '#FFF', border: 0, padding: 0, width: '100%', maxWidth: '100%' }}>
                            <div style={{ padding: '16px' }}>
                                <a href="https://www.instagram.com/p/DVDW-x4keuL/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '19% 0' }}></div>
                                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                                        {/* Simplified SVG placeholder, actual video loads over it */}
                                        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g></g></g></g></svg>
                                    </div>
                                    <div style={{ paddingTop: '8px' }}>
                                        <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>View this post on Instagram</div>
                                    </div>
                                    <div style={{ padding: '12.5% 0' }}></div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                                        <div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                                        </div>
                                        <div style={{ marginLeft: '8px' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px' }}></div>
                                            <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                                        </div>
                                        <div style={{ marginLeft: 'auto' }}>
                                            <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div>
                                            <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px' }}></div>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' }}></div>
                                    </div>
                                </a>
                                <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    <a href="https://www.instagram.com/p/DVDW-x4keuL/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">A post shared by Gnanamaya Edutech (@gnanamaya_edutech_llp)</a>
                                </p>
                            </div>
                        </blockquote>
                    </div>

                    {/* Instagram Post 2 */}
                    <div className="w-full relative min-h-[500px] flex justify-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                        <blockquote
                            className="instagram-media w-full m-0"
                            data-instgrm-captioned
                            data-instgrm-permalink="https://www.instagram.com/p/DVGjMlrkfDl/?utm_source=ig_embed&amp;utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{ background: '#FFF', border: 0, padding: 0, width: '100%', maxWidth: '100%' }}>
                            <div style={{ padding: '16px' }}>
                                <a href="https://www.instagram.com/p/DVGjMlrkfDl/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '19% 0' }}></div>
                                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                                        {/* Simplified SVG placeholder, actual video loads over it */}
                                        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g></g></g></g></svg>
                                    </div>
                                    <div style={{ paddingTop: '8px' }}>
                                        <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>View this post on Instagram</div>
                                    </div>
                                    <div style={{ padding: '12.5% 0' }}></div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                                        <div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                                        </div>
                                        <div style={{ marginLeft: '8px' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px' }}></div>
                                            <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                                        </div>
                                        <div style={{ marginLeft: 'auto' }}>
                                            <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div>
                                            <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px' }}></div>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' }}></div>
                                    </div>
                                </a>
                                <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    <a href="https://www.instagram.com/p/DVGjMlrkfDl/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">A post shared by Gnanamaya Edutech (@gnanamaya_edutech_llp)</a>
                                </p>
                            </div>
                        </blockquote>
                    </div>

                    {/* Instagram Post 3 */}
                    <div className="w-full relative min-h-[500px] flex justify-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                        <blockquote
                            className="instagram-media w-full m-0"
                            data-instgrm-captioned
                            data-instgrm-permalink="https://www.instagram.com/p/DVKacEsgTG_/?utm_source=ig_embed&amp;utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{ background: '#FFF', border: 0, padding: 0, width: '100%', maxWidth: '100%' }}>
                            <div style={{ padding: '16px' }}>
                                <a href="https://www.instagram.com/p/DVKacEsgTG_/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '19% 0' }}></div>
                                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                                        {/* Simplified SVG placeholder, actual video loads over it */}
                                        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g></g></g></g></svg>
                                    </div>
                                    <div style={{ paddingTop: '8px' }}>
                                        <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>View this post on Instagram</div>
                                    </div>
                                    <div style={{ padding: '12.5% 0' }}></div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                                        <div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                                        </div>
                                        <div style={{ marginLeft: '8px' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px' }}></div>
                                            <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                                        </div>
                                        <div style={{ marginLeft: 'auto' }}>
                                            <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div>
                                            <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px' }}></div>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' }}></div>
                                    </div>
                                </a>
                                <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    <a href="https://www.instagram.com/p/DVKacEsgTG_/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">A post shared by Gnanamaya Edutech (@gnanamaya_edutech_llp)</a>
                                </p>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
