import { itemsInView } from "./itemInView.js";

window.onload = function() {
    const items = document.querySelectorAll('.item');
    const container = document.querySelector('.container');
    const boundary = document.querySelector('.boundary');
    items.forEach((el) => {
        el.onclick = function() {
            console.log(this)
            console.log(itemsInView({
                current: container
            }, {current: boundary}))
        }
    })
}