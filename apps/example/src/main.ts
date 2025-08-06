import { Clock } from '@shinobi-ledger/shared';

const firstClock = Clock.create();

setTimeout(() => {
  console.log('First clock -> ', firstClock.toTimestamp());
  console.log('Second clock -> ', Clock.createTimestamp());
}, 10);
