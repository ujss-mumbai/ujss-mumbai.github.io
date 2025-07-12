import React from 'react';
import './../assets/css/Common.css';

function AboutOdisha() {
    const data = [
        ["Advocate", "Madhusudan Das"],
        ["Awarded Jamunalal Bajaj", "Ramadevi Choudhury"],
        ["Central Minister", "Harekrushna Mohatab"],
        ["Chief Justice of SC", "Ranganath Mishra"],
        ["Chief Secretary", "Nilamani Senapati"],
        ["Chartered Accountant", "Hrudayananda Naik, Cuttack"],
        ["Cinema Hall", "Sitaram Vilas Talkies (SSBT), Berhampur"],
        ["College", "Ravenshaw College, Cuttack"],
        ["Colour film", "Gapa Helebi Sata"],
        ["D.S.P.", "Guruprasad Das"],
        ["Daily Newspaper", "Dainika Asha"],
        ["District Collector", "Jatindra Nath Mohanty"],
        ["District Magistrate", "Dayanidhi Das"],
        ["Drama", "Babaji, writer Jagmohan Lala"],
        ["Engineering College", "University College of Engineering, Burla"],
        ["Engineering School", "Orissa School of Engineering, Cuttack"],
        ["Essay", "Bibeki, writer Late Radhanath Ray"],
        ["Film of Orissa", "Sita Bibaha"],
        ["Film produced in Orissa", "Shodh"],
        ["Film Studio", "Kalinga Studio, Bhubaneswar"],
        ["Freedom Fighter", "Bir Surendra Sai"],
        ["Governor", "Harekrushna Mohatab"],
        ["Graduate", "Madhusudan Das"],
        ["I.C.S.", "Nilamani Senapati"],
        ["Lady Advocate", "Sudhanshubala Hajra"],
        ["Lady Chief Minister", "Nandini Satpathy"],
        ["Lady Director of Cinema", "Parvati Ghosh"],
        ["Lady I.A.S.", "Pragyan Paramita Das"],
        ["Lady I.P.S.", "Somya Mishra"],
        ["Lady Justice of Highcourt", "Amiya Kumari Padhi"],
    ];
    return (
        <div className='container page-container'>
            <div>
                <div style={{ flex: 1 }}>
                    <div>

                        <h2 className='page-title'>First in ODISHA</h2>
                        <p>In this page you'll find more information about orissa. Visit regularly & know more about orissa</p>

                        <div style={{ overflowX: "auto" }}>
                            <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
                                <thead>
                                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                                        <th style={{ padding: "8px", textAlign: "left" }}>Category</th>
                                        <th style={{ padding: "8px", textAlign: "left" }}>Person/Institution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(([title, name], index) => (
                                        <tr key={index}>
                                            <td style={{ padding: "8px" }}>{title}</td>
                                            <td style={{ padding: "8px" }}>{name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutOdisha;
