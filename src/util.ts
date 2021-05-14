type FindParent = (className: string, target: HTMLElement) => HTMLElement | null
const findParent: FindParent = (className, target) => {
    const { parentElement } = target;

    if (!parentElement) 
        return null;

    if (parentElement.className.split(" ")[0] === className)
        return parentElement;

    return findParent(className, parentElement);
}


export { findParent };