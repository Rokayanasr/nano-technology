import { Trans, useTranslation } from "react-i18next";

function Contactus() {
    const { t, i18n } = useTranslation();

    return (
        <section>
            <div>
                <h2>{t("Contact Us")}</h2>
            </div>
        </section>
    );
}

export default Contactus;
