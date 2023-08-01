import { readBlockConfig } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  const cfg = readBlockConfig(block);

  console.log('myblock is:', block, cfg);
}
