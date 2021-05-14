const Loading = () => {
    const root = document.createElement("div");
    root.className = "Modal Loading hidden"
    root.innerHTML = `
        <div class="content">
            <img src="./assets/nyan-cat.gif">
        </div>
    `
    return root;
}

export default Loading;

const toggleLoading = () => {
    const target = document.querySelector(".Loading");
    if (target === null)
        return;

    if (target.classList.contains("hidden"))
        target.classList.remove("hidden");
    else
        target.classList.add("hidden");
}
export { toggleLoading }