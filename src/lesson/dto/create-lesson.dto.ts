export class CreateLessonDto {
    readonly title: string;
    readonly content: string;
    readonly materials: {
        title: string;
        url: string;
    }[];
    readonly courseId: string;
    readonly order: number;
}
