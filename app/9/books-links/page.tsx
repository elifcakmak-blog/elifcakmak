import React from 'react';
import './book-links.css'; // Import your updated CSS file

const BooksLinks: React.FC = () => {
  return (
    <section className="books_subscribe-links">
        <div className="books_wrapper-social-cards">
            <a 
                id="1"
                href="https://www.wattpad.com/user/muslimsuccesspath"
                target="_blank"
                className="books_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/wattpad.png"
                    loading="lazy" 
                    alt="Wattpad icon" 
                    className="books_icon-1x1-xlarge"
                />
                <div>
                    <p className="books_text-size-tiny books_text-color-charcoal"><strong>Read on</strong></p>
                    <p className="books_text-size-medium books_text-color-charcoal books_text-weight-bold">Wattpad</p>
                </div>
            </a>

            <a 
                id="2"
                href="https://www.linkedin.com/company/muslim-success-path/about"
                target="_blank"
                className="books_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/linkedin.png"
                    loading="lazy" 
                    alt="LinkedIn logo" 
                    className="books_icon-1x1-xlarge"
                />
                <div>
                    <p className="books_text-size-tiny books_text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="books_text-size-medium books_text-color-charcoal books_text-weight-bold">LinkedIn</p>
                </div>
            </a>

            <a 
                id="3"
                href="https://www.instagram.com/muslim.success.path"
                target="_blank"
                className="books_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/instagram.jpg"
                    loading="lazy" 
                    alt="Instagram icon" 
                    className="books_icon-1x1-xlarge"
                />
                <div>
                    <p className="books_text-size-tiny books_text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="books_text-size-medium books_text-color-charcoal books_text-weight-bold">Instagram</p>
                </div>
            </a>

            <a 
                id="5"
                href="https://x.com/muslimsuccess_"
                target="_blank"
                className="books_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/twitter.png"
                    loading="lazy" 
                    alt="X logo" 
                    className="books_icon-1x1-xlarge"
                />
                <div>
                    <p className="books_text-size-tiny books_text-color-charcoal"><strong>Follow On</strong></p>
                    <p className="books_text-size-medium books_text-color-charcoal books_text-weight-bold">X</p>
                </div>
            </a>
        </div>
    </section>
  );
};

export default BooksLinks;