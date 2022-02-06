export function itemsInView(scrollContainerRef, itemsContainerRef) {
    const scrollContainer = scrollContainerRef.current;
    const itemsContainer = itemsContainerRef ? itemsContainerRef.current : scrollContainer;

    const items = [];
    for (let i = 0; i < itemsContainer.children.length; i++) {
        const child = itemsContainer.children[i];
        if (
            child.offsetTop + child.offsetHeight >= scrollContainer.scrollTop &&
            child.offsetTop <= scrollContainer.scrollTop + scrollContainer.offsetHeight
        ) {
            items.push(i);
        }
    }

    return items;
}
