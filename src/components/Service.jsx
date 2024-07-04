import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

function Service() {
    const { t, i18n } = useTranslation();
    // const cardsData = t("Cards", { returnObjects: true });

    return (
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
                            className='inblock text-center w-full p-4 border text-white bg-primary rounded-lg focus:bg-white active focus:border focus:text-dark focus:outline-none '
                        >
                            <option>{t("Technical Services")}</option>
                            <option>{t("Marketing Services")}</option>
                        </select>
                    </div>
                    <ul className='block text-md text-center text-white rounded-lg shadow sm:flex'>
                        <li className='w-full flex justify-center sm:justify-end tab-focus focus-within:z-10'>
                            <Link
                                to='/service/technical'
                                className='inline-block w-96 sm:w-8/12 p-4 border focus:font-bold text-white bg-primary sm:rounded-s-lg focus:bg-white focus:text-primary active focus:border focus:border-white focus:outline-none '
                                aria-current='page'
                            >
                                {t("Technical Services")}
                            </Link>
                        </li>
                        <li className='w-full flex justify-center sm:justify-start tab-focus focus-within:z-10'>
                            <Link
                                to='/service/marketing'
                                className='inline-block w-96 sm:w-8/12 p-4 focus:font-bold text-white border bg-primary sm:rounded-l-lg focus:border-pdark focus:bg-white focus:text-primary active focus:border  focus:outline-white '
                            >
                                {t("Marketing Services")}
                            </Link>
                        </li>
                    </ul>
                    <Outlet />
                </>
            </div>
        </section>
    );
}

export default Service;
