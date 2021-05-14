import { useFilePath, useNodeList } from "@types";
import { getNodes, getRootNodes } from "../api/nodes.js";

interface props {
    useFilePath: useFilePath,
    useNodeList: useNodeList
}

const Breadcrumb = ({ useFilePath, useNodeList }: props) => {

    const root = document.createElement("nav");
    root.className = "Breadcrumb";
    const render = () => {
        root.innerHTML = `
            ${useFilePath.filePath.map((v, idx) => (
            `<div class="crumb ${idx} ${v.id}">${v.name}</div>`
        )).join(``)}
        `
    }
    render();

    root.addEventListener("click", e => {
        const target = <HTMLElement>e.target;
        const [name, i, id] = target.className.split(" ")
        const idx = Number(i);

        if (name === "crumb") {
            const { filePath, setFilePath } = useFilePath;
            if (idx + 1 === filePath.length)
                return;

            setFilePath(filePath.slice(0, idx + 1));

            const dataFetch = async () => {
                const data = id === "root" ? await getRootNodes() : await getNodes(id);
                useNodeList.setNodeList(data);
            }
            dataFetch();
        }
    })

    return { root, render }
}
export default Breadcrumb;