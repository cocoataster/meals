import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsOfService() {
    return (
        <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                <div className="prose dark:prose-invert space-y-6 text-zinc-600 dark:text-zinc-400">
                    <p>
                        By downloading or using the Meals app, these terms will automatically apply to you. You should make sure therefore that you read them carefully before using the app.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">License</h2>
                    <p>
                        Meals is free to download and use. We reserve the right to make changes to the app or to charge for its services, at any time and for any reason.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Updates</h2>
                    <p>
                        The app is currently available on iOS. The requirements for the system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app.
                    </p>
                </div>
            </div>
        </div>
    );
}
