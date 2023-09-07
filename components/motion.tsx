"use client"
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app'
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Motion({ children }: Props) {
    return (
        <motion.div
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
        >
            {children}
        </motion.div>
    );
}
export function AnimatePresenceMotion({ Component, pageProps, router }: AppProps) {
    return (
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
    );
}