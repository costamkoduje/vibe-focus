"use client";

import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useTranslation } from "@/lib/i18n";

interface Project {
  projectName: string;
  location: string;
  scope: string;
}

export const ProjectsTableSection = (): React.JSX.Element => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const itemsPerPage = 6;
  const { t, language } = useTranslation();

  // Ustaw flagę isClient po zamontowaniu komponentu
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const loadProjectsData = async () => {
      try {
        // Wybierz odpowiedni plik CSV w zależności od języka
        const csvFileName = language === 'pl' ? 'projectspl.csv' : 'projectsen.csv';
        const response = await fetch(`/data/${csvFileName}`);
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const projects = results.data.map((row: unknown) => {
              const typedRow = row as Record<string, string>;
              return {
                projectName: typedRow['Project Name'] || '',
                location: typedRow[language === 'pl' ? 'Miejsce' : 'Location'] || '',
                scope: typedRow[language === 'pl' ? 'zakres prac' : 'Scope of Work'] || ''
              };
            });
            setProjectsData(projects);
            setLoading(false);
          },
          error: () => {
            setLoading(false);
          }
        });
      } catch {
        setLoading(false);
      }
    };

    loadProjectsData();
  }, [language]);

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

  if (loading || !isClient) {
    return (
      <section className="flex flex-col w-full items-center gap-16 px-5 pt-5 pb-20 relative">
        <div className="flex flex-col items-center gap-16 w-full bg-gray-mid rounded-xl py-20">
          <div className="flex flex-col items-center gap-16 w-full max-w-7xl px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
              <h2 className="fonts-fig-xl text-gray-dark leading-tight">
                {t('projectsPage.table.title')}
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full items-center gap-16 px-5 pt-5 md:pb-40 pb-0 relative">
      <div className="flex flex-col items-center gap-16 w-full bg-gray-mid rounded-xl pb-20 ">
        <div className="flex flex-col items-center gap-16 w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <h2 className="fonts-fig-xl text-gray-dark leading-tight">
              {t('projectsPage.table.title')}
            </h2>
          </div>

          {/* Projects Table */}
          <div className="w-full">
            <div className="bg-gray-dark rounded-l border-2 border-gray-mid p-1">
              <div className="bg-gray-dark rounded-l">
                {/* Desktop Table Header - ukryty na mobile */}
                <div className="hidden md:grid md:grid-cols-9 gap-1 mb-1">
                  <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-2">
                    <div className="fonts-mono-l text-gray-dark uppercase tracking-wide">{t('projectsTable.headers.location')}</div>
                  </div>
                  <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-3">
                    <div className="fonts-mono-l text-gray-dark uppercase tracking-wide">{t('projectsTable.headers.projectName')}</div>
                  </div>
                  <div className="bg-gray-mid border border-gray-dark rounded-m p-6 col-span-4">
                    <div className="fonts-mono-l text-gray-dark uppercase tracking-wide">{t('projectsTable.headers.scopeOfWork')}</div>
                  </div>
                </div>

                {/* Desktop Table Rows - widoczne na desktopie */}
                <div className="hidden md:block space-y-1">
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

                {/* Mobile Table - widoczne tylko na mobile */}
                <div className="md:hidden space-y-1">
                  {currentProjects.map((project, index) => (
                    <div key={startIndex + index} className="bg-gray-mid border border-gray-dark rounded-m p-4 space-y-3">
                      {/* Lokalizacja */}
                      <div className="space-y-1">
                        <div className="fonts-mono-xs text-gray-dark/70 uppercase tracking-wide">{t('projectsTable.headers.location')}</div>
                        <div className="fonts-mono-m text-gray-dark uppercase">{project.location}</div>
                      </div>
                      
                      {/* Nazwa projektu */}
                      <div className="space-y-1">
                        <div className="fonts-mono-xs text-gray-dark/70 uppercase tracking-wide">{t('projectsTable.headers.projectName')}</div>
                        <div className="fonts-mono-m text-gray-dark uppercase">{project.projectName}</div>
                      </div>
                      
                      {/* Zakres prac */}
                      <div className="space-y-1">
                        <div className="fonts-mono-xs text-gray-dark/70 uppercase tracking-wide">{t('projectsTable.headers.scopeOfWork')}</div>
                        <div className="fonts-mono-xs text-gray-dark uppercase leading-relaxed">{project.scope}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 md:pb-20 pb-0">
              <div className="bg-gray-dark rounded-m p-1 flex gap-1">
                <button 
                  onClick={goToPreviousPage}
                  disabled={currentPage === 0}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-m flex items-center justify-center transition-colors duration-200 ${
                    currentPage === 0 
                      ? 'bg-gray-mid/50 cursor-not-allowed' 
                      : 'bg-gray-mid hover:bg-gray-mid/80'
                  }`}
                >
                  <svg width="16" height="20" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.4708 20.2269H0V13.6544H18.4708L9.3551 4.64753L14.0588 0L27.4413 13.2227C29.5196 15.2761 29.5196 18.6052 27.4413 20.6586L13.9391 34L9.2354 29.3525L18.4708 20.2269Z" fill="#1F2937"/>
                  </svg>
                </button>
                <button 
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-m flex items-center justify-center transition-colors duration-200 ${
                    currentPage === totalPages - 1 
                      ? 'bg-gray-mid/50 cursor-not-allowed' 
                      : 'bg-gray-mid hover:bg-gray-mid/80'
                  }`}
                >
                  <svg width="16" height="20" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.4708 20.2269H0V13.6544H18.4708L9.3551 4.64753L14.0588 0L27.4413 13.2227C29.5196 15.2761 29.5196 18.6052 27.4413 20.6586L13.9391 34L9.2354 29.3525L18.4708 20.2269Z" fill="#1F2937"/>
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
