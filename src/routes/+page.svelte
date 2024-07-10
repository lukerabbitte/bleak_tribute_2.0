<script>
    import BallCanvas from '$lib/components/BallCanvas.svelte'
    import DotsCanvas from '$lib/components/DotsCanvas.svelte';

</script>



<div class="browse_page">

    <div class="browse_page_container">
        <div class="dots_canvas_background">
            <DotsCanvas />
        </div>
        <div class="browse_page_author_info_box">
            <h1 class="browse_page_author_name">
                Luke Rabbitte
            </h1>
            <div class="browse_page_ball_canvas">
                <BallCanvas />
            </div>
        </div>
    </div>

    <div class="bio">
      <p>
        I am a First-Class Computer Science and Language Graduate from Trinity College Dublin, lover of design, and observer of people.
      </p>
      <p>
        I discovered the freedom-giving power of creative software as a teenager, be it for music, video, or photography.
      </p>
      <p>
        Learning how to build software fit naturally into my affinity for deep and expressive systems.
      </p>
      <p>
        In anything I do, I hope I become a maker of tasteful machines.
      </p>
      <p>
        My current interests span full-stack engineering, linguistics, music production, machine learning, and information retrieval.
      </p>
      <p>
        Probably above all, I love listening and talking to new people! Feel free to reach out via the social media links above, or email me <a href="mailto:luke.rabbitte@gmail.com">here</a>.
      </p>
    </div>
</div>


<style>

    .browse_page {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

    .browse_page_container {
        width: 100%;
        height: 200px;
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

    .browse_page_author_info_box {
        border-radius: 10px;
        text-align: left;
        display: flex;
        flex-direction: row;
        padding: 10px;
        align-items: center;
        z-index: 10;
        transition: background-color 0.5s ease;
    }

    .browse_page_author_info_box:hover {
        background-color: transparent;
    }

    .browse_page_author_name {
        flex: 1;
    }

    .browse_page_ball_canvas {
        border-radius: 10px;
        max-width: 3em;
        max-height: 3em;
        flex: 1;
    }

    .bio {
      width: 100%;
    }

</style>