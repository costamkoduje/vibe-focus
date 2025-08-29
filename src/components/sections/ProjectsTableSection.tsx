import React from "react";

export const ProjectsTableSection = (): React.JSX.Element => {
  const projectsData = [
    {
      location: "MARSYLIA",
      projectName: "CELEBRITY APEX",
      scope: "WSPARCIE KLIENTA W REALIZACJI NOWEJ INSTALACJI ELEKTRYCZNEJ W REJONIE NADBUDÓWKI.",
      date: "2025"
    },
    {
      location: "TURK",
      projectName: "ROPAX",
      scope: "NOWA BUDOWA JEDNOSTKI. WSPARCIE KLIENTA W REALIZACJI PODŁĄCZEŃ ELEKTRYCZNYCH W REJONIE SIŁOWNI. WYMIANA URZĄDZEŃ GASTRONOMICZNYCH ORAZ MODERNIZACJA INSTALACJI ELEKTRYCZNEJ W STREFIE BUFETU.",
      date: "2025"
    },
    {
      location: "GDAŃSK",
      projectName: "NOL EPIC",
      scope: "WSPARCIE KLIENTA W REALIZACJI NOWEJ INSTALACJI ELEKTRYCZNEJ W REJONIE NADBUDÓWKI.",
      date: "2025"
    },
    {
      location: "FINLADN",
      projectName: "ADVENTURE OF THE SEAS",
      scope: "WSPARCIE KLIENTA W REALIZACJI NOWEJ INSTALACJI ELEKTRYCZNEJ W REJONIE NADBUDÓWKI.",
      date: "2025"
    },
    {
      location: "MARSYLIA",
      projectName: "CELEBRITY APEX",
      scope: "WSPARCIE KLIENTA W REALIZACJI NOWEJ INSTALACJI ELEKTRYCZNEJ W REJONIE NADBUDÓWKI.",
      date: "2025"
    },
    {
      location: "GDAŃSK",
      projectName: "NOL EPIC",
      scope: "WSPARCIE KLIENTA W REALIZACJI NOWEJ INSTALACJI ELEKTRYCZNEJ W REJONIE NADBUDÓWKI.",
      date: "2025"
    }
  ];

  return (
    <section className="flex flex-col w-full items-center gap-16 px-5 pt-5 pb-20 relative">
      <div className="flex flex-col items-center gap-16 w-full bg-gray-mid rounded-[32px] py-20">
        <div className="flex flex-col items-center gap-16 w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <h2 className="fonts-fig-xl text-gray-dark leading-tight">
              Baza Projektów
            </h2>
          </div>

          {/* Projects Table */}
          <div className="w-full">
            <div className="bg-gray-dark rounded-[28px] border-[2px] border-gray-mid p-[2px]">
              <div className="bg-gray-dark rounded-[22px] p-[2px]">
                {/* Table Header */}
                <div className="grid grid-cols-10 gap-[3px] mb-[3px]">
                  <div className="bg-gray-mid border border-gray-dark rounded-[22px] p-6 col-span-2">
                    <div className="fonts-mono-m text-gray-dark uppercase tracking-wide">LOKALIZACJA</div>
                  </div>
                  <div className="bg-gray-mid border border-gray-dark rounded-[22px] p-6 col-span-3">
                    <div className="fonts-mono-m text-gray-dark  uppercase tracking-wide">NAZWA PROJEKTU</div>
                  </div>
                  <div className="bg-gray-mid border border-gray-dark rounded-[22px] p-6 col-span-4">
                    <div className="fonts-mono-m text-gray-dark  uppercase tracking-wide">ZAKRES WYKONANYCH PRAC</div>
                  </div>
                  <div className="bg-gray-mid border border-gray-dark rounded-[22px] p-6 col-span-1">
                    <div className="fonts-mono-m text-gray-dark uppercase tracking-wide">DATA</div>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="space-y-[2px]">
                  {projectsData.map((project, index) => (
                    <div key={index} className="grid grid-cols-10 gap-[2px]">
                      <div className="bg-gray-mid border border-gray-dark rounded-[22px] p-6 col-span-2">
                        <div className="fonts-mono-m text-gray-dark uppercase">{project.location}</div>
                      </div>
                      <div className="bg-gray-mid border border-gray-dark rounded-[22px] p-6 col-span-3">
                        <div className="fonts-mono-m text-gray-dark uppercase">{project.projectName}</div>
                      </div>
                      <div className="bg-gray-mid border border-gray-dark rounded-[22px] p-6 col-span-4">
                        <div className="fonts-mono-xs text-gray-dark uppercase leading-relaxed">{project.scope}</div>
                      </div>
                      <div className="bg-gray-mid border border-gray-dark rounded-[22px] p-6 col-span-1">
                        <div className="fonts-mono-m text-gray-dark uppercase">{project.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8">
              <div className="bg-gray-dark rounded-[16px] p-1 flex gap-1">
                <button className="w-16 h-16 bg-gray-mid hover:bg-gray-mid/80 rounded-[16px] flex items-center justify-center transition-colors duration-200">
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 8.5L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="w-16 h-16 bg-gray-mid hover:bg-gray-mid/80 rounded-[16px] flex items-center justify-center transition-colors duration-200">
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
