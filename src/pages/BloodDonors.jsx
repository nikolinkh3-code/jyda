import { useState } from "react";
import useSheetData from "../data/useSheetData";

const builtInDonors = [
  { id: 1, name: "Dinesh Chakma", blood: "A+", phone: "01828875510" },
  { id: 2, name: "Paresh Chakma", blood: "A+", phone: "01557345700" },
  { id: 3, name: "Jiten Chakma", blood: "A+", phone: "01644243412" },
  { id: 4, name: "Pintu Chakma", blood: "A+", phone: "01642770253" },
  { id: 5, name: "Anol Khisa", blood: "A+", phone: "01893095803" },
  { id: 6, name: "Niyan Chakma", blood: "A+", phone: "01616383498" },
  { id: 7, name: "Nirab Chakma", blood: "A+", phone: "01835923677" },
  { id: 8, name: "Nikolin Khisa", blood: "A+", phone: "01865235249" },
  { id: 9, name: "Prahar Khisa", blood: "A+", phone: "" },
  { id: 10, name: "Anwesh Dewan", blood: "A+", phone: "" },
  { id: 11, name: "Prattoy Khisa", blood: "A+", phone: "01767876691" },
  { id: 12, name: "Srabon Chakma", blood: "A+", phone: "" },
  { id: 13, name: "Mithun Chakma 2", blood: "A+", phone: "01630100381" },
  { id: 14, name: "Thirtha Chakma Poranno", blood: "A+", phone: "" },

  { id: 15, name: "Ranjen Khisa", blood: "B+", phone: "01553321476" },
  { id: 16, name: "Chayan Chakma", blood: "B+", phone: "01556633014" },
  { id: 17, name: "Rikel Chakma", blood: "B+", phone: "01855460180" },
  { id: 18, name: "Nirvan Chakma", blood: "B+", phone: "0155670126" },
  { id: 19, name: "Nirjan Chakma", blood: "B+", phone: "01641554273" },
  { id: 20, name: "Amrik Khisa", blood: "B+", phone: "01537450295" },
  { id: 21, name: "Babudhan Chakma", blood: "B+", phone: "" },
  { id: 22, name: "Apon Khisa Chikkomoni", blood: "B+", phone: "01536069180" },
  { id: 23, name: "Hriyan Chakma", blood: "B+", phone: "" },
  { id: 24, name: "Ariyan Chakma", blood: "B+", phone: "" },
  { id: 25, name: "Avigya Chakma", blood: "B+", phone: "" },
  { id: 26, name: "Benton Chakma", blood: "B+", phone: "01557269673" },

  { id: 27, name: "Rintu Chakma", blood: "AB+", phone: "01642770571" },
  { id: 28, name: "Chintu Chakma", blood: "AB+", phone: "01647422482" },
  { id: 29, name: "Pranta Dewan", blood: "AB+", phone: "" },
  { id: 30, name: "Arkid Khisa", blood: "AB+", phone: "" },
  { id: 31, name: "Rimen Chakma", blood: "AB+", phone: "01535753795" },
  { id: 32, name: "Bidhan Khisa", blood: "AB+", phone: "01820702091" },
  { id: 33, name: "Chanchal Chakma", blood: "AB+", phone: "01631629051" },
];

function BloodDonors() {
  const donors = useSheetData("donors", builtInDonors);
  const [bloodFilter, setBloodFilter] = useState("All");
  const [search, setSearch] = useState("");

  const bloodGroups = ["All", ...new Set(donors.map((donor) => donor.blood).filter(Boolean))];

  const filteredDonors = donors.filter((donor) => {
    const matchesBlood =
      bloodFilter === "All" || donor.blood === bloodFilter;

    const matchesSearch =
      donor.name.toLowerCase().includes(search.toLowerCase());

    return matchesBlood && matchesSearch;
  });

  return (
    <>
      <section className="page-hero blood-hero">
        <p>JYDA BLOOD DONOR NETWORK</p>

        <h1>
          Give Blood.
          <span>Save Lives.</span>
        </h1>

        <div>
          Find voluntary blood donors from the Jamtali community
          when someone needs help.
        </div>
      </section>

      <section className="page-content">
        <div className="blood-title-area">
          <div>
            <p className="blood-small-title">COMMUNITY DONORS</p>
            <h2 className="large-heading">Blood Donor List</h2>
          </div>

          <div className="blood-total">
            <strong>{donors.length}</strong>
            <span>Registered Donors</span>
          </div>
        </div>

        <div className="blood-tools">
          <input
            type="text"
            placeholder="Search donor by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="blood-filter-buttons">
            {bloodGroups.map((group) => (
              <button
                key={group}
                className={bloodFilter === group ? "active" : ""}
                onClick={() => setBloodFilter(group)}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        <p className="blood-result-count">
          Showing {filteredDonors.length} donor
          {filteredDonors.length !== 1 ? "s" : ""}
        </p>

        <div className="blood-donor-grid">
          {filteredDonors.map((donor) => (
            <article className="blood-donor-card" key={donor.id}>
              <div className="blood-group-circle">
                {donor.blood}
              </div>

              <div className="blood-donor-info">
                <span className="donor-number">
                  DONOR #{String(donor.id).padStart(2, "0")}
                </span>

                <h3>{donor.name}</h3>

                <div className="donor-blood-label">
                  🩸 Blood Group: <strong>{donor.blood}</strong>
                </div>

                {donor.phone ? (
                  <a
                    className="donor-phone"
                    href={`tel:${donor.phone}`}
                  >
                    ☎ {donor.phone}
                  </a>
                ) : (
                  <span className="donor-phone-missing">
                    Mobile number not added yet
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredDonors.length === 0 && (
          <div className="blood-empty">
            No donor found with this search.
          </div>
        )}

        <div className="blood-note">
          <strong>Important</strong>
          <p>
            Donor information is based on the JYDA blood list.
            Please contact and confirm donor availability before
            relying on the information during an emergency.
          </p>
        </div>
      </section>
    </>
  );
}

export default BloodDonors;
