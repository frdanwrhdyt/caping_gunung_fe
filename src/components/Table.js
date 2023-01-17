export default function Table({ datas }) {
  const keys = Object.keys(datas[0]);

  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className="divide-y divide-gray-300 ">
              <thead className="bg-gray-50">
                <tr>
                  {keys.map((key, i) => (
                    <th key={i} className="px-6 py-2 text-xs text-gray-500">
                      {key.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {datas.map((d, i) => {
                  return (
                    <tr key={i} className="whitespace-nowrap">
                      {keys.map((key) => (
                        <th className="px-6 py-2 text-xs text-gray-500">
                          {d[key]}
                        </th>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
