interface StatusBarProps {
  isConnected: boolean;
  transport: string;
}

export default function StatusBar({isConnected, transport,}: StatusBarProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p>
          Status:{" "}
          {isConnected ? (
            <strong className="bg-green-400 text-black h-4 px-2 rounded-md">
              connected
            </strong>
          ) : (
            <strong className="bg-gray-400 text-black h-4 px-2 rounded-md">
              disconnected
            </strong>
          )}
        </p>
        <p>
          Transport:{" "}
          <strong className="bg-gray-400 text-black h-4 px-2 rounded-md">
            {transport}
          </strong>
        </p>
      </div>
    </>
  );
}
