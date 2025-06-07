<script lang="ts">
    import type { Question } from "../question.types";

    type QuestBoardProps = { question: Question }

    const { question }: QuestBoardProps = $props();
</script>