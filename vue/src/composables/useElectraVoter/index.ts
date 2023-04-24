/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/vue-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useElectraVoter() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.ElectraVoter.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryPoll = (id: string,  options: any) => {
    const key = { type: 'QueryPoll',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.ElectraVoter.query.queryPoll(id).then( res => res.data );
    }, options);
  }
  
  const QueryPollAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryPollAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraVoter.query.queryPollAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryVote = (id: string,  options: any) => {
    const key = { type: 'QueryVote',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.ElectraVoter.query.queryVote(id).then( res => res.data );
    }, options);
  }
  
  const QueryVoteAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryVoteAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraVoter.query.queryVoteAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryParams,QueryPoll,QueryPollAll,QueryVote,QueryVoteAll,
  }
}