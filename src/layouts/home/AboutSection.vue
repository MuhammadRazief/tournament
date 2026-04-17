<template>
    <div class="about-section">
        <div class="container">
            <!-- Section Header -->
            <div class="section-header">
                <span class="subtitle">Tentang Kami</span>
                <p class="description">
                    Turnamen Mobile Legends Bang Bang terbaru di Kota Bogor yang mempertemukan 
                    tim-tim terbaik dari berbagai daerah
                </p>
            </div>

            <!-- Main Content -->
            <div class="about-content">
                <div class="about-image">
                    <img src="@/assets/BCC1.png" alt="Tentang Bogor Champions Cup" />
                </div>

                <div class="about-text">
                    <h3>Turnamen MLBB Terbaru di Bogor</h3>
                    <p>
                        Bogor Champions Cup adalah turnamen Mobile Legends Bang Bang yang baru didirikan 
                        dengan tujuan mengembangkan bakat-bakat muda E-Sports di wilayah Bogor dan sekitarnya.
                    </p>
                    <p>
                        Sebagai turnamen pendatang baru, kami berkomitmen untuk memberikan pengalaman bertanding 
                        yang profesional dan berkesan bagi setiap peserta. Turnamen ini akan menjadi wadah bagi 
                        para player MLBB untuk menunjukkan kemampuan terbaik mereka.
                    </p>
                    
                </div>
            </div>

            <!-- Call to Action -->
            <div class="about-cta">
                <div class="cta-content">
                    <h3>Bergabung Bersama Kami</h3>
                    <p>Daftarkan tim MLBB Anda sekarang dan raih prestasi tertinggi di Bogor Champions Cup</p>
                    <button class="btn-join">Daftar Sekarang →</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Section Header */
.section-header {
    text-align: left;
    margin-bottom: 60px;
}

.subtitle {
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #3852B4;
    background: rgba(56, 82, 180, 0.1);
    padding: 6px 16px;
    border-radius: 30px;
    margin-bottom: 16px;
}

.description {
    max-width: 700px;
    /* margin: 0 auto; */
    font-size: 18px;
    color: #666;
    line-height: 1.6;
}

/* About Content */
.about-content {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 50px;
    margin-bottom: 80px;
    align-items: center;
}

.about-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.about-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.about-image:hover img {
    transform: scale(1.05);
}

.about-text h3 {
    font-size: 28px;
    color: #1a1a2e;
    margin: 0 0 20px;
}

.about-text p {
    font-size: 16px;
    line-height: 1.8;
    color: #666;
    margin-bottom: 20px;
}


/* Call to Action */
.about-cta {
    background: linear-gradient(135deg, #3852B4 0%, #2a3f8a 100%);
    border-radius: 20px;
    padding: 60px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(56, 82, 180, 0.3);
}

.cta-content h3 {
    font-size: 32px;
    color: white;
    margin: 0 0 15px;
}

.cta-content p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 30px;
}

.btn-join {
    background: #FFD700;
    color: #1a1a2e;
    border: none;
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-join:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background: #ffe44d;
}

/* Responsive */
@media screen and (max-width: 968px) {
    .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .title {
        font-size: 28px;
    }

    .description {
        font-size: 16px;
    }

    .about-text h3 {
        font-size: 24px;
    }

    .about-cta {
        padding: 40px 30px;
    }

    .cta-content h3 {
        font-size: 24px;
    }
}

@media screen and (max-width: 576px) {
    .about-section {
        padding: 50px 0;
    }

    .feature {
        flex-direction: column;
        text-align: center;
    }

    .feature-icon {
        margin: 0 auto;
    }

    .cta-content p {
        font-size: 16px;
    }

    .btn-join {
        padding: 12px 24px;
        font-size: 14px;
    }
}
</style>