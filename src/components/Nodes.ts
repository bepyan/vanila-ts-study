import { useFilePath, useImgPath, useNodeList } from "@types";
import { getNodes, getRootNodes } from "../api/nodes.js";
import { findParent } from "../util.js";

interface NodesProps {
    useNodeList: useNodeList
    useFilePath: useFilePath
    useImgPath: useImgPath
}
const Nodes = ({ useNodeList, useFilePath, useImgPath }: NodesProps) => {
    // Render
    const root = document.createElement("div");

    const renderNodeList = () => useNodeList.nodeList.map(v => {
        const fileName = v.type === "DIRECTORY" ? v.name : v.filePath;
        return `
            <div class="Node ${v.type} ${v.id} ${fileName}"> 
                <img src="./assets/${v.type.toLowerCase()}.png">
                <div>${v.name}</div>
            </div>
        `
    }).join(``);

    const renderPrev = () => {
        return useFilePath.filePath.length === 1 ? '' : `
            <div class="Node DIRECTORY">
                <img src="./assets/prev.png">
            </div>
        `
    }

    const render = () => {
        root.innerHTML = `
            <div class="Nodes">
                ${renderPrev()}
                ${renderNodeList()}
            </div>
        `
    }
    render();

    // Event
    const getNodeList = (id: string) => {
        const init = async () => {
            useNodeList.setNodeList(id === "root" ? await getRootNodes() : await getNodes(id));
        }
        init();
    }
    root.addEventListener("click", e => {
        if (e.target === null)
            return;

        const $ = <HTMLElement>e.target;
        const target = findParent("Node", $);
        if (target === null)
            return;

        const [_, type, id, fileName] = target.className.split(" ");

        const { filePath, setFilePath } = useFilePath;
        if (type === "DIRECTORY") {
            if (fileName === undefined) {
                const len = filePath.length;
                getNodeList(filePath[len - 2].id);
                setFilePath(filePath.slice(0, len - 1));
            }
            else {
                getNodeList(id);
                setFilePath([...filePath, { name: fileName, id }]);
            }

        }
        else {
            useImgPath.setImgPath(fileName);
        }
    })

    return { root, render }
}
export default Nodes;