const Nodes = () => {
    const state = {}
    const setState = () => {

        render();
    }

    const root = document.createElement("div");
    const render = () => {
        root.innerHTML = `
            <p>Nodes</p>
        `
    }
    render();

    return { root, state, setState }
}
export default Nodes;