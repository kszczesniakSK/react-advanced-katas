import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  Post?: Maybe<Post>;
  body: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post_id: Scalars['ID']['output'];
};

export type CommentFilter = {
  body?: InputMaybe<Scalars['String']['input']>;
  body_gt?: InputMaybe<Scalars['String']['input']>;
  body_gte?: InputMaybe<Scalars['String']['input']>;
  body_lt?: InputMaybe<Scalars['String']['input']>;
  body_lte?: InputMaybe<Scalars['String']['input']>;
  body_neq?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  date_neq?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  post_id?: InputMaybe<Scalars['ID']['input']>;
  post_id_neq?: InputMaybe<Scalars['ID']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type CommentInput = {
  body: Scalars['String']['input'];
  date: Scalars['Date']['input'];
  post_id: Scalars['ID']['input'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createManyComment?: Maybe<Array<Maybe<Comment>>>;
  createManyPost?: Maybe<Array<Maybe<Post>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  removeComment?: Maybe<Comment>;
  removePost?: Maybe<Post>;
  removeUser?: Maybe<User>;
  updateComment?: Maybe<Comment>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCommentArgs = {
  body: Scalars['String']['input'];
  date: Scalars['Date']['input'];
  post_id: Scalars['ID']['input'];
};


export type MutationCreateManyCommentArgs = {
  data?: InputMaybe<Array<InputMaybe<CommentInput>>>;
};


export type MutationCreateManyPostArgs = {
  data?: InputMaybe<Array<InputMaybe<PostInput>>>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  views: Scalars['Int']['input'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String']['input'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemovePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  post_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  Comments?: Maybe<Array<Maybe<Comment>>>;
  User?: Maybe<User>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
  views: Scalars['Int']['output'];
};

export type PostFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  user_id_neq?: InputMaybe<Scalars['ID']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
  views_gt?: InputMaybe<Scalars['Int']['input']>;
  views_gte?: InputMaybe<Scalars['Int']['input']>;
  views_lt?: InputMaybe<Scalars['Int']['input']>;
  views_lte?: InputMaybe<Scalars['Int']['input']>;
  views_neq?: InputMaybe<Scalars['Int']['input']>;
};

export type PostInput = {
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  views: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  Comment?: Maybe<Comment>;
  Post?: Maybe<Post>;
  User?: Maybe<User>;
  _allCommentsMeta?: Maybe<ListMetadata>;
  _allPostsMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allComments?: Maybe<Array<Maybe<Comment>>>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllCommentsMetaArgs = {
  filter?: InputMaybe<CommentFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllPostsMetaArgs = {
  filter?: InputMaybe<PostFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllCommentsArgs = {
  filter?: InputMaybe<CommentFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllPostsArgs = {
  filter?: InputMaybe<PostFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  Posts?: Maybe<Array<Maybe<Post>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type UserInput = {
  name: Scalars['String']['input'];
};

export type PostFieldsFragment = { __typename?: 'Post', id: string, title: string, views: number, User?: { __typename?: 'User', id: string, name: string } | null };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  views: Scalars['Int']['input'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', id: string, title: string, views: number, User?: { __typename?: 'User', id: string, name: string } | null } | null };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', allPosts?: Array<{ __typename?: 'Post', id: string, title: string, views: number, User?: { __typename?: 'User', id: string, name: string } | null } | null> | null };

export type GetPostsWithAliasAndConditionQueryVariables = Exact<{
  includeViews: Scalars['Boolean']['input'];
  includeUser: Scalars['Boolean']['input'];
}>;


export type GetPostsWithAliasAndConditionQuery = { __typename?: 'Query', allPosts?: Array<{ __typename?: 'Post', views?: number, postId: string, postTitle: string, User?: { __typename?: 'User', userId: string, userName: string } | null } | null> | null };

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', Post?: { __typename?: 'Post', id: string, title: string, views: number, User?: { __typename?: 'User', id: string, name: string } | null } | null };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  views: Scalars['Int']['input'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'Post', id: string, title: string, views: number, User?: { __typename?: 'User', id: string, name: string } | null } | null };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', removePost?: { __typename?: 'Post', id: string, title: string, views: number, User?: { __typename?: 'User', id: string, name: string } | null } | null };

export const PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  id
  title
  views
  User {
    id
    name
  }
}
    `;
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $user_id: ID!, $views: Int!) {
  createPost(title: $title, user_id: $user_id, views: $views) {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;
export const GetAllPostsDocument = gql`
    query GetAllPosts {
  allPosts {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;
export const GetPostsWithAliasAndConditionDocument = gql`
    query GetPostsWithAliasAndCondition($includeViews: Boolean!, $includeUser: Boolean!) {
  allPosts {
    postId: id
    postTitle: title
    views @include(if: $includeViews)
    User @include(if: $includeUser) {
      userId: id
      userName: name
    }
  }
}
    `;
export const GetPostByIdDocument = gql`
    query GetPostById($id: ID!) {
  Post(id: $id) {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: ID!, $title: String!, $user_id: ID!, $views: Int!) {
  updatePost(id: $id, title: $title, user_id: $user_id, views: $views) {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;
export const DeletePostDocument = gql`
    mutation DeletePost($id: ID!) {
  removePost(id: $id) {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreatePost(variables: CreatePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePostMutation>(CreatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreatePost', 'mutation', variables);
    },
    GetAllPosts(variables?: GetAllPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPostsQuery>(GetAllPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllPosts', 'query', variables);
    },
    GetPostsWithAliasAndCondition(variables: GetPostsWithAliasAndConditionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPostsWithAliasAndConditionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostsWithAliasAndConditionQuery>(GetPostsWithAliasAndConditionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPostsWithAliasAndCondition', 'query', variables);
    },
    GetPostById(variables: GetPostByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPostByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostByIdQuery>(GetPostByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPostById', 'query', variables);
    },
    UpdatePost(variables: UpdatePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdatePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePostMutation>(UpdatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdatePost', 'mutation', variables);
    },
    DeletePost(variables: DeletePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeletePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePostMutation>(DeletePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeletePost', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;