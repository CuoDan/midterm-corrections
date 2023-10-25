import { createRoot } from "react-dom/client";
import { App } from "./8-Tile";

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />);
