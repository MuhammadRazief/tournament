<template>
    <div>
        <CarouselComponent 
            :slides="carouselSlides"
            :autoPlay="true"
            :interval="4000"
            :transitionDuration="500"
        />
        <AboutSection />
    </div>
</template>

<script>
import CarouselComponent from '../components/Carousel.vue';
import AboutSection from '@/layouts/home/AboutSection.vue';
export default {
    name: 'HomePage',
    components: {
        CarouselComponent,
        AboutSection
    },
    data() {
        return {
            carouselSlides: [
                {
                    image: require('../assets/daftar.png'),
                },
                {
                    image: require('../assets/susun.png'),
                },
                // {
                //     image: 'https://via.placeholder.com/1200x675/1a2f6a/ffffff?text=Slide+3',
                // }
            ]
        }
    }
}
</script>