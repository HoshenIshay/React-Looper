import drums from '../tracks/DRUMS.mp3';
import vocal from '../tracks/B VOC.mp3';
import tamp from '../tracks/_tambourine_shake_higher.mp3';
import hehe from '../tracks/HE HE VOC.mp3';
import high from '../tracks/HIGH VOC.mp3';
import jibbrish from '../tracks/JIBRISH.mp3';
import lead from '../tracks/LEAD 1.mp3';
import uuho from '../tracks/UUHO VOC.mp3';
// import ALL from '../tracks/ALL TRACK.mp3' ; 

export const TRACKS = [
  { audio: new Audio(drums), name: 'Track A' },
  { audio: new Audio(vocal), name: 'Track B' },
  { audio: new Audio(tamp), name: 'Track C' },
  { audio: new Audio(hehe), name: 'Track D' },
  { audio: new Audio(high), name: 'Track E' },
  { audio: new Audio(jibbrish), name: 'Track F' },
  { audio: new Audio(lead), name: 'Track G' },
  { audio: new Audio(uuho), name: 'Track H' },
  // { audio: new Audio(ALL), name: 'Track I' },
];
