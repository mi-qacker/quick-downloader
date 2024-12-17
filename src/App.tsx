import {useCallback, useState} from 'react';

import './App.css';

function App() {
    const [resourceURL, setResourceURL] = useState('');

    const onPasteButtonClick = useCallback(() => {
        navigator.clipboard.readText().then((text) => setResourceURL(text));
    }, []);
    const onDownloadButtonClick = useCallback(() => {
        console.log(resourceURL);
    }, [resourceURL]);

    return (
        <div className="h-screen w-screen bg-neutral-950 text-neutral-50">
            <main className="container mx-auto h-full px-2 py-4">
                <h1 className="mb-8 text-center text-3xl font-bold underline">
                    Quick downloader web-client
                </h1>
                <p className="mb-2">
                    Insert the URL of the resource to download:
                </p>
                <div className="mb-2 flex flex-row gap-2">
                    <input
                        autoFocus
                        value={resourceURL}
                        onChange={(e) => setResourceURL(e.target.value)}
                        type="text"
                        className="w-full rounded-full border-transparent bg-neutral-700 focus:border-neutral-500 focus:ring-0"
                        placeholder="Resource URL"
                    />
                    <button
                        type="button"
                        onClick={onPasteButtonClick}
                        className="basis-1/6 rounded-full bg-neutral-800 hover:bg-neutral-700">
                        Paste
                    </button>
                </div>
                <button
                    type="button"
                    onClick={onDownloadButtonClick}
                    className="h-12 w-full rounded-full bg-neutral-800 hover:bg-neutral-700">
                    Download
                </button>
            </main>
        </div>
    );
}

export default App;
