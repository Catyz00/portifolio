'use client';

// no state needed — always show webdesign
import { useState } from 'react';
import TarotServices from '@/components/tarot-services';
import WebDesignServices from '@/components/web-design-services';

export default function ServicesPage() {
  const activeTab = 'webdesign';

  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
          Serviços
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Explore meus serviços especializados em Desenvolvimento Web
        </p>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 justify-center border-b border-border">
          {/* <button
            onClick={() => setActiveTab("tarot")}
            className={`px-8 py-4 font-semibold transition relative ${
              activeTab === "tarot" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Consultas de Tarô
            {activeTab === "tarot" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>}
          </button> */}
          <button className="px-8 py-4 font-semibold transition relative text-primary">
            Desenvolvimento Web
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'tarot' && <TarotServices />}
        {activeTab === 'webdesign' && <WebDesignServices />}
      </section>
    </div>
  );
}
