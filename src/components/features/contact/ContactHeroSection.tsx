"use client";

import React, { useState } from "react";
import { Button } from "@/components";
import { useTranslation } from "@/lib/i18n";

export const ContactHeroSection = (): React.JSX.Element => {
  const { translations } = useTranslation();
  
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
      setSubmitMessage(translations.contactPage?.hero?.form?.messages?.dataProcessingRequired || 'Musisz zgodzić się na przetwarzanie danych');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Tutaj będzie integracja z API (Netlify Forms, EmailJS, lub własny endpoint)
      
      // Symulacja wysyłania
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage(translations.contactPage?.hero?.form?.messages?.success || 'Wiadomość została wysłana! Skontaktujemy się z Tobą wkrótce.');
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
      setSubmitMessage(translations.contactPage?.hero?.form?.messages?.error || 'Wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col w-[calc(100%-2.5rem)] mx-auto items-center gap-16 relative bg-gray-dark rounded-l mt-5 mb-80">
      <div className="flex flex-col items-center gap-16 w-full py-20 pb-20">
        <div className="flex flex-col items-center gap-16 w-full ">
          {/* Contact Content Grid - 8 columns width */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5 mx-0">
              {/* Empty space for centering - 2 columns */}
              <div className="col-span-2"></div>
              {/* Main content - 8 columns */}
              <div className="col-span-8">
                <div className="grid grid-cols-8 gap-8">
                  {/* Lewa strona - 4 kolumny z tekstem */}
                  <div className="col-span-4">
                    <div className="mb-8">
                      <h3 className="fonts-mono-m text-gray-light uppercase mb-4">
                      {translations.contactPage?.hero?.subtitle2 || "(Skontaktuj się)"}
                      </h3>
                    </div>
                    
                    <div className="mb-12">
                      <h1 className="fonts-fig-xl text-light mb-8">
                      {translations.contactPage?.hero?.mainTitle || "Rozpocznij współpracę z ekspertami elektrotechniki morskiej"}
                      </h1>
                    </div>
                    
                    <div>
                      <p className="fonts-mono-l text-gray-light leading-relaxed">
                      {translations.contactPage?.hero?.description || "Gotowy na dołączenie do zespołu ekspertów lub realizację swojego projektu stoczniowego? Skontaktuj się z Focus Electro - miejscem gdzie spotykają się najlepsi specjaliści z największymi projektami branży elektrotechniki morskiej."}
                      </p>
                    </div>
                  </div>
                  
                  {/* Prawa strona - 4 kolumny z formularzem */}
                  <div className="col-span-4">
                    <div className="bg-gray-light rounded-l p-8">
                      {/* Zakładki */}
                      <div className="flex mb-8 bg-gray-mid p-1 rounded-l">
                        <div className="flex-1 py-5 px-10 rounded-l fonts-mono-l bg-gray-dark text-gray-light text-center border border-gray-mid">
                          {translations.contactPage?.hero?.tabs?.contact || "KONTAKT"}
                        </div>
                        <div className="flex-1 py-5 px-10 rounded-r fonts-mono-l rounded-l bg-gray-mid text-gray-dark text-center border border-gray-mid">
                          {translations.contactPage?.hero?.tabs?.recruitment || "REKRUTACJA"}
                        </div>
                      </div>
                      
                      {/* Formularz */}
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Imię i Nazwisko */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block fonts-mono-xs text-gray-dark mb-2">
                              {translations.contactPage?.hero?.form?.firstName || "IMIĘ*"}
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-m fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                              placeholder={translations.contactPage?.hero?.form?.placeholders?.firstName || "Twoje imię"}
                            />
                          </div>
                          <div>
                            <label className="block fonts-mono-xs text-gray-dark mb-2">
                              {translations.contactPage?.hero?.form?.lastName || "NAZWISKO*"}
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-m fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                              placeholder={translations.contactPage?.hero?.form?.placeholders?.lastName || "Twoje nazwisko"}
                            />
                          </div>
                        </div>
                        
                        {/* Email */}
                        <div>
                          <label className="block fonts-mono-xs text-gray-dark mb-2">
                            {translations.contactPage?.hero?.form?.email || "EMAIL*"}
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-m fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                            placeholder={translations.contactPage?.hero?.form?.placeholders?.email || "twoj@email.com"}
                          />
                        </div>
                        
                        {/* Firma i Numer telefonu */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block fonts-mono-xs text-gray-dark mb-2">
                              {translations.contactPage?.hero?.form?.company || "FIRMA*"}
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              required
                              className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-m fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                              placeholder={translations.contactPage?.hero?.form?.placeholders?.company || "Nazwa firmy"}
                            />
                          </div>
                          <div>
                            <label className="block fonts-mono-xs text-gray-dark mb-2">
                              {translations.contactPage?.hero?.form?.phone || "NUMER TELEFONU*"}
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full h-12 px-4 bg-gray-light border border-gray-mid rounded-m fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent"
                              placeholder={translations.contactPage?.hero?.form?.placeholders?.phone || "+48 123 456 789"}
                            />
                          </div>
                        </div>
                        
                        {/* Wiadomość */}
                        <div>
                          <label className="block fonts-mono-xs text-gray-dark mb-2">
                            {translations.contactPage?.hero?.form?.message || "WIADOMOŚĆ*"}
                          </label>
                          <textarea
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-light border border-gray-mid rounded-m fonts-mono-m text-gray-dark placeholder-gray-mid focus:outline-none focus:border-accent resize-none"
                            placeholder={translations.contactPage?.hero?.form?.placeholders?.message || "Opisz swój projekt lub pytanie..."}
                          />
                        </div>
                        
                        {/* Checkbox */}
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="data-processing"
                            name="dataProcessing"
                            checked={formData.dataProcessing}
                            onChange={handleInputChange}
                            required
                            className="w-4 h-4 text-accent bg-gray-light border-gray-mid rounded focus:ring-accent focus:ring-2"
                          />
                          <label htmlFor="data-processing" className="fonts-mono-xs text-gray-dark">
                            {translations.contactPage?.hero?.form?.dataProcessing || "ZGADZA SIĘ NA PRZETWARZANIE DANYCH"}
                          </label>
                        </div>
                        
                        {/* Przycisk wyślij */}
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-14 fonts-mono-m bg-accent hover:bg-accent/90 text-dark rounded-m disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (translations.contactPage?.hero?.form?.sending || 'WYSYŁANIE...') : (translations.contactPage?.hero?.form?.submit || 'WYŚLIJ WIADOMOŚĆ')}
                        </Button>
                        
                        {/* Status message */}
                        {submitMessage && (
                          <div className={`fonts-mono-xs text-center p-3 rounded-xs ${
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
              <div className="col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
