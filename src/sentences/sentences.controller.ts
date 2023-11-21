import { Controller, Get, Post, Body } from '@nestjs/common'
import { SentencesService } from './sentences.service'

@Controller('sentences')
export class SentencesController {
    constructor(private readonly sentencesService: SentencesService) {}

    @Get()
    getAllSentences() {
        return this.sentencesService.getAllSentences()
    }

    @Post()
    createSentence(@Body() sentence: string[]) {
        return this.sentencesService.createSentence(sentence)
    }
}
