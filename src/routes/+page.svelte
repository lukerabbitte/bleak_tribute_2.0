<script>
    
</script>

<div class="home_page">
    <div class="home_page_bio_and_image">
        <div class="home_page_bio">
          <p>
            I'm a graduate of Computer Science and Language at Trinity College Dublin, lover of technology, design, music, writing, and photography.
          </p>
          <p>
            My current interests span software engineering, linguistics, music production, machine learning, and information retrieval. I hope to spend my time building useful, beautiful, and expresive systems.
          </p>
          <p>
            Probably above all, I love listening and talking to new people! Feel free to reach out via the social media links above, or email me <a href="mailto:luke.rabbitte@gmail.com">here</a>.
          </p>
        </div>
    </div>
</div>


<style>
    .home_page {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

    .home_page_bio_and_image {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

/*     @media (max-width: 768px) {
        .home_page_bio_and_image {
            flex-direction: column;
        }
    } */

    .home_page_bio {
        background-color: var(--secondary-color);
        border-radius: 10px;
        padding: 15px;
        flex-grow: 0;
    }

    .home_page_bio p {
        line-height: 1.2;
    }

    .home_page_bio p:first-child {
        margin-top: 0;
    }

    .home_page_bio p:last-child {
        margin-bottom: 0;
    }

</style>