export default function ChatWidget() {
  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border rounded-lg shadow-lg w-64 p-4">
      <h4 className="font-semibold mb-2">🤖 SoftSell Chat</h4>
      <p className="text-sm">Ask: "How do I sell my license?"</p>
      <input className="w-full mt-2 p-1 border rounded" placeholder="Type a question..." />
      <div className="text-xs mt-2 text-gray-500">(LLM responses mocked)</div>
    </div>
  );
}
