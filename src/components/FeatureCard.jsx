import React from 'react';
import { motion } from 'framer-motion';

export function FeatureCard({ icon, title, description, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow"
        >
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 mb-4 flex items-center justify-center shadow-sm border border-zinc-100 dark:border-zinc-700">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-500 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
