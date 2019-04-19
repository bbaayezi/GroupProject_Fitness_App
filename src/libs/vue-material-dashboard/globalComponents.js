import DropDown from "./components/Dropdown";
import ChartCard from "./components/Cards/ChartCard";
import NavTabsCard from "./components/Cards/NavTabsCard";
import NavTabsTable from "./components/Tables/NavTabsTable";
import OrderedTable from "./components/Tables/OrderedTable";
import SimpleTable from "./components/Tables/SimpleTable.vue";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component("chart-card", ChartCard);
    Vue.component("nav-tabs-card", NavTabsCard);
    Vue.component("nav-tabs-table", NavTabsTable);
    Vue.component("ordered-table", OrderedTable);
    Vue.component("simple-table", SimpleTable);
  }
};

export default GlobalComponents;
