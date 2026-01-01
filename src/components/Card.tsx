interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
      {icon && (
        <div className="text-4xl mb-4">
          {icon}
        </div>
      )}
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default Card;
