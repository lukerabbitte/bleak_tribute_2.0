<script>
    import { getAllPoemsData } from '$lib/utils/loadMarkdown';
    let poems = [];

    const load = async () => {
        poems = await getAllPoemsData();
    };

    load();
</script>

<h1>Poems</h1>
<ul>
    {#each poems as poem}
        <li><a href={`/poems/${poem.slug}`}>{poem.title}</a></li>
    {/each}
</ul>
