<script>
    export let poemData;
</script>

<div class="poem-post">
    <h1>{poemData.title}</h1>
    <p><em>Published on {poemData.date}</em></p>
    <div>
        {@html poemData.content}
    </div>
</div>
