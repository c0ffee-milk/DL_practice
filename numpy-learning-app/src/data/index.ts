import type { Topic } from '../types';
import { topic01 } from './topics/01-intro';
import { topic02 } from './topics/02-installation';
import { topic03 } from './topics/03-ndarray';
import { topic04 } from './topics/04-dtypes';
import { topic05 } from './topics/05-attributes';
import { topic06 } from './topics/06-create';
import { topic07 } from './topics/07-from-existing';
import { topic08 } from './topics/08-from-ranges';
import { topic09 } from './topics/09-slicing';
import { topic10 } from './topics/10-advanced-indexing';
import { topic11 } from './topics/11-broadcast';
import { topic12 } from './topics/12-iteration';
import { topic13 } from './topics/13-array-ops';
import { topic14 } from './topics/14-bitwise';
import { topic15 } from './topics/15-strings';
import { topic16 } from './topics/16-math';
import { topic17 } from './topics/17-arithmetic';
import { topic18 } from './topics/18-statistics';
import { topic19 } from './topics/19-sorting';
import { topic20 } from './topics/20-byte-swap';
import { topic21 } from './topics/21-copies-views';
import { topic22 } from './topics/22-matrix';
import { topic23 } from './topics/23-linalg';
import { topic24 } from './topics/24-io';
import { topic25 } from './topics/25-matplotlib';
import { topic26 } from './topics/26-quiz-1';
import { topic27 } from './topics/27-quiz-2';
import { topic28 } from './topics/28-quiz-3';

export const topics: Topic[] = [
  topic01,
  topic02,
  topic03,
  topic04,
  topic05,
  topic06,
  topic07,
  topic08,
  topic09,
  topic10,
  topic11,
  topic12,
  topic13,
  topic14,
  topic15,
  topic16,
  topic17,
  topic18,
  topic19,
  topic20,
  topic21,
  topic22,
  topic23,
  topic24,
  topic25,
  topic26,
  topic27,
  topic28,
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};

export const getFirstTopic = (): Topic => {
  return topics[0];
};