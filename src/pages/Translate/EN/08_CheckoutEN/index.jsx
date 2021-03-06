import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Container } from '../../../../styles/pages/checkout';

function CheckoutEN() {
  const enabledButton = () => {
    const btn = document.getElementById('btnGo');
    if (btn.getAttribute('disabled') !== null) {
      btn.removeAttribute('disabled', 'disabled');
      btn.classList.remove('btnDisabled');
    } else {
      btn.setAttribute('disabled', 'disabled');
      btn.classList.add('btnDisabled');
    }
  };

  React.useEffect(() => {
    const plan = localStorage.getItem('plano');
    if (plan == 'semanal') {
      document.getElementById('btnRedirect').href = 'https://upnid.com/go/p32391?p=571r1&off=zxkqq';
    } else {
      document.getElementById('btnRedirect').href = 'https://upnid.com/go/p32391?p=571r1&off=klyqo';
    }
  }, []);

  return (
    <Container>
      <section data-aos="zoom-in">
        <header>
          <Link to="/PT" className="returnHome">
            <RiArrowLeftLine />
            {' '}
            <span>Start</span>
          </Link>

          <div className="textHeaderCheckout">
            <h1>ATTENTION</h1>
          </div>
        </header>

        <div>
          <p>
            Due to the high demand for orders, we are delivering
            all machines in 1 to 2 business days after payment confirmation.
          </p>

          <p>
            We send all access via email, stay tuned.
          </p>

          <div className="container-input">
            <input onClick={() => enabledButton()} type="checkbox" name="checkboxGo" id="checkboxGo" />

            <label htmlFor="checkboxGo">
              By proceeding, you agree that you will receive
              your machine within the specified time.
            </label>
          </div>

          <a id="btnRedirect" href="# ">
            <button disabled className="btnDisabled" type="button" id="btnGo">Continue</button>
          </a>
        </div>
      </section>
    </Container>
  );
}

export default CheckoutEN;
