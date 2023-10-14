import { IsString, isString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    name: string;
}
