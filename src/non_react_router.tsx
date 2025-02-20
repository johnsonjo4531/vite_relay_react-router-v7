import { createRoot } from "react-dom/client";
import { Welcome } from "../app/welcome/welcome";
import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";

const domNode = document.getElementById("root");

if (!domNode) throw new Error("No element #root found in DOM");
const root = createRoot(domNode);

root.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Welcome />
  </RelayEnvironmentProvider>
);
