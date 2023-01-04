import { style, animate, trigger, transition, query, animateChild, group, keyframes } from '@angular/animations';
export const slideInAnimation = trigger('routeAnimations', [
    transition('HomePage => AboutPage, HomePage => ContactPage, AboutPage => ContactPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          width: '100%',
          position:'absolute',
          top:0,
          bottom:0,
          left:0,
          right:0,
        })
      ]),
      query(':enter', [
        style({transform:'translateX(100vw)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ transform:'translateX(-100vw)' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ transform:'translateX(0%)' }))
        ]),
      ]),
    ]),
    transition('AboutPage => HomePage, ContactPage => HomePage , ContactPage => AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          width: '100%',
          position:'absolute',
          top:0,
          bottom:0,
          left:0,
          right:0,
        })
      ]),
      query(':enter', [
        style({ left: '-100vw'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100vw' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left:'0%' }))
        ]),
      ]),
    ]),
  ]);

export const fAnimation = trigger( 'footerAnimation',[
  transition('* <=> AboutPage',[
    style({position:'relative', opacity:'0'}),
    animate('300ms', style({opacity:'0'})),
  ])]);