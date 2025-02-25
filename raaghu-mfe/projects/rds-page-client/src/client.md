---
slug: "/page-client"
date: "2019-05-04"
title: "Pages > client"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

#### Client

<p>Represents a card with a table representation of a client with a unique id and necessary actions</p>
<section class="py-4">    
    <h6>Default</h6>                                                                                         
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row">
              <!-- <img src="https://raw.githubusercontent.com/Wai-Technologies/raaghu/main/raaghu-mfe/assets/Edit-Language-Text.png" alt="color"> -->
              <img src="/images/client.png" class="">
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div class="card border-0">
  <h5
    class="card-header border-0 bg-transparent d-flex justify-content-between"
  >
    <div class="card-title fs-3">Client</div>
    <div class="card-toolbar">
      <rds-button
        [id]="'yes'"
        [size]="'small'"
        [tooltipPlacement]="'top'"
        [colorVariant]="'primary'"
        [label]="'NEW Client'"
        [attr.data-bs-toggle]="'offcanvas'"
        [attr.data-bs-target]="'#addnewapiresource'"
        [attr.aria-controls]="'addnewapiresource'"
      ></rds-button>
    </div>
  </h5>
  <div class="card-body">
    <rds-data-table
      [tableHeaders]="clientTableHeaders"
      [tableData]="clientList"
      [actions]="actions"
    ></rds-data-table>
  </div>
</div>

<ng-container *ngIf="viewCanvas">
  <rds-offcanvas
    [canvasTitle]="canvasTitle"
    [offcanvaswidth]="500"
    [offId]="offcanvasId"
    [placement]="'end'"
    (onClose)="close()"
  >
    <div class="section">
      <rds-nav-tab
        [navtabsItems]="getNavTabItems()"
        [activepage]="activePage"
        [horizontalAlignment]="'start'"
        [verticalAlignment]="false"
        [pills]="false"
        [tabs]="true"
        [fill]="false"
        [justified]="false"
      >
        <div naveContent class="row tab-content m-2" id="nav-tabContent">
          <div
            class="tab-pane fade"
            [ngClass]="{'show active': activePage === 0}"
            id="basics"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <rds-comp-client-basics></rds-comp-client-basics>
          </div>
          <div
            class="tab-pane fade"
            [ngClass]="{'show active': activePage === 1}"
            id="secrets"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="row">
              <div class="col-md-12">
                <rds-button
                  [label]="'New Secrets'"
                  [colorVariant]="'primary'"
                  (click)="addSecrets()"
                >
                  <rds-icon
                    left
                    name="plus"
                    height="12px"
                    width="12px"
                  ></rds-icon>
                </rds-button>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            [ngClass]="{'show active': activePage === 2}"
            id="resources"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <rds-comp-client-resources></rds-comp-client-resources>
          </div>
        </div>
      </rds-nav-tab>
    </div>
    <div class="">
      <rds-button
        [label]="'Cancel'"
        [colorVariant]="'outline-primary'"
        [size]="'small'"
        (click)="close()"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></rds-button>
      <rds-button
        [label]="getBtnName()"
        [colorVariant]="'primary'"
        [size]="'small'"
        [disabled]="!client.basicInfo"
        (click)="save()"
      ></rds-button>
    </div>
  </rds-offcanvas>
</ng-container>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
  
