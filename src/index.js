import styles from "./index.css";

console.log(`from: index.js ${45}`);
let div = document.querySelector("div");
div.classList.add(styles.diffBack);
console.log(div);
