import { Trans, useTranslation } from "react-i18next";
import "../App.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contactus() {
    const { t, i18n } = useTranslation();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_44aydbo", "template_vlze3xf", form.current, {
                publicKey: "qtccHPQN3hT81SgUx",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    alert("message sent successfully!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert(error);
                }
            );
    };

    return (
        <section className='pt-20 contact-bg flex items-end'>
            <div className='sm:px-20 pt-10 gap-10 grid items-center justify-center'>
                <h2 className='text-center'>{t("Contact Us")}</h2>
                <div className='background'>
                    <div className='container'>
                        <div className='screen'>
                            <div className='screen-header'>
                                <div className='screen-header-left'>
                                    <div className='screen-header-button close' />
                                    <div className='screen-header-button maximize' />
                                    <div className='screen-header-button minimize' />
                                </div>
                                <div className='screen-header-right'>
                                    <div className='screen-header-ellipsis' />
                                    <div className='screen-header-ellipsis' />
                                    <div className='screen-header-ellipsis' />
                                </div>
                            </div>
                            <div className='screen-body'>
                                <div className='screen-body-item left gap-5'>
                                    <div className='app-title'>
                                        <span>{t("Contact us title")}</span>
                                    </div>

                                    <div className='app-description text-justify text-white'>
                                        <Trans>{t("Contactus small title")}</Trans>
                                    </div>
                                    <div className='app-body'></div>
                                </div>
                                <div className='screen-body-item'>
                                    <div className='app-form'>
                                        <form ref={form} onSubmit={sendEmail} id='form'>
                                            <div className='app-form-group'>
                                                <input className='app-form-control' name='user_name' placeholder={t("name")} defaultValue='' />
                                            </div>
                                            <div className='app-form-group'>
                                                <input className='app-form-control' name='user_email' placeholder={t("email")} />
                                            </div>
                                            <div className='app-form-group'>
                                                <input className='app-form-control' name='phone_number' placeholder={t("Phone")} />
                                            </div>
                                            <div className='app-form-group message'>
                                                <input className='app-form-control' name='message' placeholder={t("Message")} />
                                            </div>
                                            <div className='app-form-group buttons flex gap-4'>
                                                <button className='app-form-button type="submit" hover:text-white primary-btn'>{t("Send")}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer bg-opacity-30 nav-blur md:bg-opacity-30 my-container backdrop-blur-lg bg-white'>
                    <div className='footer-top'></div>
                    <div className='flex justify-center items-center'>
                        <p>2024 Nano Technology. All rights reserved ©</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactus;
