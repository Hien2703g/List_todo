import { useRouter } from "next/router";

export default function TodoDetail() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="w-full max-w-md bg-white p-5 shadow-md rounded">
                <h1 className="text-xl font-bold text-gray-700 mb-4">Todo Detail</h1>
                <p className="text-gray-600">Todo ID: {id}</p>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => router.back()}
                >
                    Back
                </button>
            </div>
        </div>
    );
}
