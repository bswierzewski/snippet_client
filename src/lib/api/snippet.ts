/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Web, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import { customInstance } from './custom-instance';
export type GetSnippetsParams = {
searchTerm?: string;
};

export interface UpdateSnippetCommand {
  /** @minLength 1 */
  code: string;
  /** @nullable */
  description?: string | null;
  /** @nullable */
  docs?: string | null;
  id: number;
  /** @nullable */
  imageUrls?: string[] | null;
  /** @minLength 1 */
  language: string;
  /** @nullable */
  tags?: string[] | null;
  /** @minLength 1 */
  title: string;
}

export interface SnippetDto {
  /** @nullable */
  code?: string | null;
  /** @nullable */
  description?: string | null;
  /** @nullable */
  docs?: string | null;
  id?: number;
  /** @nullable */
  imageUrls?: string[] | null;
  isPinned?: boolean;
  /** @nullable */
  language?: string | null;
  /** @nullable */
  tags?: string[] | null;
  /** @nullable */
  title?: string | null;
}

export interface ImageUploadCommand {
  /** @minLength 1 */
  file: Blob;
}

export interface CreateSnippetCommand {
  /** @minLength 1 */
  code: string;
  /** @nullable */
  description?: string | null;
  /** @nullable */
  docs?: string | null;
  /** @nullable */
  imageUrls?: string[] | null;
  /** @minLength 1 */
  language: string;
  /** @nullable */
  tags?: string[] | null;
  /** @minLength 1 */
  title: string;
}




type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


export const uploadImage = (
    imageUploadCommand: ImageUploadCommand,
 options?: SecondParameter<typeof customInstance>,) => {
      
      const formData = new FormData();
formData.append('file', imageUploadCommand.file)

      return customInstance<string>(
      {url: `/api/Images`, method: 'POST',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData
    },
      options);
    }
  


export const getUploadImageMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof uploadImage>>, TError,{data: ImageUploadCommand}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof uploadImage>>, TError,{data: ImageUploadCommand}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof uploadImage>>, {data: ImageUploadCommand}> = (props) => {
          const {data} = props ?? {};

          return  uploadImage(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UploadImageMutationResult = NonNullable<Awaited<ReturnType<typeof uploadImage>>>
    export type UploadImageMutationBody = ImageUploadCommand
    export type UploadImageMutationError = unknown

    export const useUploadImage = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof uploadImage>>, TError,{data: ImageUploadCommand}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof uploadImage>>,
        TError,
        {data: ImageUploadCommand},
        TContext
      > => {

      const mutationOptions = getUploadImageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const getSnippets = (
    params?: GetSnippetsParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<SnippetDto[]>(
      {url: `/api/Snippets`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetSnippetsQueryKey = (params?: GetSnippetsParams,) => {
    return [`/api/Snippets`, ...(params ? [params]: [])] as const;
    }

    
export const getGetSnippetsQueryOptions = <TData = Awaited<ReturnType<typeof getSnippets>>, TError = unknown>(params?: GetSnippetsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getSnippets>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetSnippetsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getSnippets>>> = ({ signal }) => getSnippets(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getSnippets>>, TError, TData> & { queryKey: QueryKey }
}

export type GetSnippetsQueryResult = NonNullable<Awaited<ReturnType<typeof getSnippets>>>
export type GetSnippetsQueryError = unknown

export const useGetSnippets = <TData = Awaited<ReturnType<typeof getSnippets>>, TError = unknown>(
 params?: GetSnippetsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getSnippets>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetSnippetsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const createSnippet = (
    createSnippetCommand: CreateSnippetCommand,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<number>(
      {url: `/api/Snippets`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createSnippetCommand
    },
      options);
    }
  


export const getCreateSnippetMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createSnippet>>, TError,{data: CreateSnippetCommand}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof createSnippet>>, TError,{data: CreateSnippetCommand}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createSnippet>>, {data: CreateSnippetCommand}> = (props) => {
          const {data} = props ?? {};

          return  createSnippet(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateSnippetMutationResult = NonNullable<Awaited<ReturnType<typeof createSnippet>>>
    export type CreateSnippetMutationBody = CreateSnippetCommand
    export type CreateSnippetMutationError = unknown

    export const useCreateSnippet = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createSnippet>>, TError,{data: CreateSnippetCommand}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof createSnippet>>,
        TError,
        {data: CreateSnippetCommand},
        TContext
      > => {

      const mutationOptions = getCreateSnippetMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const getSnippet = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<SnippetDto>(
      {url: `/api/Snippets/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetSnippetQueryKey = (id: number,) => {
    return [`/api/Snippets/${id}`] as const;
    }

    
export const getGetSnippetQueryOptions = <TData = Awaited<ReturnType<typeof getSnippet>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getSnippet>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetSnippetQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getSnippet>>> = ({ signal }) => getSnippet(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getSnippet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetSnippetQueryResult = NonNullable<Awaited<ReturnType<typeof getSnippet>>>
export type GetSnippetQueryError = unknown

export const useGetSnippet = <TData = Awaited<ReturnType<typeof getSnippet>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getSnippet>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetSnippetQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const updateSnippet = (
    id: number,
    updateSnippetCommand: UpdateSnippetCommand,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/api/Snippets/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateSnippetCommand
    },
      options);
    }
  


export const getUpdateSnippetMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateSnippet>>, TError,{id: number;data: UpdateSnippetCommand}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof updateSnippet>>, TError,{id: number;data: UpdateSnippetCommand}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateSnippet>>, {id: number;data: UpdateSnippetCommand}> = (props) => {
          const {id,data} = props ?? {};

          return  updateSnippet(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateSnippetMutationResult = NonNullable<Awaited<ReturnType<typeof updateSnippet>>>
    export type UpdateSnippetMutationBody = UpdateSnippetCommand
    export type UpdateSnippetMutationError = unknown

    export const useUpdateSnippet = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateSnippet>>, TError,{id: number;data: UpdateSnippetCommand}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof updateSnippet>>,
        TError,
        {id: number;data: UpdateSnippetCommand},
        TContext
      > => {

      const mutationOptions = getUpdateSnippetMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const deleteSnippet = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/api/Snippets/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteSnippetMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteSnippet>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteSnippet>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteSnippet>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteSnippet(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteSnippetMutationResult = NonNullable<Awaited<ReturnType<typeof deleteSnippet>>>
    
    export type DeleteSnippetMutationError = unknown

    export const useDeleteSnippet = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteSnippet>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteSnippet>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteSnippetMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
