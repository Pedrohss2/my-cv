declare module 'react-animate-on-scroll' {
    import * as React from 'react';

    export interface ScrollAnimationProps extends React.HTMLAttributes<HTMLElement> {
        animateIn?: string;
        animateOut?: string;
        animateOnce?: boolean;
        duration?: number;
        delay?: number;
        offset?: number;
        initiallyVisible?: boolean;
        animatePreScroll?: boolean;
        // allow other props
        [key: string]: unknown;
    }

    const ScrollAnimation: React.ComponentType<ScrollAnimationProps>;
    export default ScrollAnimation;
}
