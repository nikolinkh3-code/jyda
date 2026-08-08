import { useState } from "react";

function Donation() {
  const [method, setMethod] = useState("bKash");

  const methods = {
    bKash: {
      icon: "📱",
      title: "bKash",
      number: "Payment number will be added soon",
      type: "JYDA Official Account",
    },
    Nagad: {
      icon: "📲",
      title: "Nagad",
      number: "Payment number will be added soon",
      type: "JYDA Official Account",
    },
    Bank: {
      icon: "🏦",
      title: "Bank Transfer",
      number: "Bank information will be added soon",
      type: "JYDA Official Account",
    },
  };

  const supportAreas = [
    {
      icon: "🩸",
      title: "Emergency Support",
      text: "Helping community members during urgent and difficult situations.",
    },
    {
      icon: "🎓",
      title: "Youth Development",
      text: "Supporting activities that encourage learning, leadership and youth participation.",
    },
    {
      icon: "🎭",
      title: "Culture & Events",
      text: "Helping organize cultural programs and community celebrations.",
    },
    {
      icon: "🌱",
      title: "Community Projects",
      text: "Supporting initiatives for a cleaner, stronger and more connected Jamtali.",
    },
  ];

  return (
    <>
      <section className="page-hero donation-hero">
        <p>SUPPORT OUR COMMUNITY</p>

        <h1>
          Give a Little.
          <span>Change a Lot.</span>
        </h1>

        <div>
          Your support can help JYDA continue community activities, youth
          initiatives and assistance for people in need.
        </div>
      </section>

      <section className="page-content donation-content">
        <div className="donation-heading">
          <div>
            <p className="donation-label">MAKE A CONTRIBUTION</p>
            <h2 className="large-heading">Support JYDA</h2>
          </div>

          <p>
            Choose a payment method below. Official payment information will be
            published after verification by JYDA.
          </p>
        </div>

        <div className="donation-layout">
          <div className="payment-area">
            <h3>Choose Payment Method</h3>

            <div className="payment-tabs">
              {Object.keys(methods).map((item) => (
                <button
                  key={item}
                  className={method === item ? "active" : ""}
                  onClick={() => setMethod(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="payment-card">
              <div className="payment-icon">
                {methods[method].icon}
              </div>

              <p className="payment-small">DONATE WITH</p>

              <h2>{methods[method].title}</h2>

              <div className="payment-number">
                {methods[method].number}
              </div>

              <p className="payment-type">
                {methods[method].type}
              </p>

              <div className="payment-pending">
                <span>🔒</span>

                <div>
                  <strong>Payment details pending</strong>
                  <p>
                    For safety, no sample or unverified payment number is shown
                    on this website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="donation-note">
            <p>WHY SUPPORT JYDA?</p>

            <h2>
              Every contribution
              <span> matters.</span>
            </h2>

            <div className="donation-line"></div>

            <p className="donation-note-text">
              JYDA is built around community participation. Contributions can
              support social initiatives, youth activities, cultural programs
              and assistance for people in need.
            </p>

            <div className="donation-location">
              <span>📍</span>

              <div>
                <strong>Jamtali</strong>
                <p>Khagrachari Hill District, Bangladesh</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="support-section">
        <div className="support-inner">
          <div className="support-heading">
            <p>YOUR SUPPORT CAN HELP</p>
            <h2>Where contributions can make an impact.</h2>
          </div>

          <div className="support-grid">
            {supportAreas.map((area) => (
              <article className="support-card" key={area.title}>
                <div>{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="transparency-section">
        <div className="transparency-icon">✓</div>

        <p>TRANSPARENCY</p>

        <h2>
          Community trust comes
          <span> first.</span>
        </h2>

        <div className="transparency-text">
          Official payment information and donation records should be verified
          by JYDA before publication.
        </div>
      </section>
    </>
  );
}

export default Donation;
