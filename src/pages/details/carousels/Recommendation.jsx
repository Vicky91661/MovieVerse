import React from "react";

import Curousel from "../../../components/curousel/Curousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);
    console.log("Inside Recommendation data",data)

    return(
        <>
            {
                data?.results?.length > 0 ? <Curousel
                    title="Recommendations"
                    data={data?.results}
                    loading={loading}
                    endpoint={mediaType}
                /> : null
            }
        </>
    ) ;
        
        
        
    
};

export default Recommendation;