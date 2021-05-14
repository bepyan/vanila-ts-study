import { useFilePath, Node, NodesState } from "@types";
import { getNodes } from "../api/nodes.js";
import { findParent } from "../util.js";

interface NodesProps {
    useFilePath: useFilePath
}
const Nodes = ({ useFilePath }: NodesProps) => {
    // State
    const { filePath, setFilePath } = useFilePath;

    const state: NodesState = {
        nodeList: []
    }
    const setNodeList = (nodeList: Node[]) => {
        state.nodeList = nodeList;
        render();
    }
    const getNodeList = (id: string) => {
        const init = async () => setNodeList(await getNodes(id));
        init();
    }

    // Render
    const root = document.createElement("div");

    const renderNodeList = () => state.nodeList.map(v => {
        const fileName = v.type === "DIRECTORY" ? v.name : v.filePath;
        return `
            <div class="Node ${v.type} ${v.id} ${fileName}"> 
                <img src="./assets/${v.type.toLowerCase()}.png">
                <div>${v.name}</div>
            </div>
        `
    }).join(``);

    const renderPrev = () => {
        return filePath[filePath.length - 1].name === "root" ? '' : `
            <div class="Node DIRECTORY ${state.nodeList[0].parent?.id}">
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

    // Eventlistener
    root.addEventListener("click", e => {
        if (e.target === null)
            return;

        const $ = <HTMLElement>e.target;
        const target = findParent("Node", $);
        if (target === null)
            return;

        const [_, type, id, fileName] = target.className.split(" ");
        if(type === "DIRECTORY"){
            setFilePath([...filePath, {name: fileName}])
            getNodeList(id);
        }
        else{
            
        }
    })

    // Main
    render();

    return { root, state, setNodeList }
}
export default Nodes;