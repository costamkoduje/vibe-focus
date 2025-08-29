"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

export const ContactHeroSection = (): React.JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    dataProcessing: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.dataProcessing) {
      setSubmitMessage('Musisz zgodzić się na przetwarzanie danych');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Tutaj będzie integracja z API (Netlify Forms, EmailJS, lub własny endpoint)
      console.log('Form data:', formData);
      
      // Symulacja wysyłania
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Wiadomość została wysłana! Skontaktujemy się z Tobą wkrótce.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        dataProcessing: false
      });
    } catch {
      setSubmitMessage('Wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col w-full items-center relative pt-40 pb-40 ">
      <div className="w-full">
        {/* Grid container */}
        <div className="grid-system">
          {/* Empty space for centering - 2 columns */}
          <div className="grid-col-2"></div>
          {/* Main content - 8 columns */}
          <div className="grid-col-8">
            <div className="grid grid-cols-8 gap-8">
              {/* Lewa strona - 4 kolumny z tekstem */}
              <div className="col-span-4">
                <div className="mb-8">
                  <h3 className="fonts-mono-m text-gray-mid uppercase mb-4">
                    [SKONTAKTUJ SIĘ]
                  </h3>
                </div>
                
                <div className="mb-12">
                  <h1 className="fonts-fig-xl text-gray-dark mb-8">
                    Rozpocznij współpracę z ekspertami elektrotechniki morskiej
                  </h1>
                </div>
                
                <div>
                  <p className="fonts-mono-l text-gray-dark leading-relaxed">
                    GOTOWY NA DOŁĄCZENIE DO ZESPOŁU EKSPERTÓW LUB REALIZACJĘ SWOJEGO PROJEKTU STOCZNIOWEGO? SKONTAKTUJ SIĘ Z FOCUS ELECTRO - MIEJSCEM GDZIE SPOTYKAJĄ SIĘ NAJLEPSI SPECJALIŚCI Z NAJWIĘKSZYMI PROJEKTAMI BRANŻY ELEKTROTECHNIKI MORSKIEJ.
                  </p>
                </div>
              </div>
              
              {/* Prawa strona - 4 kolumny z formularzem */}
              <div className="col-span-4">
                <div className="bg-gray-light rounded-[24px] p-8">
                  {/* Zakładki */}
                  <div className="flex mb-8">
                    <div className="flex-1 py-5 px-10 rounded-[16px] fonts-mono-l bg-gray-dark text-gray-light text-center">
                      KONTAKT
                    </div>
                  </div>
                  
                  {/* Formularz */}
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Imię i Nazwisko */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block fonts-mono-xs text-gray-dark mb-2">
                          IMIĘ*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-[16px] fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                          placeholder="Twoje imię"
                        />
                      </div>
                      <div>
                        <label className="block fonts-mono-xs text-gray-dark mb-2">
                          NAZWISKO*
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-[16px] fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                          placeholder="Twoje nazwisko"
                        />
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label className="block fonts-mono-xs text-gray-dark mb-2">
                        EMAIL*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-[16px] fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                        placeholder="twoj@email.com"
                      />
                    </div>
                    
                    {/* Firma i Numer telefonu */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block fonts-mono-xs text-gray-dark mb-2">
                          FIRMA*
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-[16px] fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                          placeholder="Nazwa firmy"
                        />
                      </div>
                      <div>
                        <label className="block fonts-mono-xs text-gray-dark mb-2">
                          NUMER TELEFONU*
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-[16px] fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                          placeholder="+48 123 456 789"
                        />
                      </div>
                    </div>
                    
                    {/* Wiadomość */}
                    <div>
                      <label className="block fonts-mono-xs text-gray-dark mb-2">
                        WIADOMOŚĆ*
                      </label>
                      <textarea
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-light border border-gray-mid rounded-[16px] fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent resize-none"
                        placeholder="Opisz swój projekt lub pytanie..."
                      />
                    </div>
                    
                    {/* Checkbox */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="data-processing"
                        name="dataProcessing"
                        checked={formData.dataProcessing}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 text-accent bg-gray-light border-gray-mid rounded focus:ring-accent focus:ring-2"
                      />
                      <label htmlFor="data-processing" className="fonts-mono-xs text-gray-dark">
                        ZGADZA SIĘ NA PRZETWARZANIE DANYCH
                      </label>
                    </div>
                    
                    {/* Przycisk wyślij */}
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 fonts-mono-m bg-accent hover:bg-accent/90 text-dark rounded-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'WYSYŁANIE...' : 'WYŚLIJ WIADOMOŚĆ'}
                    </Button>
                    
                    {/* Status message */}
                    {submitMessage && (
                      <div className={`fonts-mono-xs text-center p-3 rounded-[12px] ${
                        submitMessage.includes('została wysłana') 
                          ? 'text-green-700 bg-green-100' 
                          : 'text-red-700 bg-red-100'
                      }`}>
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Empty space for centering - 2 columns */}
          <div className="grid-col-2"></div>
        </div>
      </div>
    </section>
  );
};
