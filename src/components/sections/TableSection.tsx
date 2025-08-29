import React from "react";

export const TableSection = (): React.JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 px-4 sm:px-8 lg:px-16 py-20 relative bg-light">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="fonts-fig-l text-dark mb-4">
            Tabela projektów
          </h2>
          <p className="fonts-mono-m text-gray-dark">
            Szczegółowe informacje o realizacjach
          </p>
        </div>
      </div>
    </section>
  );
};
