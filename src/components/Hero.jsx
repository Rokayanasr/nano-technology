import { Trans, useTranslation } from "react-i18next";
import "../App.css";
import aboutImg from "../assets/about.png";
import resultImg from "../assets/results.png";
import Service from "./Service";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WhyChoseUs from "./WhyChoseUs";

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
                        <button className='primary-btn'>{t("Hero Btn")}</button>
                    </div>
                </main>
            </div>

            <section className='py-20'>
                <div className='my-container flex flex-col items-center'>
                    <h2 className='text-center'>{t("Consultancy Title")}</h2>
                    <h4 className='text-center consultancy-small-title text-indigo-100 pb-5'>
                        <Trans>{t("Consultancy Small Title")}</Trans>
                    </h4>
                    <ol className='items-center mt-14 mb-10 md:mt-8 justify-center flex flex-col md:flex-row gap-2'>
                        <li className='relative mb-6 sm:mb-0'>
                            <div className='flex items-center justify-center md:justify-start'>
                                <div className='z-1 flex items-center justify-center w-6 h-6 bg-white rounded-full ring-0 ring-white '>
                                    <svg className='w-3.5 h-3.5 text-primary' fill='currentColor' viewBox='-64 0 512 512.001' xmlns='http://www.w3.org/2000/svg' id='fi_1154571'>
                                        <path d='m119.433594 110.335938h144.601562.019532c8.285156 0 15-6.71875 15-15 0-1.300782-.164063-2.558594-.472657-3.757813l-15.90625-79.519531c-1.402343-7.011719-7.558593-12.058594-14.707031-12.058594h-112.46875c-7.148438 0-13.304688 5.046875-14.707031 12.058594l-16.066407 80.335937c-.882812 4.40625.261719 8.972657 3.109376 12.449219 2.847656 3.476562 7.105468 5.492188 11.597656 5.492188zm0 0'></path>
                                        <path d='m328.300781 64.265625h-24.589843l4.167968 20.84375c.78125 3.347656 1.175782 6.78125 1.175782 10.226563 0 24.8125-20.1875 45-45.019532 45h-144.601562c-13.535156 0-26.21875-6.003907-34.796875-16.46875-8.582031-10.46875-11.984375-24.085938-9.328125-37.355469l4.449218-22.242188h-24.589843c-30.417969 0-55.167969 24.746094-55.167969 55.164063v337.402344c0 30.417968 24.75 55.164062 55.167969 55.164062h273.132812c30.417969 0 55.167969-24.746094 55.167969-55.164062v-337.402344c0-30.417969-24.75-55.167969-55.167969-55.167969zm-232.964843 111.398437h112.464843c8.285157 0 15 6.71875 15 15 0 8.285157-6.714843 15-15 15h-112.464843c-8.285157 0-15-6.714843-15-15 0-8.28125 6.714843-15 15-15zm14.996093 95.332032c0 3.949218-1.601562 7.820312-4.390625 10.609375-2.789062 2.789062-6.660156 4.390625-10.609375 4.390625-3.941406 0-7.8125-1.601563-10.601562-4.390625-2.789063-2.789063-4.390625-6.660157-4.390625-10.609375 0-3.949219 1.601562-7.808594 4.390625-10.601563 2.789062-2.796875 6.660156-4.398437 10.601562-4.398437 3.949219 0 7.820313 1.601562 10.609375 4.398437 2.789063 2.792969 4.390625 6.652344 4.390625 10.601563zm-4.390625 171.28125c-2.789062 2.789062-6.660156 4.386718-10.601562 4.386718-3.949219 0-7.820313-1.597656-10.609375-4.386718-2.789063-2.800782-4.398438-6.660156-4.398438-10.613282 0-3.945312 1.609375-7.808593 4.398438-10.605468 2.789062-2.792969 6.660156-4.394532 10.609375-4.394532 3.941406 0 7.8125 1.601563 10.601562 4.394532 2.789063 2.796875 4.390625 6.660156 4.390625 10.605468 0 3.953126-1.601562 7.8125-4.390625 10.613282zm0-80.339844c-2.789062 2.796875-6.660156 4.398438-10.609375 4.398438-3.941406 0-7.8125-1.601563-10.601562-4.398438-2.800781-2.792969-4.398438-6.652344-4.398438-10.601562 0-3.949219 1.597657-7.820313 4.398438-10.609376 2.789062-2.789062 6.660156-4.390624 10.601562-4.390624 3.949219 0 7.820313 1.601562 10.609375 4.390624 2.789063 2.789063 4.398438 6.660157 4.398438 10.609376 0 3.941406-1.609375 7.8125-4.398438 10.601562zm182.191406 84.726562h-112.464843c-8.285157 0-15-6.714843-15-15 0-8.28125 6.714843-15 15-15h112.464843c8.285157 0 15 6.71875 15 15 0 8.285157-6.714843 15-15 15zm0-80.332031h-112.464843c-8.285157 0-15-6.714843-15-15 0-8.28125 6.714843-15 15-15h112.464843c8.285157 0 15 6.71875 15 15 0 8.285157-6.714843 15-15 15zm0-80.332031h-112.464843c-8.285157 0-15-6.714844-15-15s6.714843-15 15-15h112.464843c8.285157 0 15 6.714844 15 15s-6.714843 15-15 15zm0 0'></path>
                                    </svg>
                                </div>
                                <div className='hidden sm:flex w-full consultancy-line' />
                            </div>
                            <div className='mt-3 sm:pe-8'>
                                <time className='block text-center md:text-start mb-5 md:mb-2 font-normal leading-none text-white'>
                                    <Trans>{t("Consultancy Start")}</Trans>
                                </time>
                                <p className='md:font-normal text-white opacity-70 text-center md:text-start'>
                                    <Trans>{t("Consultancy Start description")}</Trans>
                                </p>
                            </div>
                        </li>
                        <li className='relative mb-6 sm:mb-0'>
                            <div className='flex items-center justify-center'>
                                <div className='z-1 flex items-center justify-center w-6 h-6 bg-white rounded-full ring-0 ring-white '>
                                    <svg id='fi_2282198' className='w-3.5 h-3.5 text-primary' fill='currentColor' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='m512 121v-75c0-24.813-20.187-45-45-45h-422c-24.813 0-45 20.187-45 45v75zm-166-60h90c8.284 0 15 6.716 15 15s-6.716 15-15 15h-90c-8.284 0-15-6.716-15-15s6.716-15 15-15zm-150 0c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm-60 0c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm-60 0c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15z'></path>
                                        <path d='m0 151v315c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-315zm175.37 213.287c6.47 5.175 7.518 14.614 2.343 21.083-5.174 6.468-14.615 7.518-21.083 2.342l-75-60c-7.499-5.997-7.504-17.424 0-23.426l75-60c6.466-5.175 15.907-4.127 21.083 2.342 5.175 6.469 4.127 15.909-2.343 21.083l-60.358 48.289zm139.417-147.378-90 210c-3.263 7.613-12.079 11.143-19.696 7.878-7.614-3.263-11.142-12.082-7.878-19.696l90-210c3.264-7.614 12.082-11.141 19.696-7.878s11.142 12.081 7.878 19.696zm115.583 110.804-75 60c-6.458 5.168-15.9 4.136-21.083-2.342-5.175-6.469-4.127-15.909 2.343-21.083l60.358-48.288-60.358-48.287c-6.47-5.175-7.518-14.614-2.343-21.083 5.174-6.469 14.614-7.518 21.083-2.342l75 60c7.499 5.997 7.504 17.423 0 23.425z'></path>
                                    </svg>
                                </div>
                                <div className='hidden sm:flex w-full consultancy-line' />
                            </div>
                            <div className='mt-3 sm:pe-8'>
                                <time className='block text-center md:text-start mb-5 md:mb-2 font-normal leading-none text-white'>
                                    <Trans>{t("Consultancy Through")}</Trans>
                                </time>
                                <p className='md:font-normal text-white opacity-70 text-center md:text-start'>
                                    <Trans>{t("Consultancy Through description")}</Trans>
                                </p>
                            </div>
                        </li>
                        <li className='relative mb-6 sm:mb-0'>
                            <div className='flex items-center justify-center'>
                                <div className='z-1 flex items-center justify-center w-6 h-6 bg-white rounded-full ring-0 ring-white '>
                                    <svg id='fi_7558195' viewBox='0 0 512 512' className='w-3.5 h-3.5 text-primary' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                                        <g>
                                            <path d='m240.917 511.365v-212.993l-133.698 165.291c39.239 28.359 85.272 44.872 133.698 47.702z'></path>
                                            <path d='m270.895 270.996v240.369c62.279-3.638 120.633-29.882 165.67-74.854 45.047-44.982 71.352-103.277 74.997-165.515z'></path>
                                            <path d='m405.64 142.961h37.441v98.057h-37.441z'></path>
                                            <path d='m75.346 75.499c-48.588 48.564-75.346 112.67-75.346 180.508s26.758 131.944 75.346 180.508c2.82 2.818 5.697 5.556 8.62 8.226l156.951-194.039v-250.067c-62.299 3.649-120.593 29.908-165.571 74.864z'></path>
                                            <path d='m270.895 113.182h37.348v127.836h-37.348z'></path>
                                            <path d='m338.221 41.048h37.441v199.971h-37.441z'></path>
                                            <path d='m473.06 183.042h38.94v57.976h-38.94z'></path>
                                        </g>
                                    </svg>{" "}
                                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                                </div>
                                <div className='hidden sm:flex w-full consultancy-line' />
                            </div>
                            <div className='mt-3 sm:pe-8'>
                                <time className='block text-center md:text-start mb-5 md:mb-2 font-normal leading-none text-white'>
                                    <Trans>{t("Consultancy End")}</Trans>
                                </time>
                                <p className='md:font-normal text-white opacity-70 text-center md:text-start'>
                                    <Trans>{t("Consultancy End description")}</Trans>
                                </p>
                            </div>
                        </li>
                    </ol>
                    <button className='heartbeat primary-outline-btn'>
                        <Trans>{t("Consultancy Btn")}</Trans>
                    </button>
                </div>
            </section>

            <section className='my-container about-section flex'>
                <div className='gradient-container'>
                    <div className='gradient'></div>
                    <div className='flex flex-col lg:flex-row gap-24 items-center justify-center md:justify-between'>
                        <img src={aboutImg} className='about-img inline-block lg:hidden' alt='about img' />
                        <div className='flex flex-col items-center lg:items-start'>
                            <h2 className='about-title text-center lg:text-justify text-white pb-4'>
                                <Trans>{t("About Title")}</Trans>
                            </h2>
                            <div className='h-0.5 rounded-full bg-primary w-2/12'></div>
                            <h4 className='text-white text-center lg:text-start font-semibold py-4'>
                                <Trans>{t("About Small Title")}</Trans>
                            </h4>
                            <h5 className='about-description text-center text-white opacity-80 lg:text-justify pb-6'>
                                <Trans>{t("About Description")}</Trans>
                            </h5>

                            <button className='primary-btn w-fit text-sm '>
                                <Trans>{t("About Btn")}</Trans>
                            </button>
                        </div>
                        <img src={aboutImg} className='about-img lg:inline-block hidden' alt='about img' />
                    </div>
                </div>
            </section>

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
        </>
    );
}

export default Hero;
