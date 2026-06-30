"use client";

import { MetaAdsGraphic } from "@/components/Services";
import ServiceHeroMock from "@/components/work/heroes/ServiceHeroMock";

export default function MetaAdsHero() {
  return (
    <ServiceHeroMock accentHex="#facc15">
      <MetaAdsGraphic />
    </ServiceHeroMock>
  );
}
