import {
  Environment,
  Network,
  RecordSource,
  Store,
  type FetchFunction,
} from "relay-runtime";
import { computeGraphql } from "./graphql-schema";

const fetchFn: FetchFunction = (request, variables) => {
  return computeGraphql(
    request.text ?? "",
    variables
  ) as ReturnType<FetchFunction>;
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
