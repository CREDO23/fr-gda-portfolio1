export default function Description({ descriptions }: IDescriptionProps) {
  return (
    <div className="w-full  flex flex-col gap-5 items-center  justify-center  ">
      {descriptions && (
        <>
          <div className="w-full border-b border-gray-300 pb-3 gap-3 flex items-center flex-wrap justify-between">
            <h4 className=" font-medium text-2xl">Description</h4>
          </div>
          <div className="w-full flex-wrap flex">
            <ul className="flex md:w-3/4 list-disc ml-4 [&>li]:!list-item flex-col gap-2">
              {descriptions.map((item, key) => (
                <li key={key}>
                  <div key={key} className="flex items-center gap-3">
                    {item.key && (
                      <span className=" font-medium">Dimensions:</span>
                    )}
                    <p className=" font-light">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
