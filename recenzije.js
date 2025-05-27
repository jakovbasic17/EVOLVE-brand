
const token = 'patkZGTbphOqv99Di.e6318f5ce7a0f4319001b8ff9733d1430d2b1ec920f5724a19123c01de48de40';
const baseId = 'app3DC9xsS3eOHcdc';
const tableName = 'recenzije';

const reviewList = document.getElementById('review-list');

fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then((res) => res.json())
  .then((data) => {
    if (!data.records || data.records.length === 0) {
      reviewList.innerHTML = '<p>Trenutno nema recenzija.</p>';
      return;
    }

    data.records.forEach((record) => {
      const fields = record.fields;
      const div = document.createElement('div');
      div.className = 'review';
      div.innerHTML = `
        <h3>${fields['Ime prezime'] || 'Anonimno'}</h3>
        <p>"${fields['komentar'] || ''}"</p>
        <p><strong>Ocjena:</strong> ${fields['ocjena'] || 'N/A'} ⭐</p>
      `;
      reviewList.appendChild(div);
    });
  })
  .catch((err) => {
    console.error('Greška pri dohvaćanju recenzija:', err);
    reviewList.innerHTML = '<p>Greška pri dohvaćanju recenzija. Pokušajte kasnije.</p>';
  });
