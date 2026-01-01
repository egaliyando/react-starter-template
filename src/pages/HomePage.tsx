import Button from '../components/Button';
import Card from '../components/Card';
import useCounter from '../hooks/useCounter';

const HomePage = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  const features = [
    {
      title: 'React 18',
      description: 'Latest React with concurrent features',
      icon: '⚛️',
    },
    {
      title: 'TypeScript',
      description: 'Type-safe development experience',
      icon: '📘',
    },
    {
      title: 'Vite',
      description: 'Lightning-fast build tool',
      icon: '⚡',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      icon: '🎨',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to React Starter Template
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A modern, production-ready starter template with React, TypeScript, Vite, and Tailwind CSS
        </p>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Counter Example
          </h3>
          <div className="text-center mb-6">
            <p className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">
              {count}
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <Button onClick={decrement} variant="secondary">
              Decrement
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
            <Button onClick={increment}>
              Increment
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
      </section>
    </div>
  );
};

export default HomePage;
