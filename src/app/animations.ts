import { animation, style, animate, trigger, transition, useAnimation, query, animateChild, group, state } from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => AboutPage, HomePage => ContactPage, AboutPage => ContactPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          width: '100%',
          position:'absolute',
          left:0,
        })
      ]),
      query(':enter', [
        style({ left: '100vw'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '-100vw' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left:'0%' }))
        ]),
      ]),
    ]),
    transition('AboutPage => HomePage, ContactPage => HomePage , ContactPage => AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          width: '100%',
          position:'absolute',
          left:0,
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
  ])