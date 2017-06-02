// https://github.com/sonicwong/ionic-modal-transition-pack/
// code base on: https://github.com/driftyco/ionic/blob/master/src/components/modal/modal-transitions.ts
// animation base on: https://github.com/daneden/animate.css/blob/master/animate.css
// v0.2
import { Animation, PageTransition } from 'ionic-angular';


/* ==================================================
Direct
================================================== */
export class ModalEnterDirect extends PageTransition {
    public init() {
        super.init();
        const ele: HTMLElement = this.enteringView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        wrapper.beforeStyles({ 'transform': 'scale3d(1, 1, 1)' });
        backdrop.beforeStyles({ 'opacity': 0.4 });
        this
            .element(this.enteringView.pageRef())
            .add(backdrop)
            .add(wrapper);
    }
}

export class ModalLeaveDirect extends PageTransition {
    public init() {
        super.init();
        const ele: HTMLElement = this.leavingView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        wrapper.beforeStyles({ 'opacity': 0 });
        backdrop.beforeStyles({ 'opacity': 0 });
        this
            .element(this.leavingView.pageRef())
            .add(backdrop)
            .add(wrapper);
    }
}


/* ==================================================
Fade
================================================== */
export class ModalEnterFadeIn extends PageTransition {
    public init() {
        super.init();
        const ele: HTMLElement = this.enteringView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        wrapper.fromTo('transform', 'scale3d(1, 1, 1)', 'scale3d(1, 1, 1)');
        wrapper.fromTo('opacity', 0, 1);
        backdrop.fromTo('opacity', 0.01, 0.4);
        this
            .element(this.enteringView.pageRef())
            .easing('ease-in')
            .duration(400)
            .add(backdrop)
            .add(wrapper);
    }
}

export class ModalLeaveFadeOut extends PageTransition {
    public init() {
        super.init();
        const ele: HTMLElement = this.leavingView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        wrapper.fromTo('opacity', 1, 0);
        backdrop.fromTo('opacity', 0.4, 0.0);
        this
            .element(this.leavingView.pageRef())
            .easing('ease-out')
            .duration(250)
            .add(backdrop)
            .add(wrapper);
    }
}


/* ==================================================
ZoomIn
================================================== */
export class ModalEnterZoomIn extends PageTransition {
    public init() {
        super.init();
        const ele: HTMLElement = this.enteringView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        //wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'scale3d(.3, .3, .3)', 'scale3d(1, 1, 1)');
        backdrop.fromTo('opacity', 0.01, 0.4);
        this
            .element(this.enteringView.pageRef())
            .easing('ease-in')
            .duration(400)
            .add(backdrop)
            .add(wrapper);
    }
}

export class ModalLeaveZoomIn extends PageTransition {
    public init() {
        super.init();
        const ele: HTMLElement = this.leavingView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        wrapper.fromTo('transform', 'scale3d(1, 1, 1)', 'scale3d(1.3, 1.3, 1.3)');
        wrapper.fromTo('opacity', 1, 0);
        backdrop.fromTo('opacity', 0.4, 0.0);
        this
            .element(this.leavingView.pageRef())
            .easing('ease-out')
            .duration(250)
            .add(backdrop)
            .add(wrapper);
    }
}


/* ==================================================
ZoomOut
================================================== */
export class ModalEnterZoomOut extends PageTransition {
    public init() {
        super.init();
        const ele: HTMLElement = this.enteringView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        //wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'scale3d(1.3, 1.3, 1.3)', 'scale3d(1, 1, 1)');
        backdrop.fromTo('opacity', 0.01, 0.4);
        this
            .element(this.enteringView.pageRef())
            .easing('ease-in')
            .duration(400)
            .add(backdrop)
            .add(wrapper);
    }
}

export class ModalLeaveZoomOut extends PageTransition {
    public init() {
        super.init();
        const ele: HTMLElement = this.leavingView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
        wrapper.fromTo('transform', 'scale3d(1, 1, 1)', 'scale3d(.3, .3, .3)');
        wrapper.fromTo('opacity', 1, 0);
        backdrop.fromTo('opacity', 0.4, 0.0);
        this
            .element(this.leavingView.pageRef())
            .easing('ease-out')
            .duration(250)
            .add(backdrop)
            .add(wrapper);
    }
}


