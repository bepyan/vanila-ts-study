import { useFilePath } from "@types";
import { getRootNodes } from "./api/nodes.js";
import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";

const App = ($app: Element) => {

    const BreadcrumbWrapper = Breadcrumb();
    const useFilePath: useFilePath = { 
        filePath: BreadcrumbWrapper.state.filePath, 
        setFilePath: BreadcrumbWrapper.setFilePath 
    };

    const NodesWrapper = Nodes({ useFilePath });

    $app.appendChild(BreadcrumbWrapper.root);
    $app.appendChild(NodesWrapper.root);

    const init = async() => {
        const rootNodeList = await getRootNodes();
        NodesWrapper.setNodeList(rootNodeList);
    }
    init();
}
export default App;