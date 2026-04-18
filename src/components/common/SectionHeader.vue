<!-- src/components/common/SectionHeader.vue -->
<template>
    <div class="section-header">
        <!-- <span class="subtitle">{{ subtitle }}</span> -->
        <h2 class="title">{{ title }}</h2>
        <div class="divider"></div>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'SectionHeader',
    props: {
        subtitle: {
            type: String,
            default: 'Subtitle'
        },
        title: {
            type: String,
            default: 'TITLE'
        },
        description: {
            type: String,
            default: 'Description'
        }
    }
}
</script>

<style scoped>
.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.subtitle {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #3852B4;
    background: rgba(56, 82, 180, 0.1);
    padding: 6px 16px;
    border-radius: 30px;
    margin-bottom: 16px;
}

.title {
    font-size: 36px;
    font-weight: 800;
    color: #1a1a2e;
    margin: 0 0 20px;
    letter-spacing: -0.5px;
}

.divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3852B4, #FFD700);
    margin: 0 auto 20px;
    border-radius: 3px;
}

.description {
    max-width: 600px;
    margin: 0 auto;
    font-size: 16px;
    color: #666;
    line-height: 1.6;
}

@media screen and (max-width: 768px) {
    .title {
        font-size: 28px;
    }
}

@media screen and (max-width: 480px) {
    .title {
        font-size: 24px;
    }
    
    .description {
        font-size: 14px;
    }
}
</style>