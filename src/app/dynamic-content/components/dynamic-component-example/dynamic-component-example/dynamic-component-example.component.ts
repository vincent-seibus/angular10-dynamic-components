import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SafeurlPipe } from '../../../safeurl.pipe';
import { DataService, DynamicComponentService } from '../../../services';


@Component({
  selector: 'app-dynamic-component-example',
  templateUrl: './dynamic-component-example.component.html',
  styleUrls: ['./dynamic-component-example.component.css']
})
export class DynamicComponentExampleComponent implements OnInit {

  //  Public Properties
  template: string;
  // The container that will have the dynamic template
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  dynamicComponent: ComponentRef<any>;
  user: any;
  constructor(
    private dataService: DataService,
    private dynamicComponentService: DynamicComponentService,
    private safeUrl: SafeurlPipe,
  ) { }

  //  Life Cycle Hooks
  ngOnInit() {
    this.dataService.getHtml().subscribe(template => {
      if (template) {
        this.template = template;
        this.dataService.getUser().subscribe(user => {
          this.user = user;
          this.generateUserDynamicComponent();
        });
      }
    });
  }

  //  Public Methods
  destroyDynamicComponent(): void {
    this.dynamicComponent.destroy();
    this.dynamicComponent = null;
  }

  //  Private Methods
  private async generateUserDynamicComponent() {

    //  Define the component using Component decorator.
    const component = Component({
      selector: 'user-dynamic',
      template: this.template,
      styles: ['button { color:red;}']
    })(class { });

    const componentFactory = await this.dynamicComponentService.generateDynamic(component);
    //  Create the component and add to the view.
    const componentRef = this.container.createComponent(componentFactory);
    this.dynamicComponent = componentRef;
    this.dynamicComponent.instance.user = this.user;
    this.dynamicComponent.instance.clickMe = () => {
      this.dynamicComponent.instance.showText = true;
    };
  }

}


