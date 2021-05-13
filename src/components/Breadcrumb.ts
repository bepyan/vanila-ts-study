const Breadcrumb = () => {

    const state = {};
    const setState = () => {

        render();
    }

    const root = document.createElement("div");
    const render = () => {
        root.innerHTML = `
            <p>Breadcrumb</p>
        `
    }
    render();

    return { root, state, setState }
}
export default Breadcrumb;