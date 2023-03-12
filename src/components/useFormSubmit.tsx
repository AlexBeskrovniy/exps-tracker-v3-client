import { MutationFunctionOptions, OperationVariables, DefaultContext, ApolloCache } from "@apollo/client";

const useFormSubmit = (e: React.FormEvent, callback:((options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined) => Promise<any>)) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData);
    callback({ variables: {
        input: data
    }});
    
    form.reset();
} 


export default useFormSubmit;