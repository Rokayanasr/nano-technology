import { Trans, useTranslation } from "react-i18next";
import "../App.css";
import resultImg from "../assets/results.png";
import Service from "./Service";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WhyChoseUs from "./WhyChoseUs";
import Contactus from "./Contactus";
import Consultancy from "./Consultancy";
import Aboutus from "./Aboutus";
import TechicalService from "./TechicalService";
import MarketingServices from "./MarketingServices";

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
                            <button className='bounce-top primary-btn'>{t("Hero Btn")}</button>
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
                        <MarketingServices className={isClicked == true ? "hidden" : "flex"}></MarketingServices>
                    </>
                </div>
            </section>

            <WhyChoseUs />

            <Contactus />
        </>
    );
}

export default Hero;
