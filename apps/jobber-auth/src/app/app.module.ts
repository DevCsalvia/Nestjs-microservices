import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [PrismaModule, GraphQLModule, ],
})
export class AppModule {}
