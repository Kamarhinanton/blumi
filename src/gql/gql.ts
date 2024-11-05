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
    "\n  fragment DontMissOutFields on ComponentBaseDontMissOut {\n    title {\n      description\n      subText\n      titleWithIcons {\n        text\n        id\n        icon {\n          url\n        }\n      }\n    }\n    buttonText\n  }\n": types.DontMissOutFieldsFragmentDoc,
    "\n  fragment BookBlumiFields on ComponentHomeBookBlumi {\n    title {\n      description\n      subText\n      titleWithIcons {\n        text\n        id\n        icon {\n          url\n        }\n      }\n    }\n    listImages {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n  }\n": types.BookBlumiFieldsFragmentDoc,
    "\n  fragment ExploreTreatmentFields on ComponentHomeExploreTreatment {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n    }\n    listImages {\n      description\n      id\n      title\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n": types.ExploreTreatmentFieldsFragmentDoc,
    "\n  fragment HeroFields on ComponentHomeHero {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n    }\n    cta {\n      buttonText\n      placeholderText\n    }\n    list {\n      item\n      id\n    }\n    listIcons {\n      id\n      icon {\n        url\n      }\n      text\n    }\n    picture {\n      url\n    }\n  }\n": types.HeroFieldsFragmentDoc,
    "\n  fragment HowItWorksFields on ComponentHomeHowItWorks {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n    }\n    listSlider {\n      image {\n        url\n      }\n      icon {\n        url\n      }\n      title\n      description\n      id\n      step\n    }\n  }\n": types.HowItWorksFieldsFragmentDoc,
    "\n  fragment LatestListingFields on ComponentHomeLatestListing {\n    title {\n      description\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n      subText\n    }\n    listCities {\n      id\n      title\n      link\n    }\n    listSlider {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n": types.LatestListingFieldsFragmentDoc,
    "\n  fragment ThingsWonderingFields on ComponentHomeThingsWondering {\n    description\n    bigTitle {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    smallTitle {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    subText\n    email\n    buttonText\n    list {\n      link\n      id\n      description\n    }\n  }\n": types.ThingsWonderingFieldsFragmentDoc,
    "\n  fragment WhatTheySayFields on ComponentHomeWhatTheySay {\n    id\n    title {\n      description\n      subText\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n    }\n    reviews {\n      id\n      title\n      description\n      images {\n        url\n      }\n      icon {\n        url\n      }\n      images_connection {\n        nodes {\n          url\n          documentId\n        }\n      }\n      authorName\n      author {\n        url\n      }\n    }\n  }\n": types.WhatTheySayFieldsFragmentDoc,
    "\n  fragment SignUpCustomerFields on ComponentSignUpHero {\n    image {\n      url\n    }\n    list {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    titleForm {\n      id\n      text\n      icon {\n        url\n      }\n    }\n  }\n": types.SignUpCustomerFieldsFragmentDoc,
    "\n  fragment SignUpPartnersFAQFields on ComponentSignUpFaq {\n    title {\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n      description\n      subText\n    }\n    list {\n      link\n      description\n      id\n    }\n  }\n": types.SignUpPartnersFaqFieldsFragmentDoc,
    "\n  fragment SignUpPartnersFields on ComponentSignUpHero {\n    image {\n      url\n    }\n    list {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    titleForm {\n      icon {\n        url\n      }\n      id\n      text\n    }\n  }\n": types.SignUpPartnersFieldsFragmentDoc,
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
export function graphql(source: "\n  fragment DontMissOutFields on ComponentBaseDontMissOut {\n    title {\n      description\n      subText\n      titleWithIcons {\n        text\n        id\n        icon {\n          url\n        }\n      }\n    }\n    buttonText\n  }\n"): (typeof documents)["\n  fragment DontMissOutFields on ComponentBaseDontMissOut {\n    title {\n      description\n      subText\n      titleWithIcons {\n        text\n        id\n        icon {\n          url\n        }\n      }\n    }\n    buttonText\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BookBlumiFields on ComponentHomeBookBlumi {\n    title {\n      description\n      subText\n      titleWithIcons {\n        text\n        id\n        icon {\n          url\n        }\n      }\n    }\n    listImages {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment BookBlumiFields on ComponentHomeBookBlumi {\n    title {\n      description\n      subText\n      titleWithIcons {\n        text\n        id\n        icon {\n          url\n        }\n      }\n    }\n    listImages {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ExploreTreatmentFields on ComponentHomeExploreTreatment {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n    }\n    listImages {\n      description\n      id\n      title\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n"): (typeof documents)["\n  fragment ExploreTreatmentFields on ComponentHomeExploreTreatment {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n    }\n    listImages {\n      description\n      id\n      title\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HeroFields on ComponentHomeHero {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n    }\n    cta {\n      buttonText\n      placeholderText\n    }\n    list {\n      item\n      id\n    }\n    listIcons {\n      id\n      icon {\n        url\n      }\n      text\n    }\n    picture {\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment HeroFields on ComponentHomeHero {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n    }\n    cta {\n      buttonText\n      placeholderText\n    }\n    list {\n      item\n      id\n    }\n    listIcons {\n      id\n      icon {\n        url\n      }\n      text\n    }\n    picture {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HowItWorksFields on ComponentHomeHowItWorks {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n    }\n    listSlider {\n      image {\n        url\n      }\n      icon {\n        url\n      }\n      title\n      description\n      id\n      step\n    }\n  }\n"): (typeof documents)["\n  fragment HowItWorksFields on ComponentHomeHowItWorks {\n    heading {\n      description\n      subText\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n    }\n    listSlider {\n      image {\n        url\n      }\n      icon {\n        url\n      }\n      title\n      description\n      id\n      step\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LatestListingFields on ComponentHomeLatestListing {\n    title {\n      description\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n      subText\n    }\n    listCities {\n      id\n      title\n      link\n    }\n    listSlider {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n"): (typeof documents)["\n  fragment LatestListingFields on ComponentHomeLatestListing {\n    title {\n      description\n      titleWithIcons {\n        id\n        text\n        icon {\n          url\n        }\n      }\n      subText\n    }\n    listCities {\n      id\n      title\n      link\n    }\n    listSlider {\n      id\n      title\n      description\n      image {\n        url\n      }\n    }\n    buttonText\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ThingsWonderingFields on ComponentHomeThingsWondering {\n    description\n    bigTitle {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    smallTitle {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    subText\n    email\n    buttonText\n    list {\n      link\n      id\n      description\n    }\n  }\n"): (typeof documents)["\n  fragment ThingsWonderingFields on ComponentHomeThingsWondering {\n    description\n    bigTitle {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    smallTitle {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    subText\n    email\n    buttonText\n    list {\n      link\n      id\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment WhatTheySayFields on ComponentHomeWhatTheySay {\n    id\n    title {\n      description\n      subText\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n    }\n    reviews {\n      id\n      title\n      description\n      images {\n        url\n      }\n      icon {\n        url\n      }\n      images_connection {\n        nodes {\n          url\n          documentId\n        }\n      }\n      authorName\n      author {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment WhatTheySayFields on ComponentHomeWhatTheySay {\n    id\n    title {\n      description\n      subText\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n    }\n    reviews {\n      id\n      title\n      description\n      images {\n        url\n      }\n      icon {\n        url\n      }\n      images_connection {\n        nodes {\n          url\n          documentId\n        }\n      }\n      authorName\n      author {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SignUpCustomerFields on ComponentSignUpHero {\n    image {\n      url\n    }\n    list {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    titleForm {\n      id\n      text\n      icon {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SignUpCustomerFields on ComponentSignUpHero {\n    image {\n      url\n    }\n    list {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    titleForm {\n      id\n      text\n      icon {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SignUpPartnersFAQFields on ComponentSignUpFaq {\n    title {\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n      description\n      subText\n    }\n    list {\n      link\n      description\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment SignUpPartnersFAQFields on ComponentSignUpFaq {\n    title {\n      titleWithIcons {\n        id\n        icon {\n          url\n        }\n        text\n      }\n      description\n      subText\n    }\n    list {\n      link\n      description\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SignUpPartnersFields on ComponentSignUpHero {\n    image {\n      url\n    }\n    list {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    titleForm {\n      icon {\n        url\n      }\n      id\n      text\n    }\n  }\n"): (typeof documents)["\n  fragment SignUpPartnersFields on ComponentSignUpHero {\n    image {\n      url\n    }\n    list {\n      text\n      id\n      icon {\n        url\n      }\n    }\n    titleForm {\n      icon {\n        url\n      }\n      id\n      text\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;