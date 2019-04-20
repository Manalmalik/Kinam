import {
  trigger,
  animate,
  keyframes,
  style,
  transition
} from '@angular/animations';

export const LOGO_ANIMATIONS = [
  trigger('left', [
    transition(
      '0 => 1',
      animate(
        '2000ms cubic-bezier(0.17,0.43,0.75,0.97)',
        keyframes([
          style({
            transform: 'rotate(-90deg) translateY(-50%) translateX(25%) scale(0.7)',
            display: 'block',
            opacity: '0',
            offset: 0,
            filter: 'blur(100px)'
          }),
          style({
            offset: 1
          })
        ])
      )
    ),
    transition(
      '1 => 0',
      animate(
        `2000ms cubic-bezier(0.17,0.43,0.75,0.97)`,
        keyframes([
          style({
            transform: `rotate(-90deg) translateY(-50%) translateX(25%) scale(0.7)`,
            opacity: '0',
            offset: 1.0,
            filter: 'blur(100px)'
          })
        ])
      )
    )
  ]),
  trigger('right', [
    transition(
      '0 => 1',
      animate(
        '2000ms ease-in-out',
        keyframes([
          style({
            transform: `rotate(90deg) translateY(-50%) translateX(-25%) scale(0.7)`,
            opacity: '0',
            filter: 'blur(100px)',
            offset: 0
          }),
          style({
            offset: 1
          })
        ])
      )
    ),
    transition(
      '1 => 0',
      animate(
        '2000ms cubic-bezier(0.17,0.43,0.75,0.97)',
        keyframes([
          style({
            offset: 1.0,
            transform: `rotate(90deg) translateY(-50%) translateX(-25%) scale(0.7)`,
            opacity: '0',
            filter: 'blur(100px)'
          })
        ])
      )
    )
  ]),
  trigger('title', [
    transition(
      '0 => 1',
      animate(
        '2000ms cubic-bezier(0.17,0.43,0.75,0.97)',
        keyframes([
          style({
            opacity: '0',
            filter: 'blur(100px)',
            offset: 0
          }),
          style({
            offset: 1
          })
        ])
      )
    )
  ])
];
