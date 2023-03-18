import { MutationFunctionOptions, OperationVariables, DefaultContext, ApolloCache } from "@apollo/client";

const useFormSubmit = (e: React.FormEvent, callback:((options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined) => Promise<any>), id:string | null | undefined) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData);
    console.log(data);
    if (id) {
        callback({ variables: {
            updateCategoryId: id,
            input: data
        }});
    } else {
        callback({ variables: {
            input: data
        }});
    }
    
    form.reset();
} 


export default useFormSubmit;