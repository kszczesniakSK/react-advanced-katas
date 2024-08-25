import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
//Implement request that can be cancelled by user interaction, or navigation out of the page
//this hook and endpoint are better example than pokemons for canceling a request since it simulates longer request
export const useGetDelayedResponse = () => {
  const queryClient = useQueryClient();

  // useQuery to fetch the Pokemons
  const { data, isLoading, isError, refetch, isFetching } = useQuery<string>(
    {
      queryKey: ["delay"],
      queryFn: async ({ signal }): Promise<string> => {
        // Ensure the signal is available
        console.log({ signal });

        // Make the request using the signal for aborting
        const { data } = await axios.get(
          "https://hub.dummyapis.com/delay?seconds=5",{signal}
        );
        //for test of abort 
        console.log({ data });

        return data;
      }, // Pass the correct signal
    }
  );

  // Callback to manually cancel the request
  const cancelRequest = useCallback(() => {
    queryClient.cancelQueries({ queryKey: ["delay"] }); // Cancel the query in React Query
  }, [queryClient]);

  return { data, isLoading, isError, cancelRequest, refetch, isFetching };
};
