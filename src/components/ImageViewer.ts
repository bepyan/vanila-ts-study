import { useImgPath } from "@types";
import IMG_URL from "../api/imgUrl.js";

interface props {
    useImgPath: useImgPath
}
const ImageViewer = ({ useImgPath }: props) => {

    const root = document.createElement("div");
    root.className = `ImageViewer Modal hidden`
    const render = () => {
        root.innerHTML = `
        <div class="content">
            <img src="${IMG_URL}${useImgPath.imgPath}"/>
        </div>
    `
    }

    const toggleModal = () => {
        if (root.classList.contains("hidden"))
            root.classList.remove("hidden");
        else
            root.classList.add("hidden");
    }
    root.addEventListener("click", e => {
        toggleModal();
    })

    return { root, render, toggleModal }
}
export default ImageViewer;