import { Trans, useTranslation } from "react-i18next";
import "../App.css";
import aboutImg from "../assets/about.png";
import resultImg from "../assets/results.png";
import Service from "./Service";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WhyChoseUs from "./WhyChoseUs";
import Contactus from "./Contactus";
import Consultancy from "./Consultancy";
import Aboutus from "./Aboutus";

function Hero() {
    const { t, i18n } = useTranslation();
    const cardsData = t("Cards", { returnObjects: true });
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <div className='hero-bg'>
                <main className='hero-section'>
                    <div className='hero-content my-container'>
                        <h3 className='text-center font-normal'>{t("Hero Small Title")}</h3>
                        <h1 className={`text-center ${i18n.language === "ar" ? "ar-hero-title" : "en-hero-title"}`}>
                            <Trans i18nKey='Welcome to Nano Technology' />
                        </h1>
                        <Link to='/service'>
                            <button className='primary-btn'>{t("Hero Btn")}</button>
                        </Link>
                    </div>
                </main>
            </div>

            <Consultancy />
            <Aboutus />

            <section className='my-container about-section flex my-20 md:my-0'>
                <div className='gradient-container-result '>
                    <div className='gradient result-gradient'></div>
                    <div className='flex flex-col lg:flex-row gap-10 md:gap-36 items-center justify-center md:justify-between'>
                        <img src={resultImg} className='result-img' alt='about img' />
                        <div className='flex flex-col items-center lg:items-start'>
                            <h2 className='about-title text-center lg:text-justify text-white pb-4'>
                                <Trans>{t("Result Title")}</Trans>
                            </h2>
                            <div className='h-0.5 rounded-full bg-primary w-2/12'></div>
                            <h4 className='text-white text-center lg:text-start font-semibold py-4'>
                                <Trans>{t("Result Small Title")}</Trans>
                            </h4>
                            <h5 className='about-description text-center text-white opacity-80 lg:text-justify pb-6'>
                                <Trans>{t("Result Description")}</Trans>
                            </h5>

                            <button className='primary-btn w-fit text-sm '>
                                <Trans>{t("Result Btn")}</Trans>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 min-h-screen'>
                <div className='my-container'>
                    <div className='py-5 flex flex-col justify-center items-center'>
                        <h2 className='text-center'>
                            <Trans>{t("Solutions and services")}</Trans>
                        </h2>
                        <h5 className='text-center pt-3 pb-5 leading-7 w-full sm:w-8/12'>{t("Solutions and services small title")}</h5>
                    </div>
                    <>
                        <div className='hidden'>
                            <label htmlFor='tabs' className='sr-only'>
                                Select your country
                            </label>
                            <select
                                id='tabs'
                                className='block text-center w-full p-4 border text-white bg-primary rounded-lg focus:bg-white active focus:border focus:text-dark focus:outline-none '
                            >
                                <option>{t("Technical Services")}</option>
                                <option>{t("Marketing Services")}</option>
                            </select>
                        </div>
                        <ul className='block text-md text-center text-white rounded-lg shadow sm:flex'>
                            <li onClick={handleClick} className='w-full flex justify-center tabs focus-within:z-0 sm:justify-end tab-focus'>
                                <Link
                                    to='/service/technical'
                                    className='inline-block w-96 sm:w-8/12 p-4 border focus:font-bold text-white bg-primary sm:rounded-s-lg focus:bg-white focus:text-primary active focus:border focus:border-white focus:outline-none '
                                    aria-current='page'
                                >
                                    {t("Technical Services")}
                                </Link>
                            </li>
                            <li onClick={handleClick} className='w-full focus-within:z-0 tabs flex justify-center sm:justify-start tab-focus '>
                                <Link
                                    to='/service/marketing'
                                    className='inline-block w-96 sm:w-8/12 p-4 focus:font-bold text-white border bg-primary sm:rounded-l-lg focus:border-pdark focus:bg-white focus:text-primary active focus:border  focus:outline-white '
                                >
                                    {t("Marketing Services")}
                                </Link>
                            </li>
                        </ul>
                        <Outlet />
                        <div className={`justify-center items-center flex-col ${isClicked == true ? "hidden" : "flex"}`}>
                            <div className=' text-center gap-5 p-6 bg-transparent rounded-lg shadow'>
                                <h2>{t("Technical Services")}</h2>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-content-center items-center'>
                                {cardsData.map((card, index) => (
                                    <div key={index} className='service-card flex sm:gap-3 gap-4 flex-col justify-center sm:justify-around px-4 sm:p-10 rounded-lg shadow'>
                                        <div className='flex items-center gap-4'>
                                            <img src={card.img} alt={card.title} className='w-10 text-white' />
                                            <h4 className='text-white font-bold'>
                                                <Trans>{t(card.title)}</Trans>
                                            </h4>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h5 className='mb-4 text-justify text-lg sm:text-sm text-white'>
                                                <Trans>{t(card.description)}</Trans>
                                            </h5>
                                            <a href={card.link} className='flex gap-1 text-md sm:text-sm font-semibold text-secondary items-center hover:underline'>
                                                <svg className='w-3 h-3 rtl:rotate-[270deg]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'>
                                                    <path
                                                        stroke='currentColor'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth={2}
                                                        d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
                                                    />
                                                </svg>
                                                {t(card.buttonText)}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                </div>
            </section>

            <WhyChoseUs />

            <Contactus />
        </>
    );
}

export default Hero;
