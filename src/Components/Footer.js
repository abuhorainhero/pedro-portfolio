import React from 'react'
import '../Styles/footerStyle.css'
export default function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-content">
                <div class="container-contact2">
                    <div class="wrap-contact2">
                        <form class="contact2-form" autoComplete="off">
                            <span class="contact2-form-title">
                                Contact Me
                            </span>
                            <div class="wrap-input2">
                                <input class="input2" type="text" name="name" autoComplete="off"/>
                                    <span class="focus-input2" data-placeholder="NAME"></span>
                            </div>
                                <div class="wrap-input2">
                                    <input class="input2" type="text" name="email" autoComplete="off" />
                                        <span class="focus-input2" data-placeholder="EMAIL"></span>
                                </div>
                                    <div class="wrap-input2">
                                        <textarea class="input2" name="message"></textarea>
                                        <span class="focus-input2" data-placeholder="MESSAGE"></span>
                                    </div>
                                    <div class="container-contact2-form-btn">
                                        <div class="wrap-contact2-form-btn">
                                            <div class="contact2-form-bgbtn"></div>
                                            <button class="contact2-form-btn">
                                                Send Your Message
                                            </button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
        </footer>
    )
}
