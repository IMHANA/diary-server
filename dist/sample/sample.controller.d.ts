import { SampleService } from './sample.service';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
export declare class SampleController {
    private readonly sampleService;
    constructor(sampleService: SampleService);
    create(createSampleDto: CreateSampleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSampleDto: UpdateSampleDto): string;
    remove(id: string): string;
}
