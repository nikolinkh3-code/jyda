import { committee } from "../data/data";

const activities = [
  ["🩸", "Blood Donation", "Connecting voluntary donors with people during emergencies."],
  ["🌱", "Community Development", "Youth-led initiatives for a cleaner and stronger Jamtali."],
  ["🎭", "Culture & Events", "Organizing cultural programs and community gatherings."],
  ["🤝", "Social Support", "Standing beside community members during difficult times."],
];

function Club() {
  return (
    <>
      <section className="page-hero club-hero">
        <p>JAMTALI YOUTH DEVELOPMENT ASSOCIATION</p>
        <h1>Youth. Unity. <span>Progress.</span></h1>
        <div>
          A platform for the youth of Jamtali to work together for community,
          culture and positive change.
        </div>
      </section>

      <section className="page-content">
        <p className="section-label">LEADERSHIP</p>
        <h2 className="large-heading">Executive Committee</h2>

        <div className="committee-grid">
          {committee.map((member) => (
            <article className="info-card" key={member.id}>
              <div className="round-avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <div className="gold-role">{member.role}</div>
            </article>
          ))}
        </div>

        <div className="notice">
          Committee names are placeholders. Real JYDA member information can be added later.
        </div>
      </section>

      <section className="activity-section">
        <div className="activity-inner">
          <p className="section-label">WHAT WE DO</p>
          <h2 className="large-heading">Our Activities</h2>

          <div className="activity-grid">
            {activities.map(([icon, title, text]) => (
              <article className="activity-card" key={title}>
                <div>{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Club;
