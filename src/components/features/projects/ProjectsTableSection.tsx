"use client";

import React, { useState, useEffect } from "react";
import Papa from "papaparse";

interface Project {
  projectName: string;
  location: string;
  scope: string;
}

export const ProjectsTableSection = (): React.JSX.Element => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const loadProjectsData = async () => {
      try {
        const response = await fetch('/data/projects.csv');
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const projects = results.data.map((row: unknown) => {
              const typedRow = row as Record<string, string>;
              return {
                projectName: typedRow['Project Name'] || '',
                location: typedRow['Miejsce'] || '',
                scope: typedRow['zakres prac'] || ''
              };
            });
            setProjectsData(projects);
            setLoading(false);
          },
          error: (error: Error) => {
            console.error('Błąd podczas parsowania CSV:', error);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error('Błąd podczas ładowania pliku CSV:', error);
        setLoading(false);
      }
    };

    loadProjectsData();
  }, []);

  // Obliczanie danych dla paginacji
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projectsData.slice(startIndex, endIndex);

  // Funkcje nawigacji
  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  if (loading) {
    return (
      <section className="flex flex-col w-full items-center gap-16 px-5 pt-5 pb-20 relative">
        <div className="flex flex-col items-center gap-16 w-full bg-gray-mid rounded-xl py-20">
          <div className="flex flex-col items-center gap-16 w-full max-w-7xl px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
              <h2 className="fonts-fig-xl text-gray-dark leading-tight">
                Baza Projektów
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full items-center gap-16 px-5 pt-5 pb-40 relative">
      <div className="flex flex-col items-center gap-16 w-full bg-gray-mid rounded-xl py-20 ">
        <div className="flex flex-col items-center gap-16 w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <h2 className="fonts-fig-xl text-gray-dark leading-tight">
              Baza Projektów
            </h2>
          </div>

          {/* Projects Table */}
          <div className="w-full">
            <div className="bg-gray-dark rounded-l border-2 border-gray-mid p-1">
  <div className="bg-gray-dark rounded-l">
    {/* Table Header */}
    <div className="grid grid-cols-9 gap-1 mb-1">
                                      <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-2">
                    <div className="fonts-mono-m text-gray-dark uppercase tracking-wide">LOKALIZACJA</div>
                  </div>
                                      <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-3">
                    <div className="fonts-mono-m text-gray-dark  uppercase tracking-wide">NAZWA PROJEKTU</div>
                  </div>
                                      <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-4">
                    <div className="fonts-mono-m text-gray-dark  uppercase tracking-wide">ZAKRES WYKONANYCH PRAC</div>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="space-y-1">
                  {currentProjects.map((project, index) => (
                    <div key={startIndex + index} className="grid grid-cols-9 gap-1">
                      <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-2">
                        <div className="fonts-mono-m text-gray-dark uppercase">{project.location}</div>
                      </div>
                      <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-3">
                        <div className="fonts-mono-m text-gray-dark uppercase">{project.projectName}</div>
                      </div>
                      <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-4">
                        <div className="fonts-mono-xs text-gray-dark uppercase leading-relaxed">{project.scope}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 pb-20">
              <div className="bg-gray-dark rounded-m p-1 flex gap-1">
                <button 
                  onClick={goToPreviousPage}
                  disabled={currentPage === 0}
                  className={`w-16 h-16 rounded-m flex items-center justify-center transition-colors duration-200 ${
                    currentPage === 0 
                      ? 'bg-gray-mid/50 cursor-not-allowed' 
                      : 'bg-gray-mid hover:bg-gray-mid/80'
                  }`}
                >
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 8.5L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`w-16 h-16 rounded-m flex items-center justify-center transition-colors duration-200 ${
                    currentPage === totalPages - 1 
                      ? 'bg-gray-mid/50 cursor-not-allowed' 
                      : 'bg-gray-mid hover:bg-gray-mid/80'
                  }`}
                >
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 8.5L1 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
