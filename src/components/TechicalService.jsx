import { Trans, useTranslation } from "react-i18next";
import "../App.css";
import img1 from "../assets/cpu.svg";
import img2 from "../assets/designer.svg";
import img3 from "../assets/setting.svg";
import img4 from "../assets/gear.svg";
import img5 from "../assets/digitalization.svg";

function TechicalService() {
    const { t, i18n } = useTranslation();
    const cardsData = t("Cards", { returnObjects: true });
    const images = [
        img1, 
        img2, 
        img3,
        img4,
        img5
    ];
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className=' text-center gap-5 p-6 bg-transparent rounded-lg shadow'>
                <h2>{t("Technical Services")}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-content-center items-center'>
                {cardsData.map((card, index) => (
                    <div key={index} className='service-card flex sm:gap-3 gap-4 flex-col justify-center sm:justify-around px-4 sm:p-10 rounded-lg shadow'>
                        <div className='flex items-center gap-4'>
                            <img src={images[index]} alt={card.title} className='w-10 text-white' />
                            <h4 className='text-white font-bold'>
                                <Trans>{t(card.title)}</Trans>
                            </h4>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h5 className='mb-4 text-justify text-md sm:text-sm text-white'>
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
    );
}

export default TechicalService;
