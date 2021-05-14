import { BreadcrumbState, FilePath } from "@types";

const Breadcrumb = () => {

    const state: BreadcrumbState = { 
        filePath: [{ name: "root" }] 
    };
    const setFilePath = (filePath: FilePath[]) => {
        state.filePath = [...filePath];
        render();
    }

    const root = document.createElement("nav");
    root.className = "Breadcrumb";
    const render = () => {
        root.innerHTML = `
            ${state.filePath.map(v => (
            `<div>${v.name}</div>`
        )).join(``)}
        `
    }
    render();

    return { root, state, setFilePath }
}
export default Breadcrumb;