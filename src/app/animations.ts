
import { trigger, transition, style, animation, animate, state } from '@angular/animations';

export let slideLight = [
    trigger('slideLight', [
        transition(':enter', [
            style({
                transform:'translateX(-10px)'
            }),
            animate(500)
        ])
    ])
]

export let taskAnimations = [
    
    trigger('fade', [
    state('void', style({opacity:0})),
    transition('void => *', [
      animate(500)
    ]),
  ]),

  trigger('fadeout', [
    state('void', style({
        opacity:0,
        transform:'translateX(-10px)',
    })),
    transition('* => void', [
      animate(300)
    ])
  ]),

  trigger('moveRight', [
    state('void', style({
        opacity:0,
        transform:'translateX(-10px)',
    })),
    transition('* => void', [
      animate(300)
    ])
  ])
]