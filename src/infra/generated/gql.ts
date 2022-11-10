/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery getPages($first: Int) {\n\t\tpages(first: $first) {\n\t\t\tid\n\t\t\tslug\n\t\t\ttitle\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n": types.GetPagesDocument,
    "\n\tquery GetPageBySlug($slug: String!) {\n\t\tpage(where: { slug: $slug }) {\n\t\t\ttitle\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n": types.GetPageBySlugDocument,
    "\n\tquery GetPlaces($first: Int) {\n\t\tplaces(first: $first) {\n\t\t\tslug\n\t\t\tname\n\t\t\tlocation {\n\t\t\t\tlatitude\n\t\t\t\tlongitude\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\theight\n\t\t\t\twidth\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n": types.GetPlacesDocument,
    "\n\tquery GetPlaceBySlug($slug: String!) {\n\t\tplace(where: { slug: $slug }) {\n\t\t\tname\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\theight\n\t\t\t\turl\n\t\t\t\twidth\n\t\t\t}\n\t\t}\n\t}\n": types.GetPlaceBySlugDocument,
};

export function graphql(source: "\n\tquery getPages($first: Int) {\n\t\tpages(first: $first) {\n\t\t\tid\n\t\t\tslug\n\t\t\ttitle\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getPages($first: Int) {\n\t\tpages(first: $first) {\n\t\t\tid\n\t\t\tslug\n\t\t\ttitle\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery GetPageBySlug($slug: String!) {\n\t\tpage(where: { slug: $slug }) {\n\t\t\ttitle\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetPageBySlug($slug: String!) {\n\t\tpage(where: { slug: $slug }) {\n\t\t\ttitle\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery GetPlaces($first: Int) {\n\t\tplaces(first: $first) {\n\t\t\tslug\n\t\t\tname\n\t\t\tlocation {\n\t\t\t\tlatitude\n\t\t\t\tlongitude\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\theight\n\t\t\t\twidth\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetPlaces($first: Int) {\n\t\tplaces(first: $first) {\n\t\t\tslug\n\t\t\tname\n\t\t\tlocation {\n\t\t\t\tlatitude\n\t\t\t\tlongitude\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\theight\n\t\t\t\twidth\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery GetPlaceBySlug($slug: String!) {\n\t\tplace(where: { slug: $slug }) {\n\t\t\tname\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\theight\n\t\t\t\turl\n\t\t\t\twidth\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetPlaceBySlug($slug: String!) {\n\t\tplace(where: { slug: $slug }) {\n\t\t\tname\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\theight\n\t\t\t\turl\n\t\t\t\twidth\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;