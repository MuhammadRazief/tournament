    <template>
        <div class="carousel-container">
            <div class="carousel-wrapper">
                <!-- Carousel Slides -->
                <div 
                    class="carousel-slides"
                    :style="slideStyle"
                    @touchstart="handleTouchStart"
                    @touchmove="handleTouchMove"
                    @touchend="handleTouchEnd"
                >
                    <div 
                        v-for="(slide, index) in slides" 
                        :key="index"
                        class="carousel-slide"
                    >
                        <img :src="slide.image" :alt="slide.title" />
                        <div class="slide-caption" v-if="slide.caption">
                            <h3>{{ slide.title }}</h3>
                            <p>{{ slide.caption }}</p>
                        </div>
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <button 
                    class="carousel-btn prev-btn" 
                    @click="prevSlide"
                    :disabled="isAnimating"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button 
                    class="carousel-btn next-btn" 
                    @click="nextSlide"
                    :disabled="isAnimating"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

                <!-- Dots Indicators -->
                <div class="carousel-dots">
                    <button 
                        v-for="(slide, index) in slides" 
                        :key="index"
                        class="dot"
                        :class="{ active: currentIndex === index }"
                        @click="goToSlide(index)"
                        :disabled="isAnimating"
                    ></button>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        name: 'CarouselComponent',
        props: {
            slides: {
                type: Array,
                required: true,
                default: () => []
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 3000
            },
            transitionDuration: {
                type: Number,
                default: 500
            }
        },
        data() {
            return {
                currentIndex: 0,
                isAnimating: false,
                touchStartX: 0,
                touchEndX: 0,
                autoPlayInterval: null
            }
        },
        computed: {
            slideStyle() {
                return {
                    transform: `translateX(-${this.currentIndex * 100}%)`,
                    transition: this.isAnimating ? `transform ${this.transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none'
                }
            }
        },
        mounted() {
            if (this.autoPlay) {
                this.startAutoPlay();
            }
        },
        beforeUnmount() {
            this.stopAutoPlay();
        },
        methods: {
            nextSlide() {
                if (this.isAnimating) return;
                
                this.isAnimating = true;
                
                if (this.currentIndex === this.slides.length - 1) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex++;
                }
                
                setTimeout(() => {
                    this.isAnimating = false;
                }, this.transitionDuration);
                
                this.resetAutoPlay();
            },
            
            prevSlide() {
                if (this.isAnimating) return;
                
                this.isAnimating = true;
                
                if (this.currentIndex === 0) {
                    this.currentIndex = this.slides.length - 1;
                } else {
                    this.currentIndex--;
                }
                
                setTimeout(() => {
                    this.isAnimating = false;
                }, this.transitionDuration);
                
                this.resetAutoPlay();
            },
            
            goToSlide(index) {
                if (this.isAnimating || index === this.currentIndex) return;
                
                this.isAnimating = true;
                this.currentIndex = index;
                
                setTimeout(() => {
                    this.isAnimating = false;
                }, this.transitionDuration);
                
                this.resetAutoPlay();
            },
            
            // Touch events untuk swipe di mobile
            handleTouchStart(e) {
                this.touchStartX = e.touches[0].clientX;
                this.stopAutoPlay();
            },
            
            handleTouchMove(e) {
                this.touchEndX = e.touches[0].clientX;
            },
            
            handleTouchEnd() {
                const swipeThreshold = 50;
                const diff = this.touchStartX - this.touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }
                
                if (this.autoPlay) {
                    this.startAutoPlay();
                }
                
                this.touchStartX = 0;
                this.touchEndX = 0;
            },
            
            startAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                }
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, this.interval);
            },
            
            stopAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                    this.autoPlayInterval = null;
                }
            },
            
            resetAutoPlay() {
                if (this.autoPlay) {
                    this.stopAutoPlay();
                    this.startAutoPlay();
                }
            }
        }
    }
    </script>

    <style scoped>
    .carousel-container {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        /* border-radius: 16px; */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .carousel-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .carousel-slides {
        display: flex;
        width: 100%;
        will-change: transform;
    }

    .carousel-slide {
        flex: 0 0 100%;
        position: relative;
        /* aspect-ratio: 16 / 9; */
    }

    .carousel-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    /* Caption Style */
    .slide-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        color: white;
        padding: 40px 20px 20px;
        text-align: left;
    }

    .slide-caption h3 {
        font-size: 24px;
        margin: 0 0 8px 0;
        font-weight: 600;
    }

    .slide-caption p {
        font-size: 16px;
        margin: 0;
        opacity: 0.9;
    }

    /* Navigation Buttons */
    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.9);
        border: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 10;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .carousel-btn:hover:not(:disabled) {
        background: white;
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .carousel-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .carousel-btn svg {
        width: 24px;
        height: 24px;
        stroke: #3852B4;
        stroke-width: 2;
    }

    .prev-btn {
        left: 20px;
    }

    .next-btn {
        right: 20px;
    }

    /* Dots Indicators */
    .carousel-dots {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 12px;
        z-index: 10;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
    }

    .dot:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.8);
        transform: scale(1.2);
    }

    .dot.active {
        width: 30px;
        border-radius: 5px;
        background: white;
    }

    .dot:disabled {
        cursor: not-allowed;
    }

    /* Responsive Design */
    @media screen and (max-width: 768px) {
        .carousel-container {
            /* border-radius: 12px; */
        }

        .carousel-btn {
            width: 36px;
            height: 36px;
        }

        .carousel-btn svg {
            width: 20px;
            height: 20px;
        }

        .prev-btn {
            left: 10px;
        }

        .next-btn {
            right: 10px;
        }

        .slide-caption h3 {
            font-size: 18px;
        }

        .slide-caption p {
            font-size: 14px;
        }

        .slide-caption {
            padding: 30px 15px 15px;
        }

        .carousel-dots {
            bottom: 12px;
            gap: 8px;
        }

        .dot {
            width: 8px;
            height: 8px;
        }

        .dot.active {
            width: 24px;
        }
    }

    @media screen and (max-width: 480px) {
        .carousel-btn {
            width: 32px;
            height: 32px;
        }

        .carousel-btn svg {
            width: 18px;
            height: 18px;
        }

        .slide-caption h3 {
            font-size: 16px;
        }

        .slide-caption p {
            font-size: 12px;
        }
    }

    /* Animasi loading effect */
    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }

    .carousel-slide img[src=""] {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
    }
    </style>