import Route from "@ember/routing/route";
import DisableSidebar from "discourse/mixins/disable-sidebar";
import Wizard from "discourse/static/wizard/models/wizard";

export default class WizardRoute extends Route.extend(DisableSidebar) {
  model() {
    return Wizard.load();
  }

  activate() {
    super.activate(...arguments);

    document.body.classList.add("wizard");

    this.controllerFor("application").setProperties({
      showTop: false,
      showSiteHeader: false,
    });
  }

  deactivate() {
    super.deactivate(...arguments);

    document.body.classList.remove("wizard");

    this.controllerFor("application").setProperties({
      showTop: true,
      showSiteHeader: true,
    });
  }
}
