/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/vue-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useElectraMeter() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.ElectraMeter.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryMeterreadings = (deviceID: string, timestamp: string,  options: any) => {
    const key = { type: 'QueryMeterreadings',  deviceID,  timestamp };    
    return useQuery([key], () => {
      const { deviceID,  timestamp } = key
      return  client.ElectraMeter.query.queryMeterreadings(deviceID, timestamp).then( res => res.data );
    }, options);
  }
  
  const QueryMeterreadingsAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryMeterreadingsAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryMeterreadingsAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryMeterdirectory = (deviceID: string, barcodeserial: string,  options: any) => {
    const key = { type: 'QueryMeterdirectory',  deviceID,  barcodeserial };    
    return useQuery([key], () => {
      const { deviceID,  barcodeserial } = key
      return  client.ElectraMeter.query.queryMeterdirectory(deviceID, barcodeserial).then( res => res.data );
    }, options);
  }
  
  const QueryMeterdirectoryAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryMeterdirectoryAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryMeterdirectoryAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryListrecordings = (deviceID: string, start: string, end: string, byUnixTime: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryListrecordings',  deviceID,  start,  end,  byUnixTime, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { deviceID,  start,  end,  byUnixTime,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryListrecordings(deviceID, start, end, byUnixTime, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryPowerPurchaseContract = (contractID: string, contractDeviceID: string,  options: any) => {
    const key = { type: 'QueryPowerPurchaseContract',  contractID,  contractDeviceID };    
    return useQuery([key], () => {
      const { contractID,  contractDeviceID } = key
      return  client.ElectraMeter.query.queryPowerPurchaseContract(contractID, contractDeviceID).then( res => res.data );
    }, options);
  }
  
  const QueryPowerPurchaseContractAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryPowerPurchaseContractAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryPowerPurchaseContractAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryPpaMap = (consumerDeviceID: string, agreementID: string, agreementActive: string, contractID: string,  options: any) => {
    const key = { type: 'QueryPpaMap',  consumerDeviceID,  agreementID,  agreementActive,  contractID };    
    return useQuery([key], () => {
      const { consumerDeviceID,  agreementID,  agreementActive,  contractID } = key
      return  client.ElectraMeter.query.queryPpaMap(consumerDeviceID, agreementID, agreementActive, contractID).then( res => res.data );
    }, options);
  }
  
  const QueryPpaMapAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryPpaMapAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryPpaMapAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryBillingcycles = (cycleID: string,  options: any) => {
    const key = { type: 'QueryBillingcycles',  cycleID };    
    return useQuery([key], () => {
      const { cycleID } = key
      return  client.ElectraMeter.query.queryBillingcycles(cycleID).then( res => res.data );
    }, options);
  }
  
  const QueryBillingcyclesAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryBillingcyclesAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryBillingcyclesAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryCurrentcycleID = ( options: any) => {
    const key = { type: 'QueryCurrentcycleID',  };    
    return useQuery([key], () => {
      return  client.ElectraMeter.query.queryCurrentcycleID().then( res => res.data );
    }, options);
  }
  
  const QueryCustomerbillingline = (customerDeviceID: string, cycleID: string, lineid: string, paid: string,  options: any) => {
    const key = { type: 'QueryCustomerbillingline',  customerDeviceID,  cycleID,  lineid,  paid };    
    return useQuery([key], () => {
      const { customerDeviceID,  cycleID,  lineid,  paid } = key
      return  client.ElectraMeter.query.queryCustomerbillingline(customerDeviceID, cycleID, lineid, paid).then( res => res.data );
    }, options);
  }
  
  const QueryCustomerbillinglineAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryCustomerbillinglineAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryCustomerbillinglineAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryGetcustomerbill = (customerDeviceID: string, billCycleID: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryGetcustomerbill',  customerDeviceID,  billCycleID, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { customerDeviceID,  billCycleID,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryGetcustomerbill(customerDeviceID, billCycleID, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryCustomerbills = (billCycleID: string, customerDeviceID: string,  options: any) => {
    const key = { type: 'QueryCustomerbills',  billCycleID,  customerDeviceID };    
    return useQuery([key], () => {
      const { billCycleID,  customerDeviceID } = key
      return  client.ElectraMeter.query.queryCustomerbills(billCycleID, customerDeviceID).then( res => res.data );
    }, options);
  }
  
  const QueryCustomerbillsAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryCustomerbillsAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryCustomerbillsAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryProducerbillingline = (producerDeviceID: string, cycleID: string, lineid: string, paid: string,  options: any) => {
    const key = { type: 'QueryProducerbillingline',  producerDeviceID,  cycleID,  lineid,  paid };    
    return useQuery([key], () => {
      const { producerDeviceID,  cycleID,  lineid,  paid } = key
      return  client.ElectraMeter.query.queryProducerbillingline(producerDeviceID, cycleID, lineid, paid).then( res => res.data );
    }, options);
  }
  
  const QueryProducerbillinglineAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryProducerbillinglineAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryProducerbillinglineAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryGetproducerbill = (producerDeviceID: string, billCycleID: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryGetproducerbill',  producerDeviceID,  billCycleID, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { producerDeviceID,  billCycleID,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryGetproducerbill(producerDeviceID, billCycleID, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryProducerbills = (billCycleID: string, producerDeviceID: string,  options: any) => {
    const key = { type: 'QueryProducerbills',  billCycleID,  producerDeviceID };    
    return useQuery([key], () => {
      const { billCycleID,  producerDeviceID } = key
      return  client.ElectraMeter.query.queryProducerbills(billCycleID, producerDeviceID).then( res => res.data );
    }, options);
  }
  
  const QueryProducerbillsAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryProducerbillsAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.ElectraMeter.query.queryProducerbillsAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryParams,QueryMeterreadings,QueryMeterreadingsAll,QueryMeterdirectory,QueryMeterdirectoryAll,QueryListrecordings,QueryPowerPurchaseContract,QueryPowerPurchaseContractAll,QueryPpaMap,QueryPpaMapAll,QueryBillingcycles,QueryBillingcyclesAll,QueryCurrentcycleID,QueryCustomerbillingline,QueryCustomerbillinglineAll,QueryGetcustomerbill,QueryCustomerbills,QueryCustomerbillsAll,QueryProducerbillingline,QueryProducerbillinglineAll,QueryGetproducerbill,QueryProducerbills,QueryProducerbillsAll,
  }
}