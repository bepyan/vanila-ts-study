import { getRootNode } from "./api/nodes.js";
import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";

const App = ($app: Element) => {

    const state = {};
    const setState = () => {

    }

    const BreadcrumbDiv = Breadcrumb();
    const NodesDiv = Nodes();

    $app.appendChild(BreadcrumbDiv.root);
    $app.appendChild(NodesDiv.root);

}
export default App;