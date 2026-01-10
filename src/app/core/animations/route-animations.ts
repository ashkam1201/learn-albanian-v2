import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
        }),
      ],
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [animate('220ms ease-out', style({ opacity: 0, transform: 'translateY(-8px) scale(0.99)' }))],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(8px) scale(0.99)' }),
          animate('260ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
