import React from 'react'
import aboutImg from "../assets/about.png";
import { Trans, useTranslation } from 'react-i18next';

function Aboutus() {
    const { t, i18n } = useTranslation();

  return (
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
</section>  )
}

export default Aboutus