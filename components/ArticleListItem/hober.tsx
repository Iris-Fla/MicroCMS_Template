"use client"
import { motion } from 'framer-motion';
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Motion(
    { children }: Props
) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
            }}
            initial={{ opacity: 0 }} // 初期状態
            animate={{ opacity: 1 }} // マウント時
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}