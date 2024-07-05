// import i18n from "i18next";
// import { useEffect, useState } from "react";
// import cookies from "js-cookie";
// import "../App.css";
// import { useTranslation } from "react-i18next";
// import "../utils/i18n";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// function Navbar() {
//     const { t } = useTranslation();

//     const lng = cookies.get("i18next");
//     const [language, setLanguage] = useState(lng);

//     const changeLanguage = () => {
//         const newLng = language === "ar" ? "en" : "ar";
//         setLanguage(newLng);
//         cookies.set("i18next", newLng);
//         i18n.changeLanguage(newLng);
//     };
//     useEffect(() => {
//         window.document.dir = i18n.dir();
//     }, [language]);

//     return (
//         <>
//             <nav className='bg-opacity-30 nav-blur my-container backdrop-blur-lg bg-white z-20 fixed w-full shadow-lg ring-1 ring-black/5'>
//                 <div className='max-w-screen-xl flex flex-wrap items-center justify-between'>
//                     <Link to='' className='flex items-center space-x-3 rtl:space-x-reverse'>
//                         <img src={logo} className='h-12 sm:h-14' alt='nano Logo' />
//                         <span className='sm:flex hidden flex-col gap-1.5 logo-hide'>
//                             <span className=' text-white logo-nav uppercase'>{t("Logo name")}</span>
//                             <span className='text-white font-semibold logo-title uppercase'>{t("Logo description")}</span>
//                         </span>
//                     </Link>
//                     <div className='flex items-center md:order-2 space-x-1 gap-6 md:space-x-0 rtl:space-x-reverse'>
//                         <button
//                             onClick={changeLanguage}
//                             type='button'
//                             className='inline-flex items-center bg-primary hover:bg-phover outline outline-white outline-1 font-medium justify-center px-4 py-2 text-xs rounded-full cursor-pointer '
//                         >
//                             <img src={`../assets/${lng}.png`} alt='' />
//                             {lng === "ar" ? "English (UK)" : "العربية (KSA)"}
//                         </button>

//                         <button
//                             data-collapse-toggle='navbar-default'
//                             type='button'
//                             className='inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-white rounded-lg md:hidden focus:ring-1 focus:outline-none ring-white'
//                             aria-controls='navbar-default'
//                             aria-expanded='false'
//                         >
//                             <span className='sr-only'>Open main menu</span>
//                             <svg className='w-10 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
//                                 <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M1 1h15M1 7h15M1 13h15' />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className='items-center justify-between hidden w-full lg:flex md:w-auto md:order-1' id='navbar-default'>
//                         <ul className='flex flex-col p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 '>
//                             <li className='nav-btn '>
//                                 <Link to='/' className='block py-5 nav-link px-3 md:p-0 text-xl uppercase rounded  md:hover:bg-transparent'>
//                                     {t("Home")}
//                                 </Link>
//                                 <div className='border-transparent element rounded-full'></div>
//                             </li>
//                             <li className='nav-btn '>
//                                 <Link to='/aboutus' className='block py-5 nav-link px-3 md:p-0 text-xl uppercase rounded  md:hover:bg-transparent'>
//                                     {t("About Us")}
//                                 </Link>
//                                 <div className='border-transparent element rounded-full'></div>
//                             </li>
//                             <li className='nav-btn '>
//                                 <Link to='/service' className='block py-5 nav-link px-3 md:p-0 text-xl uppercase rounded  md:hover:bg-transparent'>
//                                     {t("Services")}
//                                 </Link>
//                                 <div className='border-transparent element rounded-full'></div>
//                             </li>
//                             <li className='nav-btn'>
//                                 <Link to='consultancy' className='block py-5 nav-link px-3 md:p-0 text-xl uppercase rounded  md:hover:bg-transparent'>
//                                     {t("Subscribe")}
//                                 </Link>
//                                 <div className='border-transparent element rounded-full'></div>
//                             </li>
//                             <li className='nav-btn '>
//                                 <Link to='contactus' className='block py-5 nav-link px-3 md:p-0 text-xl uppercase rounded  md:hover:bg-transparent'>
//                                     {t("Contact Us")}
//                                 </Link>
//                                 <div className='border-transparent element rounded-full'></div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;
