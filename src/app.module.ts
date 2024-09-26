import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:bBuSArKBMZQbUMJALybHPSu9PM5to8x3vKaRgwlIE0buwmDFMX4Qn4dwLwb1wwyy@109.123.239.215:27016?directConnection=true'),
    CatsModule,
  ],
})
export class AppModule {}
