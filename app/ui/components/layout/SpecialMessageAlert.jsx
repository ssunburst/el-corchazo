'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from "next/link";

const pathCountThreshold = 7;

export default function SpecialMessageAlert() {
    const [visitedPathsCount, setVisitedPathsCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== '/idoneidad') {
            if (visitedPathsCount === pathCountThreshold) {
                setVisitedPathsCount(0);
                setShowMessage(true);
            } else {
                setVisitedPathsCount(vpc => (vpc + 1));
            }
        } else {
            setVisitedPathsCount(0);
            setShowMessage(false);
        }
    }, [pathname]);

    function manageClick() {
        setShowMessage(false);
        setVisitedPathsCount(0);
    }

    return showMessage && (
        <Link className="bg-red-400 flex py-1 px-2 md:py-2 items-center justify-center border-b border-gray-100 border-opacity-80" href="/idoneidad">
            <p className="text-gray-800 text-center">
                <span className="uppercase text-gray-100 mr-1 font-bold lg:w-3/4">Importante</span> Un mensaje del editor en jefe de <span className="font-serif font-semibold inline-block">El Corchazo</span>.
            </p>
            <button 
                className="grow-0"
                onClick={() => setShowMessage(false)}
            >
                ✖
            </button>
        </Link>
    );
}