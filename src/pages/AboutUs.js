import React, {useState } from 'react';
import './../assets/css/Common.css';

function AboutUs() {
  const pramukhs = [
    { name: "G. Gopal Padhi", area: "Kalyan" },
    { name: "Benudhar Viswal", area: "Sakinaka" },
    { name: "Chintamani", area: "Kalyan" },
    { name: "Kali Mishra", area: "Vasai" },
    { name: "Kanhu Sahu", area: "Thane" },
    { name: "Laxmi Charan Panigrahi", area: "Sakinaka" },
    { name: "Manranjan Panda", area: "Sakinaka" },
    { name: "Radhashyam Panigrahi", area: "Sakinaka" },
    { name: "Sanjay Pal", area: "Sakinaka" },
    { name: "Santosh Pradhan", area: "Bhayander" },
    { name: "Sitaram Padhi", area: "Bhayander" },
    { name: "Sahadev Das", area: "Bhayander" },
    { name: "Achutananda Khatua", area: "Colaba" },
    { name: "Ajay Dash", area: "Mumbai" },
    { name: "Devendra Jena", area: "Vasai" },
    { name: "Dinobandhu Sarangi", area: "Colaba" },
    { name: "Gopal Chaudhury", area: "Kurla" },
    { name: "Gopal Krushna", area: "Mumbai" },
    { name: "Kanhu Sahu", area: "Mumbai" },
    { name: "Manas Jena", area: "Mumbai" },
    { name: "Monaranjan", area: "Mumbai" },
    { name: "Niranjan", area: "Mumbai" },
    { name: "Prabodha", area: "Kanjur Marg" },
    { name: "Radha Patro", area: "Malad" },
    { name: "Ranjit Maharana", area: "Mumbai" },
    { name: "Ranjiv", area: "Mumbai" },
    { name: "Ravindra", area: "Colaba" },
    { name: "Sanatan Maharana", area: "Mumbai" },
    { name: "Simanchal Sahu", area: "Sakinaka" },
    { name: "Tukuna Padhi", area: "Bhayander" },
    { name: "Satyapriya Subudhi", area: "Kalyan" },
  ];
  const [search, setSearch] = useState("");

  const filteredPramukhs = pramukhs.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.area.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='container page-container'>
      <div>
        <div style={{ flex: 1 }}>
          <div>

            <h2 className='page-title'>ABOUT US</h2>
            <p>Welcome to <strong>Utkal Jagruti Seva Sangh (UJSS)</strong>—a community of compassionate hearts dedicated to service, unity, and cultural pride. Founded in Mumbai by a group of Pravasi Odias, UJSS stands as a beacon of hope for those in need, offering support, care, and a helping hand during life’s most difficult moments.</p>

            <p>Our organization thrives on the spirit of <em>swayamseva</em> (selfless service), addressing urgent needs like medical aid, disaster relief, cow protection, and support for cancer patients. UJSS is also deeply rooted in the mission of cultural preservation—spreading the values of Odia heritage and instilling those virtues in future generations.</p>

            <p>More than just an organization, UJSS is a growing family of volunteers from all walks of life, working together to transform challenges into opportunities and bring dignity to the lives we touch. Whether it's donating blood, distributing clothes, or guiding someone through spiritual hardship, our volunteers stand firm in solidarity and service.</p>

            <p>Join UJSS and be a part of a greater cause—where each act of kindness echoes far beyond the moment and helps build a compassionate and culturally vibrant society.</p>

            <h3>Our Mission</h3>
            <p>At UJSS, our mission is to serve humanity with compassion and discipline.</p>
            <p>We provide timely aid to the underprivileged and the ailing, especially during times of crisis.</p>
            <p>We aim to resolve physical, mental, financial, and social challenges with dedication.</p>
            <p>UJSS promotes selfless volunteerism rooted in traditional values and unity.</p>
            <p>We strive to uplift lives through service, culture, and collective strength.</p>

            <h3>What We Offer</h3>
            <p><strong>Blood & Medical Support:</strong> Organizing blood donation drives and aiding patients with critical health needs, especially cancer care.</p>
            <p><strong>Disaster Relief & Rehabilitation:</strong> Active involvement in rescue and relief efforts during floods, cyclones, and other emergencies.</p>
            <p><strong>Cultural Preservation:</strong> Promoting and spreading awareness of Odia language, traditions, and values across communities.</p>
            <p><strong>Cow Protection & Seva:</strong> Safeguarding traditional values through the protection and care of cows.</p>
            <p><strong>Spiritual & Moral Upliftment:</strong> Distributing sacred texts like the <em>Bhagavad Gita</em> and providing spiritual guidance to those in distress.</p>
            <p><strong>Community Engagement:</strong> Building a network of volunteers and like-minded partners to expand social impact and outreach.</p>

            <h3>Our Vision</h3>
            <p>We envision UJSS as a dynamic force for social good and cultural revival.</p>
            <p>A society where no one feels abandoned in crisis, and everyone finds support and dignity.</p>
            <p>We aim to revive and sustain Odia culture through shared values and active participation.</p>
            <p>Our goal is to create a compassionate ecosystem led by volunteers and driven by purpose.</p>
            <p>Through love, service, and discipline, we aspire to build a stronger, united nation.</p>

          </div>
          <div>PRAMUKH'S FROM ALL OVER MUMBAI</div>
          <h2>Pramukhs from Mumbai</h2>
      <input
        type="text"
        placeholder="Search by name or area"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "15px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Area</th>
          </tr>
        </thead>
        <tbody>
          {filteredPramukhs.map((p, index) => (
            <tr key={index}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{p.name}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{p.area}</td>
            </tr>
          ))}
          {filteredPramukhs.length === 0 && (
            <tr>
              <td colSpan="2" style={{ padding: "10px", textAlign: "center" }}>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

        </div>

      </div>
    </div>
  );
}

export default AboutUs;
