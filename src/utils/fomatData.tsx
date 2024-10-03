export const formatData = (str: string) => {
  // Identify the feature categories and split at each category label
  const regex = /([a-zA-Z\s]+:)/g; // Matches any category followed by ':'

  // Split the string at the matched categories, keeping the categories
  const splitFeatures = str.split(regex).filter(Boolean); // Filter out empty strings

  return splitFeatures
    .map((item, index) => {
      // Categories will be at even indexes, and values at odd indexes
      if (index % 2 === 0) {
        const category = item.trim(); // Category like "Airbags:"
        const value = splitFeatures[index + 1]?.trim(); // Corresponding value
        const formattedValue = value
          ? value.replace(/,$|$/, ".")
          : category + ".";
        return (
          <li key={index} className="m-w38">
            <span className="font-medium text-blue-800">
              {category.includes(":") ? category : "Others:"}
            </span>{" "}
            <span className="text-base text-gray-900">{formattedValue}</span>
          </li>
        );
      }
      return null;
    })
    .filter(Boolean); // Filter out any null values
};
