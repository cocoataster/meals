import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose dark:prose-invert">
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                        At Meals, we believe your data belongs to you. We are committed to ensuring that your personal information remains private and secure.
                    </p>

                    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 rounded-2xl mb-8">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="mt-1 text-green-500 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">No Data Collection</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    Meals does not collect, store, or share any personal data. All your meal plans and preferences are stored locally on your device or in your personal iCloud account.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:meals@cocoataster.com" className="text-yellow-500 hover:underline">meals@cocoataster.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
