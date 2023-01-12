import { Fragment } from "react";
import Link from 'next/link';

function NewsPage(){
    return(
        <Fragment>
            <h1>News page</h1>
            <ul>
                <li><Link href="/news/something">Something</Link></li>
                <li>Another something</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;