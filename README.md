## Modal / Popover transition class for Ionic v3 ##
https://github.com/sonicwong/ionic-modal-transition-pack

# How to use
1) Download the "ionic-modal-transition-pack.ts", "ionic-popover-transition-pack.ts" and place it under "src/classes".

2) Add below code to "app.module.ts":
<pre>
import { Config } from 'ionic-angular';
import {
    ModalEnterDirect, ModalLeaveDirect
    ,ModalEnterFadeIn, ModalLeaveFadeOut
    ,ModalEnterZoomIn, ModalLeaveZoomIn
    ,ModalEnterZoomOut, ModalLeaveZoomOut
    ,ModalEnterSlideInRight, ModalLeaveSlideOutRight
} from './../ionic-modal-transition-pack';

import {
  PopoverDirectIn, PopoverDirectOut
} from './../ionic-popover-transition-pack';

export class AppModule {
    constructor(public config: Config) {
        this.setCustomTransitions();
    }

    private setCustomTransitions() {
        this.config.setTransition('ModalEnterDirect', ModalEnterDirect);
        this.config.setTransition('ModalLeaveDirect', ModalLeaveDirect);

        this.config.setTransition('ModalEnterFadeIn', ModalEnterFadeIn);
        this.config.setTransition('ModalLeaveFadeOut', ModalLeaveFadeOut);

        this.config.setTransition('ModalEnterZoomIn', ModalEnterZoomIn);
        this.config.setTransition('ModalLeaveZoomIn', ModalLeaveZoomIn);

        this.config.setTransition('ModalEnterZoomOut', ModalEnterZoomOut);
        this.config.setTransition('ModalLeaveZoomOut', ModalLeaveZoomOut);

        this.config.setTransition('ModalEnterSlideInRight', ModalEnterSlideInRight);
        this.config.setTransition('ModalLeaveSlideOutRight', ModalLeaveSlideOutRight);

        this.config.setTransition('PopoverDirectIn', PopoverDirectIn);
        this.config.setTransition('PopoverDirectOut', PopoverDirectOut);
    }
}
</pre>

Overwrite default popover animation.
<pre>
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    ...
    IonicModule.forRoot(MyApp, {
        popoverEnter: 'PopoverDirectIn',
        popoverLeave: 'PopoverDirectOut'
      }
    }
  ]
});
</pre>

3) Add below code to "yourView.ts":
<pre>
this.modal = this.modalCtrl.create(ModalContentPage, {someVar: 'someValue'}, {
    showBackdrop: false,   // <-- this is not support yet
    enableBackdropDismiss: false,
    enterAnimation: 'ModalEnterZoomOut',
    leaveAnimation: 'ModalLeaveZoomOut'
});
</pre>

# BUGS
"showBackdrop" option not support yet, or backdrop will always show.

# Copyright
sw2hk.com

# For Ionic 4 Support
Please refer to this post:
https://www.joshmorony.com/create-a-custom-modal-page-transition-animation-in-ionic/
