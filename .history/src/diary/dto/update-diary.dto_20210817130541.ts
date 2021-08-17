import { PartialType } from '@nestjs/mapped-types';
import { CreateDiaryDto } from './create-diary.dto';

export class UpdateDiaryDto extends PartialType(CreatediaryDto) {}
