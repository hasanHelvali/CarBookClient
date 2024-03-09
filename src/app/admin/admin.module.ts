import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CalenderComponent } from './calender/calender.component';
import { ChartsChartjsComponent } from './charts-chartjs/charts-chartjs.component';
import { ChartsGoogleComponent } from './charts-google/charts-google.component';
import { ChartsKnobComponent } from './charts-knob/charts-knob.component';
import { ChartsMorrisComponent } from './charts-morris/charts-morris.component';
import { ChartsSparklineComponent } from './charts-sparkline/charts-sparkline.component';
import { FormsElementComponent } from './forms-element/forms-element.component';
import { FormsMaskComponent } from './forms-mask/forms-mask.component';
import { FormsPluginComponent } from './forms-plugin/forms-plugin.component';
import { FormsQuilljsComponent } from './forms-quilljs/forms-quilljs.component';
import { FormsUploadsComponent } from './forms-uploads/forms-uploads.component';
// import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { IconsDripiconsComponent } from './icons-dripicons/icons-dripicons.component';
import { IconsFeatherComponent } from './icons-feather/icons-feather.component';
import { IconsFontawesomeComponent } from './icons-fontawesome/icons-fontawesome.component';
import { IconsMaterialDesignComponent } from './icons-material-design/icons-material-design.component';
import { IndexComponent } from './index/index.component';
import { MapsGoogleComponent } from './maps-google/maps-google.component';
import { MapsVectorComponent } from './maps-vector/maps-vector.component';
import { PagesFaqsComponent } from './pages-faqs/pages-faqs.component';
import { PagesInvoiceComponent } from './pages-invoice/pages-invoice.component';
import { PagesMaintenanceComponent } from './pages-maintenance/pages-maintenance.component';
import { PagesPricingComponent } from './pages-pricing/pages-pricing.component';
import { PagesStarterComponent } from './pages-starter/pages-starter.component';
import { TablesBasicComponent } from './tables-basic/tables-basic.component';
import { TablesDatatablesComponent } from './tables-datatables/tables-datatables.component';
import { UiButonsComponent } from './ui-butons/ui-butons.component';
import { UiCardsComponent } from './ui-cards/ui-cards.component';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';
import { UiEmbedsComponent } from './ui-embeds/ui-embeds.component';
import { UiGeneralComponent } from './ui-general/ui-general.component';
import { UiGridComponent } from './ui-grid/ui-grid.component';
import { UiMediaObjectComponent } from './ui-media-object/ui-media-object.component';
import { UiModalsComponent } from './ui-modals/ui-modals.component';
import { UiProgressBarComponent } from './ui-progress-bar/ui-progress-bar.component';
import { UiScrollsPyComponent } from './ui-scrolls-py/ui-scrolls-py.component';
import { UiSpinnersComponent } from './ui-spinners/ui-spinners.component';
import { UiSweetAlertsComponent } from './ui-sweet-alerts/ui-sweet-alerts.component';
import { UiTabsComponent } from './ui-tabs/ui-tabs.component';
import { UiToastrComponent } from './ui-toastr/ui-toastr.component';
import { UiTooltipsPopoversComponent } from './ui-tooltips-popovers/ui-tooltips-popovers.component';
import { UiTypographyComponent } from './ui-typography/ui-typography.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { PageLockScreenComponent } from './page-lock-screen/page-lock-screen.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagesRecoverPwComponent } from './pages-recover-pw/pages-recover-pw.component';
import { PagesRegisterComponent } from './pages-register/pages-register.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { VerticalMenuComponent } from './layout/vertical-menu/vertical-menu.component';

@NgModule({
  declarations: [
    AdminComponent,
    // Auth400Component,
    // Auth500Component,
    // AuthLockScreenComponent,
    // AuthLoginComponent,
    // AuthRecoverPwComponent,
    // AuthRegisterComponent,
    CalenderComponent,
    ChartsChartjsComponent,
    ChartsGoogleComponent,
    ChartsKnobComponent,
    ChartsMorrisComponent,
    ChartsSparklineComponent,
    FormsElementComponent,
    FormsMaskComponent,
    FormsPluginComponent,
    FormsQuilljsComponent,
    FormsUploadsComponent,
    // FormsValidationComponent,
    IconsDripiconsComponent,
    IconsFeatherComponent,
    IconsFontawesomeComponent,
    IconsMaterialDesignComponent,
    IndexComponent,
    MapsGoogleComponent,
    MapsVectorComponent,
    PagesFaqsComponent,
    PagesInvoiceComponent,
    PagesMaintenanceComponent,
    PagesPricingComponent,
    PagesStarterComponent,
    TablesBasicComponent,
    TablesDatatablesComponent,
    UiButonsComponent,
    UiCardsComponent,
    UiCarouselComponent,
    UiEmbedsComponent,
    UiGeneralComponent,
    UiGridComponent,
    UiMediaObjectComponent,
    UiModalsComponent,
    UiProgressBarComponent,
    UiScrollsPyComponent,
    UiSpinnersComponent,
    UiSweetAlertsComponent,
    UiTabsComponent,
    UiToastrComponent,
    UiTooltipsPopoversComponent,
    UiTypographyComponent,
    Page404Component,
    Page500Component,
    PageLockScreenComponent,
    PageLoginComponent,
    PagesRecoverPwComponent,
    PagesRegisterComponent,
    // AdminHeaderComponent
    AdminHeaderComponent,
    VerticalMenuComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[AdminComponent,IndexComponent]
})
export class AdminModule { }
