## Transition class for Ionic v3+ (Animation based on animate.css) ##
https://github.com/sonicwong/ionic-modal-transition-pack

# How to use
1) Download the "ionic-modal-transition-pack.ts" and place it under "src/classes".

2) Add below code to "app.module.ts":
<pre>
import { Config } from 'ionic-angular';
import {
    ModalEnterDirect, ModalLeaveDirect
    ,ModalEnterFadeIn, ModalLeaveFadeOut
    ,ModalEnterZoomIn, ModalLeaveZoomIn
    ,ModalEnterZoomOut, ModalLeaveZoomOut
} from '../classes/ionic-modal-transition-pack';

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
    }
}
</pre>

3) Add below code to "yourView.ts":
<pre>
public presentYourModal() {
    const yourModal = this.modalController.create(YourModalComponent, { userId: 46 }, {
        showBackdrop: false,
        enableBackdropDismiss: false,
        enterAnimation: 'modal-scale-up-enter',
        leaveAnimation: 'modal-scale-up-leave'
    });
    yourModal.present();
}

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