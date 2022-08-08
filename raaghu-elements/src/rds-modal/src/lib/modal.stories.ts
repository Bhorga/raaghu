import { Story, Meta } from '@storybook/angular'
import { RdsModalComponent } from './rds-modal.component';

export default {

  title: 'Elements/Modal',
  component: RdsModalComponent,
  argTypes: {
    onShow: { click: "clicked" },
  },
} as Meta;

const Template: Story<RdsModalComponent> = (args: RdsModalComponent) => ({
  props: args,
});
export const FormModal: Story<RdsModalComponent> = (args) => ({
  props: args,
  template:
    `
      <button type="button" (click)="onClick($event)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#storybookModal">
      {{label}}
    </button>
   <rds-modal modalId="storybookModal" (onShow) = "onShow($event)" [modalClasses]="modalClasses" [modalAnimation]="modalAnimation">
    <div modalheader class="col-md-12" *ngIf="isModalHeader">
          <button style="float:right" type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="onClose($event)"></button>
          <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
   </div>
   <div Modalbody>
          <p>{{modalData.modalContent}}</p>
    </div>
    <div Modalfooter *ngIf="isModalFooter">
          <button type="button" (click)="onClose($event)" class="btn btn-secondary m-1" data-bs-dismiss="modal">Close</button>
          <button type="button" (click)="showAlert()" class="btn btn-primary" >Save changes</button>
    </div>
  </rds-modal>
    `,

});
FormModal.args = {
  label: 'Launch demo modal',
  modalId: "storybookModal",
  isModalHeader: true,
  isModalFooter: true,
  modalData: {
    modalHeader: "Header",
    modalContent: "Content",
    modalFooter: "Footer"
  },
  backdropstatic: true,
};
export const StaticBackdropModal: Story<RdsModalComponent> = (args) => ({
  props: args,
  template:
    `
        <button type="button" (click)="onClick($event)"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#storybookModal">
          {{label}}
        </button>
          <rds-modal backdropstatic="static" modalId="storybookModal" [modalheader]="modalheader" [Modalbody]="Modalbody" [Modalfooter]="Modalfooter">
            <div modalheader class="col-md-12" *ngIf="isModalHeader">
              <button style="float:right" type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="onClose($event)"></button>
              <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
            </div>
            <div Modalbody>
              <p>{{modalData.modalContent}}</p>
            </div>
            <div Modalfooter *ngIf="isModalFooter">
              <button type="button" (click)="onClose($event)" class="btn btn-secondary m-1" data-bs-dismiss="modal">Close</button>
              <button type="button" (click)="showAlert()" class="btn btn-primary">Save changes</button>
            </div>
          </rds-modal>
      `,
});
StaticBackdropModal.args = {
  label: 'Launch static backdrop modal',
  backdropstatic: 'static',
  modalId: "storybookModal",
  isModalHeader: true,
  isModalFooter: true,
  modalData: {
    modalHeader: "Header",
    modalContent: "I will not close if you click outside me. Don't even try to press escape key.",
    modalFooter: "Footer"
  },
};
export const LongContentModal: Story<RdsModalComponent> = (args) => ({
  props: args,
  template:
    `
      <button type="button"  (click)="onClick($event)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#storybookModal">
      {{label}}
    </button>
    <rds-modal modalId="storybookModal" [modalheader]="modalheader" [Modalbody]="Modalbody" [Modalfooter]="Modalfooter" [modalAnimation]="modalAnimation">
          <div modalheader class="col-md-12" *ngIf="isModalHeader">
            <button style="float:right" type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="onClose($event)"></button>
            <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
          </div>
          <div Modalbody>
            <p>{{modalData.modalContent}}
              <br><br><br><br><br><br><br><br><br><br><br><br><br>
            </p>
          </div>
          <div Modalfooter *ngIf="isModalFooter">
            <button type="button" (click)="onClose($event)" class="btn btn-secondary m-1" data-bs-dismiss="modal">Close</button>
            <button type="button" (click)="showAlert()" class="btn btn-primary" >Save changes</button>
          </div>
    </rds-modal>
    `,
});
LongContentModal.args = {
  label: 'Launch long content modal',
  modalId: "storybookModal",
  isModalHeader: true,
  isModalFooter: true,
  modalData: {
    modalHeader: "Header",
    modalContent: "This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.",
    modalFooter: "Footer"
  },
};
