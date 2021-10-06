import {useParams} from "react-router-dom";

export default function DetailsPage() {

    const {idSlug} = useParams()
    console.log({idSlug})

    return(
        <p>{idSlug}</p>
    )
}