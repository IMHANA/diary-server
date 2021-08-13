import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
export declare class SampleService {
    create(createSampleDto: CreateSampleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSampleDto: UpdateSampleDto): string;
    remove(id: number): string;
}
