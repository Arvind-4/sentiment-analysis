const About = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full dark:hidden" src={'/1a.jpg'} />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Quantum Sentiment Analysis
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              The code implements a basic quantum sentiment analysis using a
              quantum circuit. It encodes the sentiment of input text into a
              quantum state by mapping the ASCII values of characters to angles
              on the Bloch sphere. The circuit applies a Hadamard gate and a
              rotation gate (RZ) based on the calculated angle. The result is a
              quantum state vector, from which the probability of measuring the
              initial state is extracted. This quantum probability is considered
              as the quantum sentiment score for the input text.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Combined Sentiment Analysis
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              The code combines the quantum sentiment score with the sentiment
              score obtained from the VADER sentiment analysis tool. The
              combined sentiment score is calculated as a weighted sum of the
              VADER compound score and the quantum sentiment score. The weights
              (0.7 and 0.3) reflect the relative importance given to each
              sentiment analysis method.
            </p>
          </div>
          <img className="w-full dark:hidden" src={'/2.png'} />
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full dark:hidden" src={'/3a.jpg'} />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Visualization with Bloch Vectors
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              The code visualizes sentiment analysis results using Bloch vectors
              in a 3D space. Each sentiment score (positive, negative, and
              neutral) corresponds to a point in this space. The Bloch vectors
              are constructed by mapping the sentiment scores to the axes of the
              3D space, where positivity corresponds to the x-axis, negativity
              to the y-axis, and neutrality to the z-axis. The code uses a 3D
              scatter plot to display these points and their associated
              sentiment labels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
