"use client"

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";


interface FavoriteGaleryProps {
    children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined;
}

export default function FavoriteGalery(props: FavoriteGaleryProps):JSX.Element {
    return <>
        <div className="m-auto grid grid-cols-1 mt-12 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {props.children}
        </div>
    </>
}