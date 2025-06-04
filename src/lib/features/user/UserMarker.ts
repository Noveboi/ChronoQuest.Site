import { getContext, setContext } from "svelte"

export interface UserMarker {
    chapterId: string | null
    questionId:  string | null
    examId: string | null
}

class UserMarkerClass implements UserMarker {
    chapterId: string | null
    questionId:  string | null
    examId: string | null

    constructor(marker: UserMarker) {
        this.chapterId = marker.chapterId;
        this.questionId = marker.questionId;
        this.examId = marker.examId;
    }

    get url(): string {
        if (this.examId) {
            return '/exam';
        }

        if (this.chapterId) {
            const url = `/chapters/${this.chapterId}`;
            if (this.questionId) {
                return `${url}/questions/${this.questionId}`;
            }

            return url;
        }

        // Fallback
        return '/chapters';
    }

    hasStarted = () => this.chapterId !== null || this.examId !== null || this.questionId !== null;
}

const KEY = "$_Marker";
type MarkerContextValue = UserMarkerClass;

export const setMarkerContext = (marker: UserMarker): MarkerContextValue => {
    return setContext(KEY, new UserMarkerClass(marker));
}

export const getMarkerContext = () => {
    return getContext(KEY) as MarkerContextValue;
}