
const AIRTABLE_API_KEY = "keyEXAMPLE123"; // zamijeniti stvarnim ključem
const BASE_ID = "appEXAMPLE123"; // zamijeniti stvarnim ID-om baze
const TABLE_NAME = "Recenzije";

const reviewList = document.getElementById("review-list");

fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
  headers: {
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    data.records.forEach((record) => {
      const review = document.createElement("div");
      review.className = "review";
      review.innerHTML = `<p>${record.fields.Tekst}</p><p style="opacity:0.6;font-size:0.9rem;">– ${record.fields.Ime}</p>`;
      reviewList.appendChild(review);
    });
  })
  .catch((err) => {
    console.error("Greška pri dohvaćanju recenzija:", err);
  });
