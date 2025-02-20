import { graphql, buildSchema, print, type DocumentNode } from "graphql";
import schemaNode from "./schema.graphql";

export const schema = buildSchema(print(schemaNode));
const resolvers = {
  hello() {
    return "Hello World From GraphQL!";
  },
} as const;

export const computeGraphql = (
  source: string,
  variableValues: Record<string, unknown>
) =>
  graphql({
    schema,
    rootValue: resolvers,
    source,
    variableValues,
  });
