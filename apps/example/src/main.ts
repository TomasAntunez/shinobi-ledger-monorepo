import { Clock } from '@shinobi-ledger/shared/dates';

const firstClock = Clock.create();

setTimeout(() => {
  console.log('First clock -> ', firstClock.toTimestamp());
  console.log('Second clock -> ', Clock.createTimestamp());
}, 10);
