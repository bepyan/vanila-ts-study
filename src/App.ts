import { FilePath, useFilePath, useImgPath, useNodeList } from "@types";
import { getRootNodes } from "./api/nodes.js";
import Breadcrumb from "./components/Breadcrumb.js";
import ImageViewer from "./components/ImageViewer.js";
import Loading from "./components/Loading.js";
import Nodes from "./components/Nodes.js";

const App = ($app: Element) => {

    // state
    const useImgPath: useImgPath = {
        imgPath: "",
        setImgPath: (path) => {
            useImgPath.imgPath = path;
            toggleModal();
            ImageViewerRender();
        }
    }
    const useNodeList: useNodeList = {
        nodeList: [],
        setNodeList: (nodeList) => {
            useNodeList.nodeList = nodeList;
            NodesRender();
        }

    }
    const useFilePath: useFilePath = {
        filePath: [{ name: "root", id: "root" }],
        setFilePath: (filePath) => {
            useFilePath.filePath = filePath;
            BreadcrumbRender();
        }
    }


    // Main
    const { root: BreadcrumbRoot, render: BreadcrumbRender } = Breadcrumb({ useFilePath, useNodeList });
    const { root: NodesRoot, render: NodesRender } = Nodes({ useFilePath, useNodeList, useImgPath });
    const { root: ImageViewerRoot, render: ImageViewerRender, toggleModal } = ImageViewer({ useImgPath });
    $app.appendChild(BreadcrumbRoot);
    $app.appendChild(NodesRoot);
    $app.appendChild(Loading());
    $app.appendChild(ImageViewerRoot);

    const init = async () => {
        useNodeList.setNodeList(await getRootNodes());
    }
    init();
}
export default App;