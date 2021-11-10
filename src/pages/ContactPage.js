import React from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import "../css/ContactPage.css";
const ContactPage = () => {
  return (
    <div>
      <Header title="ContactPage" />
      <section className="contact">
        <div className="Wrapper">
          <h3 className="contact__title">Contact Us</h3>
          <p className="contact__desc">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <div className="contact__inner">
            <div className="contact__social">
              <h3>Saitama</h3>
              <p>
                Cras fermentum odio eu feugiat. Justo eget magna fermentum
                iaculis eu non diam phasellus. Scelerisque felis imperdiet proin
                fermentum leo. Amet volutpat consequat mauris nunc congue.
              </p>
              <div className="contact__icon">
                <a href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="/">
                  <i className="fab fa-facebook" />
                </a>
                <a href="/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="/">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="contact__address">
              <div className="contact__address-item contact__address-item--map">
                <i className="fas fa-map-marker-alt"></i>
                <p>A108 Adam Street New York, NY 535022</p>
              </div>
              <div className="contact__address-item">
                <i className="fas fa-envelope"></i>
                <p>info@example.com</p>
              </div>
              <div className="contact__address-item contact__address-item--phone">
                <i className="fas fa-mobile" />
                <p>+84999888666</p>
              </div>
            </div>
            <div className="contact__form">
              <form action>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" defaultValue={""} />
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
