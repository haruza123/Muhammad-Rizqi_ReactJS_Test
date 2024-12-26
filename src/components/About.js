import React from 'react';
import "./About.css";
import profileImage from "../assets/WS_kecil.png";

function About() {
    return (
        <div className="about-container">
            <div className="profile-header">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <div className="profile-info">
                    <h1>Muhammad Rizqi Winassyabani</h1>
                    <p>Pisangan Jaya, Tangerang, Banten, Indonesia</p>
                </div>
            </div>
            <div className="profile-content">
                <div className="section">
                    <h2>Pendidikan</h2>
                    <ul>
                        <li>SD Negeri 13 Petang Jakarta</li>
                        <li>SMP Negeri 205 Jakarta</li>
                        <li>SMA Negeri 84 Jakarta</li>
                        <li>Universitas Multimedia Nusantara - Informatika</li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Organisasi</h2>
                    <ul>
                        <li>Dekor</li>
                        <li>Game Jam</li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Pengalaman Kerja</h2>
                    <ul>
                        <li>
                            <strong>Full-Stack Developer</strong> (University Project: <em>Elegante</em>) <br />
                            <small>Oktober 2023 - Desember 2023</small>
                            <ul>
                                <li>Mengembangkan platform berbasis web untuk menampilkan menu restoran dan memungkinkan pelanggan memesan secara online.</li>
                                <li>Merancang antarmuka pengguna (UI/UX) yang ramah pengguna untuk meningkatkan pengalaman pelanggan.</li>
                                <li>Membangun dan mengelola basis data relasional menggunakan MariaDB untuk pengelolaan menu dan pesanan.</li>
                                <li>Mengintegrasikan data dinamis dari basis data ke dalam website, memastikan pembaruan secara real-time.</li>
                                <li>Menggunakan framework Bootstrap untuk desain responsif dan pengembangan front-end yang efisien.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Front-End Developer</strong> (University Project: <em>Musico</em>) <br />
                            <small>Maret 2023 - Juni 2023</small>
                            <ul>
                                <li>Membangun antarmuka pengguna (UI/UX) yang intuitif menggunakan React.js, HTML, dan CSS.</li>
                                <li>Mengintegrasikan data dari Deezer API untuk menampilkan informasi musik seperti judul, genre, dan jumlah pemutaran.</li>
                                <li>Mengembangkan fitur pemutar musik yang tangguh untuk meningkatkan pengalaman pengguna.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Portofolio</h2>
                    <p>
                        Untuk melihat proyek lainnya, silakan kunjungi website portofolio saya di{' '}
                        <a href="https://rizqiportofolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                            rizqiportofolio.netlify.app
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
