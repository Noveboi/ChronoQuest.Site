<script lang="ts">
    import Navigate from "$lib/common/components/Navigate.svelte";
    import Reader from "../reading/Reader.svelte";
    import type { ReviewMaterial } from "./review.types";

    const { review }: { review: ReviewMaterial } = $props(); 
</script>

{#snippet takeExam()}
    <Navigate to='/exam'>Take Exam</Navigate>
{/snippet}

<Reader content={review.content} title='Review' footer={takeExam}/>