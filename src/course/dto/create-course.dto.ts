export class CreateCourseDto {
    readonly title: string;
    readonly slug: string;
    readonly minAge?: number;
    readonly maxAge?: number;
}
