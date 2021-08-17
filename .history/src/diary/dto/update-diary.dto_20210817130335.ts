import { PartialType } from '@nestjs/mapped-types';
import { CreatediaryDto } from './create-diary.dto';

export class UpdateDiaryDto extends PartialType(CreatediaryDto) {}
