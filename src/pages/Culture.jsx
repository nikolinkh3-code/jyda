import { useState } from "react";
import { culturalPrograms as builtInCulturalPrograms } from "../data/data";
import useSheetData from "../data/useSheetData";

function Culture() {
  const culturalPrograms = useSheetData("culture", builtInCulturalPrograms);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? culturalPrograms
      : culturalPrograms.filter(
          (program) => program.type === filter
        );

  return (
    <>
      <section className="page-hero culture-hero">

        <p>OUR CULTURE • OUR IDENTITY</p>

        <h1>
          Celebrate.
          <span>Together.</span>
        </h1>

        <div>
          Celebrating the traditions, creativity and community
          spirit of Jamtali through cultural programs and events.
        </div>

      </section>


      <section className="page-content">

        <div className="culture-heading">

          <div>

            <p className="culture-label">
              JYDA EVENTS
            </p>

            <h2 className="large-heading">
              Cultural Programs
            </h2>

          </div>


          <p>
            Discover community celebrations, cultural activities
            and events organized by JYDA.
          </p>

        </div>


        <div className="filter-buttons culture-filter">

          {["All", "Upcoming", "Past"].map((item) => (

            <button
              key={item}

              className={
                filter === item
                  ? "active"
                  : ""
              }

              onClick={() =>
                setFilter(item)
              }
            >

              {item}

            </button>

          ))}

        </div>


        <div className="program-grid">

          {filtered.map((program) => (

            <article
              className="program-card"
              key={program.id}
            >

              <div className="program-visual">

                <span>
                  {program.icon}
                </span>


                <div
                  className={`event-status ${program.type.toLowerCase()}`}
                >

                  {program.type}

                </div>

              </div>


              <div className="program-content">

                <div className="program-meta">

                  <span>
                    📅 {program.date}
                  </span>

                  <span>
                    📍 {program.location}
                  </span>

                </div>


                <h3>
                  {program.title}
                </h3>


                <p>
                  {program.description}
                </p>

              </div>

            </article>

          ))}

        </div>


        {filtered.length === 0 && (

          <div className="empty">

            No programs have been added
            in this category yet.

          </div>

        )}


        <div className="notice culture-notice">

          <strong>
            JYDA Cultural Programs
          </strong>

          <p>
            Official event information and photographs
            will be added as programs are announced.
          </p>

        </div>

      </section>


      <section className="culture-message">

        <p>
          JAMTALI • KHAGRACHARI
        </p>

        <h2>

          Keeping our culture

          <span>
            {" "}alive together.
          </span>

        </h2>

        <div>

          Culture connects generations,
          strengthens friendship and preserves
          the memories that make our
          community special.

        </div>

      </section>

    </>
  );
}

export default Culture;
