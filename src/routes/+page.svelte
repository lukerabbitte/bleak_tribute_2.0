<script>
    
</script>

<div class="home_page">
    <div class="home_page_bio_and_image">
        <div class="home_page_bio">
          <p>
            I'm a graduate of Computer Science and Language at Trinity College Dublin, lover of technology, design, music, writing, and photography.
          </p>
          <p>
            My current interests span software engineering, linguistics, music production, machine learning, and information retrieval.
          </p>
          <p>
            I'm currently working at <a href="https://waxlog.com">Waxlog</a>, an Irish startup building out features for record collectors to browse and organise their music and share their taste to their world. I'm happiest when working at the interface between the arts and technology!
          </p>
          <p>
            I love listening to and meeting people. Feel free to reach out via the social media links above, or email me <a href="mailto:luke.rabbitte@gmail.com">here</a>.
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