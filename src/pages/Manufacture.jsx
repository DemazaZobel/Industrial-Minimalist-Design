import React from "react";
import WarehouseOverview from "../components/WareHouse.jsx";

import RequestQuote from "../components/RequestQuota.jsx";
import ManufacturingOverview from "../components/ManufacturingOverview.jsx";
import WhatWeOffer from "../components/OfferManufacture.jsx";
import ManufacturignHowitworks from "../components/ManufacturingHowitworks.jsx";

export default function Manufacture() {
  return (
    <div className="bg-background">
      <title>Manufacture | DANKAL</title>
      <meta name="description" content="Learn about Dankil's manufacturing processes and solutions." />
   
      <ManufacturingOverview />
      <WhatWeOffer />
      <ManufacturignHowitworks />
      <WarehouseOverview />
   
      <RequestQuote />
    </div>
  );
}
