declare module "*.graphql" {
  import { ASTNode } from "graphql";
  const Node: ASTNode;
  export default Node;
}
