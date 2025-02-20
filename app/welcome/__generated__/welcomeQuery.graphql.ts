/**
 * @generated SignedSource<<3b8f668a097a8032845b31769a220869>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type welcomeQuery$variables = Record<PropertyKey, never>;
export type welcomeQuery$data = {
  readonly hello: string | null | undefined;
};
export type welcomeQuery = {
  response: welcomeQuery$data;
  variables: welcomeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "welcomeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "welcomeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9fa8c9723def4181260b5d538a766ca7",
    "id": null,
    "metadata": {},
    "name": "welcomeQuery",
    "operationKind": "query",
    "text": "query welcomeQuery {\n  hello\n}\n"
  }
};
})();

(node as any).hash = "a90d45dbbd5c4ee373cdfb8b73f0d1c0";

export default node;
