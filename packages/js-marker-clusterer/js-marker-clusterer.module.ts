import { AgmCoreModule } from '@arin-pang-agm/core';
import { NgModule } from '@angular/core';
import { AgmMarkerCluster } from './directives/marker-cluster';

@NgModule({
  imports: [AgmCoreModule],
  declarations: [AgmMarkerCluster],
  exports: [AgmMarkerCluster],
})
export class AgmJsMarkerClustererModule {
}
