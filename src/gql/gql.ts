/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment ExploreTreatmentFields on ComponentHomeExploreTreatment {\n    description\n    title\n    listImages {\n      description\n      id\n      title\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n": types.ExploreTreatmentFieldsFragmentDoc,
    "\n  fragment HeroFields on ComponentHomeHero {\n    cta {\n      buttonText\n      placeholderText\n    }\n    description\n    list {\n      item\n      id\n    }\n    listIcons {\n      id\n      icon {\n        url\n      }\n      text\n    }\n    picture {\n      url\n    }\n    title\n  }\n": types.HeroFieldsFragmentDoc,
    "\n  fragment HowItWorksFields on ComponentHomeHowItWorks {\n    description\n    title\n    subText\n    listSlider {\n      image {\n        url\n      }\n      icon {\n        url\n      }\n      title\n      description\n      id\n    }\n  }\n": types.HowItWorksFieldsFragmentDoc,
    "\n  fragment LatestListingFields on ComponentHomeLatestListing {\n    title {\n      description\n      titleIcon {\n        icon1 {\n          url\n        }\n        icon2 {\n          url\n        }\n        text1\n        text2\n        text3\n      }\n      subText\n    }\n    listCities {\n      id\n      title\n      link\n    }\n    listSlider {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n": types.LatestListingFieldsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ExploreTreatmentFields on ComponentHomeExploreTreatment {\n    description\n    title\n    listImages {\n      description\n      id\n      title\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n"): (typeof documents)["\n  fragment ExploreTreatmentFields on ComponentHomeExploreTreatment {\n    description\n    title\n    listImages {\n      description\n      id\n      title\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HeroFields on ComponentHomeHero {\n    cta {\n      buttonText\n      placeholderText\n    }\n    description\n    list {\n      item\n      id\n    }\n    listIcons {\n      id\n      icon {\n        url\n      }\n      text\n    }\n    picture {\n      url\n    }\n    title\n  }\n"): (typeof documents)["\n  fragment HeroFields on ComponentHomeHero {\n    cta {\n      buttonText\n      placeholderText\n    }\n    description\n    list {\n      item\n      id\n    }\n    listIcons {\n      id\n      icon {\n        url\n      }\n      text\n    }\n    picture {\n      url\n    }\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HowItWorksFields on ComponentHomeHowItWorks {\n    description\n    title\n    subText\n    listSlider {\n      image {\n        url\n      }\n      icon {\n        url\n      }\n      title\n      description\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment HowItWorksFields on ComponentHomeHowItWorks {\n    description\n    title\n    subText\n    listSlider {\n      image {\n        url\n      }\n      icon {\n        url\n      }\n      title\n      description\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LatestListingFields on ComponentHomeLatestListing {\n    title {\n      description\n      titleIcon {\n        icon1 {\n          url\n        }\n        icon2 {\n          url\n        }\n        text1\n        text2\n        text3\n      }\n      subText\n    }\n    listCities {\n      id\n      title\n      link\n    }\n    listSlider {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n"): (typeof documents)["\n  fragment LatestListingFields on ComponentHomeLatestListing {\n    title {\n      description\n      titleIcon {\n        icon1 {\n          url\n        }\n        icon2 {\n          url\n        }\n        text1\n        text2\n        text3\n      }\n      subText\n    }\n    listCities {\n      id\n      title\n      link\n    }\n    listSlider {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;