<script>
    import BallCanvas from '$lib/components/BallCanvas.svelte'
    import DotsCanvas from '$lib/components/DotsCanvas.svelte';
    import DailyImage from '$lib/components/DailyImage.svelte'
    export let authorName;
</script>

<div class="nav_card_container">
    <div class="dots_canvas_background">
        <DotsCanvas />
    </div>
    <div class="nav_card_author_info_box">
        <div class="nav_card_name_and_icons">
            <h1 class="nav_card_author_name">
                {authorName}
            </h1>
            <div class="nav_card_daily_icons_holder">
                <div class="nav_card_daily_image_holder" title="Luke's image of the day">
                    <DailyImage />
                </div>
                <div class="nav_card_ball_canvas">
                    <BallCanvas />
                </div>
            </div>
        </div>
        <nav class="nav_card_nav">
            <a href="/">Home</a>
            <a href="https://github.com/lukerabbitte">GitHub</a>
            <a href="https://www.linkedin.com/in/lukerabbitte/">LinkedIn</a>
            <a href="mailto:luke.rabbitte@gmail.com">Email</a>
        </nav>
    </div>
</div>

<style>
    .nav_card_container {
        height: var(--nav-height);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;
        border: 1px solid var(--secondary-color);
        border-radius: 10px;
    }

    .dots_canvas_background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: var(--secondary-color);
        border-radius: 10px;
    }

    .nav_card_author_info_box {
        border-radius: 10px;
        text-align: left;
        display: flex;
        flex-direction: column;
        padding: 10px;
        z-index: 10;
    }

    .nav_card_name_and_icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .nav_card_daily_icons_holder {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .nav_card_daily_image_holder {
        transition: transform 0.3s ease;
    }

    .nav_card_daily_image_holder:hover {
        transform: scale(1.1);
    }

    .nav_card_ball_canvas {
        border-radius: 10px;
        max-width: 3em;
        max-height: 3em;
        flex: 1;
        transition: transform 0.3s ease;
    }

    .nav_card_ball_canvas:hover {
        transform: scale(1.1);
    }

    .nav_card_nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: baseline;
        gap: 10px;
    }

    @media (max-width: 480px) {
        .nav_card_nav {
            justify-content: space-between;
        }
    }

    .nav_card_nav a {
        color: var(--accent-color-1);
        text-decoration: none;
        font-weight: 700;
        background: var(--primary-color);
        border-radius: 10px;
        padding: 0.2em 0.4em;
    }
</style>