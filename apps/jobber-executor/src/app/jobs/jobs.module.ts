import { Module } from '@nestjs/common';
import { PulsarModule } from '@jobber/pulsar';
import { FibonacciConsumer } from './fibonacci/fibonacci.consumer';

@Module({
  imports: [PulsarModule],
  controllers: [],
  providers: [FibonacciConsumer],
})
export class JobsModule {}
