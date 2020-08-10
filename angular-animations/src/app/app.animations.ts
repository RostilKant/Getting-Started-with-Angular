import {animate, group, keyframes, query, state, style, transition, trigger, useAnimation} from '@angular/animations'
import {pulse} from 'ng-animate'

export const boxAnimation = trigger('box', [
    state('start', style({background: 'crimson'})),
    state('end', style({
        background: 'black',
        transform: 'scale(1.2)',
    })),
    state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%',
    })),
    transition('start => end', animate(450)),
    transition('end => start', animate('800ms ease-in-out')),
    transition('special <=> *', [
        group([
            query('h4', animate(1500, style({
                fontSize: '.5rem',
                color: 'crimson'
            }))),
            style({background: 'green'}),
            animate(1000, style({
                background: 'pink',
            })),
            animate(750),
        ]),
    ]),
    transition(':enter', [
        // style({opacity: 0}),
        // animate('1000ms ease-out')
        animate('4s', keyframes([
            style({background: 'yellow', offset: 0}),
            style({background: 'green', offset: 0.1}),
            style({background: 'violet', offset: 0.4}),
            style({background: 'crimson', offset: 1})
        ]))
    ]),
    transition(':leave', [
        style({opacity: 1}),
        group([
            animate(700, style({
                color: 'black'
            })),
            animate(800, style({
                opacity: 0,
                transform: 'scale(1.2)'
            })),
        ])
    ])
])

export const boxNgAnimations =  trigger('bounce', [
    transition('void => *', useAnimation(pulse)),
    transition('* => void', useAnimation(pulse, {
        params: {
            timing: 1.2,
            delay: 0.3
        }
    })),
])

