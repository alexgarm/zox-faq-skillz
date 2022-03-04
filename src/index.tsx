import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <main id="template-page-faq" className="shopify-section faq-page" data-check-for-order="true">
            <div id="shopify-section-page-faq__banner" className="shopify-section banner faq-banner overlaid-header-option">
                <section className="section
                        
                        is-width-wide">
                    <div className="container equal-columns--outside-trim">
                        <div className="banner__wrapper one-whole column dark-overlay-false is-medium">
                            <div className="banner__content card-content">
                                <div className="banner__text text-align-center">
                                    <h1 className="banner__heading title">Contact Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="section__wrapper section">
                <div className="container">
                    <div id="shopify-section-page-faq__main" className="shopify-section faq-template-section jsFAQ">
                        <section className="">
                            <div className="container">
                                <div className="hide-when-banner-enabled">
                                    <div
                                        className="heading-wrapper--faq heading-wrapper one-whole column is-flex is-flex-column is-align-left text-align-left">
                                        <h1 className="faq__title title">Contact Us</h1>
                                        <div className="heading-divider heading-divider--short"></div>
                                    </div>
                                </div>
                                <div className="one-whole column"></div>
                            </div>
                        </section>
    
                        <script data-theme-editor-load-script=""
                            src="//cdn.shopify.com/s/files/1/2031/9599/t/226/assets/z__jsFAQ.js?v=7278234852773973849">
                            </script>
                    </div>
                    <div className="page-faq__column-wrap container column-wrapper">
                        <div className="one-half medium-down--one-whole column faq faq__column-1">
                            <div id="shopify-section-page-faq__column1" className="shopify-section faq-template-column-1">
                                <dl className="faq-accordion accordion-icon--plus_and_minus">
                                    <div className="globo-formbuilder" data-id="70500" id="globo-formbuilder-70500">
                                        <div className="globo-form boxed-form globo-form-id-70500">
                                            <div className="globo-form-app boxed-layout">
                                                <div className="header dismiss  hidden "
                                                    onclick=" Globo.FormBuilder.closeModalForm(this)">
                                                    <svg viewBox="0 0 20 20" className="" focusable="false" aria-hidden="true">
                                                        <path
                                                            d="M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z"
                                                            fill-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                              
                                             
    
                                            </div>
    
                                        </div>
                                    </div>
                                    <h2 className="title faq-title">ZOX FAQs</h2>
                                    <h2 className="title faq-title">Ordering</h2>
                                    
                        <div className="one-half medium-down--one-whole column faq faq__column-2">
                            <div id="shopify-section-page-faq__column2" className="shopify-section faq-template-column-2">
    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
