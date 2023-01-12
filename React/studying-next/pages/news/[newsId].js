import {useRouter} from 'next/router';


function DetailPage(){

    const router = useRouter();

    const newsId = router.query.newsId;

    return(
        <p>Detail Page</p>
    );
}

export default DetailPage;