import { NgxSpinnerService } from "ngx-spinner";

export class Base {
    constructor(private spinner:NgxSpinnerService) {
    }

    showSpinner(type:SpinnerType){
        this.spinner.show(type);

    }
    hideSpinner(type:SpinnerType){
        setTimeout(() => {
            this.spinner.hide(type);
        }, 1000);
    }
}

export enum SpinnerType{
    LineSpinFade="spinner1",
    BallScaleMultiple="spinner2", 

}
