import { useState } from "react";
import { galleryPhotos } from "../data/data";

function Gallery() {
  const categories = ["All", "Village", "Nature", "Community", "Events"];
  const [category, setCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filtered =
    category === "All"
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === category);

  return (
    <>
      <section className="page-hero gallery-hero">
        <p>MEMORIES OF OUR COMMUNITY</p>
        <h1>Jamtali <span>Gallery.</span></h1>
        <div>
          Places, people, nature and moments that tell the story of our community.
        </div>
      </section>

      <section className="page-content">
        <div className="gallery-heading">
          <div>
            <p className="section-label">PHOTO GALLERY</p>
            <h2 className="large-heading">Our Memories</h2>
          </div>

          <p>
            Demo images are being used for now. Later we will replace these with
            real photographs from Jamtali.
          </p>
        </div>

        <div className="filter-buttons gallery-filter">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((photo) => (
            <button
              className="gallery-card"
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.image} alt={photo.title} />

              <div className="gallery-overlay">
                <span>{photo.category}</span>
                <h3>{photo.title}</h3>
                <p>View Photo ↗</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedPhoto && (
        <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            <div>
              <span>{selectedPhoto.category}</span>
              <h2>{selectedPhoto.title}</h2>
              <p>Jamtali • Khagrachari</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
