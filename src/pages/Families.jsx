import { useState } from "react";
import { families } from "../data/data";

function Families() {
  const [search, setSearch] = useState("");

  const filtered = families.filter((family) =>
    `${family.familyName} ${family.head} ${family.area}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <section className="page-hero green-hero">
        <p>OUR COMMUNITY</p>
        <h1>Jamtali <span>Families.</span></h1>
        <div>A community directory celebrating the families who make Jamtali home.</div>
      </section>

      <section className="page-content">
        <div className="page-title">
          <div>
            <p className="section-label">FAMILY DIRECTORY</p>
            <h2>Our Families</h2>
          </div>
          <strong>{families.length}<small>Families</small></strong>
        </div>

        <input
          className="search-input"
          placeholder="Search family or family head..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="family-grid">
          {filtered.map((family) => (
            <article className="info-card" key={family.id}>
              <div className="round-avatar">{family.familyName[0]}</div>
              <h3>{family.familyName}</h3>
              <p><span>Head of Family</span>{family.head}</p>
              <p><span>Family Members</span>{family.members} Members</p>
              <p><span>Area</span>{family.area}, Khagrachari</p>
            </article>
          ))}
        </div>

        {filtered.length === 0 && <div className="empty">No family found.</div>}

        <div className="notice">
          Sample information for website development. Real Jamtali family data can be added later.
        </div>
      </section>
    </>
  );
}

export default Families;
