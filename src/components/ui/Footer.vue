<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Bogor Champions Cup</h3>
                <p>Tournament Mobile Legends Bang Bang</p>
            </div>
            
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tim</a></li>
                    <li><a href="#">Jadwal</a></li>
                    <li><a href="#">Hubungi Kami</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Follow Us</h4>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="TikTok">
                        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.58a6.34 6.34 0 0 0 10.86 4.7 6.34 6.34 0 0 0 1.84-4.48V9.75a8.13 8.13 0 0 0 4.69 1.5V7.93a4.6 4.6 0 0 1-2.8-1.24z"/>
                        </svg>
                    </a>
                    <a href="#" class="social-icon" aria-label="Instagram">
                        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                    </a>
                    <a href="#" class="social-icon" aria-label="YouTube">
                        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>Copyrights © 2026 Tournament. All Rights Reserved</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style scoped>
.footer {
    background: linear-gradient(135deg, #3852B4 0%, #16213e 100%);
    color: #fff;
    padding: 40px 0 0 0;
    position: relative;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    padding: 0 20px 30px;
}

.footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #fff 0%, #a8c0ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-section h4 {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: #a8c0ff;
}

.footer-section p {
    color: #b8b8b8;
    line-height: 1.6;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: #b8b8b8;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: #a8c0ff;
    transform: translateX(5px);
    display: inline-block;
}

.social-icons {
    display: flex;
    gap: 20px;
    margin-top: 15px;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-icon:hover {
    transform: translateY(-3px);
}

/* Individual platform hover colors */
.social-icon:hover .icon {
    filter: drop-shadow(0 0 5px currentColor);
}

.social-icon:nth-child(1):hover {
    background: #000;
    color: #00f2ea;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.social-icon:nth-child(2):hover {
    background: radial-gradient(circle at 30% 110%, #ffdb8f, #ff6154, #ff1b6b, #833ab4);
    color: white;
    box-shadow: 0 5px 15px rgba(255, 27, 107, 0.3);
}

.social-icon:nth-child(3):hover {
    background: #ff0000;
    color: white;
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
}

.icon {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
}

.footer-bottom {
    text-align: center;
    padding: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.2);
}

.footer-bottom p {
    margin: 0;
    color: #888;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        text-align: left;
        gap: 30px;
    }
    
    .social-icons {
        justify-content: left;
    }
    
    .footer-section ul li a:hover {
        transform: translateX(0);
    }
}

/* Smooth animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.footer-section {
    animation: fadeInUp 0.6s ease-out;
}

.footer-section:nth-child(2) {
    animation-delay: 0.1s;
}

.footer-section:nth-child(3) {
    animation-delay: 0.2s;
}
</style>